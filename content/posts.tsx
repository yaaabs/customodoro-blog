/**
 * ============================================
 * CUSTOMODORO BLOG - POSTS DATA
 * ============================================
 *
 * HOW TO ADD A NEW POST:
 * 1. Add a new object to the `posts` array below
 * 2. Follow the existing format (copy an existing post as template)
 * 3. Use a unique `id` (increment the last one)
 * 4. Use a unique `slug` (URL-friendly, lowercase, hyphens)
 * 5. Place images in /public folder and reference as "/your-image.jpg"
 *
 * POST STRUCTURE:
 * - id: Unique number identifier
 * - title: Post headline
 * - slug: URL path (e.g., "my-post" becomes /posts/my-post)
 * - excerpt: Short description (shown in previews)
 * - coverImage: Path to cover image in /public folder
 * - date: Publication date (YYYY-MM-DD format)
 * - author: { name, avatar } - Author info
 * - content: HTML string for the full post body
 * - tiktokEmbed: (optional) TikTok video URL to embed
 *
 * ============================================
 */

export type Post = {
  id: number
  title: string
  slug: string
  excerpt: string
  coverImage: string
  date: string
  author: {
    name: string
    avatar: string
  }
  content: string
  tiktokEmbed?: string
}

// ============================================
// YOUR BLOG POSTS
// Add, edit, or remove posts here
// ============================================
const posts: Post[] = [
  {
    id: 1,
    title: "From \"Can you build me a timer?\" to a licensed pharmacist.",
    slug: "from-timer-request-to-licensed-pharmacist",
    excerpt:
      "How a simple question from someone studying for board exams turned into a productivity tool used by thousands. The real story behind Customodoro.",
    coverImage: "/cla.png",
    date: "2025-11-23",
    author: {
      name: "Brian Yabut",
      avatar: "/yabs.JPG",
    },
    content: `
      <p>"Can you build me a timer?"</p>
      
      <p>That simple question changed everything. It came from someone preparing for the Pharmacist Licensure Exam who had tried every Pomodoro app available and found herself frustrated by the rigid 25-minute work, 5-minute break structure that every app offered.</p>
      
      <h2>The Problem with Existing Apps</h2>
      <p>Most Pomodoro timers force users into a single workflow: 25 minutes of work followed by 5 minutes of break. No exceptions. No flexibility. But focus doesn't work the same way for everyone, especially not for someone studying for one of the most challenging professional examinations in the Philippines.</p>
      
      <p>"The regular Pomodoro timer doesn't work for me," she said. Her concern was valid.</p>
      
      <p>Some study sessions require longer focus blocks to fully absorb complex material. On productive days, interruptions can break concentration and momentum. On challenging days, shorter work intervals help build consistency without causing burnout.</p>
      
      <h2>Building a Custom Solution</h2>
      <p>I designed and developed Customodoro with a Reverse Pomodoro Timer specifically for her study needs. Instead of counting down with the pressure of a ticking clock, this mode counts up, allowing users to focus for as long as needed without the stress of an approaching alarm.</p>
      
      <img src="/bfc.jpg" alt="Building for Clarissa" style="width: 100%; max-width: 800px; margin: 2rem auto; display: block; border-radius: 8px;" />
      
      <p>After she started using Customodoro, she shared it with her study groups and online communities. Within weeks, we had users from different fields: students preparing for board exams, professionals managing tight deadlines, and individuals working on personal projects.</p>
      
      <p>What started as a solution for one person became a tool that resonated with thousands.</p>
      
      <h2>The First Success Story</h2>
      
      <img src="/cla-rph.png" alt="From building a timer to celebrating a licensed pharmacist - Clarissa Mhae C. Pascual, RPh" style="width: 100%; max-width: 800px; margin: 2rem auto; display: block; border-radius: 8px;" />
      
      <p>The person who inspired Customodoro, our first user and the reason this app exists, is now <strong>Clarissa Mhae C. Pascual, RPh.</strong></p>
      
      <p>She successfully passed the November 2025 Pharmacist Licensure Examination. Official. Licensed. Successful.</p>
      
      <p>This achievement represents exactly what Customodoro was created for: supporting people through their most important challenges and celebrating their victories.</p>
      
      <h2>Looking Forward</h2>
      <p>To all board exam passers and professionals using Customodoro: your success stories continue to drive this project forward. Every feature update and improvement is designed with your needs in mind.</p>
      
      <p>Congratulations to all November 2025 board passers. Your dedication and hard work have paid off, and we are honored that Customodoro played a part in some of your journeys.</p>
      
      <p>This is only the beginning. More updates and improvements are on the way.</p>
    `,
  },
  {
    id: 2,
    title: "I broke up with Pomodoro Technique. Reverse Pomodoro Timer's my rebound!",
    slug: "i-broke-up-with-pomodoro",
    excerpt:
      "Classic Pomodoro and I were together for years — the usual 25 minutes of work, 5 minutes of break routine. At first it was cute, but then it started interrupting me right when I was finally focused. Total buzzkill.",
    coverImage: "/ck2.jpg",
    date: "2025-08-15",
    author: {
      name: "Own-Procedure5104",
      avatar: "/reddit.png",
    },
    content: `
      <p>Classic Pomodoro and I were together for years — the usual 25 minutes of work, 5 minutes of break routine on every pomodoro timer. At first it was cute, but then it started interrupting me right when I was finally focused. Total buzzkill.</p>
      
      <p>Last month, I found this thing called Reverse Pomodoro on Customodoro Timer (<a href="https://customodoro.vercel.app/" target="_blank" rel="noopener noreferrer">https://customodoro.vercel.app/</a>). Instead of telling me when to stop, it just lets me work as long as I want and rewards me with a break based on how long I stayed in the zone.</p>
      
      <h2>Example:</h2>
      <ul>
        <li>20 mins → 2 min break</li>
        <li>45 mins → 10 min break</li>
        <li>60 mins → 30 min break</li>
      </ul>
      
      <p>Plus, you can customize almost everything — work/break lengths, themes, even track your productivity like a GitHub contribution graph.</p>
      
      <p>Feels way more natural than the rigid timer, and my productivity hasn't tanked once.</p>
      
      <p><strong>Anyone else ditched classic Pomodoro for something more flexible?</strong></p>
      
      <p><em>Originally shared on <a href="https://www.reddit.com/r/ProductivityApps/" target="_blank" rel="noopener noreferrer">r/ProductivityApps</a></em></p>
    `,
  },
  {
    id: 3,
    title: "How a Midnight TikTok Post Changed Everything",
    slug: "midnight-tiktok-post-changed-everything",
    excerpt: "On a random Wednesday at midnight, my girlfriend asked if she could post about me on TikTok. I said yes. We had no idea what would happen next.",
    coverImage: "/tt.png",
    date: "2025-07-09",
    author: {
      name: "Brian Yabut",
      avatar: "/yabs.JPG",
    },
    tiktokEmbed: "https://www.tiktok.com/@wtvrclari/photo/7524766513920773384",
    content: `
      <h2>The Unexpected Wednesday</h2>
      <p>It was a random Wednesday at midnight. I was working on Customodoro, still in development, when my girlfriend asked me a question: "Can I post about you on TikTok? Just to show appreciation for creating this timer for me?"</p>
      
      <p>Of course I said yes. After all, Customodoro was built for her — a personalized solution to help with her board exam preparations. I quickly pushed a footer update I was working on and went back to development mode.</p>
      
      <p>She posted it. We didn't think much of it.</p>
      
      <h2>The Perfect Storm</h2>
      <p>What happened next caught us completely off guard. The post went viral. Not just viral — it resonated with people in ways we never imagined.</p>
      
      <p>Multiple factors aligned perfectly:</p>
      <ul>
        <li>Students and reviewees discovered they needed exactly what Customodoro offered — a flexible, customizable Pomodoro timer</li>
        <li>My girlfriend's creative twist on the "Man of the Year" trend</li>
        <li>The genuine story behind our relationship and how the app came to be</li>
        <li>People relating to the concept (with some playfully bitter but positive comments about relationship goals)</li>
      </ul>
      
      <p>All the elements for engagement were there. But more importantly, people found something they actually needed.</p>
      
      <h2>5 AM Decision</h2>
      <p>At that time, I was doing a graveyard shift internship — 8 PM to 5 AM, work from home. After my shift ended at 5 AM, I decided to check the TikTok post even though I don't have a personal TikTok account.</p>
      
      <p>The engagement was real. Likes were pouring in, and people were suggesting features in the comments.</p>
      
      <p>Since I had just clocked out, I thought: why not try implementing one of the suggested features right away? I worked on it until 6 AM, but ran into bugs. Exhausted, I decided to sleep and went upstairs.</p>
      
      <h2>The Birthday Wake-Up Call</h2>
      <p>I couldn't sleep. I kept thinking about the post, refreshing it, reading comments, watching the numbers grow. By 10 AM, I gave up on sleep entirely and got up to work on the feature.</p>
      
      <p>My mother was shocked. She expected me to be sleeping at that hour after a graveyard shift. And it was her birthday that day, which made it even more memorable.</p>
      
      <p>I implemented the custom timer feature for Reverse Pomodoro mode. Somehow, I got it working around lunch. Then I finally slept.</p>
      
      <p>It felt incredibly satisfying. For me, this had always been about my girlfriend — a tool made specifically for her needs. I never imagined I could help other people too, especially in such a simple way. But here I was, doing something that felt genuinely meaningful.</p>
      
      <h2>The Ripple Effect</h2>
      <p>Days passed, and the engagement kept growing. My own friends and mutuals started seeing the post and reaching out. The spotlight on Customodoro grew brighter.</p>
      
      <p>I created my first TikTok account — not for personal use, but just to read the comments properly. That account became dedicated to my girlfriend and Customodoro. I still don't plan to use TikTok personally, but it became our space to connect with users.</p>
      
      <h2>Thank You</h2>
      <p>I'm thankful to my girlfriend for the idea, for being the reason Customodoro exists, and for believing it was worth sharing. I'm grateful to everyone who discovered Customodoro through that post — for your feedback, bug reports, and for actually using the app.</p>
      
      <p>I hope Customodoro helps you stay productive, whether you're preparing for board exams, managing deadlines, or working on personal projects. Thank you for showing up and never giving up.</p>
      
      <p>What started as a midnight question became something bigger than both of us ever imagined.</p>
    `,
  },
]

// ============================================
// HELPER FUNCTIONS (Don't modify these)
// ============================================

/**
 * Get all posts sorted by date (newest first)
 */
export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/**
 * Get a single post by its slug
 */
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

/**
 * Get other posts (excluding the current one)
 */
export function getMorePosts(currentSlug: string, limit = 4): Post[] {
  return getAllPosts()
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit)
}
