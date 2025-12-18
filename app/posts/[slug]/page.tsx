import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Post } from "@/app/components/post"
import { MoreStories } from "@/app/components/more-stories"
import { getAllPosts, getPostBySlug, getMorePosts } from "@/content/posts"
import { BLOG_NAME, APP_URL } from "@/lib/constants"
import Schema from "@/app/components/schema"
import { buildArticleSchema } from "@/app/components/seo"

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

type PageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return {
    title: `${post.title} | ${BLOG_NAME}`,
    description: post.excerpt,
    alternates: { canonical: `${APP_URL}/posts/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${APP_URL}/posts/${post.slug}`,
      images: post.coverImage ? [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const morePosts = getMorePosts(slug)

  return (
    <main>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-6 sm:mt-8 mb-8 sm:mb-12 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors group"
          >
            <svg 
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <Link href="/" className="text-lg sm:text-xl font-bold transition-colors group">
            <span className="text-foreground group-hover:text-primary transition-colors">Customodoro</span>
            <span className="text-primary group-hover:text-foreground transition-colors"> Blog</span>
            <span className="text-foreground group-hover:text-primary transition-colors">.</span>
          </Link>
        </div>
        <Post post={post} />
        <Schema data={buildArticleSchema({
          headline: post.title,
          description: post.excerpt,
          image: post.coverImage,
          author: post.author.name,
          datePublished: post.date,
          dateModified: post.date,
          url: `${APP_URL}/posts/${post.slug}`,
        })} />
        {morePosts.length > 0 && (
          <>
            <hr className="mt-16 sm:mt-20 md:mt-24 mb-12 sm:mb-16 border-border" />
            <div className="mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">Related Articles</h3>
              <p className="text-muted-foreground text-base">Explore more insights and stories from our blog</p>
            </div>
            <MoreStories posts={morePosts} />
          </>
        )}
      </section>
    </main>
  )
}
