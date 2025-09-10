import { Cookie, Info, Settings } from 'lucide-react'

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-start mb-6">
          <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg mr-4">
            <Cookie className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">What Are Cookies</h2>
            <p className="text-gray-600">
              Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored 
              in your web browser and allows the website or a third-party to recognize you and make your next visit easier 
              and more useful to you.
            </p>
            <p className="text-gray-600 mt-2">
              Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or 
              mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">How We Use Cookies</h3>
            <p className="text-gray-600 mb-2">
              When you use and access our website, we may place a number of cookie files in your web browser. 
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>
                <span className="font-medium">Essential cookies:</span> These are cookies that are required for the operation of our website. 
                They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart, 
                or make use of e-billing services.
              </li>
              <li>
                <span className="font-medium">Analytical/performance cookies:</span> These allow us to recognize and count the number of visitors 
                and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, 
                for example, by ensuring that users are finding what they are looking for easily.
              </li>
              <li>
                <span className="font-medium">Functionality cookies:</span> These are used to recognize you when you return to our website. 
                This enables us to personalize our content for you, greet you by name, and remember your preferences 
                (for example, your choice of language or region).
              </li>
              <li>
                <span className="font-medium">Targeting cookies:</span> These cookies record your visit to our website, the pages you have 
                visited, and the links you have followed. We will use this information to make our website and the advertising 
                displayed on it more relevant to your interests.
              </li>
            </ul>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg mr-4">
              <Info className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Third-Party Cookies</h3>
              <p className="text-gray-600">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, 
                deliver advertisements on and through the website, and so on. These cookies may include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>Google Analytics cookies for website analytics and performance tracking</li>
                <li>Facebook Pixel for advertising and remarketing</li>
                <li>Payment processor cookies to process purchases on our site</li>
                <li>Social media sharing buttons that may set cookies when used</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">What Are Your Choices Regarding Cookies</h3>
            <p className="text-gray-600 mb-2">
              If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
            </p>
            <p className="text-gray-600">
              Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, 
              you may not be able to store your preferences, and some of our pages might not display properly.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
              <li>For Chrome web browser, please visit <a href="https://support.google.com/accounts/answer/32050" className="text-blue-600 hover:underline">this page</a></li>
              <li>For Internet Explorer web browser, please visit <a href="https://support.microsoft.com/help/17442" className="text-blue-600 hover:underline">this page</a></li>
              <li>For Firefox web browser, please visit <a href="https://support.mozilla.org/kb/delete-cookies-remove-info-websites-stored" className="text-blue-600 hover:underline">this page</a></li>
              <li>For Safari web browser, please visit <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" className="text-blue-600 hover:underline">this page</a></li>
            </ul>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg mr-4">
              <Settings className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Cookie Preferences</h3>
              <p className="text-gray-600">
                You can manage your cookie preferences at any time by clicking on the "Cookie Settings" button at the bottom of our website. 
                This will allow you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they 
                are strictly necessary to provide you with services.
              </p>
              <div className="mt-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Cookie Settings
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Changes to the Cookie Policy</h3>
            <p className="text-gray-600">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page. 
              You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they 
              are posted on this page.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-4">
          If you have any questions about our Cookie Policy, please contact us:
        </p>
        <ul className="space-y-2 text-gray-600">
          <li><span className="font-medium">By email:</span> privacy@shophub.com</li>
          <li><span className="font-medium">By phone:</span> (555) 123-4567</li>
          <li>
            <span className="font-medium">By mail:</span>
            <address className="not-italic inline-block ml-2">
              ShopHub, Inc., 123 Commerce St, Shopping City, SC 12345, United States
            </address>
          </li>
        </ul>
      </div>
    </div>
  )
}
