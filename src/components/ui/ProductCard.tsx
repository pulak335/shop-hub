'use client'

import { useState } from 'react'
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react'
import { useAppDispatch } from '@/store/hooks'
import { addToCart } from '@/store/slices/cartSlice'
import { addToWishlist } from '@/store/slices/wishlistSlice'
import { useRouter } from 'next/navigation'

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  images: string[]
  rating: number
  reviewCount: number
  stock: number
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent card click when clicking button
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.images[0],
      sku: product.id,
    }))
  }

  const handleCardClick = () => {
    router.push(`/product/${product.id}`)
  }

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent card click when clicking button
    if (isWishlisted) {
      // TODO: Remove from wishlist
      setIsWishlisted(false)
    } else {
      dispatch(addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        sku: product.id,
      }))
      setIsWishlisted(true)
    }
  }

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div 
      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.images[0] || '/placeholder-product.jpg'}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{discountPercentage}%
          </div>
        )}
        
        {/* Stock Badge */}
        {product.stock === 0 && (
          <div className="absolute top-2 right-2 bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded">
            Out of Stock
          </div>
        )}
        
        {/* Action Buttons */}
        <div className={`absolute inset-0 bg-black/20 flex items-center justify-center gap-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button
            onClick={handleToggleWishlist}
            className={`p-2 rounded-full transition-colors ${
              isWishlisted 
                ? 'bg-red-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-red-500 hover:text-white'
            }`}
          >
            <Heart className="h-4 w-4" fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
          
          <button className="p-2 bg-white text-gray-700 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
            <Eye className="h-4 w-4" />
          </button>
          
          <button 
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="p-2 bg-white text-gray-700 rounded-full hover:bg-green-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">
            ({product.reviewCount})
          </span>
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
            product.stock === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}