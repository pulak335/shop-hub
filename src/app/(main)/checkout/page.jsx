'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { ArrowLeft, CreditCard, Truck, CheckCircle2, ListChecks } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ProtectedRoute from '@/components/auth/ProtectedRoute'

export default function CheckoutPage() {
  const router = useRouter()
  // Mock cart and user state - replace with your solution
  const [cartItems, setCartItems] = useState([])
  const [user, setUser] = useState(null)
  const [currentStep, setCurrentStep] = useState('shipping')
  const [paymentMethod, setPaymentMethod] = useState('credit_card')
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)
  
  // Form state
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phone: '',
    email: '',
    saveInfo: false
  })

  // Pre-populate shipping info from user data if available
  useEffect(() => {
    if (user) {
      const nameParts = user.name.split(' ')
      const firstName = nameParts[0] || ''
      const lastName = nameParts.slice(1).join(' ') || ''
      const defaultAddress = user.addresses && user.addresses.length > 0
        ? user.addresses.find(addr => addr.isDefault) || user.addresses[0]
        : null

      setShippingInfo({
        firstName,
        lastName,
        address: defaultAddress?.street || '',
        city: defaultAddress?.city || '',
        state: defaultAddress?.state || '',
        zipCode: defaultAddress?.zipCode || '',
        country: defaultAddress?.country || 'United States',
        phone: user.phone || '',
        email: user.email,
        saveInfo: true
      })
    }
  }, [user])

  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 5.99
  const tax = subtotal * 0.08 // 8% tax rate
  const total = subtotal + shipping + tax
  const totalItems = cartItems.reduce((count, item) => count + item.quantity, 0)
  
  // Handle form submission
  const handleShippingSubmit = (e) => {
    e.preventDefault()
    setCurrentStep('payment')
  }
  
  const handlePaymentSubmit = (e) => {
    e.preventDefault()
    setCurrentStep('review')
  }
  
  const handleReviewSubmit = (e) => {
    e.preventDefault()
    // Process order
    handlePlaceOrder()
  }
  
  // Handle place order
  const handlePlaceOrder = () => {
    // Check if user has agreed to terms and privacy policy
    if (!agreedToTerms || !agreedToPrivacy) {
      // Show error - in a real app you might use a toast notification or error state
      alert("You must agree to the Terms of Service and Privacy Policy to complete your order.")
      return
    }
    
    // Here you would typically:
    // 1. Validate all information
    // 2. Process payment
    // 3. Create order in database
    // 4. Clear cart
    // 5. Redirect to confirmation page
    
    // For now, we'll just redirect to a success page
    router.push('/checkout/success')
  }
  
  // Empty cart check
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <p className="text-gray-500 mb-6">Your cart is empty. Please add items to your cart before checkout.</p>
          <Link 
            href="/products" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    )
  }
  
  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        
        {/* Checkout Steps */}
        <div className="mb-8">
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep === 'shipping' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}>
              <Truck className="h-4 w-4" />
            </div>
            <div className={`flex-1 h-1 mx-2 ${currentStep === 'shipping' ? 'bg-gray-300' : 'bg-blue-600'}`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep === 'payment' ? 'bg-blue-600 text-white' : currentStep === 'review' ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-600'}`}>
              <CreditCard className="h-4 w-4" />
            </div>
            <div className={`flex-1 h-1 mx-2 ${currentStep === 'review' ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep === 'review' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              <CheckCircle2 className="h-4 w-4" />
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <div className={currentStep === 'shipping' ? 'text-blue-600 font-medium' : 'text-gray-600'}>Shipping</div>
            <div className={currentStep === 'payment' ? 'text-blue-600 font-medium' : 'text-gray-600'}>Payment</div>
            <div className={currentStep === 'review' ? 'text-blue-600 font-medium' : 'text-gray-600'}>Review</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Shipping Information */}
              {currentStep === 'shipping' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Shipping Information</h2>
                  
                  <form onSubmit={handleShippingSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                          id="firstName"
                          type="text"
                          required
                          value={shippingInfo.firstName}
                          onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                          id="lastName"
                          type="text"
                          required
                          value={shippingInfo.lastName}
                          onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <input
                        id="address"
                        type="text"
                        required
                        value={shippingInfo.address}
                        onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <input
                          id="city"
                          type="text"
                          required
                          value={shippingInfo.city}
                          onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                        <input
                          id="state"
                          type="text"
                          required
                          value={shippingInfo.state}
                          onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                        <input
                          id="zipCode"
                          type="text"
                          required
                          value={shippingInfo.zipCode}
                          onChange={(e) => setShippingInfo({...shippingInfo, zipCode: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                      <select
                        id="country"
                        required
                        value={shippingInfo.country}
                        onChange={(e) => setShippingInfo({...shippingInfo, country: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Australia">Australia</option>
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={shippingInfo.phone}
                          onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={shippingInfo.email}
                          onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="saveInfo"
                        type="checkbox"
                        checked={shippingInfo.saveInfo}
                        onChange={(e) => setShippingInfo({...shippingInfo, saveInfo: e.target.checked})}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="saveInfo" className="ml-2 block text-sm text-gray-700">
                        Save this information for next time
                      </label>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </form>
                </div>
              )}
              
              {/* Payment Information */}
              {currentStep === 'payment' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Method</h2>
                  
                  <form onSubmit={handlePaymentSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          id="credit_card"
                          name="paymentMethod"
                          type="radio"
                          checked={paymentMethod === 'credit_card'}
                          onChange={() => setPaymentMethod('credit_card')}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor="credit_card" className="ml-3 block text-sm font-medium text-gray-700">
                          Credit / Debit Card
                        </label>
                      </div>
                      
                      {paymentMethod === 'credit_card' && (
                        <div className="ml-7 space-y-4 border-l-2 border-gray-100 pl-4">
                          <div>
                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                            <input
                              id="cardNumber"
                              type="text"
                              placeholder="1234 5678 9012 3456"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="expDate" className="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
                              <input
                                id="expDate"
                                type="text"
                                placeholder="MM / YY"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            </div>
                            <div>
                              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                              <input
                                id="cvv"
                                type="text"
                                placeholder="123"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                            <input
                              id="nameOnCard"
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center">
                        <input
                          id="paypal"
                          name="paymentMethod"
                          type="radio"
                          checked={paymentMethod === 'paypal'}
                          onChange={() => setPaymentMethod('paypal')}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor="paypal" className="ml-3 block text-sm font-medium text-gray-700">
                          PayPal
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          id="cod"
                          name="paymentMethod"
                          type="radio"
                          checked={paymentMethod === 'cod'}
                          onChange={() => setPaymentMethod('cod')}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor="cod" className="ml-3 block text-sm font-medium text-gray-700">
                          Cash on Delivery
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => setCurrentStep('shipping')}
                        className="flex items-center text-blue-600 hover:text-blue-700"
                      >
                        <ArrowLeft className="h-4 w-4 mr-1" />
                        Back to Shipping
                      </button>
                      
                      <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Review Order
                      </button>
                    </div>
                  </form>
                </div>
              )}
              
              {/* Order Review */}
              {currentStep === 'review' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Review Your Order</h2>
                  
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-medium text-gray-900 mb-2">Shipping Information</h3>
                      <div className="text-sm text-gray-600">
                        <p>{shippingInfo.firstName} {shippingInfo.lastName}</p>
                        <p>{shippingInfo.address}</p>
                        <p>{shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}</p>
                        <p>{shippingInfo.country}</p>
                        <p>{shippingInfo.phone}</p>
                        <p>{shippingInfo.email}</p>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-medium text-gray-900 mb-2">Payment Method</h3>
                      <div className="text-sm text-gray-600">
                        {paymentMethod === 'credit_card' && 'Credit / Debit Card'}
                        {paymentMethod === 'paypal' && 'PayPal'}
                        {paymentMethod === 'cod' && 'Cash on Delivery'}
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-medium text-gray-900 mb-4">Order Items</h3>
                      <div className="space-y-4">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex items-center space-x-4">
                            <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                              <Image 
                                src={item.image} 
                                alt={item.name}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-gray-900">{item.name}</p>
                              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                            </div>
                            <p className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                </div>
                
                {/* Terms and Privacy Policy Agreement */}
                <div className="mt-8 mb-6 space-y-3 border-t pt-6 border-gray-200">
                  <div className="flex items-start">
                    <div className="flex items-center h-6">
                      <input
                        id="terms"
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
                        required
                      />
                    </div>
                    <label htmlFor="terms" className="ml-3 text-sm text-gray-700">
                      I have read and agree to the <Link href="/terms" className="text-blue-600 hover:underline" target="_blank">Terms of Service</Link>*
                    </label>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-6">
                      <input
                        id="privacy"
                        type="checkbox"
                        checked={agreedToPrivacy}
                        onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                        className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
                        required
                      />
                    </div>
                    <label htmlFor="privacy" className="ml-3 text-sm text-gray-700">
                      I have read and agree to the <Link href="/privacy" className="text-blue-600 hover:underline" target="_blank">Privacy Policy</Link>*
                    </label>
                  </div>

                  <p className="text-xs text-gray-500">
                    * Required fields
                  </p>
                </div>
                
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep('payment')}
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back to Payment
                  </button>
                  
                  <button
                    type="button"
                    onClick={handlePlaceOrder}
                    className={`px-6 py-2 text-white font-medium rounded-lg transition-colors ${
                      agreedToTerms && agreedToPrivacy 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-blue-400 cursor-not-allowed'
                    }`}
                    disabled={!agreedToTerms || !agreedToPrivacy}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
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
            
            <div className="border-t border-gray-200 pt-4">
              <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                <ListChecks className="h-5 w-5 mr-2 text-green-600" />
                Order Protection
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Secure checkout</li>
                <li>• Free returns within 30 days</li>
                <li>• 1-year warranty on all products</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ProtectedRoute>
  )
}
