import { ArticleCard } from "./article-card"
import { SectionHeader } from "./section-header"
import type { Post } from "@/content/posts"

export function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <section className="mb-16 sm:mb-20 md:mb-28">
      <SectionHeader>More Stories</SectionHeader>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
        {posts.map((post) => (
          <ArticleCard key={post.id} post={post} variant="preview" />
        ))}
      </div>
    </section>
  )
}
