'use client'

import { useState } from 'react'

import { Trash2, ShoppingCart, Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ProtectedRoute from '@/components/auth/ProtectedRoute'

export default function WishlistPage() {
  // Mock wishlist state - replace with your solution
  const [wishlistItems, setWishlistItems] = useState([])
  const [selectedItems, setSelectedItems] = useState([])
  
  // Handle select all checkbox
  const handleSelectAll = () => {
    if (selectedItems.length === wishlistItems.length) {
      setSelectedItems([])
    } else {
      setSelectedItems(wishlistItems.map(item => item.id))
    }
  }
  
  // Handle individual item selection
  const handleSelectItem = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(id => id !== itemId))
    } else {
      setSelectedItems([...selectedItems, itemId])
    }
  }
  
  // Handle bulk actions
  const handleBulkAddToCart = () => {
    // In a real app, you would dispatch an action to add selected items to cart
    console.log('Adding to cart:', selectedItems)
  }
  
  const handleBulkRemove = () => {
    // In a real app, you would dispatch an action to remove selected items from wishlist
    console.log('Removing from wishlist:', selectedItems)
  }
  
  if (wishlistItems.length === 0) {
    return (
      <ProtectedRoute>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-6">
              Add items you love to your wishlist. Review them anytime and easily move them to your cart.
            </p>
            <Link 
              href="/products" 
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </ProtectedRoute>
    )
  }
  
  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Wishlist Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={selectedItems.length === wishlistItems.length && wishlistItems.length > 0}
                onChange={handleSelectAll}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-gray-500 text-sm">
                {selectedItems.length === 0 ? (
                  `${wishlistItems.length} items`
                ) : (
                  `${selectedItems.length} of ${wishlistItems.length} selected`
                )}
              </span>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={handleBulkAddToCart}
                disabled={selectedItems.length === 0}
                className={`px-3 py-1 text-sm rounded-lg flex items-center ${
                  selectedItems.length > 0 
                    ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' 
                    : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="h-4 w-4 mr-1" />
                Add to Cart
              </button>
              
              <button
                onClick={handleBulkRemove}
                disabled={selectedItems.length === 0}
                className={`px-3 py-1 text-sm rounded-lg flex items-center ${
                  selectedItems.length > 0 
                    ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                    : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Remove
              </button>
            </div>
          </div>
          
          {/* Wishlist Items */}
          <div className="divide-y divide-gray-100">
            {wishlistItems.map((item) => (
              <div key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center">
                <div className="flex items-center mb-4 sm:mb-0">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleSelectItem(item.id)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <div className="ml-4 flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-lg overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="sm:ml-6 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        <Link href={`/product/${item.id}`} className="hover:text-blue-600">
                          {item.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.category} {item.variant ? `• ${item.variant}` : ''}
                      </p>
                    </div>
                    
                    <div className="mt-2 sm:mt-0 flex flex-col sm:items-end">
                      <p className="text-lg font-medium text-gray-900">${item.price.toFixed(2)}</p>
                      {item.oldPrice && (
                        <p className="text-sm text-gray-500 line-through">${item.oldPrice.toFixed(2)}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </button>
                    
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/products" 
            className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Continue Shopping
          </Link>
          
          <button 
            onClick={handleBulkAddToCart}
            disabled={wishlistItems.length === 0}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300"
          >
            Add All to Cart
          </button>
        </div>
      </div>
    </ProtectedRoute>
  )
}
