'use client'

import { useState } from 'react'
import { Search, ShoppingBag, Heart, User } from 'lucide-react'

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery)
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      {/* Header Navigation */}
      <header className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">ShopHub</div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/categories" className="hover:text-blue-200 transition-colors">Categories</a>
            <a href="/deals" className="hover:text-blue-200 transition-colors">Deals</a>
            <a href="/about" className="hover:text-blue-200 transition-colors">About</a>
            <a href="/contact" className="hover:text-blue-200 transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover Amazing Products
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Shop the latest trends with unbeatable prices and fast delivery
        </p>
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products, brands, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 text-gray-900 rounded-full text-lg focus:outline-none focus:ring-4 focus:ring-white/20"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </form>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
