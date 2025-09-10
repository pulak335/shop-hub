import { Suspense } from 'react'
import HeroSlider from '@/components/sections/HeroSlider.jsx'
import FeaturedProducts from '@/components/sections/FeaturedProducts.jsx'
import CategoryGrid from '@/components/sections/CategoryGrid.jsx'
import NewArrivals from '@/components/sections/NewArrivals.jsx'
import BestSellers from '@/components/sections/BestSellers.jsx'
import LoadingSpinner from '@/components/ui/LoadingSpinner.jsx'
import FeaturesSection from '@/components/sections/FeaturesSection.jsx'

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
        
        {/* Categories Grid */}
        <div className="my-16">
          <CategoryGrid />
        </div>
        
        {/* New Arrivals */}
        <div className="my-16">
          <Suspense fallback={<LoadingSpinner />}>
            <NewArrivals />
          </Suspense>
        </div>
        
        {/* Best Sellers */}
        <div className="my-16">
          <Suspense fallback={<LoadingSpinner />}>
            <BestSellers />
          </Suspense>
        </div>
        
        {/* Features Section */}
        <div className="my-16">
          <FeaturesSection />
        </div>
      </div>
    </div>
  )
}
