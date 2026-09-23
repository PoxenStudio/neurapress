import { useState, useCallback, useEffect } from 'react'
import { buildTemplateCss, getTemplate } from '@/config/wechat-templates'
import { convertToWechat, getCodeThemeStyles, type RendererOptions } from '@/lib/markdown'
import { TEMPLATE_STYLE_ATTR } from '@/lib/wechat/inline-styles'
import { type CodeThemeId } from '@/config/code-themes'
import { useToast } from '@/components/ui/use-toast'
import { useDebounce } from './useDebounce'

// 输入停顿后再转换，避免每个按键都重建预览
const PREVIEW_DEBOUNCE_MS = 150

interface UsePreviewContentProps {
  value: string
  selectedTemplate: string
  styleOptions: RendererOptions
  codeTheme: CodeThemeId
}

function renderPreview(value: string, selectedTemplate: string, styleOptions: RendererOptions, codeTheme: CodeThemeId) {
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
}

export const usePreviewContent = ({
  value,
  selectedTemplate,
  styleOptions,
  codeTheme
}: UsePreviewContentProps) => {
  const { toast } = useToast()
  const debouncedValue = useDebounce(value, PREVIEW_DEBOUNCE_MS)
  const [previewContent, setPreviewContent] = useState('')
  const [isConverting, setIsConverting] = useState(true)

  const getPreviewContent = useCallback(
    () => renderPreview(value, selectedTemplate, styleOptions, codeTheme),
    [value, selectedTemplate, styleOptions, codeTheme]
  )

  // 转换是同步的，直接替换内容即可；出错时保留上一次的预览
  useEffect(() => {
    try {
      setPreviewContent(renderPreview(debouncedValue, selectedTemplate, styleOptions, codeTheme))
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
  }, [debouncedValue, selectedTemplate, styleOptions, codeTheme, toast])

  return {
    isConverting,
    previewContent,
    getPreviewContent
  }
}
