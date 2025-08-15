import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchProducts } from '@/store/slices/productSlice'

export function useProducts() {
  const dispatch = useAppDispatch()
  const { products, categories, loading, error } = useAppSelector((state) => state.products)

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts())
    }
  }, [dispatch, products.length])

  return { products, categories, loading, error }
}
