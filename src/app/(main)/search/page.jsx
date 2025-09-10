'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Search, Filter, ChevronDown, GridIcon, List, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'



export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('relevance')
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedCategories, setSelectedCategories] = useState([])
  
  // Categories for filtering
  const categories = [
    'Electronics',
    'Clothing',
    'Home & Garden',
    'Sports',
    'Beauty',
    'Toys'
  ]
  
  // Mock search results
  useEffect(() => {
    // In a real app, you would fetch search results from an API
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      // Generate mock search results based on query
      const mockResults = [
        {
          id: 'product-1',
          name: `${query} Premium Wireless Headphones`,
          price: 129.99,
          category: 'Electronics',
          image: '/api/placeholder/300/300',
          rating: 4.5
        },
        {
          id: 'product-2',
          name: `${query} Smart Watch Pro`,
          price: 249.99,
          category: 'Electronics',
          image: '/api/placeholder/300/300',
          rating: 4.2
        },
        {
          id: 'product-3',
          name: `${query} Ultra HD 4K Camera`,
          price: 599.99,
          category: 'Electronics',
          image: '/api/placeholder/300/300',
          rating: 4.8
        },
        {
          id: 'product-4',
          name: `${query} Designer T-Shirt`,
          price: 39.99,
          category: 'Clothing',
          image: '/api/placeholder/300/300',
          rating: 4.0
        },
        {
          id: 'product-5',
          name: `${query} Running Shoes`,
          price: 89.99,
          category: 'Sports',
          image: '/api/placeholder/300/300',
          rating: 4.7
        },
        {
          id: 'product-6',
          name: `${query} Home Decor Set`,
          price: 149.99,
          category: 'Home & Garden',
          image: '/api/placeholder/300/300',
          rating: 4.3
        },
        {
          id: 'product-7',
          name: `${query} Skincare Bundle`,
          price: 79.99,
          category: 'Beauty',
          image: '/api/placeholder/300/300',
          rating: 4.6
        },
        {
          id: 'product-8',
          name: `${query} Educational Toy Set`,
          price: 49.99,
          category: 'Toys',
          image: '/api/placeholder/300/300',
          rating: 4.4
        }
      ]
      
      setSearchResults(mockResults)
      setIsLoading(false)
    }, 1000)
  }, [query])
  
  // Handle category filter change
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }
  
  // Filter results based on selected filters
  const filteredResults = searchResults.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    
    return matchesCategory && matchesPrice
  })
  
  // Sort results
  const sortedResults = [...filteredResults].sort((a, b) => {
    switch(sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      default: // relevance
        return 0
    }
  })
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">
          {query ? `Search results for "${query}"` : 'All Products'}
        </h1>
        
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
          >
            <GridIcon className="h-5 w-5" />
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
          >
            <List className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              {(selectedCategories.length > 0 || priceRange[0] > 0 || priceRange[1] < 1000) && (
                <button 
                  className="text-sm text-blue-600 hover:text-blue-800"
                  onClick={() => {
                    setSelectedCategories([])
                    setPriceRange([0, 1000])
                  }}
                >
                  Reset All
                </button>
              )}
            </div>
            
            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3 flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Price Range
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">${priceRange[0]}</span>
                  <span className="text-sm text-gray-600">${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full"
                />
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-medium mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Search Results */}
        <div className="flex-1">
          {/* Sort and Results Count */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between">
            <p className="text-sm text-gray-600 mb-2 sm:mb-0">
              {isLoading ? 'Searching...' : `${filteredResults.length} results found`}
            </p>
            
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-2">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="pl-3 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none text-sm"
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Loading State */}
          {isLoading && (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              <p className="mt-4 text-gray-600">Searching for products...</p>
            </div>
          )}
          
          {/* No Results */}
          {!isLoading && filteredResults.length === 0 && (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h2 className="text-xl font-semibold mb-2">No results found</h2>
              <p className="text-gray-500 mb-6">
                We couldn't find any products matching your search.
              </p>
              <div className="space-y-4">
                <p className="text-gray-600">Try:</p>
                <ul className="list-disc pl-6 text-left text-gray-600 inline-block">
                  <li>Checking your spelling</li>
                  <li>Using fewer or different keywords</li>
                  <li>Removing filters</li>
                  <li>Browsing our categories</li>
                </ul>
              </div>
            </div>
          )}
          
          {/* Grid View */}
          {!isLoading && filteredResults.length > 0 && viewMode === 'grid' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedResults.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="h-48 bg-gray-200 relative">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <Link href={`/product/${product.id}`} className="block">
                      <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600 mb-1 line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                      </span>
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* List View */}
          {!isLoading && filteredResults.length > 0 && viewMode === 'list' && (
            <div className="space-y-6">
              {sortedResults.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col sm:flex-row">
                  <div className="sm:w-48 h-48 bg-gray-200 relative flex-shrink-0">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex-1">
                      <Link href={`/product/${product.id}`} className="block">
                        <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600 mb-1">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                      <div className="flex items-center mb-4">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        Product description would go here. This is a placeholder for the product description.
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                      </span>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
