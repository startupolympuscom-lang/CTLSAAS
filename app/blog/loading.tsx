import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function BlogLoading() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-background/95">
      {/* Header Loading */}
      <section className="border-b border-border/40 bg-gradient-to-b from-background/80 to-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1">
              <Skeleton className="h-12 w-72 mb-3 rounded-lg" />
              <Skeleton className="h-6 w-96 rounded-lg" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-10 w-32 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
            </div>
          </div>

          {/* Search Bar Skeleton */}
          <div className="mt-8">
            <Skeleton className="h-12 w-full rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured Post Skeleton */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Skeleton className="h-96 md:h-[450px] w-full rounded-2xl mb-12" />

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="h-56 w-full" />
              <div className="p-6 space-y-4">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
                <Skeleton className="h-10 w-full mt-4" />
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
