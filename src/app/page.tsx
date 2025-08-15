import { Suspense } from 'react'
import HeroSlider from '@/components/sections/HeroSlider'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import CategoryGrid from '@/components/sections/CategoryGrid'
import NewArrivals from '@/components/sections/NewArrivals'
import BestSellers from '@/components/sections/BestSellers'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

export default function HomePage() {
  return (
    <div>
      {/* Hero Slider Section */}
      <HeroSlider />
      
      {/* Product Sections */}
      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<LoadingSpinner />}>
          <FeaturedProducts />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <CategoryGrid />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <NewArrivals />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <BestSellers />
        </Suspense>
      </div>
    </div>
  )
}
