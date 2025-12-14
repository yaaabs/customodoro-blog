"use client"

import { useEffect, useState } from "react"
import { SOCIAL_UPDATES } from "@/lib/constants"

type Update = {
  id: string
  platform: string
  url?: string
  date?: string
}

function SkeletonCard() {
  return (
    <div className="group block p-4 sm:p-6 bg-secondary/50 rounded-lg border border-border animate-pulse h-40" />
  )
}

type Item = Update & { loading?: boolean; failed?: boolean; author?: string; handle?: string; contentHtml?: string; dateText?: string; date?: string }

export default function SocialUpdates() {
  const [items, setItems] = useState<Item[]>(
    SOCIAL_UPDATES.map((s: Update) => ({ ...s, loading: true })) as Item[]
  )

  useEffect(() => {
    let mounted = true

    const fetchOEmbed = async (url: string) => {
      try {
        const canonical = url.replace(/^https?:\/\/(www\.)?x\.com/i, "https://twitter.com").split("?")[0]
        const res = await fetch(`/api/oembed?url=${encodeURIComponent(canonical)}`)
        if (!res.ok) throw new Error("oembed failed")
        const data = await res.json()
        // parse html for content HTML and date
        let contentHtml = ""
        let dateText: string | undefined
        try {
          const parser = new DOMParser()
          const doc = parser.parseFromString(data.html || "", "text/html")
          const p = doc.querySelector("p")
          if (p) {
            // preserve inner HTML so links and line breaks remain
            contentHtml = p.innerHTML || p.textContent || ""
          } else {
            contentHtml = data.html || ""
          }

          // find an anchor inside blockquote that looks like a date (contains a dot '·' or time), prefer anchors whose href includes 'status'
          const anchors = Array.from(doc.querySelectorAll("blockquote a")) as HTMLAnchorElement[]
          const statusAnchor = anchors.find((a) => /status\/.+/.test(a.getAttribute("href") || ""))
          const dateLikeAnchor = anchors.find((a) => /\d{1,2}:\d{2}\s*[AP]M|·|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec/i.test(a.textContent || ""))
          const anchor = statusAnchor || dateLikeAnchor || anchors[anchors.length - 1]
          if (anchor) {
            const txt = anchor.textContent || anchor.getAttribute("title") || undefined
            // ignore anchors that are just URLs or t.co short links
            if (txt && !/https?:\/\//i.test(txt) && !/t\.co/i.test(txt)) {
              dateText = txt
            }
          }
        } catch {
          contentHtml = data.html || ""
        }
        return { author: data.author_name || undefined, authorUrl: data.author_url || undefined, contentHtml, dateText }
      } catch {
        return null
      }
    }

    ;(async () => {
      const updated = await Promise.all(
        SOCIAL_UPDATES.map(async (s: Update) => {
          if (s.platform !== "x" || !s.url) return { ...s, loading: false, failed: true }
          let preview = await fetchOEmbed(s.url)
          // if no dateText, try server-side fetch to get published_time
          if (preview && !preview.dateText) {
            try {
              const api = await fetch(`/api/tweet-info?url=${encodeURIComponent(s.url || "")}`)
              if (api.ok) {
                const apiData = await api.json()
                if (apiData && apiData.dateText) preview.dateText = apiData.dateText
              }
            } catch {}
          }

          if (!mounted) return s
          if (!preview) {
            // try to fetch a lightweight fallback (date/description) from server-side scraper
            try {
              const api = await fetch(`/api/tweet-info?url=${encodeURIComponent(s.url || "")}`)
              if (api.ok) {
                const apiData = await api.json()
                if (apiData && (apiData.description || apiData.dateText)) {
                  const esc = (str: string) => str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                  const contentHtml = apiData.description ? `<p>${esc(apiData.description).replace(/\n/g, '<br/>')}</p>` : undefined
                  return { ...s, loading: false, failed: false, contentHtml, dateText: apiData.dateText }
                }
              }
            } catch {}
            return { ...s, loading: false, failed: true }
          }
          // derive handle from authorUrl if available
          const handle = preview.authorUrl ? `@${preview.authorUrl.replace(/https?:\/\//, "").split("/").filter(Boolean).pop()}` : undefined
          return { ...s, loading: false, failed: false, author: preview.author, contentHtml: preview.contentHtml, dateText: preview.dateText, date: s.date, // manual override if provided
            // store handle for rendering
            handle }
        })
      )
      if (mounted) setItems(updated as Item[])
    })()

    return () => {
      mounted = false
    }
  }, [])

  // Only show 'x' updates for now; grid 2 columns on sm+
  const visible = items.filter((i) => i.platform === "x")
  const [expanded, setExpanded] = useState(false)
  const DISPLAY_LIMIT = 4
  const displayed = expanded ? visible : visible.slice(0, DISPLAY_LIMIT)

  return (
    <section className="py-12 sm:py-16">
      <div className="mb-6">
        <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">Follow Customodoro Updates</span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2">Recent Social Posts</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {visible.length === 0 && Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)}

        {displayed.map((item) => (
          <div
            key={item.id}
            role="link"
            tabIndex={0}
            onClick={() => item.url && window.open(item.url, '_blank', 'noopener')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { item.url && window.open(item.url, '_blank', 'noopener') } }}
            className="group block p-4 sm:p-6 bg-secondary/50 rounded-lg border border-border hover:border-primary/30 transition-all"
          >
            <div className="mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-sm text-white">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium leading-snug">{item.author || (item.loading ? "Loading…" : "@X")}</div>
                  <div className="text-xs text-muted-foreground">{item.handle && <span className="mr-2">{item.handle}</span>}<span>{item.date || item.dateText || (item.loading ? "" : "")}</span></div>
                </div>
              </div>
            </div>

            <div className="text-sm text-foreground leading-relaxed">
              {item.loading && <div className="text-sm text-muted-foreground">Loading content…</div>}
              {item.failed && <div className="text-sm text-muted-foreground">Could not load preview — view on X</div>}
              {!item.loading && !item.failed && item.contentHtml && (
                <div
                  className="prose dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: item.contentHtml }}
                />
              )}
            </div>

            <div className="mt-4 text-xs text-muted-foreground flex items-center justify-between">
              <span>{item.date || item.dateText || ""}</span>
              <button type="button" onClick={() => window.open(item.url, '_blank', 'noopener')} className="text-primary underline" aria-label={`View on X: ${item.url}`}>
                View on X
              </button>
            </div>
          </div>
        ))}
      </div>

      {visible.length > DISPLAY_LIMIT && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="px-4 py-2 rounded bg-muted-foreground/5 hover:bg-muted-foreground/10 transition"
          >
            {expanded ? "Show less" : `View more (${visible.length - DISPLAY_LIMIT} more)`}
          </button>
        </div>
      )}
    </section>
  )
}
