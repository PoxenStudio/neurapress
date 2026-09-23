import type { RendererOptions } from '@/lib/markdown'
import type { TemplateCategory, TemplateStyleSettings, WechatTemplate } from './types'
import { BASE_CSS } from './base'
import { basicTemplates } from './styles/basic'
import { techTemplates } from './styles/tech'
import { businessTemplates } from './styles/business'
import { literaryTemplates } from './styles/literary'
import { pressTemplates } from './styles/press'
import { lifestyleTemplates } from './styles/lifestyle'
import { educationTemplates } from './styles/education'
import { financeTemplates } from './styles/finance'
import { darkTemplates } from './styles/dark'
import { classicTemplates } from './styles/classic'
import { blueSeriesTemplates } from './styles/blue-series'
import { macaronTemplates } from './styles/macaron'

export type { TemplateCategory, TemplateStyleSettings, TemplateVariable, WechatTemplate } from './types'
export { BASE_CSS }

export const templateCategories: { id: TemplateCategory; name: string }[] = [
  { id: 'basic', name: '基础' },
  { id: 'tech', name: '科技' },
  { id: 'business', name: '商务' },
  { id: 'literary', name: '文艺' },
  { id: 'press', name: '报刊' },
  { id: 'lifestyle', name: '生活' },
  { id: 'education', name: '教育' },
  { id: 'finance', name: '财经' },
  { id: 'dark', name: '暗色' },
  { id: 'classic', name: '复古' },
  { id: 'blue-series', name: '蓝色系' },
  { id: 'macaron', name: '马卡龙' },
]

export const templates: WechatTemplate[] = [
  ...basicTemplates,
  ...techTemplates,
  ...businessTemplates,
  ...literaryTemplates,
  ...pressTemplates,
  ...lifestyleTemplates,
  ...educationTemplates,
  ...financeTemplates,
  ...darkTemplates,
  ...classicTemplates,
  ...blueSeriesTemplates,
  ...macaronTemplates,
]

export const DEFAULT_TEMPLATE_ID = 'wechat-basic-simple'

// 未知 id（如旧版本保存的 'default'）回退到默认模板
export function getTemplate(id?: string): WechatTemplate {
  return templates.find(t => t.id === id)
    || templates.find(t => t.id === DEFAULT_TEMPLATE_ID)!
}

// 双类名提高优先级，确保覆盖模板自身的同名规则
const ROOT = '.wechat-article.wechat-article'

function styleSettingsCss({ themeColor, fontSize, lineHeight, textAlign }: TemplateStyleSettings): string {
  const size = typeof fontSize === 'number' ? `${fontSize}px` : fontSize
  const decl = (prop: string, value?: string | number) => (value ? `${prop}: ${value};` : '')
  let css = ''

  if (size || lineHeight) {
    css += `${ROOT} { ${decl('font-size', size)} ${decl('line-height', lineHeight)} }\n`
  }
  if (size || lineHeight || textAlign) {
    css += `${ROOT} p, ${ROOT} li { ${decl('font-size', size)} ${decl('line-height', lineHeight)} ${decl('text-align', textAlign)} }\n`
  }
  if (themeColor) {
    css += `
${ROOT} h1, ${ROOT} h2, ${ROOT} h3, ${ROOT} h4, ${ROOT} h5, ${ROOT} h6 { color: ${themeColor} !important; border-color: ${themeColor} !important; }
${ROOT} h1 strong, ${ROOT} h2 strong, ${ROOT} h3 strong { color: ${themeColor} !important; }
${ROOT} blockquote { border-color: ${themeColor} !important; }
${ROOT} strong { color: ${themeColor} !important; }
${ROOT} a { color: ${themeColor} !important; border-bottom-color: ${themeColor} !important; }
${ROOT} code { color: ${themeColor} !important; }
${ROOT} th { background-color: ${themeColor} !important; }
${ROOT} hr { background: ${themeColor} !important; background-image: none !important; }
`
  }
  return css
}

// 组合完整的模板样式：基础样式 + 模板样式 + 模板默认参数与用户在「样式设置」中的覆盖
export function buildTemplateCss(template: WechatTemplate, overrides: RendererOptions['base'] = {}): string {
  const settings: TemplateStyleSettings = { ...template.defaultStyleSettings }
  if (overrides.themeColor) settings.themeColor = overrides.themeColor
  if (overrides.fontSize) settings.fontSize = overrides.fontSize
  if (overrides.lineHeight) settings.lineHeight = overrides.lineHeight
  if (overrides.textAlign) settings.textAlign = overrides.textAlign

  return [BASE_CSS, template.css, styleSettingsCss(settings)].join('\n')
}
