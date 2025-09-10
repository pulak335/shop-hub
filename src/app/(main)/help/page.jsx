import Link from 'next/link'
import { Mail, Phone, MessageCircle } from 'lucide-react'

export default function HelpCenterPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Help Center</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">How Can We Help You?</h2>
        <p className="text-gray-600 mb-6">
          Find answers to frequently asked questions, get help with your orders, or contact our customer support team.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6 text-center">
            <Mail className="h-8 w-8 mx-auto mb-4 text-blue-600" />
            <h3 className="text-lg font-medium mb-2">Email Support</h3>
            <p className="text-gray-600 mb-4">Send us an email and we'll get back to you within 24 hours.</p>
            <a href="mailto:support@shophub.com" className="text-blue-600 hover:underline">support@shophub.com</a>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 text-center">
            <Phone className="h-8 w-8 mx-auto mb-4 text-blue-600" />
            <h3 className="text-lg font-medium mb-2">Phone Support</h3>
            <p className="text-gray-600 mb-4">Call us Monday-Friday, 9am-5pm EST.</p>
            <a href="tel:+15551234567" className="text-blue-600 hover:underline">(555) 123-4567</a>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 text-center">
            <MessageCircle className="h-8 w-8 mx-auto mb-4 text-blue-600" />
            <h3 className="text-lg font-medium mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">Chat with our support team in real-time.</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Start Chat</button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Popular Topics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Orders & Shipping</h3>
            <ul className="space-y-2">
              <li><Link href="/faq#track-order" className="text-blue-600 hover:underline">How to track my order</Link></li>
              <li><Link href="/shipping" className="text-blue-600 hover:underline">Shipping policies</Link></li>
              <li><Link href="/returns" className="text-blue-600 hover:underline">Returns and exchanges</Link></li>
              <li><Link href="/faq#order-issues" className="text-blue-600 hover:underline">Common order issues</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Account & Payment</h3>
            <ul className="space-y-2">
              <li><Link href="/faq#account" className="text-blue-600 hover:underline">Managing your account</Link></li>
              <li><Link href="/faq#payment" className="text-blue-600 hover:underline">Payment methods</Link></li>
              <li><Link href="/faq#security" className="text-blue-600 hover:underline">Security concerns</Link></li>
              <li><Link href="/privacy" className="text-blue-600 hover:underline">Privacy policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
