import { NextResponse } from 'next/server'

const TTL = 1000 * 60 * 5 // 5 minutes

type CacheEntry = {
  status: number
  body: unknown
  ts: number
}

// Keep a tiny in-memory cache to reduce external requests during dev and low-traffic sites
declare global {
  // allow a small global cache during development
  var __oembed_cache: Map<string, CacheEntry> | undefined
}

globalThis.__oembed_cache = globalThis.__oembed_cache ?? new Map<string, CacheEntry>()
const cache: Map<string, CacheEntry> = globalThis.__oembed_cache!

export async function GET(req: Request) {
  try {
    const url = new URL(req.url).searchParams.get('url')
    if (!url) {
      return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 })
    }

    let parsed: URL
    try {
      parsed = new URL(url)
    } catch {
      return NextResponse.json({ error: 'Invalid url' }, { status: 400 })
    }

    // Only proxy Twitter/X oEmbed for now
    const hostname = parsed.hostname.toLowerCase()
    if (!hostname.includes('twitter.com') && !hostname.includes('x.com')) {
      return NextResponse.json({ error: 'Unsupported host' }, { status: 400 })
    }

    const cacheKey = url
    const now = Date.now()
    const existing = cache.get(cacheKey)
    if (existing && now - existing.ts < TTL) {
      return NextResponse.json(existing.body, { status: existing.status })
    }

    const oembedUrl = `https://publish.twitter.com/oembed?url=${encodeURIComponent(url)}&omit_script=true`
    const res = await fetch(oembedUrl, { headers: { 'User-Agent': 'Customodoro-oembed-proxy/1.0' } })
    const status = res.status
    let body: unknown = null
    try {
      body = await res.json()
    } catch {
      // Non-JSON (unlikely), return text
      const text = await res.text()
      body = { text }
    }

    cache.set(cacheKey, { status, body, ts: now })

    return NextResponse.json(body, { status })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
