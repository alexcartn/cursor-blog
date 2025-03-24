import Link from "next/link"
import { ChevronLeft } from "lucide-react"

interface PostPageProps {
  params: {
    id: string
  }
}

const posts = [
  {
    id: "1",
    title: "AI: Your New Artsy Bestie",
    category: "tech",
    description: "Exploring the intersection of artificial intelligence and creative expression.",
    date: "2024-03-15",
    content: `
      Artificial Intelligence has become more than just a tool for data analysis and automation - it's now your creative companion. From generating unique artwork to composing music, AI is pushing the boundaries of what's possible in the creative space.

      ## The Creative Revolution

      The emergence of AI in the creative field has sparked both excitement and concern. While some worry about AI replacing human creativity, others see it as a powerful tool that can enhance and augment human creative capabilities.

      ## Key Applications

      - **Digital Art Generation**: Create unique artwork from text descriptions
      - **Music Composition**: Generate original melodies and harmonies
      - **Story Writing**: Assist in creative writing and narrative development
      - **Design Iteration**: Quickly generate multiple design variations

      ## The Future of Creative AI

      As AI technology continues to evolve, we can expect to see even more innovative applications in the creative field. The key is to embrace AI as a collaborative tool while maintaining the human element that makes art truly meaningful.
    `
  },
  // Add more posts as needed
]

export default function PostPage({ params }: PostPageProps) {
  const post = posts.find(p => p.id === params.id) || posts[0]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-primary/50 py-6">
        <div className="container">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container py-12">
        <article className="max-w-3xl mx-auto">
          <div className="pixel-border p-8">
            <div className="space-y-8">
              <div>
                <div className="text-xs uppercase tracking-wider text-primary/70 mb-4">
                  {post.category}
                </div>
                <h1 className="text-4xl font-bold glow-text mb-4">{post.title}</h1>
                <time className="text-sm text-primary/70" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>

              <div className="prose prose-invert prose-green max-w-none">
                {post.content.split("\n").map((paragraph, index) => (
                  <p key={index} className="my-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
} 