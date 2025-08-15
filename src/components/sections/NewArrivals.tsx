'use client'

import { useProducts } from '@/hooks/useProducts'
import ProductCard from '@/components/ui/ProductCard'

export default function NewArrivals() {
  const { products, loading } = useProducts()
  
  // Filter new arrival products
  const newArrivals = products.filter(product => product.isNewArrival)

  if (loading) {
    return (
      <section className="py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">New Arrivals</h2>
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
        <h2 className="text-3xl font-bold mb-4">New Arrivals</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Be the first to discover our latest products and stay ahead of the trends
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {newArrivals.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
          View All New Arrivals
        </button>
      </div>
    </section>
  )
}