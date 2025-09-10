'use client'

import { useState, useEffect } from 'react'
import { useProducts } from '@/hooks/useProducts'
import ProductCard from '@/components/ui/ProductCard'
import { Filter, Grid, List, ChevronDown } from 'lucide-react'

export default function ProductsPage() {
  const { products, loading } = useProducts()
  const [isMounted, setIsMounted] = useState(false)
  const [sortBy, setSortBy] = useState('name')
  const [filterCategory, setFilterCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Get unique categories from products
  const categories = ['all', ...new Set(products.map(product => product.category))]

  // Filter and sort products
  const filteredProducts = products.filter(product => 
    filterCategory === 'all' || product.category === filterCategory
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return (b.rating || 0) - (a.rating || 0)
      case 'name':
      default:
        return a.name.localeCompare(b.name)
    }
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">All Products</h1>
          <p className="text-gray-600">
            {!loading && `Showing ${sortedProducts.length} products`}
          </p>
        </div>
        
        {/* Filters and Controls */}
        <div className="flex flex-wrap gap-4 mt-4 lg:mt-0">
          {/* Category Filter */}
          <div className="relative">
            <select 
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>

          {/* Sort Filter */}
          <div className="relative">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>

          {/* View Mode Toggle */}
          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      {!isMounted || loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
              <div className="bg-gray-200 h-4 rounded mb-2"></div>
              <div className="bg-gray-200 h-4 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          : "space-y-4"
        }>
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
               <ProductCard key={product.id} product={product} />
             ))
          ) : (
            <div className="col-span-full text-center py-12">
              <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your filters or search criteria.</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
