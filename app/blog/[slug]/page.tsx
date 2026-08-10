'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SocialShare } from '@/components/social-share'
import ReactMarkdown from 'react-markdown'
import { useState, useEffect } from 'react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  author: string
  authorProfile?: string
  date: string
  content: string
  shareLinks: {
    twitter: string
    facebook: string
    linkedin: string
  }
}

interface PostPageProps {
  params: {
    slug: string
  }
}

export default function PostPage({ params }: PostPageProps) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [notFoundFlag, setNotFoundFlag] = useState(false)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blog?id=${params.slug}`)
        if (response.ok) {
          const data = await response.json()
          setPost(data)
        } else {
          setNotFoundFlag(true)
        }
      } catch (error) {
        console.error('Error fetching post:', error)
        setNotFoundFlag(true)
      }
    }

    fetchPost()
  }, [params.slug])

  if (notFoundFlag) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </main>
    )
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {post.image && (
        <div className="relative w-full h-96 md:h-[500px]">
          <Image
            src={post.image || '/placeholder.svg'}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-3">
              {post.authorProfile && (
                <img
                  src={post.authorProfile || "/placeholder.svg"}
                  alt={post.author}
                  className="h-10 w-10 rounded-full object-cover border border-border/50"
                />
              )}
              <div className="flex flex-col">
                {post.author && <span className="font-semibold text-foreground">{post.author}</span>}
                <span className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* Social Share Section */}
        <div className="my-12">
          <SocialShare
            title={post.title}
            excerpt={post.excerpt}
            image={post.image}
            url={typeof window !== 'undefined' ? window.location.href : ''}
            author={post.author}
          />
        </div>

        <div className="border-t pt-8">
          <Button asChild variant="outline">
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </article>
    </main>
  )
}
