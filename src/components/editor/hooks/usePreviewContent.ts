import { useState, useCallback, useEffect } from 'react'
import { buildTemplateCss, getTemplate } from '@/config/wechat-templates'
import { convertToWechat, getCodeThemeStyles, type RendererOptions } from '@/lib/markdown'
import { TEMPLATE_STYLE_ATTR } from '@/lib/wechat/inline-styles'
import { type CodeThemeId } from '@/config/code-themes'
import { useToast } from '@/components/ui/use-toast'
import { initializeMermaid } from '@/lib/markdown/mermaid-utils'

interface UsePreviewContentProps {
  value: string
  selectedTemplate: string
  styleOptions: RendererOptions
  codeTheme: CodeThemeId
}

export const usePreviewContent = ({
  value,
  selectedTemplate,
  styleOptions,
  codeTheme
}: UsePreviewContentProps) => {
  const { toast } = useToast()
  const [isConverting, setIsConverting] = useState(false)
  const [previewContent, setPreviewContent] = useState('')

  const getPreviewContent = useCallback(() => {
    if (!value) return ''

    const template = getTemplate(selectedTemplate)
    const html = convertToWechat(value, {
      plain: true,
      block: { code_pre: getCodeThemeStyles(codeTheme) },
      codeTheme
    })
    const css = buildTemplateCss(template, styleOptions.base)

    // 样式表随内容一起输出，复制时由 inlineTemplateStyles 转为内联样式
    return `<style ${TEMPLATE_STYLE_ATTR}>${css}</style><section class="wechat-article">${html}</section>`
  }, [value, selectedTemplate, styleOptions, codeTheme])

  useEffect(() => {
    const updatePreview = async () => {
      if (!value) {
        setPreviewContent('')
        return
      }
      
      setIsConverting(true)
      try {
        const content = getPreviewContent()
        setPreviewContent(content)

        // 等待 DOM 更新
        await new Promise(resolve => setTimeout(resolve, 50))

        // 渲染 Mermaid 图表
        try {
          await initializeMermaid()
        } catch (error) {
          console.error('Failed to initialize Mermaid:', error)
        }
      } catch (error) {
        console.error('Error updating preview:', error)
        toast({
          variant: "destructive",
          title: "预览更新失败",
          description: "生成预览内容时发生错误",
        })
      } finally {
        setIsConverting(false)
      }
    }

    updatePreview()
  }, [value, selectedTemplate, styleOptions, codeTheme, getPreviewContent, toast])

  return {
    isConverting,
    previewContent,
    getPreviewContent
  }
} 