import { PRESS_ARTICLES } from "@/lib/constants"
import Image from "next/image"

export function PressSection() {
  if (!PRESS_ARTICLES || PRESS_ARTICLES.length === 0) return null

  const getPublicationLogo = (publication: string) => {
    switch (publication) {
      case "MakeUseOf":
        return "/mahnoor.png"
      case "Make Tech Easier":
        return "/karrar.png"
      case "Product Hunt":
        return "/product-hunt-logo-icon.webp"
      default:
        return null
    }
  }

  return (
    <section className="py-12 sm:py-16 border-t border-border">
      <div className="mb-8 sm:mb-10">
        <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">In The Press</span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2">What others are saying</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {PRESS_ARTICLES.map((article) => {
          const logoSrc = getPublicationLogo(article.publication)
          
          return (
            <a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-4 sm:p-6 bg-secondary/50 rounded-lg border border-border hover:border-primary/30 hover:bg-secondary transition-all"
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background flex items-center justify-center text-xs font-bold text-muted-foreground border border-border flex-shrink-0 overflow-hidden">
                  {logoSrc ? (
                    <Image
                      src={logoSrc}
                      alt={article.publication}
                      width={40}
                      height={40}
                      sizes="40px"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    article.publication.charAt(0)
                  )}
                </div>
                <div className="min-w-0">
                  {article.author && (
                    <p className="font-medium text-sm truncate">{article.author}</p>
                  )}
                  <p className="text-xs text-muted-foreground">{article.publication}</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-foreground font-medium leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-2">
                {article.title}
              </p>
              <div className="mt-3 sm:mt-4 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <span>{article.publication === "Product Hunt" ? "Read review" : "Read article"}</span>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
