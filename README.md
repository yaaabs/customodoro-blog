# Customodoro Blog

A clean, responsive blog for showcasing stories, updates, and content about your app.

## Quick Start

### Adding a New Blog Post

1. Open `content/posts.ts`
2. Add a new object to the `posts` array:

\`\`\`typescript
{
  id: 4, // Increment from the last post
  title: "Your Post Title",
  slug: "your-post-url-slug", // This becomes /posts/your-post-url-slug
  excerpt: "A short description shown in previews...",
  coverImage: "/your-image.jpg", // Place image in /public folder
  date: "2024-12-08", // YYYY-MM-DD format
  author: {
    name: "Author Name",
    avatar: "/author-photo.jpg",
  },
  content: \`
    <p>Your HTML content here...</p>
    <h2>Subheadings</h2>
    <p>More content...</p>
  \`,
  tiktokEmbed: "https://tiktok.com/@user/video/123", // Optional
}
\`\`\`

3. Save the file - your post will appear automatically!

### Adding Images

1. Place images in the `/public` folder
2. Reference them as `/your-image-name.jpg` in your posts
3. Recommended sizes:
   - Cover images: 1200x800px or similar 3:2 ratio
   - Author avatars: 200x200px square

### Customizing Site Settings

Edit `lib/constants.ts` to change:

- `BLOG_NAME` - Your blog/brand name
- `BLOG_DESCRIPTION` - SEO description
- `APP_URL` - Link to your main app
- `SOCIAL_LINKS` - Your social media URLs (set to "" to hide)
- `PRESS_ARTICLES` - External articles featuring your app

### Embedding TikTok Videos

Add the `tiktokEmbed` field to any post with a TikTok URL:

\`\`\`typescript
{
  // ... other post fields
  tiktokEmbed: "https://www.tiktok.com/@username/video/1234567890",
}
\`\`\`

### Changing Colors/Theme

Edit `app/globals.css` to modify the color scheme. Key variables:

- `--primary` - Main accent color (currently tomato red)
- `--background` - Page background
- `--foreground` - Main text color

## File Structure

\`\`\`
├── content/
│   └── posts.ts        # All blog posts live here
├── lib/
│   └── constants.ts    # Site settings, social links, press articles
├── app/
│   ├── page.tsx        # Homepage
│   ├── posts/[slug]/   # Individual post pages
│   └── components/     # Reusable UI components
└── public/             # Images and static files
\`\`\`

## Features

- Fully responsive (mobile-first design)
- Dark mode support
- SEO optimized
- Social media integration
- Press/media section
- TikTok embed support
- Clean, modern design

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- No external CMS required
