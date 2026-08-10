'use client'

import { Button } from '@/components/ui/button'
import { Share2, Twitter, Facebook, Linkedin, MessageCircle, Copy, Check } from 'lucide-react'
import { useState } from 'react'

interface SocialShareProps {
  title: string
  excerpt: string
  image: string
  url: string
  author: string
}

export function SocialShare({ title, excerpt, image, url, author }: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(`${title} by ${author}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title}\n${excerpt}\n${url}`)}`,
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: excerpt,
          url,
        })
      } catch (err) {
        console.error('Error sharing:', err)
      }
    }
  }

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-800/30 rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center">
          <Share2 className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-foreground">Share This Article</h3>
          <p className="text-sm text-muted-foreground">Spread the word on social media</p>
        </div>
      </div>

      {/* Featured Image Preview */}
      {image && (
        <div className="mb-6 rounded-xl overflow-hidden border border-yellow-200 dark:border-yellow-800/30">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-32 md:h-40 object-cover" />
        </div>
      )}

      {/* Share Buttons Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        {/* Twitter */}
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white dark:bg-background border border-yellow-200 dark:border-yellow-800/30 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all group"
        >
          <Twitter className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-semibold text-foreground">Twitter</span>
        </a>

        {/* Facebook */}
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white dark:bg-background border border-yellow-200 dark:border-yellow-800/30 hover:border-blue-600 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all group"
        >
          <Facebook className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-semibold text-foreground">Facebook</span>
        </a>

        {/* LinkedIn */}
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white dark:bg-background border border-yellow-200 dark:border-yellow-800/30 hover:border-blue-700 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all group"
        >
          <Linkedin className="h-5 w-5 text-blue-700 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-semibold text-foreground">LinkedIn</span>
        </a>

        {/* WhatsApp */}
        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white dark:bg-background border border-yellow-200 dark:border-yellow-800/30 hover:border-green-500 dark:hover:border-green-600 hover:bg-green-50 dark:hover:bg-green-900/10 transition-all group"
        >
          <MessageCircle className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-semibold text-foreground">WhatsApp</span>
        </a>
      </div>

      {/* Copy Link & Native Share */}
      <div className="flex gap-3">
        <Button
          onClick={handleCopyLink}
          variant="outline"
          className="flex-1 gap-2 border-yellow-200 dark:border-yellow-800/30 hover:border-yellow-400 rounded-xl bg-transparent"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? 'Copied!' : 'Copy Link'}
        </Button>

        {navigator.share && (
          <Button
            onClick={handleNativeShare}
            className="flex-1 gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-semibold"
          >
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        )}
      </div>

      {/* Share Preview */}
      <div className="mt-6 pt-6 border-t border-yellow-200 dark:border-yellow-800/30">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Preview</p>
        <div className="bg-white dark:bg-background rounded-lg border border-yellow-200 dark:border-yellow-800/30 p-4 space-y-3">
          {image && (
            <div className="rounded-lg overflow-hidden border border-yellow-200 dark:border-yellow-800/30">
              <img src={image || "/placeholder.svg"} alt={title} className="w-full h-24 object-cover" />
            </div>
          )}
          <div>
            <h4 className="font-bold text-sm text-foreground line-clamp-2">{title}</h4>
            <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{excerpt}</p>
            <p className="text-xs text-yellow-600 dark:text-yellow-500 font-semibold mt-2">CTL Solution</p>
          </div>
        </div>
      </div>
    </div>
  )
}
