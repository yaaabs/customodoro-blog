"use client"

import { useEffect, useRef, useState } from "react"

interface TikTokEmbedProps {
  url: string
  className?: string
}

export function TikTokEmbed({ url, className = "" }: TikTokEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Extract video/photo ID from TikTok URL
  const getVideoId = (url: string) => {
    const videoMatch = url.match(/video\/(\d+)/)
    const photoMatch = url.match(/photo\/(\d+)/)
    return videoMatch ? videoMatch[1] : photoMatch ? photoMatch[1] : null
  }

  const videoId = getVideoId(url)

  useEffect(() => {
    // Lazy load with IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: "50px" }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    // Load TikTok embed script only when visible
    const script = document.createElement("script")
    script.src = "https://www.tiktok.com/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [isVisible])

  if (!videoId) {
    return (
      <div className={`p-6 bg-secondary rounded-lg text-center ${className}`}>
        <p className="text-muted-foreground">Invalid TikTok URL</p>
      </div>
    )
  }

  return (
    <div className={`flex justify-center ${className}`} ref={containerRef}>
      {!isVisible ? (
        <div
          className="bg-secondary rounded-lg animate-pulse"
          style={{ width: "605px", height: "800px", maxWidth: "100%" }}
        >
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">Loading TikTok...</p>
          </div>
        </div>
      ) : (
        <blockquote
          className="tiktok-embed"
          cite={url}
          data-video-id={videoId}
          style={{ maxWidth: "605px", minWidth: "325px" }}
        >
          <section>
            <a target="_blank" href={url} rel="noopener noreferrer">
              Loading TikTok...
            </a>
          </section>
        </blockquote>
      )}
    </div>
  )
}
