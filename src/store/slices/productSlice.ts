import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  images: string[]
  category: string
  subcategory: string
  brand: string
  sku: string
  stock: number
  rating: number
  reviewCount: number
  isFeatured: boolean
  isNewArrival: boolean
  isBestSeller: boolean
}

interface Category {
  id: string
  name: string
  subcategories: string[]
}

interface FilterState {
  priceRange: [number, number]
  categories: string[]
  brands: string[]
  rating: number
  sortBy: 'newest' | 'price-low' | 'price-high' | 'popularity'
}

interface ProductState {
  products: Product[]
  categories: Category[]
  featuredProducts: Product[]
  newArrivals: Product[]
  bestSellers: Product[]
  filteredProducts: Product[]
  filters: FilterState
  searchQuery: string
  loading: boolean
  error: string | null
}

const initialState: ProductState = {
  products: [],
  categories: [],
  featuredProducts: [],
  newArrivals: [],
  bestSellers: [],
  filteredProducts: [],
  filters: {
    priceRange: [0, 10000],
    categories: [],
    brands: [],
    rating: 0,
    sortBy: 'newest',
  },
  searchQuery: '',
  loading: false,
  error: null,
}

// Async thunks for API calls
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    // TODO: Implement actual API call
    const response = await fetch('/api/products')
    return response.json()
  }
)

export const searchProducts = createAsyncThunk(
  'products/searchProducts',
  async (query: string) => {
    // TODO: Implement actual API call
    const response = await fetch(`/api/products/search?q=${query}`)
    return response.json()
  }
)

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    updateFilters: (state, action: PayloadAction<Partial<FilterState>>) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    clearFilters: (state) => {
      state.filters = {
        priceRange: [0, 10000],
        categories: [],
        brands: [],
        rating: 0,
        sortBy: 'newest',
      }
    },
    applyFilters: (state) => {
      let filtered = [...state.products]
      
      // Apply search query
      if (state.searchQuery) {
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          product.sku.toLowerCase().includes(state.searchQuery.toLowerCase())
        )
      }
      
      // Apply price range
      filtered = filtered.filter(product =>
        product.price >= state.filters.priceRange[0] &&
        product.price <= state.filters.priceRange[1]
      )
      
      // Apply categories
      if (state.filters.categories.length > 0) {
        filtered = filtered.filter(product =>
          state.filters.categories.includes(product.category)
        )
      }
      
      // Apply brands
      if (state.filters.brands.length > 0) {
        filtered = filtered.filter(product =>
          state.filters.brands.includes(product.brand)
        )
      }
      
      // Apply rating
      if (state.filters.rating > 0) {
        filtered = filtered.filter(product =>
          product.rating >= state.filters.rating
        )
      }
      
      // Apply sorting
      switch (state.filters.sortBy) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price)
          break
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price)
          break
        case 'popularity':
          filtered.sort((a, b) => b.reviewCount - a.reviewCount)
          break
        case 'newest':
        default:
          // Assuming products have a createdAt field, sort by newest
          break
      }
      
      state.filteredProducts = filtered
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload.products
        state.categories = action.payload.categories
        state.featuredProducts = action.payload.products.filter((p: Product) => p.isFeatured)
        state.newArrivals = action.payload.products.filter((p: Product) => p.isNewArrival)
        state.bestSellers = action.payload.products.filter((p: Product) => p.isBestSeller)
        state.filteredProducts = action.payload.products
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch products'
      })
      .addCase(searchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.filteredProducts = action.payload.products
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Search failed'
      })
  },
})

export const { setSearchQuery, updateFilters, clearFilters, applyFilters } = productSlice.actions
export default productSlice.reducer
