import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const url = searchParams.get("url")

  if (!url) return NextResponse.json({ error: "missing url" }, { status: 400 })

  try {
    const res = await fetch(url, { headers: { "User-Agent": "Customodoro/1.0 (+https://customodoro.vercel.app)" } })
    if (!res.ok) return NextResponse.json({})
    const html = await res.text()

    // Try to find meta property article:published_time
    const metaMatch = html.match(/property=["']article:published_time["']\s+content=["']([^"']+)["']/i)
    if (metaMatch) {
      const iso = metaMatch[1]
      const date = new Date(iso)
      const dateText = date.toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" })
      // try to also grab og:description if available
      const ogDesc = html.match(/property=["']og:description["']\s+content=["']([^"']+)["']/i)
      const description = ogDesc ? ogDesc[1] : undefined
      return NextResponse.json({ dateISO: iso, dateText, description })
    }

    // Fallback: look for <time datetime="..."> tags
    const timeMatch = html.match(/<time[^>]*datetime=["']([^"']+)["'][^>]*>/i)
    if (timeMatch) {
      const iso = timeMatch[1]
      const date = new Date(iso)
      const dateText = date.toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" })
      const ogDesc = html.match(/property=["']og:description["']\s+content=["']([^"']+)["']/i)
      const description = ogDesc ? ogDesc[1] : undefined
      return NextResponse.json({ dateISO: iso, dateText, description })
    }

    // Try to grab general og:description or meta name="description"
    const ogDesc = html.match(/property=["']og:description["']\s+content=["']([^"']+)["']/i)
    if (ogDesc) {
      const description = ogDesc[1]
      return NextResponse.json({ description })
    }

    const metaDesc = html.match(/name=["']description["']\s+content=["']([^"']+)["']/i)
    if (metaDesc) {
      return NextResponse.json({ description: metaDesc[1] })
    }

    return NextResponse.json({})
  } catch {
    return NextResponse.json({})
  }
}
