import { useEffect, useState } from 'react'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500))
        
        const response = await fetch('/data/products.json')
        const productsData = await response.json()
        
        // Extract unique categories from products
        const categoriesData = Array.from(new Set(productsData.map(product => product.category)))
          .map(categoryName => ({
            id: categoryName.toLowerCase().replace(/\s+/g, '-'),
            name: categoryName,
            subcategories: Array.from(new Set(
              productsData
                .filter(product => product.category === categoryName)
                .map(product => product.subcategory)
            ))
          }))
        
        setProducts(productsData)
        setCategories(categoriesData)
        setError(null)
      } catch (err) {
        setError('Failed to fetch products')
        console.error('Error fetching products:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, categories, loading, error }
}

export default useProducts;