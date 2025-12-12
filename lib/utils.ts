import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Estimate reading time (minutes) from an HTML string.
 * Strips HTML tags and counts words, using a default WPM of 200.
 */
export function readingTimeFromHtml(html: string, wordsPerMinute = 200) {
  if (!html) return 0
  const text = html.replace(/<[^>]+>/g, " ").replace(/&nbsp;|&amp;|&quot;|&lt;|&gt;/g, " ")
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / wordsPerMinute))
}
