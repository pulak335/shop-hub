'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Mock authentication check - replace with your auth solution
    const checkAuth = () => {
      // Simulate checking authentication (e.g., from localStorage, cookies, etc.)
      const token = localStorage.getItem('authToken')
      setIsAuthenticated(!!token)
      setLoading(false)
    }

    checkAuth()
  }, [])

  useEffect(() => {
    // If authentication is not loading and user is not authenticated, redirect to login
    if (!loading && !isAuthenticated) {
      // Get the current path to use as a returnUrl
      const currentPath = window.location.pathname
      router.push(`/login?returnUrl=${encodeURIComponent(currentPath)}`)
    }
  }, [isAuthenticated, loading, router])

  // Show nothing while checking authentication or redirecting
  if (loading || !isAuthenticated) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return <>{children}</>
}