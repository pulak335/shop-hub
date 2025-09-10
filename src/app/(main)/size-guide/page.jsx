'use client'

import { useState } from 'react'
import { Ruler, Shirt, ShoppingBag, HelpCircle, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function SizeGuidePage() {
  const [activeCategory, setActiveCategory] = useState('clothing')
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Size Guide</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-start mb-6">
          <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg mr-4">
            <Ruler className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Find Your Perfect Fit</h2>
            <p className="text-gray-600">
              Use our size guides to find the perfect fit for all our products. If you're between sizes, 
              we recommend sizing up for a more comfortable fit.
            </p>
          </div>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-gray-200 mb-6 pb-4">
          <button 
            onClick={() => setActiveCategory('clothing')} 
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeCategory === 'clothing' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Shirt className="h-4 w-4 mr-2" />
            Clothing
          </button>
          
          <button 
            onClick={() => setActiveCategory('shoes')} 
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeCategory === 'shoes' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Shoes
          </button>
          
          <button 
            onClick={() => setActiveCategory('accessories')} 
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeCategory === 'accessories' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Zap className="h-4 w-4 mr-2" />
            Accessories
          </button>
        </div>
        
        {/* Size Guide Content */}
        {activeCategory === 'clothing' && (
          <div>
            <h3 className="text-lg font-medium mb-4">Clothing Size Chart</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Size
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Chest (inches)
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Waist (inches)
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Hips (inches)
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      US Size
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      EU Size
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">XS</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">31-33</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">24-26</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">34-36</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0-2</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">32-34</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">S</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">33-35</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">26-28</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">36-38</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">4-6</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">36-38</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">M</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">35-37</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">28-30</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">38-40</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">8-10</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">40-42</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">L</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">37-40</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">30-33</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">40-43</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">12-14</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">44-46</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">XL</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">40-43</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">33-36</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">43-46</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">16-18</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">48-50</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">XXL</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">43-46</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">36-40</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">46-50</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">20-22</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">52-54</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h4 className="font-medium text-blue-800 mb-2">How to Measure</h4>
              <ul className="list-disc pl-5 text-blue-700 space-y-1">
                <li>Chest: Measure around the fullest part of your chest, keeping the measuring tape horizontal.</li>
                <li>Waist: Measure around your natural waistline, keeping the tape comfortably loose.</li>
                <li>Hips: Measure around the fullest part of your hips.</li>
              </ul>
            </div>
          </div>
        )}
        
        {activeCategory === 'shoes' && (
          <div>
            <h3 className="text-lg font-medium mb-4">Shoe Size Chart</h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      US (Men)
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      US (Women)
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      EU
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      UK
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Inches
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      CM
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">7</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">8.5</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">40</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">6.5</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">9.6"</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">24.4</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">8</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">9.5</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">41</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">7.5</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">9.9"</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">25.1</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">9</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">10.5</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">42</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">8.5</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">10.25"</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">26.0</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">10</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">11.5</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">44</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">9.5</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">10.6"</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">27.0</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">11</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">12.5</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">45</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">10.5</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">11.0"</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">27.9</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h4 className="font-medium text-blue-800 mb-2">How to Measure Your Shoe Size</h4>
              <ol className="list-decimal pl-5 text-blue-700 space-y-2">
                <li>Place a piece of paper on the floor against a wall.</li>
                <li>Stand on the paper with your heel against the wall.</li>
                <li>Mark the longest part of your foot on the paper.</li>
                <li>Measure the distance from the wall to the mark in inches or centimeters.</li>
                <li>Use the measurement to find your size in the chart above.</li>
              </ol>
            </div>
          </div>
        )}
        
        {activeCategory === 'accessories' && (
          <div>
            <h3 className="text-lg font-medium mb-4">Accessories Size Chart</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-medium mb-3">Belts</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Size
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Waist (inches)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">S</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">28-30</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">M</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">32-34</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">L</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">36-38</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">XL</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">40-42</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Hats</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Size
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Head Circumference (inches)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">S</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">21-21.5</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">M</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">22-22.5</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">L</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">23-23.5</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">XL</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">24-24.5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg mr-4">
            <HelpCircle className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Need More Help?</h2>
            <p className="text-gray-600 mb-4">
              If you're still unsure about which size to choose, our customer service team is here to help.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/help" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Contact Support
              </Link>
              <Link href="/faq" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                View FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
