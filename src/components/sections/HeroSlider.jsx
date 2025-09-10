'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ShoppingBag, Star, Truck, Shield } from 'lucide-react'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    title: "New Collection 2024",
    subtitle: "Discover the Latest Trends",
    description: "Shop our newest arrivals featuring premium quality products at unbeatable prices. Limited time offers available.",
    image: "/images/slider/s-1.jpg",
    buttonText: "Shop Now",
    buttonLink: "/products",
    features: ["Free Shipping", "Premium Quality", "30-Day Returns"]
  },
  {
    id: 2,
    title: "Electronics Sale",
    subtitle: "Up to 50% Off",
    description: "Get amazing deals on the latest electronics. From smartphones to laptops, we have everything you need.",
    image: "/images/slider/s-2.jpg",
    buttonText: "View Deals",
    buttonLink: "/deals",
    features: ["Huge Discounts", "Fast Delivery", "Warranty Included"]
  },
  {
    id: 3,
    title: "Fashion Forward",
    subtitle: "Style Meets Comfort",
    description: "Express your unique style with our curated collection of trendy fashion items for every occasion.",
    image: "/images/slider/s-3.jpg",
    buttonText: "Explore Fashion",
    buttonLink: "/categories/fashion",
    features: ["Trendy Designs", "Comfortable Fit", "Affordable Prices"]
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 3 seconds
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  return (
    <section className="relative h-[600px] overflow-hidden bg-gray-100">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full mb-3">
                      {slide.subtitle}
                    </span>
                  </div>
                  
                  <h1 className="text-5xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  
                  <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    {slide.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <Star className="h-4 w-4 text-yellow-400 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={slide.buttonLink}
                    className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Pause/Play Button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
        aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isAutoPlaying ? (
          <div className="w-4 h-4 border-2 border-white border-l-transparent rounded-full animate-spin" />
        ) : (
          <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1" />
        )}
      </button>
    </section>
  )
}