import { Pool } from '@neondatabase/serverless'
import { NextRequest, NextResponse } from 'next/server'

let pool: Pool | null = null

function getPool() {
  if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL })
  }
  return pool
}

async function queryDB(text: string, params: any[] = []) {
  const db = getPool()
  const result = await db.query(text, params)
  return result.rows
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (id) {
      const result = await queryDB('SELECT * FROM blog_posts WHERE id = $1', [id])
      if (result.length === 0) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 })
      }
      return NextResponse.json(result[0])
    } else {
      const result = await queryDB('SELECT * FROM blog_posts ORDER BY created_at DESC')
      return NextResponse.json(result)
    }
  } catch (error) {
    console.error('[v0] GET Error:', error)
    return NextResponse.json({ error: 'Failed to fetch posts', details: String(error) }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, title, excerpt, content, image, author, authorProfile, date, shareLinks } = body

    if (!id || !title || !excerpt || !content || !image || !author || !date) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const result = await queryDB(
      `INSERT INTO blog_posts (id, title, excerpt, content, image, author, author_profile, date, share_links)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       ON CONFLICT (id) DO UPDATE SET
         title = EXCLUDED.title,
         excerpt = EXCLUDED.excerpt,
         content = EXCLUDED.content,
         image = EXCLUDED.image,
         author = EXCLUDED.author,
         author_profile = EXCLUDED.author_profile,
         date = EXCLUDED.date,
         share_links = EXCLUDED.share_links,
         updated_at = CURRENT_TIMESTAMP
       RETURNING *`,
      [id, title, excerpt, content, image, author, authorProfile || null, date, JSON.stringify(shareLinks)]
    )

    return NextResponse.json(result[0])
  } catch (error) {
    console.error('[v0] POST Error:', error)
    return NextResponse.json({ error: 'Failed to save post', details: String(error) }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }

    await queryDB('DELETE FROM blog_posts WHERE id = $1', [id])
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[v0] DELETE Error:', error)
    return NextResponse.json({ error: 'Failed to delete post', details: String(error) }, { status: 500 })
  }
}
