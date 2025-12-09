import Link from "next/link"
import Image from "next/image"
import { clsx } from "clsx"

export default function CoverImage({
  title,
  url,
  slug,
  width,
  height,
  priority,
  className,
}: {
  title: string
  url: string
  slug?: string
  width: number
  height: number
  priority?: boolean
  className?: string
}) {
  const blurDataURL = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title} className="block relative group overflow-hidden rounded-lg">
          <Image
            alt={`Cover Image for ${title}`}
            width={width}
            height={height}
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            placeholder="blur"
            blurDataURL={blurDataURL}
            className={clsx("shadow-sm rounded-lg object-cover w-full", className)}
            src={url || "/placeholder.svg"}
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              Read Article
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </Link>
      ) : (
        <Image
          alt={`Cover Image for ${title}`}
          width={width}
          height={height}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          placeholder="blur"
          blurDataURL={blurDataURL}
          className={clsx("shadow-sm rounded-lg object-cover", className)}
          src={url || "/placeholder.svg"}
        />
      )}
    </div>
  )
}
