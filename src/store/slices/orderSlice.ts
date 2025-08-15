import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

interface OrderItem {
  id: string
  productId: string
  name: string
  price: number
  quantity: number
  image: string
}

interface ShippingAddress {
  id: string
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

interface Order {
  id: string
  items: OrderItem[]
  total: number
  shippingAddress: ShippingAddress
  shippingMethod: string
  paymentMethod: string
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled'
  orderDate: Date
  estimatedDelivery?: Date
  trackingNumber?: string
  courierDetails?: string
  discountCode?: string
  discountAmount?: number
}

interface CheckoutState {
  shippingAddress: ShippingAddress | null
  shippingMethod: string
  paymentMethod: string
  discountCode: string
  discountAmount: number
}

interface OrderState {
  orders: Order[]
  currentOrder: Order | null
  checkout: CheckoutState
  loading: boolean
  error: string | null
}

const initialState: OrderState = {
  orders: [],
  currentOrder: null,
  checkout: {
    shippingAddress: null,
    shippingMethod: '',
    paymentMethod: '',
    discountCode: '',
    discountAmount: 0,
  },
  loading: false,
  error: null,
}

// Async thunks for API calls
export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async () => {
    // TODO: Implement actual API call
    const response = await fetch('/api/orders')
    return response.json()
  }
)

export const createOrder = createAsyncThunk(
  'orders/createOrder',
  async (orderData: Omit<Order, 'id' | 'orderDate' | 'status'>) => {
    // TODO: Implement actual API call
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    })
    return response.json()
  }
)

export const trackOrder = createAsyncThunk(
  'orders/trackOrder',
  async (orderId: string) => {
    // TODO: Implement actual API call
    const response = await fetch(`/api/orders/${orderId}/track`)
    return response.json()
  }
)

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setShippingAddress: (state, action: PayloadAction<ShippingAddress>) => {
      state.checkout.shippingAddress = action.payload
    },
    setShippingMethod: (state, action: PayloadAction<string>) => {
      state.checkout.shippingMethod = action.payload
    },
    setPaymentMethod: (state, action: PayloadAction<string>) => {
      state.checkout.paymentMethod = action.payload
    },
    applyDiscountCode: (state, action: PayloadAction<{ code: string; amount: number }>) => {
      state.checkout.discountCode = action.payload.code
      state.checkout.discountAmount = action.payload.amount
    },
    clearDiscountCode: (state) => {
      state.checkout.discountCode = ''
      state.checkout.discountAmount = 0
    },
    updateOrderStatus: (state, action: PayloadAction<{ orderId: string; status: Order['status'] }>) => {
      const order = state.orders.find(o => o.id === action.payload.orderId)
      if (order) {
        order.status = action.payload.status
      }
    },
    clearCheckout: (state) => {
      state.checkout = {
        shippingAddress: null,
        shippingMethod: '',
        paymentMethod: '',
        discountCode: '',
        discountAmount: 0,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false
        state.orders = action.payload.orders
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch orders'
      })
      .addCase(createOrder.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false
        state.currentOrder = action.payload.order
        state.orders.unshift(action.payload.order)
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to create order'
      })
      .addCase(trackOrder.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(trackOrder.fulfilled, (state, action) => {
        state.loading = false
        const order = state.orders.find(o => o.id === action.payload.orderId)
        if (order) {
          order.status = action.payload.status
          order.trackingNumber = action.payload.trackingNumber
          order.courierDetails = action.payload.courierDetails
          order.estimatedDelivery = action.payload.estimatedDelivery
        }
      })
      .addCase(trackOrder.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to track order'
      })
  },
})

export const {
  setShippingAddress,
  setShippingMethod,
  setPaymentMethod,
  applyDiscountCode,
  clearDiscountCode,
  updateOrderStatus,
  clearCheckout,
} = orderSlice.actions

export default orderSlice.reducer
