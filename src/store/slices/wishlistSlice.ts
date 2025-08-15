import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface WishlistItem {
  id: string
  name: string
  price: number
  image: string
  sku: string
  addedAt: Date
}

interface WishlistState {
  items: WishlistItem[]
  itemCount: number
}

const initialState: WishlistState = {
  items: [],
  itemCount: 0,
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Omit<WishlistItem, 'addedAt'>>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (!existingItem) {
        state.items.push({
          ...action.payload,
          addedAt: new Date(),
        })
        state.itemCount = state.items.length
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      state.itemCount = state.items.length
    },
    moveToCart: (state, action: PayloadAction<string>) => {
      // This will be handled by the cart slice
      state.items = state.items.filter(item => item.id !== action.payload)
      state.itemCount = state.items.length
    },
    clearWishlist: (state) => {
      state.items = []
      state.itemCount = 0
    },
  },
})

export const { addToWishlist, removeFromWishlist, moveToCart, clearWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
