'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Share2, Facebook, Linkedin, Twitter, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

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

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  const [showShareMenu, setShowShareMenu] = useState(false)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/50">
      {/* Image Container */}
      <Link href={`/blog/${post.id}`}>
        <div className="relative w-full h-56 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden cursor-pointer">
          <img
            src={post.image || '/placeholder.svg'}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title & Excerpt */}
        <Link href={`/blog/${post.id}`} className="block mb-4 group/link">
          <h3 className="font-bold text-lg text-foreground line-clamp-2 mb-2 group-hover/link:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Meta Info */}
        <div className="mb-4 pt-4 border-t border-border/50">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              {post.authorProfile && (
                <img
                  src={post.authorProfile || "/placeholder.svg"}
                  alt={post.author}
                  className="h-8 w-8 rounded-full object-cover border border-border/50"
                />
              )}
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-foreground">{post.author}</p>
                <p className="text-xs text-muted-foreground">{formatDate(post.date)}</p>
              </div>
            </div>
            <Link href={`/blog/${post.id}`} className="text-primary hover:text-primary/80 transition-colors">
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Share Button */}
        <div className="relative">
          <Button
            variant="outline"
            size="sm"
            className="w-full bg-transparent border-border/50 hover:border-primary/50 hover:bg-primary/5 rounded-lg gap-2 transition-all"
            onClick={() => setShowShareMenu(!showShareMenu)}
          >
            <Share2 className="h-4 w-4" />
            Share
          </Button>

          {/* Share Menu */}
          {showShareMenu && (
            <div className="absolute bottom-full left-0 right-0 mb-2 bg-card border border-border/50 rounded-lg p-1.5 space-y-1 z-10 shadow-lg backdrop-blur-sm">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-blue-400 hover:bg-blue-400/10 rounded-md"
                onClick={() => window.open(post.shareLinks.twitter, '_blank')}
              >
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-blue-600 hover:bg-blue-600/10 rounded-md"
                onClick={() => window.open(post.shareLinks.facebook, '_blank')}
              >
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-blue-700 hover:bg-blue-700/10 rounded-md"
                onClick={() => window.open(post.shareLinks.linkedin, '_blank')}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
