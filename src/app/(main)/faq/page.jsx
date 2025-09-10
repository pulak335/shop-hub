'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle, ShoppingBag, CreditCard, Truck, RefreshCcw, User } from 'lucide-react'



export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [openFAQs, setOpenFAQs] = useState([])
  
  const faqs = [
    {
      id: 'order-1',
      question: 'How can I track my order?',
      answer: 'You can track your order by logging into your account and visiting the "Orders" section. Alternatively, you can use our order tracking tool on the Track Order page by entering your order number and email address.',
      category: 'orders'
    },
    {
      id: 'order-2',
      question: 'Can I modify or cancel my order after it\'s been placed?',
      answer: 'Orders can be modified or canceled within 1 hour of placement. After that, please contact our customer service team as soon as possible, and we\'ll do our best to accommodate your request if the order hasn\'t been processed for shipping yet.',
      category: 'orders'
    },
    {
      id: 'order-3',
      question: 'What should I do if an item in my order is missing or incorrect?',
      answer: 'If you receive an incomplete or incorrect order, please contact our customer service team within 48 hours of delivery. Please have your order number ready and provide details about the missing or incorrect items.',
      category: 'orders'
    },
    {
      id: 'payment-1',
      question: 'What payment methods do you accept?',
      answer: 'We accept Visa, Mastercard, American Express, Discover, PayPal, and Apple Pay. For certain regions, we also offer cash on delivery (COD) options.',
      category: 'payments'
    },
    {
      id: 'payment-2',
      question: 'When will my credit card be charged?',
      answer: 'Your credit card will be authorized when you place your order but won\'t be charged until your order ships. For pre-orders or backorders, you\'ll only be charged when the item is ready to ship.',
      category: 'payments'
    },
    {
      id: 'payment-3',
      question: 'Is it safe to use my credit card on your website?',
      answer: 'Yes, our website uses industry-standard SSL encryption to protect your personal and payment information. We are PCI DSS compliant and never store your full credit card details on our servers.',
      category: 'payments'
    },
    {
      id: 'shipping-1',
      question: 'How long will it take to receive my order?',
      answer: 'Standard shipping typically takes 5-7 business days. Express shipping takes 2-3 business days. Next-day delivery is available for orders placed before 2 PM local time. Delivery times may vary based on your location and product availability.',
      category: 'shipping'
    },
    {
      id: 'shipping-2',
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to many countries worldwide. International shipping rates and delivery times vary by location. You can view the shipping options available to your country during checkout.',
      category: 'shipping'
    },
    {
      id: 'shipping-3',
      question: 'Is free shipping available?',
      answer: 'Yes, we offer free standard shipping on all orders over $50 within the continental United States. International orders and expedited shipping options are subject to additional fees.',
      category: 'shipping'
    },
    {
      id: 'returns-1',
      question: 'What is your return policy?',
      answer: 'We accept returns within 30 days of delivery for a full refund or exchange. Items must be unused, in their original packaging, and accompanied by the receipt or proof of purchase.',
      category: 'returns'
    },
    {
      id: 'returns-2',
      question: 'How do I return an item?',
      answer: 'To return an item, log into your account, go to your order history, select the order containing the item(s) you wish to return, and click "Return Items". Follow the instructions to print a return label and ship your return.',
      category: 'returns'
    },
    {
      id: 'returns-3',
      question: 'How long does it take to process a refund?',
      answer: 'Once we receive your return, it typically takes 3-5 business days to process. After processing, it may take an additional 5-7 business days for the refund to appear on your original payment method.',
      category: 'returns'
    },
    {
      id: 'account-1',
      question: 'How do I create an account?',
      answer: 'You can create an account by clicking on the "Sign In" button at the top of the page and then selecting "Create an account". You\'ll need to provide your name, email address, and create a password.',
      category: 'account'
    },
    {
      id: 'account-2',
      question: 'I forgot my password. How can I reset it?',
      answer: 'Click on the "Sign In" button, then select "Forgot password?". Enter the email address associated with your account, and we\'ll send you instructions to reset your password.',
      category: 'account'
    },
    {
      id: 'account-3',
      question: 'How can I update my personal information or shipping address?',
      answer: 'Log into your account and go to the "Account" section. From there, you can update your personal information, change your password, and manage your saved addresses and payment methods.',
      category: 'account'
    }
  ]
  
  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory)
  
  const toggleFAQ = (id) => {
    if (openFAQs.includes(id)) {
      setOpenFAQs(openFAQs.filter(faqId => faqId !== id))
    } else {
      setOpenFAQs([...openFAQs, id])
    }
  }
  
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'orders':
        return <ShoppingBag className="h-5 w-5" />;
      case 'payments':
        return <CreditCard className="h-5 w-5" />;
      case 'shipping':
        return <Truck className="h-5 w-5" />;
      case 'returns':
        return <RefreshCcw className="h-5 w-5" />;
      case 'account':
        return <User className="h-5 w-5" />;
      default:
        return <HelpCircle className="h-5 w-5" />;
    }
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-start mb-8">
          <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg mr-4">
            <HelpCircle className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">How Can We Help You?</h2>
            <p className="text-gray-600">
              Find answers to frequently asked questions about our products, orders, shipping, returns, and more. 
              If you can't find what you're looking for, please <a href="/help" className="text-blue-600 hover:underline">contact our support team</a>.
            </p>
          </div>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button 
            onClick={() => setActiveCategory('all')} 
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeCategory === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <HelpCircle className="h-4 w-4 mr-2" />
            All FAQs
          </button>
          
          <button 
            onClick={() => setActiveCategory('orders')} 
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeCategory === 'orders' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Orders
          </button>
          
          <button 
            onClick={() => setActiveCategory('payments')} 
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeCategory === 'payments' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <CreditCard className="h-4 w-4 mr-2" />
            Payments
          </button>
          
          <button 
            onClick={() => setActiveCategory('shipping')} 
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeCategory === 'shipping' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Truck className="h-4 w-4 mr-2" />
            Shipping
          </button>
          
          <button 
            onClick={() => setActiveCategory('returns')} 
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeCategory === 'returns' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <RefreshCcw className="h-4 w-4 mr-2" />
            Returns
          </button>
          
          <button 
            onClick={() => setActiveCategory('account')} 
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeCategory === 'account' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <User className="h-4 w-4 mr-2" />
            Account
          </button>
        </div>
        
        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => (
            <div 
              key={faq.id} 
              className="border border-gray-200 rounded-lg overflow-hidden"
              id={faq.id}
            >
              <button 
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(faq.id)}
              >
                <div className="flex items-center">
                  <span className="flex-shrink-0 mr-3 text-blue-600">
                    {getCategoryIcon(faq.category)}
                  </span>
                  <span className="font-medium">{faq.question}</span>
                </div>
                <span>
                  {openFAQs.includes(faq.id) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </span>
              </button>
              
              {openFAQs.includes(faq.id) && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Still Have Questions?</h2>
        <p className="text-gray-600 mb-6">
          If you couldn't find the answer you were looking for, our customer service team is here to help.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/help" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </a>
          <a 
            href="tel:+15551234567" 
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Call Us: (555) 123-4567
          </a>
        </div>
      </div>
    </div>
  )
}
