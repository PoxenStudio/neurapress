// 公众号编辑器会丢弃 <style> 标签和伪元素，复制前需要把模板 CSS 展开为内联样式：
// 按优先级层叠规则、把 ::before/::after 变成真实的 <span>，并模拟 CSS 计数器。

export const TEMPLATE_STYLE_ATTR = 'data-wechat-template'

type Target = 'self' | 'before' | 'after'

interface Match {
  specificity: number
  order: number
  style: CSSStyleDeclaration
}

type MatchMap = Map<Element, Record<Target, Match[]>>

// 无法内联的交互态与伪元素直接跳过
const UNSUPPORTED = /:(hover|focus|focus-within|focus-visible|active|visited|target)\b|::?(marker|first-letter|first-line|selection|placeholder)\b/
const PSEUDO_ELEMENT = /::?(before|after)$/
const GENERATED_PROPS = ['content', 'counter-reset', 'counter-increment']

function parseRules(css: string): CSSStyleRule[] {
  const doc = document.implementation.createHTMLDocument('')
  const styleEl = doc.createElement('style')
  styleEl.textContent = css
  doc.head.appendChild(styleEl)
  const rules = styleEl.sheet ? Array.from(styleEl.sheet.cssRules) : []
  // 只处理顶层样式规则，@media 等条件规则无法内联
  return rules.filter(rule => rule.type === 1) as CSSStyleRule[]
}

function splitSelectors(selectorText: string): string[] {
  const parts: string[] = []
  let depth = 0
  let current = ''
  for (let i = 0; i < selectorText.length; i++) {
    const ch = selectorText[i]
    if (ch === '(') depth++
    if (ch === ')') depth--
    if (ch === ',' && depth === 0) {
      parts.push(current.trim())
      current = ''
    } else {
      current += ch
    }
  }
  if (current.trim()) parts.push(current.trim())
  return parts
}

function specificity(selector: string): number {
  let s = selector
  const count = (re: RegExp) => {
    const n = (s.match(re) || []).length
    s = s.replace(re, ' ')
    return n
  }
  count(/:where\([^)]*\)/g)
  const functional = count(/:(?!not\(|is\()[\w-]+\([^)]*\)/g)
  s = s.replace(/:(not|is)\(/g, ' ').replace(/\)/g, ' ')
  const ids = count(/#[\w-]+/g)
  const pseudoElements = count(/::[\w-]+/g)
  const classes = functional + count(/\.[\w-]+|\[[^\]]*\]|:[\w-]+/g)
  const types = count(/[a-zA-Z][\w-]*/g) + pseudoElements
  return ids * 10000 + classes * 100 + types
}

function collectMatches(container: Element, rules: CSSStyleRule[]): MatchMap {
  const matches: MatchMap = new Map()
  rules.forEach((rule, order) => {
    splitSelectors(rule.selectorText).forEach(selector => {
      if (UNSUPPORTED.test(selector)) return
      const pseudo = selector.match(PSEUDO_ELEMENT)
      const target: Target = pseudo ? (pseudo[1] as Target) : 'self'
      const elementSelector = pseudo ? selector.slice(0, pseudo.index) : selector

      let elements: Element[]
      try {
        elements = Array.from(container.querySelectorAll(elementSelector))
      } catch {
        return
      }

      const match = { specificity: specificity(selector), order, style: rule.style }
      elements.forEach(el => {
        let entry = matches.get(el)
        if (!entry) {
          entry = { self: [], before: [], after: [] }
          matches.set(el, entry)
        }
        entry[target].push(match)
      })
    })
  })
  return matches
}

// 按「普通规则 < 行内样式 < !important 规则」的顺序层叠出最终声明
function cascade(list: Match[], inline?: CSSStyleDeclaration): CSSStyleDeclaration {
  const out = document.createElement('span').style
  const sorted = list.slice().sort((a, b) => a.specificity - b.specificity || a.order - b.order)
  const apply = (decl: CSSStyleDeclaration, important: boolean) => {
    for (let i = 0; i < decl.length; i++) {
      const prop = decl[i]
      if ((decl.getPropertyPriority(prop) === 'important') === important) {
        out.setProperty(prop, decl.getPropertyValue(prop))
      }
    }
  }
  sorted.forEach(m => apply(m.style, false))
  if (inline) apply(inline, false)
  sorted.forEach(m => apply(m.style, true))
  if (inline) apply(inline, true)
  return out
}

