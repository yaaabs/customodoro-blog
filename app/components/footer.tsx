import Link from "next/link"
import { BLOG_NAME, APP_URL, SOCIAL_LINKS } from "@/lib/constants"
import { SocialLinks } from "./social-links"
import { ExternalLink } from "./external-link"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 sm:py-14 md:py-16">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-8">
            {/* Brand - full width on mobile */}
            <div className="col-span-2 sm:col-span-2 md:col-span-5">
              <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tight">
                <span className="text-foreground">Customodoro</span>
                <span className="text-primary"> Blog</span>
              </Link>
              <p className="mt-2 sm:mt-3 text-sm text-muted-foreground max-w-sm">
                The ultimate customizable Pomodoro timer for focused productivity.
              </p>
              <div className="mt-4 sm:mt-6">
                <SocialLinks iconSize="md" />
              </div>
            </div>

            {/* Links */}
            <div className="col-span-1 md:col-span-3">
              <h4 className="font-medium text-sm mb-3 sm:mb-4">Upvote</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm text-muted-foreground">
                <li>
                  <ExternalLink
                    href="https://www.producthunt.com/products/customodoro-timer"
                    className="hover:text-foreground transition-colors"
                  >
                    Product Hunt
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink
                    href="https://www.superlaun.ch/products/401"
                    className="hover:text-foreground transition-colors"
                  >
                    Super Launch
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink
                    href="https://philippineunicorns.com/project/customodoro-timer"
                    className="hover:text-foreground transition-colors"
                  >
                    Philippine Unicorns
                  </ExternalLink>
                </li>
              </ul>
            </div>

            {/* Connect links */}
            <div className="col-span-1 md:col-span-2">
              <h4 className="font-medium text-sm mb-3 sm:mb-4">Connect</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm text-muted-foreground">
                <li>
                  <ExternalLink
                    href={SOCIAL_LINKS.twitter}
                    className="hover:text-foreground transition-colors"
                  >
                    X (Twitter)
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink
                    href={SOCIAL_LINKS.linkedin}
                    className="hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink
                    href={SOCIAL_LINKS.github}
                    className="hover:text-foreground transition-colors"
                  >
                    GitHub
                  </ExternalLink>
                </li>
              </ul>
            </div>

            {/* CTA - hidden on smallest mobile */}
            <div className="col-span-2 sm:col-span-2 md:col-span-2 flex flex-col sm:items-start">
              <h4 className="font-medium text-sm mb-3 sm:mb-4">Get Started</h4>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors w-fit"
              >
                Try for Free
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {new Date().getFullYear()} {BLOG_NAME}. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Handcrafted by{" "}
              <ExternalLink
                href="https://yabutech.vercel.app"
                className="font-bold text-muted-foreground hover:text-foreground transition-colors"
              >
                YabuTech
              </ExternalLink>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
