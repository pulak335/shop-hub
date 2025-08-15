'use client'

import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { removeFromWishlist } from '@/store/slices/wishlistSlice'
import { addToCart } from '@/store/slices/cartSlice'
import { Trash2, ShoppingCart, Heart, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import ProductCard from '@/components/ui/ProductCard'

export default function WishlistPage() {
  const dispatch = useAppDispatch()
  const { items: wishlistItems } = useAppSelector((state) => state.wishlist)

  const handleMoveToCart = (item: any) => {
    dispatch(addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
      sku: item.sku,
    }))
    dispatch(removeFromWishlist(item.id))
  }

  const handleRemoveFromWishlist = (itemId: string) => {
    dispatch(removeFromWishlist(itemId))
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <Heart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your wishlist is empty</h1>
          <p className="text-gray-600 mb-8">Start adding products you love to your wishlist!</p>
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Browse Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          My Wishlist ({wishlistItems.length} items)
        </h1>
        <Link
          href="/products"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Continue Shopping
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlistItems.map((item) => {
          // Map WishlistItem to ProductCard expected props
          const productForCard = {
            ...item,
            images: item.image ? [item.image] : [],
            rating: 0,
            reviewCount: 0,
            stock: 0,
          };
          return (
            <div key={item.id} className="relative group">
              <ProductCard product={productForCard} />
              
              {/* Wishlist Actions Overlay */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="flex space-x-2">
                <button
                  onClick={() => handleMoveToCart(item)}
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                  title="Add to Cart"
                >
                  <ShoppingCart className="h-4 w-4" />
                </button>
                
                <button
                  onClick={() => handleRemoveFromWishlist(item.id)}
                  className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-lg"
                  title="Remove from Wishlist"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )})}
      </div>

      {/* Bulk Actions */}
      {wishlistItems.length > 1 && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Bulk Actions</h3>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                wishlistItems.forEach(item => {
                  dispatch(addToCart({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: 1,
                    image: item.image,
                    sku: item.sku,
                  }))
                })
                // Clear wishlist after moving all items to cart
                wishlistItems.forEach(item => dispatch(removeFromWishlist(item.id)))
              }}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ShoppingCart className="h-5 w-5 inline mr-2" />
              Move All to Cart
            </button>
            
            <button
              onClick={() => {
                wishlistItems.forEach(item => dispatch(removeFromWishlist(item.id)))
              }}
              className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              <Trash2 className="h-5 w-5 inline mr-2" />
              Clear Wishlist
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
