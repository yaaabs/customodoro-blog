import Link from "next/link"
import Avatar from "./avatar"
import Date from "./date"
import CoverImage from "./cover-image"
import type { Post } from "@/content/posts"

export function PostPreview({ post }: { post: Post }) {
  const { title, coverImage, date, excerpt, author, slug } = post

  return (
    <article className="group">
      <div className="mb-4">
        <CoverImage title={title} slug={slug} url={coverImage} width={700} height={500} className="aspect-[4/3]" />
      </div>

      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-semibold leading-snug">
          <Link href={`/posts/${slug}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </h3>

        <div className="text-sm text-muted-foreground">
          <Date dateString={date} />
        </div>

        <p className="text-base text-muted-foreground leading-relaxed line-clamp-2">{excerpt}</p>

        <Avatar name={author.name} url={author.avatar} size="sm" />
      </div>
    </article>
  )
}
