import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Minimalist Blog
          </Link>
          <ModeToggle />
        </div>
      </header>
      <main className="container py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Example blog posts */}
          {[1, 2, 3].map((i) => (
            <article
              key={i}
              className="group relative flex flex-col space-y-2 rounded-lg border p-4 transition-colors hover:bg-muted"
            >
              <h2 className="text-2xl font-semibold">
                <Link href={`/post/${i}`} className="hover:underline">
                  Blog Post {i}
                </Link>
              </h2>
              <p className="text-muted-foreground">
                This is a sample blog post description. Click to read more about
                this interesting topic.
              </p>
              <div className="text-sm text-muted-foreground">
                Published on {new Date().toLocaleDateString()}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
} 