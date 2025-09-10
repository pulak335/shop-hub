'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown, LogOut, Settings, Package } from 'lucide-react'

export default function Header() {
  const router = useRouter()
  // Mock authentication state - replace with your auth solution
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const [wishlistItems, setWishlistItems] = useState([])
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const categoriesRef = useRef(null)
  const userMenuRef = useRef(null)

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUser(null)
    setIsUserMenuOpen(false)
    router.push('/')
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
      setIsSearchOpen(false)
      setIsMobileMenuOpen(false)
    }
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const categories = [
    { name: 'Electronics', href: '/category/electronics' },
    { name: 'Clothing', href: '/category/clothing' },
    { name: 'Home & Garden', href: '/category/home-garden' },
    { name: 'Sports', href: '/category/sports' },
    { name: 'Books', href: '/category/books' },
    { name: 'Beauty', href: '/category/beauty' },
  ]

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoriesRef.current && !categoriesRef.current.contains(event.target)) {
        setIsCategoriesOpen(false)
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsSearchOpen(false)
  }, [router])

  return (
    <>
    {/* Mobile Menu Backdrop */}
    {isMobileMenuOpen && (
      <div 
        className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={() => setIsMobileMenuOpen(false)}
      />
    )}
    
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-gray-900">EcomStore</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Categories Dropdown */}
            <div className="relative" ref={categoriesRef}>
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Categories
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsCategoriesOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation Links */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>


          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Link>

            {/* User Account */}
            {isAuthenticated ? (
              <div className="hidden lg:block relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="User menu"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="font-medium text-blue-700 text-sm">{user?.name.charAt(0)}</span>
                  </div>
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="font-medium text-gray-900 truncate">{user?.name}</p>
                      <p className="text-sm text-gray-500 truncate">{user?.email}</p>
                    </div>
                    <Link
                      href="/account"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <User className="h-4 w-4 mr-2 text-gray-500" />
                      My Profile
                    </Link>
                    <Link
                      href="/account?tab=orders"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <Package className="h-4 w-4 mr-2 text-gray-500" />
                      My Orders
                    </Link>
                    <Link
                      href="/account?tab=settings"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <Settings className="h-4 w-4 mr-2 text-gray-500" />
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-left"
                    >
                      <LogOut className="h-4 w-4 mr-2 text-gray-500" />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden lg:flex items-center space-x-2">
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isSearchOpen ? 'max-h-20 pb-4' : 'max-h-0'
        }`}>
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoFocus={isSearchOpen}
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center">
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="p-1 text-gray-400 hover:text-blue-600 transition-colors mr-1"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              <button
                type="submit"
                className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="Search"
                disabled={!searchQuery.trim()}
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-auto border-t border-gray-200 bg-white shadow-lg max-h-[70vh] overflow-y-auto transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{ maxHeight: 'calc(100vh - 120px)', zIndex: 40 }}
      >
          <div className="container mx-auto px-4 py-4">
            {/* User Account Section in Mobile Menu */}
            {isAuthenticated && (
              <div className="mb-6 pb-4 border-b border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="font-medium text-blue-700 text-lg">{user?.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{user?.name}</p>
                    <p className="text-sm text-gray-500 truncate">{user?.email}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <Link 
                    href="/account" 
                    className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User className="h-4 w-4 mr-2 text-gray-500" />
                    My Profile
                  </Link>
                  <Link 
                    href="/account?tab=orders" 
                    className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Package className="h-4 w-4 mr-2 text-gray-500" />
                    My Orders
                  </Link>
                  <Link 
                    href="/account?tab=settings" 
                    className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Settings className="h-4 w-4 mr-2 text-gray-500" />
                    Settings
                  </Link>
                  <button 
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }} 
                    className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors text-left"
                  >
                    <LogOut className="h-4 w-4 mr-2 text-gray-500" />
                    Sign out
                  </button>
                </div>
              </div>
            )}

            {/* Login/Register Section for non-authenticated users */}
            {!isAuthenticated && (
              <div className="mb-6 pb-4 border-b border-gray-200">
                <p className="text-gray-700 font-medium mb-3">Account</p>
                <div className="grid grid-cols-2 gap-2">
                  <Link 
                    href="/login" 
                    className="flex justify-center items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign in
                  </Link>
                  <Link 
                    href="/register" 
                    className="flex justify-center items-center px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              </div>
            )}

            <nav className="space-y-4">
              {/* Main Navigation */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-gray-700 font-medium mb-3">Navigation</p>
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Mobile Categories */}
              <div>
                <p className="text-gray-700 font-medium mb-3">Categories</p>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
      </div>
    </header>
    </>
  )
}