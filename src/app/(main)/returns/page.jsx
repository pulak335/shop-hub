import { RefreshCcw, ShieldCheck, Clock, HelpCircle } from 'lucide-react'
import Link from 'next/link'

export default function ReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Returns & Exchanges</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Our Return Policy</h2>
        
        <div className="space-y-6">
          <p className="text-gray-600">
            We want you to be completely satisfied with your purchase. If you're not happy with your order for any reason, 
            we accept returns within 30 days of delivery for a full refund or exchange.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <RefreshCcw className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-medium mb-2">Easy Returns</h3>
              <p className="text-sm text-gray-600">Return any item within 30 days of delivery</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-medium mb-2">Quality Guarantee</h3>
              <p className="text-sm text-gray-600">All products backed by our quality promise</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-medium mb-2">Fast Processing</h3>
              <p className="text-sm text-gray-600">Refunds processed within 5-7 business days</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">How to Return an Item</h2>
        
        <div className="space-y-6">
          <ol className="list-decimal pl-6 space-y-4">
            <li className="text-gray-600">
              <span className="text-gray-900 font-medium">Initiate your return:</span> Log in to your account and go to your order history. 
              Select the order containing the item(s) you wish to return and click on "Return Items".
            </li>
            <li className="text-gray-600">
              <span className="text-gray-900 font-medium">Select items to return:</span> Choose which items you want to return and select a reason for the return.
            </li>
            <li className="text-gray-600">
              <span className="text-gray-900 font-medium">Print return label:</span> Download and print the prepaid return shipping label. If you don't have a printer, 
              you can request to have a label mailed to you.
            </li>
            <li className="text-gray-600">
              <span className="text-gray-900 font-medium">Package your return:</span> Place the item(s) in the original packaging if possible, or in a secure box.
              Include any accessories that came with the product.
            </li>
            <li className="text-gray-600">
              <span className="text-gray-900 font-medium">Ship your return:</span> Attach the return label to your package and drop it off at any authorized shipping location.
            </li>
            <li className="text-gray-600">
              <span className="text-gray-900 font-medium">Receive your refund:</span> Once we receive and process your return, we'll issue a refund to your original payment method.
              This typically takes 5-7 business days after we receive your return.
            </li>
          </ol>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Return Conditions</h2>
        
        <div className="space-y-4">
          <p className="text-gray-600">
            To be eligible for a return, your item must be:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Unused and in the same condition that you received it</li>
            <li>In the original packaging</li>
            <li>Accompanied by the receipt or proof of purchase</li>
            <li>Returned within 30 days of delivery</li>
          </ul>
          
          <p className="text-gray-600 mt-4">
            Some items cannot be returned, including:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Gift cards</li>
            <li>Downloadable software products</li>
            <li>Personal care items (for hygiene reasons)</li>
            <li>Custom or personalized orders</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg mr-4">
            <HelpCircle className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our return policy or need assistance with a return, 
              our customer service team is here to help.
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
