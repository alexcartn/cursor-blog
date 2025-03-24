import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Monitor, Palette, DollarSign } from "lucide-react"

const categories = [
  { name: "Tech", icon: Monitor, slug: "tech" },
  { name: "Art", icon: Palette, slug: "art" },
  { name: "Finance", icon: DollarSign, slug: "finance" },
]

const posts = [
  {
    id: 1,
    title: "AI: Your New Artsy Bestie",
    category: "tech",
    description: "Exploring the intersection of artificial intelligence and creative expression.",
    date: "2024-03-15",
  },
  {
    id: 2,
    title: "The Internet of Things: When Your Toaster Gets Smarter Than You",
    category: "tech",
    description: "A humorous look at the growing intelligence of everyday devices.",
    date: "2024-03-14",
  },
  {
    id: 3,
    title: "Machine Learning: Teaching Computers to Think",
    category: "tech",
    description: "Understanding the basics of machine learning and its implications.",
    date: "2024-03-13",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-primary/50 py-6">
        <div className="container flex flex-col items-center justify-between gap-4">
          <h1 className="text-4xl font-bold glow-text text-center">Pixel Wisdom</h1>
          <p className="text-muted-foreground text-center">Tech • Art • Finance</p>
          <div className="flex gap-4 mt-6">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="category-icon pixel-border hover:scale-105 transition-transform"
                >
                  <Icon className="w-6 h-6" />
                </Link>
              )
            })}
          </div>
        </div>
      </header>

      <main className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="pixel-border p-6 hover:scale-[1.02] transition-transform"
            >
              <div className="flex flex-col gap-4">
                <div className="text-xs uppercase tracking-wider text-primary/70">
                  {post.category}
                </div>
                <h2 className="text-xl font-bold glow-text">
                  <Link href={`/post/${post.id}`} className="hover:opacity-80">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.description}
                </p>
                <time className="text-xs text-primary/70" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
} 