import { useCallback, useEffect, useRef } from 'react'
import { useToast } from '@/components/ui/use-toast'

interface UseImagePasteProps {
  value: string
  onChange: (value: string) => void
}

async function uploadImage(file: File): Promise<string> {
  const form = new FormData()
  form.append('file', file)
  const response = await fetch('/api/upload', { method: 'POST', body: form })
  const data = await response.json().catch(() => ({}))
  if (!response.ok || !data.path) throw new Error(data.error || '图片上传失败')
  // 使用当前访问的域名生成完整链接：粘贴到公众号后相对路径会失效
  return new URL(data.path, window.location.origin).href
}

// 从剪贴板粘贴图片：先在光标处插入「上传中」占位，上传完成后替换为图片链接
export const useImagePaste = ({ value, onChange }: UseImagePasteProps) => {
  const { toast } = useToast()
  // 上传是异步的，完成时需要基于最新内容替换占位符
  const valueRef = useRef(value)
  useEffect(() => {
    valueRef.current = value
  }, [value])

  const update = useCallback((next: string) => {
    valueRef.current = next
    onChange(next)
  }, [onChange])

  const handlePaste = useCallback((e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const files = Array.from(e.clipboardData.files).filter(f => f.type.startsWith('image/'))
    if (!files.length) return
    e.preventDefault()

    const textarea = e.currentTarget
    const { selectionStart, selectionEnd } = textarea
    const uploads = files.map(file => {
      const name = file.name || 'image.png'
      const id = Math.random().toString(36).slice(2, 10)
      return { file, name, placeholder: `![上传中 ${name}…](#uploading-${id})` }
    })
    const inserted = uploads.map(u => u.placeholder).join('\n')
    const current = valueRef.current
    update(current.slice(0, selectionStart) + inserted + current.slice(selectionEnd))

    requestAnimationFrame(() => {
      const cursor = selectionStart + inserted.length
      textarea.setSelectionRange(cursor, cursor)
    })

    uploads.forEach(({ file, name, placeholder }) => {
      uploadImage(file)
        .then(url => {
          update(valueRef.current.replace(placeholder, `![${name}](${url})`))
        })
        .catch((error: Error) => {
          update(valueRef.current.replace(placeholder, ''))
          toast({
            variant: 'destructive',
            title: '图片上传失败',
            description: error.message,
          })
        })
    })
  }, [update, toast])

  return { handlePaste }
}
