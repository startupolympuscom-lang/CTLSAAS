'use client'

import React from "react"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import BlogCard from '@/components/blog-card'
import { Search, LogOut, PlusCircle } from 'lucide-react'

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

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isEditorLoggedIn, setIsEditorLoggedIn] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  useEffect(() => {
    fetchPosts()

    const isLoggedIn = localStorage.getItem('editor_logged_in')
    setIsEditorLoggedIn(isLoggedIn === 'true')
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog')
      if (response.ok) {
        const data = await response.json()
        setPosts(data)
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === 'admin@blog.com' && password === 'admin123') {
      localStorage.setItem('editor_logged_in', 'true')
      setIsEditorLoggedIn(true)
      setShowLoginForm(false)
      setEmail('')
      setPassword('')
      router.push('/blog/editor')
    } else {
      alert('Invalid credentials. Use admin@blog.com / admin123')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('editor_logged_in')
    setIsEditorLoggedIn(false)
  }

  const filteredPosts = posts
    .filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const featuredPost = filteredPosts[0]
  const regularPosts = filteredPosts.slice(1)

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-background/95">
      {/* Header Section */}
      <section className="relative border-b border-border/40 bg-gradient-to-b from-background/80 to-background/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start justify-between gap-8">
            {/* Title & Description */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                  Insights & Stories
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Discover the latest trends in digital transformation, technology, and innovation
              </p>
            </div>

            {/* Auth Section */}
            {!showLoginForm && (
              <div className="flex gap-2 items-start pt-2">
                {isEditorLoggedIn ? (
                  <>
                    <Button asChild className="gap-2 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all">
                      <Link href="/blog/editor">
                        <PlusCircle className="h-4 w-4" />
                        Create Post
                      </Link>
                    </Button>
                    <Button variant="outline" onClick={handleLogout} className="rounded-full bg-transparent">
                      <LogOut className="h-4 w-4" />
                    </Button>
                  </>
                ) : (
                  <Button onClick={() => setShowLoginForm(true)} className="rounded-full">
                    Editor Sign In
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Search & Login Form */}
          <div className="mt-8 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles, authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border/50 rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>

            {/* Login Form */}
            {showLoginForm && (
              <div className="bg-card border border-border/50 rounded-xl p-6 backdrop-blur-sm">
                <form onSubmit={handleLogin} className="max-w-sm space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@blog.com"
                      className="w-full px-4 py-2.5 border border-border/50 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-4 py-2.5 border border-border/50 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button type="submit" className="flex-1 rounded-lg">
                      Sign In
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setShowLoginForm(false)} className="flex-1 rounded-lg">
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredPosts.length === 0 ? (
          <Card className="p-16 text-center border-border/40 bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              {searchQuery ? 'No articles found' : 'No posts yet'}
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              {searchQuery
                ? 'Try adjusting your search terms'
                : isEditorLoggedIn
                  ? 'Create your first blog post and share your insights!'
                  : 'Check back soon for new content'}
            </p>
            {isEditorLoggedIn && (
              <Button asChild className="rounded-full">
                <Link href="/blog/editor">Create First Post</Link>
              </Button>
            )}
          </Card>
        ) : (
          <div className="space-y-12">
            {/* Featured Post */}
            {featuredPost && (
              <div className="group relative">
                <Link href={`/blog/${featuredPost.id}`} className="block">
                  <div className="relative h-96 md:h-[450px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-border/40 hover:border-border/80 transition-all duration-300 hover:shadow-2xl">
                    <img
                      src={featuredPost.image || '/placeholder.svg'}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="mb-4 inline-block px-4 py-1.5 bg-primary/90 backdrop-blur-sm rounded-full text-sm font-medium">
                        Featured
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight text-balance">{featuredPost.title}</h2>
                      <p className="text-white/80 text-lg mb-4 line-clamp-2">{featuredPost.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-1">
                          <p className="font-semibold">{featuredPost.author}</p>
                          <p className="text-white/60 text-sm">{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                        </div>
                        <div className="text-primary font-bold text-2xl">→</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Regular Posts Grid */}
            {regularPosts.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-8">Latest Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  )
}
