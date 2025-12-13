import CoverImage from "@/app/components/cover-image"
import Avatar from "@/app/components/avatar"
import Date from "@/app/components/date"
import type { Post as PostType } from "@/content/posts"
import { APP_URL } from "@/lib/constants"
import { TikTokEmbed } from "@/app/components/tiktok-embed"
import { ExternalLink } from "@/app/components/external-link"

export function Post({ post }: { post: PostType }) {
  const { title, author, date, coverImage, content, tiktokEmbed } = post

  return (
    <article className="mx-auto max-w-4xl">
      <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
        {title}
      </h1>

      <div className="flex items-center gap-4 mb-8">
        <Avatar name={author.name} url={author.avatar} />
        <div className="text-sm text-muted-foreground">
          <Date dateString={date} />
        </div>
      </div>

      {/* TikTok Embed */}
      {tiktokEmbed ? (
        <div className="mb-10">
          <TikTokEmbed url={tiktokEmbed} />
        </div>
      ) : (
        <div className="mb-10 rounded-lg overflow-hidden">
          <CoverImage title={title} url={coverImage} width={1200} height={600} priority />
        </div>
      )}

      <div
        className="prose prose-lg dark:prose-invert max-w-none hover:prose-a:text-primary prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6 prose-img:rounded-lg prose-img:my-8"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      
      {/* CTA Section */}
      <div className="mt-16 mb-12 p-6 sm:p-8 md:p-10 bg-muted rounded-xl border border-border text-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Ready to boost your productivity?</h3>
        <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
          Customodoro is a powerful and fully customizable Pomodoro timer designed to help students, professionals, and creatives stay focused and productive.
        </p>
        <ExternalLink
          href={APP_URL}
          className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background text-sm sm:text-base font-medium rounded-full hover:bg-primary transition-colors w-full sm:w-auto max-w-sm sm:max-w-none"
        >
          Try Customodoro for Free
          <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </ExternalLink>
      </div>
    </article>
  )
}
