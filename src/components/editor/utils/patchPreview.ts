// 增量更新预览 DOM：内容未变的节点原样保留（图片不重新加载、已渲染的 Mermaid 图不丢失），
// 只替换发生变化的段落，避免整体 innerHTML 重建带来的闪烁。

// 节点插入时的原始 HTML，用于比对（节点插入后可能被 Mermaid 等修改）
const sourceHtml = new WeakMap<Node, string>()

const ARTICLE_KEY = '<section class="wechat-article">'

function isArticle(node: Node): node is Element {
  return node instanceof Element && node.matches('section.wechat-article')
}

function keyOf(node: Node): string {
  if (isArticle(node)) return ARTICLE_KEY
  if (node instanceof Element) return node.outerHTML
  return `#${node.nodeType}:${node.textContent}`
}

// 按内容匹配复用旧节点，未匹配的旧节点删除，新增节点插入，并按新顺序排列
function patchChildren(parent: Element, nextNodes: Node[]) {
  const pool = new Map<string, Node[]>()
  Array.from(parent.childNodes).forEach(node => {
    const key = sourceHtml.get(node) ?? keyOf(node)
    const queue = pool.get(key)
    if (queue) queue.push(node)
    else pool.set(key, [node])
  })

  const result = nextNodes.map(node => {
    const key = keyOf(node)
    const reused = pool.get(key)?.shift()
    if (reused) return reused
    sourceHtml.set(node, key)
    return node
  })

  pool.forEach(queue => queue.forEach(node => parent.removeChild(node)))
  result.forEach((node, i) => {
    const current = parent.childNodes[i] || null
    if (current !== node) parent.insertBefore(node, current)
  })
}

export function patchPreview(container: Element, html: string) {
  const template = document.createElement('template')
  template.innerHTML = html
  const nextNodes = Array.from(template.content.childNodes)

  const oldArticle = Array.from(container.children).find(isArticle)
  const newArticle = nextNodes.find(isArticle)
  if (oldArticle && newArticle) {
    patchChildren(oldArticle, Array.from(newArticle.childNodes))
  }
  patchChildren(container, nextNodes)
}
