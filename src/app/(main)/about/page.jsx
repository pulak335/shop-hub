import Image from 'next/image'
import Link from 'next/link'
import { Award, Users, Heart, Truck, Globe, CheckCircle } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white rounded-xl overflow-hidden mb-16">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-lg text-blue-100 mb-8">
              We're on a mission to make quality products accessible to everyone. 
              Founded in 2015, ShopHub has grown from a small startup to a trusted 
              e-commerce destination serving customers worldwide.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors w-fit"
            >
              Get in Touch
            </Link>
          </div>
          <div className="lg:w-1/2 h-64 lg:h-auto relative">
            <Image 
              src="/api/placeholder/800/600" 
              alt="Team at work" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Our Mission */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-xl text-gray-600 mb-8">
          To create an exceptional shopping experience that empowers customers to find 
          products they love while supporting sustainable and ethical business practices.
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-medium">People First</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-medium">Quality Products</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-medium">Global Reach</h3>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Journey */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-4">2015</div>
            <h3 className="text-xl font-medium mb-3">The Beginning</h3>
            <p className="text-gray-600">
              ShopHub was founded with a simple online store selling just 10 products. 
              Our focus on customer service quickly built a loyal following.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-4">2017</div>
            <h3 className="text-xl font-medium mb-3">Expanding Horizons</h3>
            <p className="text-gray-600">
              We expanded our product range to over 1,000 items and opened our first 
              physical store, bringing our unique shopping experience offline.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-4">2020</div>
            <h3 className="text-xl font-medium mb-3">Digital Transformation</h3>
            <p className="text-gray-600">
              We launched our mobile app and revamped our online presence, making it easier 
              than ever for customers to find and purchase products they love.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-4">Today</div>
            <h3 className="text-xl font-medium mb-3">Global Presence</h3>
            <p className="text-gray-600">
              ShopHub now serves customers in over 50 countries with a catalog of more than 
              10,000 products, while maintaining our commitment to quality and service.
            </p>
          </div>
        </div>
      </div>
      
      {/* Why Choose Us */}
      <div className="bg-gray-50 rounded-xl p-8 lg:p-16 mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Why Choose ShopHub</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                We carefully select each product in our catalog to ensure it meets our high standards.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Truck className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Fast Shipping</h3>
              <p className="text-gray-600">
                With our global logistics network, we deliver your orders quickly and efficiently.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Award-Winning Service</h3>
              <p className="text-gray-600">
                Our customer support team has been recognized for excellence in the industry.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Community Focus</h3>
              <p className="text-gray-600">
                We give back to communities through various social responsibility initiatives.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Customer Loyalty</h3>
              <p className="text-gray-600">
                Our rewards program recognizes and appreciates our loyal customers.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Global Perspective</h3>
              <p className="text-gray-600">
                We source products from around the world to bring you unique selections.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 relative">
              <Image 
                src="/api/placeholder/200/200" 
                alt="CEO" 
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium">Sarah Johnson</h3>
            <p className="text-blue-600">CEO & Founder</p>
          </div>
          
          <div className="text-center">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 relative">
              <Image 
                src="/api/placeholder/200/200" 
                alt="CTO" 
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium">David Chen</h3>
            <p className="text-blue-600">Chief Technology Officer</p>
          </div>
          
          <div className="text-center">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 relative">
              <Image 
                src="/api/placeholder/200/200" 
                alt="COO" 
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium">Michael Rodriguez</h3>
            <p className="text-blue-600">Chief Operations Officer</p>
          </div>
          
          <div className="text-center">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 relative">
              <Image 
                src="/api/placeholder/200/200" 
                alt="CMO" 
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium">Emily Wong</h3>
            <p className="text-blue-600">Chief Marketing Officer</p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-blue-600 text-white rounded-xl p-8 lg:p-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Whether you're a customer, partner, or looking to join our team, we'd love to hear from you. 
          Let's create something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
          <Link 
            href="/products" 
            className="px-8 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  )
}