'use client'

import { useState } from 'react'
import { Search, Package, Truck, CheckCircle, Clock } from 'lucide-react'

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('')
  const [email, setEmail] = useState('')
  const [isTracking, setIsTracking] = useState(false)
  const [orderStatus, setOrderStatus] = useState(null)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // In a real app, you would make an API call to fetch the order status
    // For this example, we'll simulate a successful tracking result
    setIsTracking(true)
    
    setTimeout(() => {
      setOrderStatus({
        orderNumber: orderNumber,
        status: 'shipped',
        statusDate: new Date().toLocaleDateString(),
        estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        items: 3
      })
      setIsTracking(false)
    }, 1500)
  }
  
  const getStatusStep = (status) => {
    switch(status) {
      case 'processing':
        return 1;
      case 'shipped':
        return 2;
      case 'out_for_delivery':
        return 3;
      case 'delivered':
        return 4;
      default:
        return 0;
    }
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Track Your Order</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold mb-6">Enter Your Order Details</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
          <div>
            <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Order Number
            </label>
            <input
              id="orderNumber"
              type="text"
              required
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="e.g. ORD-12345"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="The email used for your order"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isTracking}
              className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
            >
              {isTracking ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Tracking Order...
                </>
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  Track Order
                </>
              )}
            </button>
          </div>
        </form>
      </div>
      
      {orderStatus && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Order Status</h2>
            <span className="text-sm text-gray-500">Order #{orderStatus.orderNumber}</span>
          </div>
          
          <div className="mb-8">
            <div className="relative">
              {/* Status Bar */}
              <div className="h-1 bg-gray-200 absolute top-5 left-0 right-0 z-0">
                <div 
                  className="h-1 bg-blue-600 absolute top-0 left-0" 
                  style={{ width: `${(getStatusStep(orderStatus.status) / 4) * 100}%` }}
                ></div>
              </div>
              
              {/* Status Steps */}
              <div className="flex justify-between relative z-10">
                <div className="text-center">
                  <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                    getStatusStep(orderStatus.status) >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
                  }`}>
                    <Package className="h-5 w-5" />
                  </div>
                  <p className="mt-2 text-sm font-medium">Processing</p>
                </div>
                
                <div className="text-center">
                  <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                    getStatusStep(orderStatus.status) >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
                  }`}>
                    <Truck className="h-5 w-5" />
                  </div>
                  <p className="mt-2 text-sm font-medium">Shipped</p>
                </div>
                
                <div className="text-center">
                  <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                    getStatusStep(orderStatus.status) >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
                  }`}>
                    <Clock className="h-5 w-5" />
                  </div>
                  <p className="mt-2 text-sm font-medium">Out for Delivery</p>
                </div>
                
                <div className="text-center">
                  <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                    getStatusStep(orderStatus.status) >= 4 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
                  }`}>
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p className="mt-2 text-sm font-medium">Delivered</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Current Status</h3>
                <p className="font-medium">
                  {orderStatus.status === 'processing' && 'Order Processing'}
                  {orderStatus.status === 'shipped' && 'Order Shipped'}
                  {orderStatus.status === 'out_for_delivery' && 'Out for Delivery'}
                  {orderStatus.status === 'delivered' && 'Delivered'}
                </p>
                <p className="text-sm text-gray-500 mt-1">Updated on {orderStatus.statusDate}</p>
              </div>
              
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Estimated Delivery</h3>
                <p className="font-medium">{orderStatus.estimatedDelivery}</p>
              </div>
              
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Items in Order</h3>
                <p className="font-medium">{orderStatus.items} items</p>
              </div>
              
              <div>
                <h3 className="text-sm text-gray-500 mb-1">Need Help?</h3>
                <a href="/help" className="text-blue-600 hover:underline">Contact Support</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
