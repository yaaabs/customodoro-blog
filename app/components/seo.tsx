import { BLOG_NAME, BLOG_DESCRIPTION, APP_URL } from "@/lib/constants"

/**
 * Default metadata object suitable for Next.js App Router `metadata` export
 */
export const DEFAULT_METADATA = {
  title: BLOG_NAME,
  description: BLOG_DESCRIPTION,
  metadataBase: new URL(APP_URL),
  openGraph: {
    title: BLOG_NAME,
    description: BLOG_DESCRIPTION,
    url: APP_URL,
    siteName: BLOG_NAME,
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: BLOG_NAME,
    description: BLOG_DESCRIPTION,
    images: ["/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.png",
  },
}

export type SEOProps = {
  title?: string
  description?: string
  canonical?: string
  image?: string
  publishedTime?: string
  author?: string
}

/**
 * Small schema helper to create BlogPosting JSON-LD in a post page.
 * This file intentionally does NOT render anything by default — prefer using
 * the `Schema` component for rendering JSON-LD in page components.
 */
export function buildArticleSchema({
  headline,
  description,
  image,
  author,
  datePublished,
  dateModified,
  url,
}: {
  headline: string
  description: string
  image?: string
  author: string
  datePublished: string
  dateModified?: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    image: image || `${APP_URL}/og-image.jpg`,
    author: { "@type": "Person", name: author },
    publisher: {
      "@type": "Organization",
      name: BLOG_NAME,
      logo: { "@type": "ImageObject", url: `${APP_URL}/logo.png` },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  }
}

export default function SEO() {
  // No client-side meta injection for App Router needed — metadata API is preferred.
  return null
}