function parseCounterList(value: string, defaultValue: number): [string, number][] {
  const tokens = value.trim().split(/\s+/).filter(Boolean)
  if (!tokens.length || tokens[0] === 'none') return []
  const pairs: [string, number][] = []
  for (let i = 0; i < tokens.length; i++) {
    const next = tokens[i + 1]
    if (next !== undefined && /^-?\d+$/.test(next)) {
      pairs.push([tokens[i], parseInt(next, 10)])
      i++
    } else {
      pairs.push([tokens[i], defaultValue])
    }
  }
  return pairs
}

class Counters {
  private stacks = new Map<string, { value: number; owner: Node | null }[]>()

  private stack(name: string) {
    let stack = this.stacks.get(name)
    if (!stack) {
      stack = []
      this.stacks.set(name, stack)
    }
    return stack
  }

  // owner 为计数器作用域所在的父节点，离开该节点时出栈
  apply(decl: CSSStyleDeclaration, owner: Node | null) {
    parseCounterList(decl.getPropertyValue('counter-reset'), 0).forEach(([name, value]) => {
      this.stack(name).push({ value, owner })
    })
    parseCounterList(decl.getPropertyValue('counter-increment'), 1).forEach(([name, value]) => {
      const stack = this.stack(name)
      if (!stack.length) stack.push({ value: 0, owner })
      stack[stack.length - 1].value += value
    })
  }

  values(name: string): number[] {
    const stack = this.stack(name)
    return stack.length ? stack.map(c => c.value) : [0]
  }

  leave(node: Node) {
    this.stacks.forEach(stack => {
      while (stack.length && stack[stack.length - 1].owner === node) stack.pop()
    })
  }
}

const CJK_DIGITS = '零一二三四五六七八九'

function formatCounter(n: number, style = 'decimal'): string {
  switch (style.trim()) {
    case 'none':
      return ''
    case 'disc':
      return '•'
    case 'circle':
      return '◦'
    case 'square':
      return '▪'
    case 'decimal-leading-zero':
      return n >= 0 && n < 10 ? `0${n}` : String(n)
    case 'lower-alpha':
    case 'lower-latin':
    case 'upper-alpha':
    case 'upper-latin': {
      let s = ''
      for (let v = n; v > 0; v = Math.floor((v - 1) / 26)) s = String.fromCharCode(97 + ((v - 1) % 26)) + s
      return style.startsWith('upper') ? s.toUpperCase() : s
    }
    case 'lower-roman':
    case 'upper-roman': {
      const table: [number, string][] = [[1000, 'm'], [900, 'cm'], [500, 'd'], [400, 'cd'], [100, 'c'], [90, 'xc'], [50, 'l'], [40, 'xl'], [10, 'x'], [9, 'ix'], [5, 'v'], [4, 'iv'], [1, 'i']]
      let s = ''
      let v = n
      table.forEach(([num, sym]) => {
        while (v >= num) {
          s += sym
          v -= num
        }
      })
      return style === 'upper-roman' ? s.toUpperCase() : s
    }
    case 'cjk-ideographic':
    case 'cjk-decimal':
    case 'simp-chinese-informal': {
      if (n < 0 || n >= 100) return String(n)
      if (n < 10) return CJK_DIGITS[n]
      const tens = Math.floor(n / 10)
      const ones = n % 10
      return (tens > 1 ? CJK_DIGITS[tens] : '') + '十' + (ones ? CJK_DIGITS[ones] : '')
    }
    default:
      return String(n)
  }
}

function unescapeCssString(s: string): string {
  return s
    .replace(/\\([0-9a-fA-F]{1,6})\s?/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/\\(.)/g, '$1')
}

