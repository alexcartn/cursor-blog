import { Navigation } from "@/components/navigation"
import { ArticleCard } from "@/components/article-card"

const articles = [
  {
    title: "L'Intelligence Artificielle dans notre quotidien",
    excerpt: "Découvrez comment l'IA transforme notre vie de tous les jours, des assistants virtuels aux voitures autonomes.",
    date: "2024-03-15",
    category: "Technologie",
    slug: "ia-quotidien",
    imageUrl: "/images/ai-daily.jpg",
  },
  {
    title: "Les tendances du développement web en 2024",
    excerpt: "Les frameworks, les outils et les pratiques qui dominent le développement web moderne.",
    date: "2024-03-14",
    category: "Développement",
    slug: "tendances-dev-web-2024",
    imageUrl: "/images/web-dev.jpg",
  },
  {
    title: "Optimiser ses performances avec Next.js",
    excerpt: "Guide complet pour améliorer les performances de votre application Next.js.",
    date: "2024-03-13",
    category: "Performance",
    slug: "optimisation-nextjs",
    imageUrl: "/images/nextjs-perf.jpg",
  },
]

const popularCategories = [
  "Technologie",
  "Développement",
  "Performance",
  "Design",
  "Architecture",
]

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-20 pb-12 bg-secondary min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-title font-bold text-primary mb-4">
              Bienvenue sur MonBlog
            </h1>
            <p className="text-body text-text/80 mb-8">
              Découvrez des articles passionnants sur le développement web,
              la technologie et les bonnes pratiques.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <h2 className="text-subtitle font-semibold text-primary mb-8">
                Articles Récents
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                {articles.map((article) => (
                  <ArticleCard key={article.slug} {...article} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3">
              <div className="bg-white rounded-card shadow-card p-6 sticky top-24">
                {/* Search */}
                <div className="mb-8">
                  <h3 className="text-subtitle font-semibold text-primary mb-4">
                    Rechercher
                  </h3>
                  <div className="relative">
                    <input
                      type="search"
                      placeholder="Rechercher un article..."
                      className="w-full px-4 py-2 border border-text/10 rounded-card focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="text-subtitle font-semibold text-primary mb-4">
                    Catégories
                  </h3>
                  <ul className="space-y-2">
                    {popularCategories.map((category) => (
                      <li key={category}>
                        <a
                          href={`/categories/${category.toLowerCase()}`}
                          className="text-text hover:text-accent transition-colors"
                        >
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
} 