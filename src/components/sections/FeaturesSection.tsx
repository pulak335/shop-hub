'use client'

import { Truck, Shield, RotateCcw, CreditCard, Headphones, Clock, Star, Award } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on orders over $50",
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure payment processing",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day return policy",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    icon: CreditCard,
    title: "Multiple Payment",
    description: "Credit card, PayPal, and more",
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round the clock customer service",
    color: "text-red-600",
    bgColor: "bg-red-100"
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Same day shipping available",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100"
  }
]

const stats = [
  { number: "50K+", label: "Happy Customers" },
  { number: "100K+", label: "Products Sold" },
  { number: "99%", label: "Satisfaction Rate" },
  { number: "24/7", label: "Customer Support" }
]

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose ShopHub?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the best shopping experience with quality products, 
            excellent service, and unbeatable value.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-lg ${feature.bgColor} mb-6`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="text-sm">Trusted by Millions</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-blue-400" />
              <span className="text-sm">Award Winning Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-400" />
              <span className="text-sm">100% Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
