import { Scale, AlertCircle, FileText } from 'lucide-react'

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-start mb-6">
          <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg mr-4">
            <Scale className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Agreement to Terms</h2>
            <p className="text-gray-600">
              These Terms of Service constitute a legally binding agreement made between you and ShopHub, 
              concerning your access to and use of our website and services. By accessing or using our website, 
              you agree to be bound by these Terms. If you disagree with any part of the terms, you may not 
              access the website.
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Intellectual Property Rights</h3>
            <p className="text-gray-600">
              Unless otherwise indicated, the website is our proprietary property and all source code, databases, 
              functionality, software, website designs, audio, video, text, photographs, and graphics on the website 
              (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") 
              are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and 
              various other intellectual property rights.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">User Representations</h3>
            <p className="text-gray-600 mb-2">
              By using the website, you represent and warrant that:
            </p>
            <ol className="list-decimal pl-6 space-y-1 text-gray-600">
              <li>All registration information you submit will be true, accurate, current, and complete;</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary;</li>
              <li>You have the legal capacity and you agree to comply with these Terms of Service;</li>
              <li>You are not a minor in the jurisdiction in which you reside;</li>
              <li>You will not access the website through automated or non-human means, whether through a bot, script, or otherwise;</li>
              <li>You will not use the website for any illegal or unauthorized purpose;</li>
              <li>Your use of the website will not violate any applicable law or regulation.</li>
            </ol>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg mr-4">
              <AlertCircle className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Prohibited Activities</h3>
              <p className="text-gray-600 mb-2">
                You may not access or use the website for any purpose other than that for which we make the website available. 
                The website may not be used in connection with any commercial endeavors except those that are specifically 
                endorsed or approved by us.
              </p>
              <p className="text-gray-600">
                As a user of the website, you agree not to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>Systematically retrieve data or other content from the website to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                <li>Make any unauthorized use of the website, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the website.</li>
                <li>Engage in unauthorized framing of or linking to the website.</li>
                <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Products</h3>
            <p className="text-gray-600">
              We make every effort to display as accurately as possible the colors, features, specifications, and details of 
              the products available on the website. However, we do not guarantee that the colors, features, specifications, 
              and details of the products will be accurate, complete, reliable, current, or free of other errors, and your 
              electronic display may not accurately reflect the actual colors and details of the products.
            </p>
            <p className="text-gray-600 mt-2">
              All products are subject to availability, and we cannot guarantee that items will be in stock. We reserve the 
              right to discontinue any products at any time for any reason. Prices for all products are subject to change.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Purchases and Payment</h3>
            <p className="text-gray-600">
              We accept the following forms of payment: Visa, Mastercard, American Express, Discover, PayPal. You agree to 
              provide current, complete, and accurate purchase and account information for all purchases made via the website. 
              You further agree to promptly update account and payment information, including email address, payment method, 
              and payment card expiration date, so that we can complete your transactions and contact you as needed.
            </p>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg mr-4">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Term and Termination</h3>
              <p className="text-gray-600">
                These Terms of Service shall remain in full force and effect while you use the website. 
                We may terminate your access to the website, without cause or notice, which may result in the forfeiture 
                and destruction of all information associated with your account. All provisions of these Terms of Service 
                which by their nature should survive termination shall survive termination, including, without limitation, 
                ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-4">
          If you have questions or comments about these Terms, please contact us at:
        </p>
        <address className="text-gray-600 not-italic">
          ShopHub, Inc.<br />
          123 Commerce St<br />
          Shopping City, SC 12345<br />
          United States<br />
          legal@shophub.com
        </address>
      </div>
    </div>
  )
}
