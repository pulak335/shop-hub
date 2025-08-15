'use client'

import { useProducts } from '@/hooks/useProducts'
import ProductCard from '@/components/ui/ProductCard'

export default function FeaturedProducts() {
  const { products, loading } = useProducts()
  
  // Filter featured products
  const featuredProducts = products.filter(product => product.isFeatured)

  if (loading) {
    return (
      <section className="py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
                <div className="bg-gray-200 h-4 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked selection of premium products that combine quality, 
          style, and value for an exceptional shopping experience.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
          View All Products
        </button>
      </div>
    </section>
  )
}
