import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

interface PostPageProps {
  params: {
    id: string
  }
}

export default function PostPage({ params }: PostPageProps) {
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
        <article className="prose prose-lg dark:prose-invert mx-auto">
          <h1>Blog Post {params.id}</h1>
          <div className="text-sm text-muted-foreground mb-8">
            Published on {new Date().toLocaleDateString()}
          </div>
          <p>
            This is a sample blog post content. In a real blog, this would be
            replaced with actual content from your CMS or database.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </article>
      </main>
    </div>
  )
} 