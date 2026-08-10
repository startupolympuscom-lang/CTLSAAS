'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, CalendarDays, User } from 'lucide-react'

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

export function LatestBlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog')
        if (response.ok) {
          const allPosts = await response.json()
          // Sort by date (newest first) and take top 3
          const sortedPosts = allPosts
            .sort((a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 3)
          setPosts(sortedPosts)
        }
      } catch (error) {
        console.error('Error loading blog posts:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (isLoading) {
    return null
  }

  if (posts.length === 0) {
    return null
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  const featuredPost = posts[0]
  const gridPosts = posts

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-background/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-widest text-yellow-500">Latest Insights</span>
          </div>
          <div className="flex items-end justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                <span className="block mb-2">Stay Updated With</span>
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                  Our Latest Stories
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Discover insights on digital transformation, technology trends, and industry innovations
              </p>
            </div>
            <Button asChild variant="outline" className="hidden lg:flex gap-2 rounded-full bg-yellow-400/10 border-yellow-400/30 hover:border-yellow-400/50 hover:bg-yellow-400/20 text-foreground">
              <Link href="/blog">
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <Link href={`/blog/${featuredPost.id}`} className="group block">
              <div className="relative h-96 md:h-[450px] rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 p-1 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative h-full bg-background rounded-xl overflow-hidden">
                  <img
                    src={featuredPost.image || '/placeholder.svg'}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="mb-4 inline-block px-4 py-1.5 bg-yellow-400 text-black font-semibold rounded-full text-sm">
                      Latest
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight text-balance">
                      {featuredPost.title}
                    </h2>
                    <p className="text-white/80 text-lg mb-6 line-clamp-2">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {featuredPost.authorProfile && (
                          <img
                            src={featuredPost.authorProfile || "/placeholder.svg"}
                            alt={featuredPost.author}
                            className="h-10 w-10 rounded-full object-cover border border-white/30"
                          />
                        )}
                        <div className="flex flex-col gap-1">
                          <p className="font-semibold">{featuredPost.author}</p>
                          <p className="text-white/60 text-sm">{formatDate(featuredPost.date)}</p>
                        </div>
                      </div>
                      <div className="text-yellow-400 font-bold text-2xl group-hover:translate-x-2 transition-transform">→</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {gridPosts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group">
              <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 p-1 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Card Background */}
                <div className="relative h-full bg-background rounded-xl overflow-hidden flex flex-col">
                  {/* Image Container */}
                  <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-yellow-100 to-amber-100">
                    <img
                      src={post.image || '/placeholder.svg'}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Index Badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-sm text-black shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-xl text-foreground line-clamp-2 mb-3 group-hover:text-yellow-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="space-y-3 pt-4 border-t border-border/50">
                      <div className="flex items-center gap-3 text-sm">
                        {post.authorProfile ? (
                          <img
                            src={post.authorProfile || "/placeholder.svg"}
                            alt={post.author}
                            className="h-6 w-6 rounded-full object-cover border border-border/50"
                          />
                        ) : (
                          <User className="h-4 w-4 text-yellow-500" />
                        )}
                        <span className="font-semibold text-foreground">{post.author}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CalendarDays className="h-4 w-4 text-yellow-500" />
                          {formatDate(post.date)}
                        </div>
                        <ArrowRight className="h-4 w-4 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <Button asChild className="w-full md:hidden gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-semibold shadow-lg">
          <Link href="/blog">
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
