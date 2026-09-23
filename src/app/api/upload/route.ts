import { NextResponse, type NextRequest } from 'next/server'
import { ImageStorageError, MAX_IMAGE_SIZE, saveImage } from '@/lib/server/image-storage'

// 保存粘贴的图片到服务器本地，返回图片的站内路径（由前端补全为当前站点的完整链接）

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// 简单的按 IP 限流，防止接口被滥用
const RATE_LIMIT = 30
const RATE_WINDOW_MS = 10 * 60 * 1000
const uploadsByIp = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (uploadsByIp.get(ip) || []).filter(t => now - t < RATE_WINDOW_MS)
  if (recent.length >= RATE_LIMIT) {
    uploadsByIp.set(ip, recent)
    return true
  }
  recent.push(now)
  uploadsByIp.set(ip, recent)
  return false
}

function error(message: string, status: number) {
  return NextResponse.json({ error: message }, { status })
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || request.ip || 'unknown'
  if (isRateLimited(ip)) return error('上传过于频繁，请稍后再试', 429)

  const form = await request.formData().catch(() => null)
  const file = form?.get('file')
  if (!(file instanceof Blob)) return error('缺少图片文件', 400)
  if (file.size > MAX_IMAGE_SIZE) return error('图片不能超过 10MB', 413)

  try {
    const relativePath = await saveImage(Buffer.from(await file.arrayBuffer()))
    return NextResponse.json({ path: `/images/${relativePath}` })
  } catch (err) {
    if (err instanceof ImageStorageError) return error(err.message, err.status)
    throw err
  }
}