// 解析 content 取值；返回 null 表示不生成伪元素
function resolveContent(value: string, el: Element, counters: Counters): string | null {
  const trimmed = value.trim()
  if (!trimmed || trimmed === 'none' || trimmed === 'normal') return null

  const re = /"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'|counter\(\s*([\w-]+)\s*(?:,\s*([\w-]+)\s*)?\)|counters\(\s*([\w-]+)\s*,\s*(?:"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)')\s*(?:,\s*([\w-]+)\s*)?\)|attr\(\s*([\w-]+)\s*\)|(open-quote|close-quote)/g
  let text = ''
  let m: RegExpExecArray | null
  while ((m = re.exec(trimmed))) {
    if (m[1] !== undefined || m[2] !== undefined) {
      text += unescapeCssString(m[1] ?? m[2])
    } else if (m[3]) {
      const values = counters.values(m[3])
      text += formatCounter(values[values.length - 1], m[4])
    } else if (m[5]) {
      const separator = unescapeCssString(m[6] ?? m[7] ?? '')
      text += counters.values(m[5]).map(v => formatCounter(v, m![8])).join(separator)
    } else if (m[9]) {
      text += el.getAttribute(m[9]) || ''
    } else if (m[10]) {
      text += m[10] === 'open-quote' ? '“' : '”'
    }
  }
  return text
}

function styleText(decl: CSSStyleDeclaration): string {
  GENERATED_PROPS.forEach(prop => decl.removeProperty(prop))
  return decl.cssText
}

function createPseudo(decl: CSSStyleDeclaration, el: Element, counters: Counters): HTMLElement | null {
  counters.apply(decl, el)
  const text = resolveContent(decl.getPropertyValue('content'), el, counters)
  if (text === null) return null
  const span = document.createElement('span')
  span.textContent = text
  const style = styleText(decl)
  if (style) span.setAttribute('style', style)
  return span
}

function walk(el: HTMLElement, matches: MatchMap, counters: Counters) {
  const entry = matches.get(el)
  const decl = cascade(entry?.self || [], el.style)
  counters.apply(decl, el.parentNode)

  let node: HTMLElement = el
  const before = entry?.before.length ? cascade(entry.before) : null
  const beforeHasContent = before && resolveContent(before.getPropertyValue('content'), el, counters) !== null
  const after = entry?.after.length ? cascade(entry.after) : null
  const afterHasContent = after && resolveContent(after.getPropertyValue('content'), el, counters) !== null

  // <hr> 等空元素不能包含子节点，有伪元素时换成 <section>
  if (el.tagName === 'HR' && (beforeHasContent || afterHasContent)) {
    node = document.createElement('section')
    el.replaceWith(node)
  }

  const style = styleText(decl)
  if (style) node.setAttribute('style', style)
  else node.removeAttribute('style')

  if (el.tagName === 'IMG') return

  const children = Array.from(el.children)
  if (before) {
    const span = createPseudo(before, node, counters)
    if (span) node.insertBefore(span, node.firstChild)
  }
  children.forEach(child => {
    if (child instanceof HTMLElement) walk(child, matches, counters)
  })
  if (after) {
    const span = createPseudo(after, node, counters)
    if (span) node.appendChild(span)
  }
  counters.leave(el)
  counters.leave(node)
}

// 返回一个把模板样式全部内联后的副本，原节点不受影响
export function inlineTemplateStyles(source: HTMLElement): HTMLElement {
  const clone = source.cloneNode(true) as HTMLElement
  const styleEls = Array.from(clone.querySelectorAll(`style[${TEMPLATE_STYLE_ATTR}]`))
  const css = styleEls.map(s => s.textContent || '').join('\n')
  styleEls.forEach(s => s.remove())
  if (!css.trim()) return clone

  const rules = parseRules(css)
  const matches = collectMatches(clone, rules)
  const counters = new Counters()
  Array.from(clone.children).forEach(child => {
    if (child instanceof HTMLElement) walk(child, matches, counters)
  })
  return clone
}
