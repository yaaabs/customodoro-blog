import type React from "react"
import Footer from "./components/footer"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { DEFAULT_METADATA } from "./components/seo"
import Schema from "./components/schema"
import { BLOG_NAME, BLOG_DESCRIPTION, APP_URL } from "@/lib/constants"

export const metadata = {
  ...DEFAULT_METADATA,
  generator: "v0.dev",
}

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: BLOG_NAME,
  description: BLOG_DESCRIPTION,
  url: APP_URL,
  publisher: {
    "@type": "Organization",
    name: BLOG_NAME,
    logo: { "@type": "ImageObject", url: `${APP_URL}/logo.png` },
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Schema data={blogSchema} />
          <main className="min-h-screen">
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
