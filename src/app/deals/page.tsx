'use client'

import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchProducts } from '@/store/slices/productSlice'
import ProductCard from '@/components/ui/ProductCard'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import { Clock, Tag, Fire } from 'lucide-react'

export default function DealsPage() {
  const dispatch = useAppDispatch()
  const { products, loading } = useAppSelector((state) => state.products)
  
  const [sortBy, setSortBy] = useState('discount')

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts())
    }
  }, [dispatch, products.length])

  // Filter products with discounts
  const discountedProducts = products.filter(product => product.originalPrice && product.originalPrice > product.price)

  // Calculate discount percentage for each product
  const productsWithDiscount = discountedProducts.map(product => ({
    ...product,
    discountPercentage: Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
  }))

  // Sort products by discount or other criteria
  const sortedProducts = [...productsWithDiscount].sort((a, b) => {
    switch (sortBy) {
      case 'discount':
        return b.discountPercentage - a.discountPercentage
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'newest':
        return new Date(b.id).getTime() - new Date(a.id).getTime()
      default:
        return 0
    }
  })

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Fire className="h-12 w-12 text-red-500 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900">Hot Deals & Offers</h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover amazing discounts and special offers on our most popular products. 
          Limited time deals that you won't want to miss!
        </p>
      </div>

      {/* Featured Deal Banner */}
      {sortedProducts.length > 0 && (
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 mb-12 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">Flash Sale!</h2>
              <p className="text-xl mb-4">Up to {Math.max(...sortedProducts.map(p => p.discountPercentage))}% off selected items</p>
              <div className="flex items-center text-lg">
                <Clock className="h-5 w-5 mr-2" />
                <span>Ends in 24 hours</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-6xl font-bold">
                {sortedProducts.length}+
              </div>
              <div className="text-xl">Items on Sale</div>
            </div>
          </div>
        </div>
      )}

      {/* Sort Controls */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium text-gray-700">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="discount">Highest Discount</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>

        <div className="text-gray-600">
          {sortedProducts.length} deals available
        </div>
      </div>

      {/* Deals Grid */}
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <div key={product.id} className="relative">
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 z-10">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  -{product.discountPercentage}%
                </div>
              </div>
              
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Tag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No deals available</h3>
          <p className="text-gray-600">
            Check back later for amazing deals and discounts!
          </p>
        </div>
      )}

      {/* Deal Categories */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-2">Electronics</h3>
            <p className="mb-4">Up to 60% off on latest gadgets</p>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-2">Fashion</h3>
            <p className="mb-4">Trendy styles at unbeatable prices</p>
            <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-2">Home & Garden</h3>
            <p className="mb-4">Transform your space with great deals</p>
            <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Never Miss a Deal!</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter and be the first to know about exclusive offers and flash sales.
        </p>
        <div className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
