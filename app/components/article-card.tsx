import Link from "next/link"
import Date from "./date"
import CoverImage from "./cover-image"
import Avatar from "./avatar"
import type { Post } from "@/content/posts"
import { readingTimeFromHtml } from "@/lib/utils"

interface ArticleCardProps {
  post: Post
  variant?: "hero" | "preview"
  priority?: boolean
}

export function ArticleCard({ post, variant = "preview", priority = false }: ArticleCardProps) {
  const { title, coverImage, date, excerpt, author, slug, content } = post

  if (variant === "hero") {
    const minutes = readingTimeFromHtml(content)
    return (
      <section className="mb-16 sm:mb-20 md:mb-24">
        <div className="mb-6 sm:mb-8 rounded-xl overflow-hidden">
          <CoverImage
            title={title}
            slug={slug}
            url={coverImage}
            width={1200}
            height={600}
            className="aspect-[16/9] sm:aspect-[2/1] hover:scale-105 transition-transform duration-500"
            priority={priority}
          />
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-x-12 lg:gap-x-16">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3 sm:mb-4">
              <Link href={`/posts/${slug}`} className="hover:text-primary transition-colors">
                {title}
              </Link>
            </h2>
            <div className="text-sm text-muted-foreground mb-4 md:mb-0 flex items-center gap-2">
              <Date dateString={date} />
              <span aria-hidden className="opacity-50">•</span>
              <span>{minutes} min read</span>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">{excerpt}</p>
            <div className="flex items-center justify-between">
              <Avatar name={author.name} url={author.avatar} />
              <Link
                href={`/posts/${slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <article className="group flex flex-col h-full">
      <div className="mb-4">
        <CoverImage title={title} slug={slug} url={coverImage} width={700} height={500} className="aspect-[4/3]" />
      </div>

      <div className="space-y-3 flex-1">
        <h3 className="text-xl sm:text-2xl font-semibold leading-snug min-h-[3.2rem] sm:min-h-[4.2rem]">
          <Link href={`/posts/${slug}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </h3>

        <div className="text-sm text-muted-foreground flex items-center gap-2">
          <Date dateString={date} />
          <span aria-hidden className="opacity-50">•</span>
          <span>{readingTimeFromHtml(content)} min read</span>
        </div>

        <p className="text-base text-muted-foreground leading-relaxed line-clamp-2">{excerpt}</p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar name={author.name} url={author.avatar} size="sm" />
        </div>
        <Link
          href={`/posts/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors"
        >
          Read More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
