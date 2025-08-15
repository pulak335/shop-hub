import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: string
  email: string
  phone?: string
  name: string
  addresses: Address[]
}

interface Address {
  id: string
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  isDefault: boolean
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
}

// Async thunks for API calls
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }) => {
    // TODO: Implement actual API call
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    })
    return response.json()
  }
)

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData: { email: string; password: string; name: string; phone?: string }) => {
    // TODO: Implement actual API call
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
    return response.json()
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
    },
    updateProfile: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload }
      }
    },
    addAddress: (state, action: PayloadAction<Address>) => {
      if (state.user) {
        state.user.addresses.push(action.payload)
      }
    },
    removeAddress: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.addresses = state.user.addresses.filter(addr => addr.id !== action.payload)
      }
    },
    setDefaultAddress: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.addresses.forEach(addr => {
          addr.isDefault = addr.id === action.payload
        })
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.isAuthenticated = true
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Login failed'
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.isAuthenticated = true
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Registration failed'
      })
  },
})

export const { logout, updateProfile, addAddress, removeAddress, setDefaultAddress } = authSlice.actions
export default authSlice.reducer
