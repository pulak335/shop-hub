'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletterSignup = (e) => {
    e.preventDefault()
    // TODO: Implement newsletter signup
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">ShopHub</h3>
            <p className="text-gray-300 mb-4">
              Your one-stop destination for quality products, exceptional service, and unbeatable prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="/categories" className="text-gray-300 hover:text-white transition-colors">Categories</a></li>
              <li><a href="/deals" className="text-gray-300 hover:text-white transition-colors">Deals</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="/help" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/shipping" className="text-gray-300 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="/returns" className="text-gray-300 hover:text-white transition-colors">Returns</a></li>
              <li><a href="/track-order" className="text-gray-300 hover:text-white transition-colors">Track Order</a></li>
              <li><a href="/size-guide" className="text-gray-300 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-gray-300 mb-3">Subscribe to our newsletter for exclusive offers and updates.</p>
              <form onSubmit={handleNewsletterSignup} className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 text-gray-900 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@shophub.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span>123 Commerce St, Business City, BC 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 ShopHub. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              <a href="/sitemap" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}