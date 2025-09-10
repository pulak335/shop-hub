'use client'

import { useState, useEffect } from 'react'

import ProtectedRoute from '@/components/auth/ProtectedRoute'

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [isEditing, setIsEditing] = useState(false)
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  })
  const [editForm, setEditForm] = useState({ ...userInfo })
  
  // Mock user state - replace with your auth solution
  const [user, setUser] = useState(null)
  
  // Populate form with user data when available
  useEffect(() => {
    if (user) {
      const nameParts = user.name.split(' ')
      const firstName = nameParts[0]
      const lastName = nameParts.slice(1).join(' ')

      setUserInfo({
        firstName,
        lastName,
        email: user.email,
        phone: user.phone || '',
        address: user.addresses && user.addresses.length > 0
          ? `${user.addresses[0].street}, ${user.addresses[0].city}, ${user.addresses[0].state} ${user.addresses[0].zipCode}`
          : ''
      })
      setEditForm({ /* same as above */ 
        firstName,
        lastName,
        email: user.email,
        phone: user.phone || '',
        address: user.addresses && user.addresses.length > 0
          ? `${user.addresses[0].street}, ${user.addresses[0].city}, ${user.addresses[0].state} ${user.addresses[0].zipCode}`
          : ''
      })
    }
  }, [user])

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleCancel = () => {
    setEditForm({ ...userInfo })
    setIsEditing(false)
  }

  const handleSave = () => {
    setUserInfo(editForm)
    setIsEditing(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditForm(prev => ({ ...prev, [name]: value }))
  }

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Account</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <nav>
                <ul className="space-y-1">
                  <li>
                    <button 
                      onClick={() => setActiveTab('profile')}
                      className={`w-full text-left px-4 py-2 rounded-lg ${activeTab === 'profile' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                    >
                      Profile Information
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('orders')}
                      className={`w-full text-left px-4 py-2 rounded-lg ${activeTab === 'orders' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                    >
                      My Orders
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('addresses')}
                      className={`w-full text-left px-4 py-2 rounded-lg ${activeTab === 'addresses' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                    >
                      Addresses
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('wishlist')}
                      className={`w-full text-left px-4 py-2 rounded-lg ${activeTab === 'wishlist' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                    >
                      Wishlist
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('security')}
                      className={`w-full text-left px-4 py-2 rounded-lg ${activeTab === 'security' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                    >
                      Security
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {activeTab === 'profile' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Profile Information</h2>
                    {!isEditing && (
                      <button 
                        onClick={handleEdit}
                        className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      >
                        Edit Profile
                      </button>
                    )}
                  </div>
                  
                  {isEditing ? (
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            value={editForm.firstName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            value={editForm.lastName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={editForm.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={editForm.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input
                          type="text"
                          name="address"
                          value={editForm.address}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div className="flex justify-end space-x-3 pt-4">
                        <button
                          type="button"
                          onClick={handleCancel}
                          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={handleSave}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">First Name</p>
                          <p className="font-medium">{userInfo.firstName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Last Name</p>
                          <p className="font-medium">{userInfo.lastName}</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{userInfo.email}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">{userInfo.phone || 'Not provided'}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="font-medium">{userInfo.address || 'No address on file'}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">My Orders</h2>
                  <p className="text-gray-500">You haven't placed any orders yet.</p>
                </div>
              )}
              
              {activeTab === 'addresses' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">My Addresses</h2>
                  <p className="text-gray-500">No addresses saved.</p>
                </div>
              )}
              
              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">My Wishlist</h2>
                  <p className="text-gray-500">Your wishlist is empty.</p>
                </div>
              )}
              
              {activeTab === 'security' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Security Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Change Password</h3>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        Change Password
                      </button>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Two-Factor Authentication</h3>
                      <p className="text-gray-500 mb-2">Add an extra layer of security to your account.</p>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        Enable 2FA
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}