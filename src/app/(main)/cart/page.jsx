'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { Trash2, LogIn } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function CartPage() {
  const router = useRouter()
  // Mock cart and auth state - replace with your solution
  const [cartItems, setCartItems] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [couponCode, setCouponCode] = useState('')
  
  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 5.99 : 0
  const tax = subtotal * 0.08 // 8% tax rate
  const total = subtotal + shipping + tax
  
  const handleCheckout = (e) => {
    if (!isAuthenticated) {
      e.preventDefault()
      router.push(`/login?returnUrl=${encodeURIComponent('/checkout')}`)
    }
  }
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <p className="text-gray-500 mb-6">Your cart is empty.</p>
          <Link 
            href="/products" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 py-4 border-b border-gray-100 last:border-0">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                      <Image 
                        src={item.image} 
                        alt={item.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-medium text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.variant || ''}</p>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button 
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          // Decrease quantity action would go here
                        >
                          -
                        </button>
                        <span className="px-3 py-1 border-x border-gray-300">{item.quantity}</span>
                        <button 
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          // Increase quantity action would go here
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                        <div className="text-sm text-gray-500">${item.price.toFixed(2)} each</div>
                      </div>
                      
                      <button 
                        className="p-2 text-gray-400 hover:text-red-500"
                        // Remove item action would go here
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row sm:justify-between">
            <Link 
              href="/products" 
              className="mb-4 sm:mb-0 px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-center"
            >
              Continue Shopping
            </Link>
            
            <div className="flex items-center">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Coupon code"
                className="px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                className="px-6 py-3 bg-gray-100 border border-gray-300 border-l-0 rounded-r-lg text-gray-700 hover:bg-gray-200"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              
              <div className="border-t border-gray-200 pt-4 flex justify-between font-medium text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            
            <Link
              href="/checkout"
              onClick={handleCheckout}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors mb-4 text-center block flex items-center justify-center"
            >
              {isAuthenticated ? (
                "Proceed to Checkout"
              ) : (
                <>
                  <LogIn className="h-5 w-5 mr-2" />
                  Login to Checkout
                </>
              )}
            </Link>
            
            <div className="text-sm text-gray-500 text-center">
              Secure checkout. Free returns.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
