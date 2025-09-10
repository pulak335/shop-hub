'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import ProtectedRoute from '@/components/auth/ProtectedRoute'

export default function OrderSuccessPage() {
  const router = useRouter()
  
  // Mock order details - in a real app, you'd fetch this from your API
  const orderDetails = {
    orderNumber: 'ORD-' + Math.floor(10000 + Math.random() * 90000),
    orderDate: new Date().toLocaleDateString(),
    estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()
  }
  
  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600">
              Thank you for your purchase. Your order has been received and is being processed.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Details</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between pb-4 border-b border-gray-100">
                <span className="text-gray-600">Order Number</span>
                <span className="font-medium">{orderDetails.orderNumber}</span>
              </div>
              
              <div className="flex justify-between pb-4 border-b border-gray-100">
                <span className="text-gray-600">Order Date</span>
                <span className="font-medium">{orderDetails.orderDate}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Delivery</span>
                <span className="font-medium">{orderDetails.estimatedDelivery}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/account"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-colors"
            >
              View Order Details
            </Link>
            
            <Link
              href="/"
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg text-center hover:bg-gray-200 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
