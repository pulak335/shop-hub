import { Suspense } from 'react'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      
      <Suspense fallback={<LoadingSpinner />}>
        {/* Categories grid would be here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Category cards would be rendered here */}
        </div>
      </Suspense>
    </div>
  )
}
