import { randomUUID } from 'crypto'
import { promises as fs } from 'fs'
import path from 'path'

// 粘贴上传的图片保存在服务器本地，按月份分子目录：<IMAGE_DIR>/2026-09/<时间戳>-<uuid>.png
//   IMAGE_DIR               存储目录，默认 <工作目录>/data/images（容器内为 /app/data/images）
//   IMAGE_STORAGE_LIMIT_MB  总容量上限（MB），默认 5120，超过后拒绝上传

export const IMAGE_DIR = process.env.IMAGE_DIR || path.join(process.cwd(), 'data', 'images')
export const MAX_IMAGE_SIZE = 10 * 1024 * 1024
const STORAGE_LIMIT = (Number(process.env.IMAGE_STORAGE_LIMIT_MB) || 5120) * 1024 * 1024

export const IMAGE_TYPES: Record<string, string> = {
  png: 'image/png',
  jpg: 'image/jpeg',
  gif: 'image/gif',
  webp: 'image/webp',
}

// 严格限定目录和文件名格式，读取时据此杜绝路径穿越
export const MONTH_PATTERN = /^\d{4}-\d{2}$/
export const FILE_PATTERN = /^\d+-[0-9a-f-]{36}\.(png|jpg|gif|webp)$/

export class ImageStorageError extends Error {
  constructor(message: string, public status: number) {
    super(message)
  }
}

// 按文件头识别真实格式，不信任浏览器上报的类型；不支持 SVG（可夹带脚本）
function detectExtension(bytes: Buffer): string | null {
  if (bytes.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return 'png'
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return 'jpg'
  if (bytes.subarray(0, 4).toString('ascii') === 'GIF8') return 'gif'
  if (bytes.subarray(0, 4).toString('ascii') === 'RIFF' && bytes.subarray(8, 12).toString('ascii') === 'WEBP') return 'webp'
  return null
}

async function directorySize(dir: string): Promise<number> {
  const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => [])
  let total = 0
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) total += await directorySize(full)
    else if (entry.isFile()) total += (await fs.stat(full)).size
  }
  return total
}

// 首次上传时统计一次已用空间，之后在内存中累加
let usedBytes: Promise<number> | null = null

export async function saveImage(bytes: Buffer): Promise<string> {
  const ext = detectExtension(bytes)
  if (!ext) throw new ImageStorageError('仅支持 PNG、JPG、GIF、WebP 图片', 415)
  if (bytes.length > MAX_IMAGE_SIZE) throw new ImageStorageError('图片不能超过 10MB', 413)

  usedBytes ??= directorySize(IMAGE_DIR)
  const used = await usedBytes
  if (used + bytes.length > STORAGE_LIMIT) throw new ImageStorageError('图片存储空间已满', 507)

  const now = new Date()
  const month = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
  const fileName = `${now.getTime()}-${randomUUID()}.${ext}`

  try {
    await fs.mkdir(path.join(IMAGE_DIR, month), { recursive: true })
    await fs.writeFile(path.join(IMAGE_DIR, month, fileName), bytes, { flag: 'wx' })
  } catch (err) {
    const code = (err as NodeJS.ErrnoException).code
    console.error('Failed to save image:', err)
    throw new ImageStorageError(code === 'EACCES' || code === 'EPERM' ? '图片目录没有写入权限' : '图片保存失败', 500)
  }

  usedBytes = usedBytes.then(n => n + bytes.length)
  return `${month}/${fileName}`
}
