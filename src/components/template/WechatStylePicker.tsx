'use client'

import * as React from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  templates,
  templateCategories,
  getTemplate,
  buildTemplateCss,
  type TemplateCategory,
  type WechatTemplate,
} from '@/config/wechat-templates'
import { convertToWechat } from '@/lib/markdown'
import { Button } from "@/components/ui/button"

interface WechatStylePickerProps {
  value?: string
  onSelect: (value: string) => void
}

const SAMPLE_MARKDOWN = `## 标题示例

这是一段示例文本，展示**模板排版**的效果，包括[链接](#)与\`行内代码\`。

> 引用文本示例

1. 列表项一
2. 列表项二
`

// 缩略图放在 Shadow DOM 中，避免各模板样式相互影响
function TemplateThumbnail({ template, html }: { template: WechatTemplate; html: string }) {
  const hostRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const host = hostRef.current
    if (!host) return
    const root = host.shadowRoot ?? host.attachShadow({ mode: 'open' })
    root.innerHTML = `
      <style>
        ${buildTemplateCss(template)}
        :host { display: block; }
        .thumb { width: 250%; transform: scale(0.4); transform-origin: top left; pointer-events: none; }
      </style>
      <div class="thumb"><section class="wechat-article">${html}</section></div>
    `
  }, [template, html])

  return <div ref={hostRef} className="h-full w-full" />
}

type CategoryFilter = TemplateCategory | 'all'

export function WechatStylePicker({ value, onSelect }: WechatStylePickerProps) {
  const [open, setOpen] = React.useState(false)
  const [category, setCategory] = React.useState<CategoryFilter>('all')
  const sampleHtml = React.useMemo(() => (open ? convertToWechat(SAMPLE_MARKDOWN, { plain: true }) : ''), [open])

  const visibleTemplates = category === 'all'
    ? templates
    : templates.filter(t => t.category === category)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          {value ? getTemplate(value).name : '选择样式...'}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>选择样式模板</DialogTitle>
        </DialogHeader>
        <div className="flex flex-wrap gap-2">
          {[{ id: 'all' as const, name: '全部' }, ...templateCategories].map(c => (
            <Button
              key={c.id}
              variant={category === c.id ? 'default' : 'outline'}
              size="sm"
              className="h-7 rounded-full px-3 text-xs"
              onClick={() => setCategory(c.id)}
            >
              {c.name}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-2 overflow-y-auto">
          {visibleTemplates.map((template) => (
            <div
              key={template.id}
              className={cn(
                "template-preview-card relative flex flex-col gap-3 rounded-lg border bg-card p-3 cursor-pointer hover:border-primary/50",
                value === template.id && "border-primary"
              )}
              onClick={() => {
                onSelect(template.id)
                setOpen(false)
              }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-md border bg-white">
                <TemplateThumbnail template={template} html={sampleHtml} />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">{template.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{template.description}</p>
              </div>
              {value === template.id && (
                <div className="absolute top-2 right-2">
                  <Check className="h-4 w-4 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
