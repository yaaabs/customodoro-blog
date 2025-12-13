import { APP_URL } from "@/lib/constants"
import { SocialLinks } from "./social-links"
import { ExternalLink } from "./external-link"

export function Intro() {
  return (
    <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20">
      <div className="flex flex-col gap-6 sm:gap-8">
        {/* Top bar - label and social */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-primary">
            Stories & Updates
          </span>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground hidden sm:inline">Follow. Connect. Interact.</span>
            <SocialLinks iconSize="sm" />
          </div>
        </div>

        {/* Main heading - responsive typography */}
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] text-balance group cursor-default">
            <span className="text-foreground group-hover:text-primary transition-colors">Customodoro</span>
            <span className="text-primary group-hover:text-foreground transition-colors"> Blog</span>
            <span className="text-foreground group-hover:text-primary transition-colors">.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Behind the app. Updates. Articles.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed">
            The customizable Pomodoro timer built for focused productivity.
          </p>
        </div>

        {/* CTA button */}
        <div className="pt-2">
          <ExternalLink
            href={APP_URL}
            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-foreground text-background text-sm sm:text-base font-medium rounded-full hover:bg-primary transition-colors"
          >
            Try the App
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </ExternalLink>
        </div>
      </div>

      {/* Section divider */}
      <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-border">
        <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">Latest Story</span>
      </div>
    </section>
  )
}
