import { promises as fs } from 'fs'
import path from 'path'
import { FILE_PATTERN, IMAGE_DIR, IMAGE_TYPES, MONTH_PATTERN } from '@/lib/server/image-storage'

// 读取本地保存的图片：/images/2026-09/<时间戳>-<uuid>.png

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(_request: Request, { params }: { params: { month: string; file: string } }) {
  const { month, file } = params
  const match = file.match(FILE_PATTERN)
  if (!MONTH_PATTERN.test(month) || !match) return new Response('Not Found', { status: 404 })

  const data = await fs.readFile(path.join(IMAGE_DIR, month, file)).catch(() => null)
  if (!data) return new Response('Not Found', { status: 404 })

  return new Response(data, {
    headers: {
      'Content-Type': IMAGE_TYPES[match[1]],
      'Content-Length': String(data.length),
      // 文件名唯一且内容不变，可长期缓存
      'Cache-Control': 'public, max-age=31536000, immutable',
      'X-Content-Type-Options': 'nosniff',
    },
  })
}
