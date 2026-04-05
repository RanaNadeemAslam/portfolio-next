import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type BlogMetadata = {
  title: string
  date: string
  description: string
  cover?: string
  tags: string[]
}

export type BlogPost = {
  slug: string
  metadata: BlogMetadata
  content: string
  readingTime: string
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')
const WORDS_PER_MINUTE = 200

function calculateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))
  return `${minutes} min read`
}

function parseMdxFile(slug: string, filePath: string): BlogPost {
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  const metadata: BlogMetadata = {
    title: data.title ?? '',
    date: data.date ?? '',
    description: data.description ?? '',
    cover: data.cover,
    tags: Array.isArray(data.tags) ? data.tags : [],
  }

  return {
    slug,
    metadata,
    content,
    readingTime: calculateReadingTime(content),
  }
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  if (files.length === 0) {
    return []
  }

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '')
    const filePath = path.join(BLOG_DIR, file)
    return parseMdxFile(slug, filePath)
  })

  return posts.sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() -
      new Date(a.metadata.date).getTime()
  )
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  return parseMdxFile(slug, filePath)
}
