export type TemplateCategory =
  | 'basic'
  | 'tech'
  | 'business'
  | 'literary'
  | 'press'
  | 'lifestyle'
  | 'education'
  | 'finance'
  | 'dark'
  | 'classic'
  | 'blue-series'
  | 'macaron'

export interface TemplateVariable {
  name: string
  type: string
  defaultValue: string
  description: string
}

// 模板推荐的排版参数，会以覆盖样式的形式叠加在模板 CSS 之上
export interface TemplateStyleSettings {
  themeColor?: string
  fontSize?: number | string
  lineHeight?: number | string
  textAlign?: string
}

export interface WechatTemplate {
  id: string
  name: string
  description: string
  category: TemplateCategory
  // 以 .wechat-article 为根选择器的模板样式（不含 BASE_CSS）
  css: string
  variables?: TemplateVariable[]
  defaultStyleSettings?: TemplateStyleSettings
}
