import { Shield, Lock, FileText } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-start mb-6">
          <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg mr-4">
            <Shield className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Your Privacy Matters</h2>
            <p className="text-gray-600">
              At ShopHub, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or make a purchase.
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
              please do not access the site.
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Information We Collect</h3>
            <p className="text-gray-600 mb-4">
              We collect personal information that you voluntarily provide to us when you register on the website, 
              express an interest in obtaining information about us or our products and services, when you participate 
              in activities on the website, or otherwise when you contact us.
            </p>
            <p className="text-gray-600">
              The personal information that we collect depends on the context of your interactions with us and the website, 
              the choices you make, and the products and features you use. The personal information we collect may include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
              <li>Name and contact information</li>
              <li>Billing and shipping address</li>
              <li>Payment information (credit card numbers, etc.)</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Account passwords</li>
              <li>Order history</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">How We Use Your Information</h3>
            <p className="text-gray-600 mb-2">
              We use personal information collected via our website for a variety of business purposes described below:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>To process your orders and manage your account</li>
              <li>To provide you with support and respond to your inquiries</li>
              <li>To send you product and service updates</li>
              <li>To improve our website and customer experience</li>
              <li>To enforce our terms, conditions, and policies</li>
              <li>To respond to legal requests and prevent harm</li>
              <li>For other business purposes, such as data analysis, identifying usage trends, etc.</li>
            </ul>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg mr-4">
              <Lock className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Security of Your Information</h3>
              <p className="text-gray-600">
                We use administrative, technical, and physical security measures to help protect your personal information. 
                While we have taken reasonable steps to secure the personal information you provide to us, please be aware 
                that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission 
                can be guaranteed against any interception or other type of misuse.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Cookies and Web Beacons</h3>
            <p className="text-gray-600">
              We may use cookies, web beacons, tracking pixels, and other tracking technologies on the website to help 
              customize the website and improve your experience. For more information on how we use cookies, please refer 
              to our <a href="/cookies" className="text-blue-600 hover:underline">Cookie Policy</a>.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Third-Party Websites</h3>
            <p className="text-gray-600">
              The website may contain links to third-party websites and applications of interest, including advertisements 
              and external services, that are not affiliated with us. Once you have used these links to leave the website, 
              any information you provide to these third parties is not covered by this Privacy Policy, and we cannot 
              guarantee the safety and privacy of your information.
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg mr-4">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Policy Updates</h3>
              <p className="text-gray-600">
                We may update this privacy policy from time to time. The updated version will be indicated by an updated 
                "Revised" date and the updated version will be effective as soon as it is accessible. If we make material 
                changes to this privacy policy, we may notify you either by prominently posting a notice of such changes 
                or by directly sending you a notification.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-4">
          If you have questions or comments about this policy, you may email us at privacy@shophub.com or contact us at:
        </p>
        <address className="text-gray-600 not-italic">
          ShopHub, Inc.<br />
          123 Commerce St<br />
          Shopping City, SC 12345<br />
          United States
        </address>
      </div>
    </div>
  )
}
