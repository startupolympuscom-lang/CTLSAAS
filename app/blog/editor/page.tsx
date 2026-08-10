'use client'

import React from "react"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Heart, Share2, Trash2 } from 'lucide-react'

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

export default function EditorPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [image, setImage] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const [authorProfilePicture, setAuthorProfilePicture] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    const loggedIn = localStorage.getItem('editor_logged_in') === 'true'
    if (!loggedIn) {
      router.push('/blog')
    } else {
      setIsLoggedIn(true)
      fetchPosts()
      const savedImages = localStorage.getItem('editor_images')
      if (savedImages) {
        setUploadedImages(JSON.parse(savedImages))
      }
      const savedProfile = localStorage.getItem('editor_profile_picture')
      if (savedProfile) {
        setAuthorProfilePicture(savedProfile)
      }
    }
  }, [router])

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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onload = (event) => {
        setImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const imageData = event.target?.result as string
        const updatedImages = [...uploadedImages, imageData]
        setUploadedImages(updatedImages)
        localStorage.setItem('editor_images', JSON.stringify(updatedImages))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = (index: number) => {
    const updatedImages = uploadedImages.filter((_, i) => i !== index)
    setUploadedImages(updatedImages)
    localStorage.setItem('editor_images', JSON.stringify(updatedImages))
  }

  const handleUploadProfilePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const imageData = event.target?.result as string
        setAuthorProfilePicture(imageData)
        localStorage.setItem('editor_profile_picture', imageData)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveProfilePicture = () => {
    setAuthorProfilePicture('')
    localStorage.removeItem('editor_profile_picture')
  }

  const handleEditPost = (post: BlogPost) => {
    setEditingId(post.id)
    setTitle(post.title)
    setExcerpt(post.excerpt)
    setContent(post.content)
    setAuthor(post.author)
    setImage(post.image)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setTitle('')
    setExcerpt('')
    setContent('')
    setAuthor('')
    setImage('')
    setImageFile(null)
  }

  const generateShareLinks = (postTitle: string, postExcerpt: string, url: string) => {
    const encodedUrl = encodeURIComponent(url)
    const encodedText = encodeURIComponent(`${postTitle} - ${postExcerpt}`)

    return {
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    }
  }

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title || !excerpt || !content || !author || !image) {
      alert('Please fill in all fields including an image')
      return
    }

    const postData = {
      id: editingId || Date.now().toString(),
      title,
      excerpt,
      content,
      image,
      author,
      authorProfile: authorProfilePicture,
      date: editingId 
        ? posts.find(p => p.id === editingId)?.date || new Date().toISOString().split('T')[0]
        : new Date().toISOString().split('T')[0],
      shareLinks: generateShareLinks(
        title,
        excerpt,
        `${typeof window !== 'undefined' ? window.location.origin : ''}/blog/${editingId || Date.now().toString()}`
      ),
    }

    fetch('/api/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        if (data.error) {
          alert(`Error: ${data.error}`)
          console.error('API error:', data)
          return
        }
        alert(editingId ? 'Post updated successfully!' : 'Post published successfully!')
        fetchPosts()
        setTitle('')
        setExcerpt('')
        setContent('')
        setAuthor('')
        setImage('')
        setImageFile(null)
        setEditingId(null)
      })
      .catch((error) => {
        console.error('Error saving post:', error)
        alert(`Failed to save post: ${error.message}`)
      })
  }

  const handleDelete = (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) {
      return
    }

    fetch(`/api/blog?id=${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => {
        alert('Post deleted successfully!')
        fetchPosts()
      })
      .catch((error) => {
        console.error('Error deleting post:', error)
        alert('Failed to delete post')
      })
  }

  if (!isLoggedIn) {
    return null
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Create Blog Post</h1>
          <p className="text-muted-foreground">Write and publish your content instantly</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Editor Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handlePublish} className="bg-card border border-border rounded-lg p-6 space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">
                  {editingId ? 'Edit Post' : 'Create New Post'}
                </h2>
                {editingId && (
                  <Button type="button" variant="outline" size="sm" onClick={handleCancelEdit}>
                    Cancel
                  </Button>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Post Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter post title"
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Author Name</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Excerpt (Short Description)</label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Brief summary of the post"
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground h-24 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Featured Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-4 py-2 border border-input rounded-md"
                />
                {image && (
                  <div className="mt-3 relative w-full h-40 rounded-md overflow-hidden">
                    <img src={image || "/placeholder.svg"} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Content</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your full content here"
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground h-64 resize-none font-mono text-sm"
                />
              </div>

              <Button type="submit" className="w-full">
                {editingId ? 'Update Post' : 'Publish Post'}
              </Button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Image Gallery */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span>📸</span> Your Image Gallery
              </h3>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Upload Images</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUploadImage}
                  className="w-full px-3 py-2 border border-input rounded-md text-sm"
                />
              </div>

              {uploadedImages.length > 0 ? (
                <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                  {uploadedImages.map((img, index) => (
                    <div key={index} className="relative group rounded-md overflow-hidden border border-border/50">
                      <img src={img || "/placeholder.svg"} alt={`Gallery ${index + 1}`} className="w-full h-24 object-cover" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button
                          type="button"
                          size="sm"
                          variant="ghost"
                          onClick={() => setImage(img)}
                          className="text-white text-xs"
                        >
                          Use
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          variant="ghost"
                          onClick={() => handleRemoveImage(index)}
                          className="text-red-400 text-xs"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No images uploaded yet</p>
              )}
            </div>

            {/* Author Profile Picture */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span>👤</span> Your Profile Picture
              </h3>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Upload Profile Picture</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUploadProfilePicture}
                  className="w-full px-3 py-2 border border-input rounded-md text-sm"
                />
              </div>

              {authorProfilePicture ? (
                <div className="relative group rounded-lg overflow-hidden border border-border/50 w-full">
                  <img 
                    src={authorProfilePicture || "/placeholder.svg"} 
                    alt="Profile" 
                    className="w-full h-48 object-cover" 
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button
                      type="button"
                      size="sm"
                      onClick={handleRemoveProfilePicture}
                      className="text-red-400 hover:text-red-300 bg-black/50 hover:bg-black/70"
                    >
                      Remove Picture
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground text-center py-8 border border-dashed border-border/50 rounded-lg">
                  No profile picture set yet
                </p>
              )}
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span>📝</span> Your Posts
              </h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {posts.length === 0 ? (
                  <p className="text-muted-foreground text-sm">No posts yet</p>
                ) : (
                  posts.map((post) => (
                    <div key={post.id} className={`border border-border/50 rounded-md p-3 transition-all ${editingId === post.id ? 'border-primary bg-primary/5' : 'hover:border-border'}`}>
                      <h4 className="font-semibold text-sm text-foreground truncate">{post.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{post.date} • {post.author}</p>
                      <div className="flex gap-2 mt-3">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEditPost(post)}
                          className="flex-1 text-xs"
                        >
                          ✏️ Edit
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(post.id)}
                          className="flex-1 text-xs text-red-500 hover:text-red-600"
                        >
                          🗑️ Delete
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
