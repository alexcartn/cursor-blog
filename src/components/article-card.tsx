import Link from "next/link"
import Image from "next/image"

interface ArticleCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  slug: string
  imageUrl: string
}

export function ArticleCard({
  title,
  excerpt,
  date,
  category,
  slug,
  imageUrl,
}: ArticleCardProps) {
  return (
    <article className="bg-white rounded-card shadow-card hover:shadow-hover transition-shadow duration-300 animate-fade-in">
      <Link href={`/articles/${slug}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-t-card"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-xs uppercase tracking-wider text-accent">
              {category}
            </span>
            <span className="text-xs text-text/60">•</span>
            <time className="text-xs text-text/60">
              {new Date(date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <h2 className="text-subtitle font-semibold text-primary mb-2 line-clamp-2">
            {title}
          </h2>
          <p className="text-body text-text/80 line-clamp-3">
            {excerpt}
          </p>
          <div className="mt-4 inline-flex items-center text-accent hover:text-primary transition-colors">
            Lire la suite
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  )
} 