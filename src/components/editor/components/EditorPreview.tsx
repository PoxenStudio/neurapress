'use client'

import { cn } from '@/lib/utils'
import { PREVIEW_SIZES, type PreviewSize } from '../constants'
import { Loader2, ZoomIn, ZoomOut, Maximize2, Minimize2 } from 'lucide-react'
import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { type CodeThemeId } from '@/config/code-themes'
import '@/styles/code-themes.css'
import mermaid from 'mermaid'
import { useScrollSync } from '../hooks/useScrollSync'
import { patchPreview } from '../utils/patchPreview'

// 按图表源码缓存渲染结果，内容不变时无需重新渲染
const mermaidCache = new Map<string, string>()

function escapeHtml(text: string) {
  return text.replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]!))
}

function renderMermaidDiagrams(container: Element) {
  container.querySelectorAll('.mermaid').forEach(element => {
    if (element.hasAttribute('data-mermaid-source')) return
    const source = element.textContent?.trim() || ''
    if (!source) return
    element.setAttribute('data-mermaid-source', source)

    const cached = mermaidCache.get(source)
    if (cached) {
      element.innerHTML = cached
      return
    }

    mermaid.render(`mermaid-${Math.random().toString(36).substring(2, 9)}`, source)
      .then(({ svg }) => {
        mermaidCache.set(source, svg)
        element.innerHTML = svg
      })
      .catch(error => {
        console.error('Failed to render mermaid diagram:', error)
        element.innerHTML = `
          <div class="rounded-lg overflow-hidden border border-red-200">
            <div class="bg-red-50 p-3 text-red-700 text-sm">Failed to render diagram</div>
            <pre class="bg-white p-3 m-0 text-sm overflow-x-auto whitespace-pre-wrap break-all">${escapeHtml(source)}</pre>
            <div class="bg-red-50 p-3 text-red-600 text-sm border-t border-red-200">${escapeHtml(error instanceof Error ? error.message : 'Unknown error')}</div>
          </div>
        `
      })
  })
}

interface EditorPreviewProps {
  previewRef: React.RefObject<HTMLDivElement>
  selectedTemplate?: string
  previewSize: PreviewSize
  isConverting: boolean
  previewContent: string
  codeTheme: CodeThemeId
  showToolbar?: boolean
  onPreviewSizeChange: (size: PreviewSize) => void
}

export function EditorPreview({
  previewRef,
  previewSize,
  isConverting,
  previewContent,
  codeTheme,
  showToolbar = true,
  onPreviewSizeChange
}: EditorPreviewProps) {
  const [zoom, setZoom] = useState(100)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const isScrolling = useRef<boolean>(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const { handlePreviewScroll } = useScrollSync()
  const articleRef = useRef<HTMLDivElement>(null)

  // 初始化 Mermaid（文章使用模板自带的浅色背景，图表统一使用默认主题）
  useEffect(() => {
    mermaid.initialize({
      theme: 'default',
      startOnLoad: false,
      securityLevel: 'loose',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      flowchart: {
        htmlLabels: true,
        curve: 'basis',
        padding: 15,
        useMaxWidth: false,
        defaultRenderer: 'dagre-d3'
      },
      sequence: {
        useMaxWidth: false,
        boxMargin: 10,
        mirrorActors: false,
        bottomMarginAdj: 2,
        rightAngles: true,
        showSequenceNumbers: false
      },
      pie: {
        useMaxWidth: true,
        textPosition: 0.5,
        useWidth: 800
      },
      gantt: {
        useMaxWidth: false,
        leftPadding: 75,
        rightPadding: 20
      }
    })
  }, [])

  // 增量更新预览内容，并在绘制前补上缓存中的 Mermaid 图，避免闪烁
  useLayoutEffect(() => {
    const container = articleRef.current
    if (!container) return
    patchPreview(container, previewContent)
    renderMermaidDiagrams(container)
  }, [previewContent])

  // 监听全屏状态变化
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  return (
    <div 
      ref={previewRef}
      className={cn(
        "preview-container bg-background transition-all duration-300 ease-in-out flex flex-col",
        "h-full sm:w-1/2",
        "markdown-body relative",
        `code-theme-${codeTheme}`
      )}
    >
      {showToolbar && (
        <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b flex items-center justify-between z-10 sticky top-0 left-0 right-0">
          <div className="flex items-center gap-0.5 px-2">
            <span className="text-sm text-muted-foreground">预览效果</span>
          </div>
          <div className="flex items-center gap-4 px-4 py-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoom(zoom => Math.max(zoom - 10, 50))}
                className="p-1 rounded hover:bg-muted/80 text-muted-foreground"
                disabled={zoom <= 50}
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <span className="text-sm text-muted-foreground">{zoom}%</span>
              <button
                onClick={() => setZoom(zoom => Math.min(zoom + 10, 200))}
                className="p-1 rounded hover:bg-muted/80 text-muted-foreground"
                disabled={zoom >= 200}
              >
                <ZoomIn className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <select
                value={previewSize}
                onChange={(e) => onPreviewSizeChange(e.target.value as PreviewSize)}
                className="text-sm border rounded px-2 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background text-foreground"
              >
                {Object.entries(PREVIEW_SIZES).map(([value, { label }]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-1 rounded hover:bg-muted/80 text-muted-foreground"
              >
                {isFullscreen ? (
                  <Minimize2 className="h-4 w-4" />
                ) : (
                  <Maximize2 className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      <div 
        className="flex-1 overflow-y-auto"
        onScroll={handlePreviewScroll}
      >
        <div className="h-full py-8 px-4">
          <div
            ref={contentRef}
            className={cn(
              "bg-background mx-auto rounded-lg transition-all duration-300",
              previewSize === 'full' ? '' : 'border shadow-sm'
            )}
            style={{ 
              width: PREVIEW_SIZES[previewSize].width,
              maxWidth: '100%',
              transform: `scale(${zoom / 100})`,
              transformOrigin: 'top center',
              transition: 'transform 0.2s ease-in-out'
            }}
          >
            {isConverting && (
              <div className="flex flex-col items-center justify-center gap-2 p-8">
                <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                <span className="text-sm text-muted-foreground">正在生成预览...</span>
              </div>
            )}
            {/* 内容容器始终保留，只做增量更新 */}
            <div className="preview-content py-4">
              <div ref={articleRef} className="px-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 