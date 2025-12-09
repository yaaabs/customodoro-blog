/**
 * ============================================
 * CUSTOMODORO BLOG - SITE CONFIGURATION
 * ============================================
 *
 * Edit these values to customize your blog:
 * - BLOG_NAME: Your blog/brand name
 * - BLOG_DESCRIPTION: Short description for SEO
 * - APP_URL: Link to your main app
 * - SOCIAL_LINKS: Your social media URLs
 * - PRESS_ARTICLES: External articles featuring your app
 */

// ============================================
// BASIC SETTINGS
// ============================================
export const BLOG_NAME = "Customodoro Blog"
export const BLOG_DESCRIPTION =
  "Stories behind the app, productivity tips, success stories from board passers, and updates."
export const APP_URL = "https://customodoro.vercel.app"

// ============================================
// SOCIAL MEDIA LINKS
// Set to empty string "" to hide a social link
// ============================================
export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/customodoro",
  linkedin: "https://linkedin.com/company/customodoro",
  tiktok: "https://www.tiktok.com/@wtvrclari/photo/7524766513920773384",
  github: "https://github.com/yaaabs/customodoro",
  reddit: "https://www.reddit.com/r/ProductivityApps/comments/1mq7mao/i_broke_up_with_pomodoro_technique_reverse/",
}

// ============================================
// PRESS & MEDIA COVERAGE
// Add articles that feature your app
// ============================================
export const PRESS_ARTICLES = [
  {
    publication: "MakeUseOf",
    title: "I found this productivity hack on Reddit and it actually works",
    url: "https://www.makeuseof.com/reverse-pomodoro-method/",
    date: "2025-09-01",
    author: "Mahnoor Faisal",
  },
  {
    publication: "Make Tech Easier",
    title: "Forget Pomodoro! Flowmodoro is the Real Productivity Hack",
    url: "https://www.maketecheasier.com/flowmodoro-productivity-hack/",
    date: "2025-09-04",
    author: "Karrar Haider",
  },
  {
    publication: "Product Hunt",
    title: "I recently gave Customodoro Timer a try, and honestly, it's one of the best Pomodoro tools I've used so far. What I love most is how much you can make it your own—you can adjust everything from work sessions and break times to themes, sounds, background music, and even images...",
    url: "https://producthunt.com/posts/customodoro",
    date: "2024-03-10",
    author: "Kanza Mushtaq",
  },
]
