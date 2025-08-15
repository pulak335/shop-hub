'use client'

import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { updateQuantity, removeFromCart, moveToWishlist } from '@/store/slices/cartSlice'
import { addToWishlist } from '@/store/slices/wishlistSlice'
import { Trash2, Heart, ShoppingBag, ArrowLeft, Minus, Plus } from 'lucide-react'
import Link from 'next/link'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

export default function CartPage() {
  const dispatch = useAppDispatch()
  const { items: cartItems } = useAppSelector((state) => state.cart)
  const [isUpdating, setIsUpdating] = useState<string | null>(null)

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  const shipping = subtotal > 50 ? 0 : 5.99
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return
    
    setIsUpdating(itemId)
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }))
    setTimeout(() => setIsUpdating(null), 500)
  }

  const handleRemoveItem = (itemId: string) => {
    dispatch(removeFromCart(itemId))
  }

  const handleMoveToWishlist = (item: any) => {
    dispatch(addToWishlist({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      sku: item.sku,
    }))
    dispatch(removeFromCart(item.id))
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart ({totalItems} items)</h1>
          
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">SKU: {item.sku}</p>
                    <p className="text-lg font-bold text-blue-600">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1 || isUpdating === item.id}
                      className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    
                    <span className="w-12 text-center font-medium">
                      {isUpdating === item.id ? (
                        <LoadingSpinner />
                      ) : (
                        item.quantity
                      )}
                    </span>
                    
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      disabled={isUpdating === item.id}
                      className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Item Total */}
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleMoveToWishlist(item)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      title="Move to Wishlist"
                    >
                      <Heart className="h-5 w-5" />
                    </button>
                    
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      title="Remove Item"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Continue Shopping */}
          <div className="mt-8">
            <Link
              href="/products"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-80">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({totalItems} items)</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            {shipping > 0 && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  Add ${(50 - subtotal).toFixed(2)} more to your cart for free shipping!
                </p>
              </div>
            )}

            {/* Checkout Button */}
            <button
              onClick={() => {
                // TODO: Implement checkout functionality
                alert('Checkout functionality will be implemented here')
              }}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors mb-4"
            >
              Proceed to Checkout
            </button>

            {/* Payment Methods */}
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">We accept</p>
              <div className="flex justify-center space-x-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Visa</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Mastercard</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">PayPal</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">COD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
