import { Intro } from "./components/intro"
import { ArticleCard } from "./components/article-card"
import { MoreStories } from "./components/more-stories"
import SocialUpdates from "./components/social-updates"
import { PressSection } from "./components/press-section"
import type { Metadata } from "next"
import { getAllPosts } from "@/content/posts"

export const metadata: Metadata = {
  title: "Customodoro Blog - Stories, Tips & Updates",
  description:
    "The official Customodoro blog featuring stories behind building the app, productivity tips, success stories from users, and the latest updates.",
  generator: "v0.dev",
  openGraph: {
    title: "Customodoro Blog - Stories, Tips & Updates",
    description:
      "The official Customodoro blog featuring stories behind building the app, productivity tips, success stories from users, and the latest updates.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customodoro Blog - Stories, Tips & Updates",
    description:
      "The official Customodoro blog featuring stories behind building the app, productivity tips, success stories from users, and the latest updates.",
  },
}

export default function Page() {
  const posts = getAllPosts()
  const heroPost = posts[0]
  const morePosts = posts.slice(1)

  return (
    <main>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Intro />
        {heroPost && <ArticleCard post={heroPost} variant="hero" priority />}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        <SocialUpdates />
        <PressSection />
      </section>
    </main>
  )
}
