import { Truck, Clock, Globe, Package } from 'lucide-react'

export default function ShippingInfoPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Shipping Information</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Shipping Options</h2>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg mr-4">
              <Truck className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Standard Shipping</h3>
              <p className="text-gray-600 mb-2">Delivery within 5-7 business days</p>
              <p className="text-gray-700">
                <span className="font-medium">$5.99</span> or <span className="font-medium">FREE</span> on orders over $50
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg mr-4">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Express Shipping</h3>
              <p className="text-gray-600 mb-2">Delivery within 2-3 business days</p>
              <p className="text-gray-700">
                <span className="font-medium">$12.99</span>
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg mr-4">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Next Day Delivery</h3>
              <p className="text-gray-600 mb-2">Order by 2PM for delivery next business day</p>
              <p className="text-gray-700">
                <span className="font-medium">$24.99</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Shipping Policies</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Processing Time</h3>
            <p className="text-gray-600">
              All orders are processed within 1-2 business days after payment confirmation. 
              Orders placed on weekends or holidays will be processed on the next business day.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Shipping Destinations</h3>
            <p className="text-gray-600">
              We currently ship to the United States, Canada, and select international destinations. 
              International shipping rates and delivery times vary by location.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Order Tracking</h3>
            <p className="text-gray-600">
              Once your order ships, you will receive a shipping confirmation email with a tracking number. 
              You can track your order status on our website by visiting the <a href="/track-order" className="text-blue-600 hover:underline">Order Tracking</a> page.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">International Shipping</h2>
        
        <div className="flex items-start mb-6">
          <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg mr-4">
            <Globe className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-gray-600">
              We ship to many countries worldwide. International shipping rates are calculated at checkout based on destination, 
              weight, and shipping method. Please note that international orders may be subject to customs duties and taxes, 
              which are the responsibility of the recipient.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-6">
          <h3 className="text-lg font-medium mb-2">Estimated Delivery Times for International Orders</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Region
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Standard Shipping
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Express Shipping
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Canada</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">7-10 business days</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">3-5 business days</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Europe</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">10-15 business days</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">5-7 business days</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Australia/New Zealand</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">12-18 business days</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">7-10 business days</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Asia</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">10-15 business days</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">5-8 business days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
