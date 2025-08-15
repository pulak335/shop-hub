'use client'

import { useProducts } from '@/hooks/useProducts'
import { ShoppingBag, Smartphone, Laptop, Camera, Headphones, Watch, Shirt, Footprints } from 'lucide-react'

// Fallback categories if none are loaded from store
const fallbackCategories = [
  { id: '1', name: 'Electronics', icon: Smartphone, color: 'bg-blue-500', count: 150 },
  { id: '2', name: 'Computers', icon: Laptop, color: 'bg-purple-500', count: 89 },
  { id: '3', name: 'Photography', icon: Camera, color: 'bg-green-500', count: 67 },
  { id: '4', name: 'Audio', icon: Headphones, color: 'bg-red-500', count: 94 },
  { id: '5', name: 'Wearables', icon: Watch, color: 'bg-yellow-500', count: 56 },
  { id: '6', name: 'Fashion', icon: Shirt, color: 'bg-pink-500', count: 234 },
  { id: '7', name: 'Sports', icon: Footprints, color: 'bg-indigo-500', count: 78 },
  { id: '8', name: 'Home & Garden', icon: ShoppingBag, color: 'bg-orange-500', count: 123 },
]

export default function CategoryGrid() {
  const { categories } = useProducts()
  
  // Use fallback categories if none are loaded from store
  const displayCategories = categories.length > 0 ? categories : fallbackCategories

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our wide range of product categories to find exactly what you're looking for
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {displayCategories.map((category) => {
          const IconComponent = 'icon' in category ? category.icon : ShoppingBag
          const color = 'color' in category ? category.color : 'bg-gray-500'
          const count = 'count' in category ? category.count : 0
          
          return (
            <div
              key={category.id}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center cursor-pointer hover:scale-105"
            >
              <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {category.name}
              </h3>
              
              <p className="text-sm text-gray-500">
                {count} products
              </p>
            </div>
          )
        })}
      </div>
      
      <div className="text-center mt-8">
        <button className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors">
          Browse All Categories
        </button>
      </div>
    </section>
  )
}
