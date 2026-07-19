import type { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/Footer'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Jacques Blog | Sirens & Titans Fitness',
  description:
    'In-depth training insights, health philosophy, and coaching content from Jacques DeVore.',
}

const SUBSTACK_FEED_URL = 'https://sirensandtitansfitness.substack.com/feed'
const SUBSTACK_URL = 'https://sirensandtitansfitness.substack.com'

type Post = {
  title: string
  pubDate: string
  description: string
  link: string
}

function decodeEntities(text: string): string {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .trim()
}

function extractTag(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i'))
  return match ? decodeEntities(match[1]) : ''
}

function formatDate(pubDate: string): string {
  const date = new Date(pubDate)
  if (isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return `${text.slice(0, length).trim()}...`
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch(SUBSTACK_FEED_URL, { next: { revalidate: 3600 } })

  if (!res.ok) {
    throw new Error(`Failed to fetch Substack feed: ${res.status}`)
  }

  const xml = await res.text()
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? []

  const posts = items.slice(0, 6).map((item) => {
    const title = extractTag(item, 'title')
    const pubDate = formatDate(extractTag(item, 'pubDate'))
    const rawDescription = extractTag(item, 'description')
    const description = truncate(stripHtml(rawDescription), 150)
    const link = extractTag(item, 'link')

    return { title, pubDate, description, link }
  })

  if (posts.length === 0) {
    throw new Error('No posts found in Substack feed')
  }

  return posts
}

export default async function BlogPage() {
  let posts: Post[] = []
  let feedFailed = false

  try {
    posts = await getPosts()
  } catch {
    feedFailed = true
  }

  return (
    <>
      <Navigation />
      <main className="bg-[#080808] min-h-screen">
        {/* Hero */}
        <div className="h-64 bg-[#111111] flex items-end pb-12 border-b border-[#1E1E1E]">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <SectionLabel>Jacques DeVore</SectionLabel>
            <h1
              className="font-display text-white leading-none tracking-[0.03em]"
              style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}
            >
              JACQUES BLOG
            </h1>
          </div>
        </div>

        {/* Posts grid */}
        <div className="max-w-7xl mx-auto px-6 mt-24">
          {feedFailed ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[0, 1, 2].map((i) => (
                <div key={i} className="bg-[#141414] p-8 border-t-2 border-[#4A7C26]">
                  <p className="font-body text-base text-white leading-relaxed">
                    New content coming soon. Follow us on Substack for the latest from Jacques.
                  </p>
                  <a
                    href={SUBSTACK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-8 font-body text-sm font-medium uppercase bg-gold hover:bg-gold-light text-bg-primary px-8 py-3 transition-colors duration-200"
                    style={{ letterSpacing: '0.15em' }}
                  >
                    Visit Substack
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <a
                  key={post.link}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#141414] hover:bg-[#1a1a1a] p-8 border-t-2 border-[#4A7C26] transition cursor-pointer"
                >
                  <span
                    className="font-body text-sm text-[#888888] uppercase"
                    style={{ letterSpacing: '0.2em' }}
                  >
                    {post.pubDate}
                  </span>
                  <h2 className="font-display text-2xl text-white mt-2 tracking-[0.02em]">
                    {post.title}
                  </h2>
                  <p className="font-body text-base text-white leading-relaxed mt-3">
                    {post.description}
                  </p>
                  <span className="block font-body text-base font-medium text-[#4A7C26] mt-4">
                    Read on Substack →
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Subscribe CTA */}
        <div className="bg-[#0D0D0D] py-16 text-center mt-24">
          <div className="max-w-2xl mx-auto px-6">
            <div className="flex justify-center">
              <SectionLabel>Never Miss An Update</SectionLabel>
            </div>
            <h2 className="font-display text-4xl text-white tracking-[0.03em]">
              SUBSCRIBE ON SUBSTACK
            </h2>
            <p className="font-body text-base text-white leading-relaxed mt-4">
              In depth training philosophy, health insights, and coaching content direct from
              Jacques.
            </p>
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 font-body text-base font-medium tracking-[0.25em] uppercase bg-gold hover:bg-gold-light text-bg-primary px-10 py-4 transition-colors duration-200"
            >
              Subscribe Free
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
