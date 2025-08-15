'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Heart, ShoppingCart, Star, Eye, Truck, Shield, RotateCcw, CheckCircle, Minus, Plus, Share2 } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addToCart } from '@/store/slices/cartSlice'
import { addToWishlist, removeFromWishlist } from '@/store/slices/wishlistSlice'
import { fetchProducts } from '@/store/slices/productSlice'
import ProductCard from '@/components/ui/ProductCard'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  images: string[]
  rating: number
  reviewCount: number
  stock: number
  category: string
  brand: string
  sku: string
  weight?: string
  dimensions?: string
  features?: string[]
  specifications?: Record<string, string>
}

interface Review {
  id: string
  userName: string
  rating: number
  comment: string
  date: string
  helpful: number
}

export default function ProductDetailsPage() {
  const params = useParams()
  const dispatch = useAppDispatch()
  const { products, loading } = useAppSelector((state) => state.products)
  const { items: wishlistItems } = useAppSelector((state) => state.wishlist)
  
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [activeTab, setActiveTab] = useState('description')
  const [showReviews, setShowReviews] = useState(false)

  const productId = params.id as string
  const product = products.find(p => p.id === productId)
  const isWishlisted = wishlistItems.some(item => item.id === productId)

  // Mock reviews data
  const reviews: Review[] = [
    {
      id: '1',
      userName: 'John D.',
      rating: 5,
      comment: 'Excellent product! Quality is outstanding and delivery was fast.',
      date: '2024-01-15',
      helpful: 12
    },
    {
      id: '2',
      userName: 'Sarah M.',
      rating: 4,
      comment: 'Great value for money. The product meets all my expectations.',
      date: '2024-01-10',
      helpful: 8
    },
    {
      id: '3',
      userName: 'Mike R.',
      rating: 5,
      comment: 'Perfect fit and amazing quality. Highly recommended!',
      date: '2024-01-08',
      helpful: 15
    }
  ]

  // Mock related products
  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== productId).slice(0, 4)

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts())
    }
  }, [dispatch, products.length])

  if (loading) {
    return <LoadingSpinner />
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.images[0],
      sku: product.sku,
    }))
  }

  const handleToggleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id))
    } else {
      dispatch(addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        sku: product.sku,
      }))
    }
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <ol className="flex items-center space-x-2">
          <li><a href="/" className="hover:text-blue-600">Home</a></li>
          <li>/</li>
          <li><a href={`/categories/${product.category}`} className="hover:text-blue-600 capitalize">{product.category}</a></li>
          <li>/</li>
          <li className="text-gray-900">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.images[selectedImage] || product.images[0] || '/placeholder-product.jpg'}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Thumbnail Images */}
          <div className="flex space-x-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Brand & Category */}
          <div>
            <span className="text-sm text-blue-600 font-medium">{product.brand}</span>
            <span className="text-sm text-gray-500 ml-2 capitalize">{product.category}</span>
          </div>

          {/* Product Name */}
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

          {/* Rating & Reviews */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating) 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600">{product.rating} ({product.reviewCount} reviews)</span>
            <button 
              onClick={() => setShowReviews(!showReviews)}
              className="text-blue-600 hover:text-blue-800 text-sm underline"
            >
              View all reviews
            </button>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded">
                    -{discountPercentage}%
                  </span>
                </>
              )}
            </div>
            <p className="text-sm text-gray-600">Free shipping on orders over $50</p>
          </div>

          {/* Stock Status */}
          <div className="flex items-center space-x-2">
            {product.stock > 0 ? (
              <div className="flex items-center text-green-600">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="font-medium">In Stock ({product.stock} available)</span>
              </div>
            ) : (
              <div className="flex items-center text-red-600">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="font-medium">Out of Stock</span>
              </div>
            )}
          </div>

          {/* Product Options */}
          <div className="space-y-4">
            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
              <div className="flex space-x-2">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedSize === size
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
              <div className="flex space-x-2">
                {['Black', 'White', 'Blue', 'Red'].map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedColor === color
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-16 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= product.stock}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0 || !selectedSize || !selectedColor}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              <ShoppingCart className="h-5 w-5 inline mr-2" />
              Add to Cart
            </button>
            
            <div className="flex space-x-3">
              <button
                onClick={handleToggleWishlist}
                className={`flex-1 py-3 px-6 rounded-lg font-medium border transition-colors ${
                  isWishlisted
                    ? 'border-red-500 bg-red-50 text-red-600 hover:bg-red-100'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Heart className={`h-5 w-5 inline mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
                {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </button>
              
              <button className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                <Share2 className="h-5 w-5 inline mr-2" />
                Share
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="border-t pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center text-gray-600">
                <Truck className="h-5 w-5 mr-2 text-green-600" />
                Free Shipping
              </div>
              <div className="flex items-center text-gray-600">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                2 Year Warranty
              </div>
              <div className="flex items-center text-gray-600">
                <RotateCcw className="h-5 w-5 mr-2 text-purple-600" />
                30 Day Returns
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-12">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            {[
              { id: 'description', label: 'Description' },
              { id: 'specifications', label: 'Specifications' },
              { id: 'reviews', label: 'Reviews' },
              { id: 'shipping', label: 'Shipping & Returns' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="py-8">
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
              {product.features && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h3>
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">SKU</dt>
                    <dd className="text-gray-900 font-medium">{product.sku}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Brand</dt>
                    <dd className="text-gray-900 font-medium">{product.brand}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Category</dt>
                    <dd className="text-gray-900 font-medium capitalize">{product.category}</dd>
                  </div>
                  {product.weight && (
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Weight</dt>
                      <dd className="text-gray-900 font-medium">{product.weight}</dd>
                    </div>
                  )}
                  {product.dimensions && (
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Dimensions</dt>
                      <dd className="text-gray-900 font-medium">{product.dimensions}</dd>
                    </div>
                  )}
                </dl>
              </div>
              
              {product.specifications && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Specifications</h3>
                  <dl className="space-y-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <dt className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</dt>
                        <dd className="text-gray-900 font-medium">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Write a Review
                </button>
              </div>
              
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900">{review.userName}</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700 mb-2">{review.comment}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <button className="hover:text-blue-600">Helpful ({review.helpful})</button>
                      <button className="hover:text-blue-600">Reply</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipping Information</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Free standard shipping on orders over $50</p>
                  <p>• Standard delivery: 3-5 business days</p>
                  <p>• Express delivery: 1-2 business days (additional fee)</p>
                  <p>• International shipping available to select countries</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Return Policy</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• 30-day return window for most items</p>
                  <p>• Items must be in original condition with tags attached</p>
                  <p>• Return shipping is free for defective items</p>
                  <p>• Refunds processed within 5-7 business days</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
