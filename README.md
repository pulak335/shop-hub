# E-Commerce Platform

A modern, full-featured e-commerce platform built with Next.js, TypeScript, Tailwind CSS, and Redux Toolkit.

## 🚀 Features

### Account Management
- Customer registration with email, phone, or social login
- Secure login/logout functionality
- Profile management (personal details, addresses, password)
- Multiple delivery address management
- Account deactivation/deletion options

### Browsing & Navigation
- Browse products by main categories (3-6) and subcategories
- View detailed product information (name, description, price, stock, reviews, images)
- Navigate through featured products, new arrivals, and best sellers

### Search & Filtering
- Search products by keyword, SKU, or brand
- Advanced filtering options:
  - Price range
  - Category
  - Brand
  - Rating
- Sort results by newest, price (low-high/high-low), or popularity

### Shopping Cart & Wishlist
- Add products to cart with quantity management
- Update product quantities or remove items
- Add products to wishlist for future purchase
- Move items between wishlist and cart

### Checkout & Payment
- Select delivery address and shipping method
- Apply discount codes and vouchers
- Multiple payment methods (card, mobile banking, COD)
- Order summary review before confirmation
- Email/SMS order confirmation

### Order Tracking & History
- Real-time order status updates (Processing, Shipped, Delivered, Cancelled)
- Shipment tracking with courier details
- Order history with downloadable invoices

### Reviews & Ratings
- Rate purchased products (1-5 stars)
- Write detailed product reviews with optional images
- Edit or delete own reviews

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **State Management**: Redux Toolkit
- **API Handling**: Axios
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── products/      # Products API
│   │   └── placeholder/   # Image placeholder API
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── CategoryGrid.tsx
│   │   ├── NewArrivals.tsx
│   │   └── BestSellers.tsx
│   ├── ui/                # UI components
│   │   ├── ProductCard.tsx
│   │   └── LoadingSpinner.tsx
│   └── providers.tsx      # Redux provider
├── hooks/                 # Custom hooks
│   └── useProducts.ts     # Products data hook
├── store/                 # Redux store
│   ├── slices/            # Redux slices
│   │   ├── authSlice.ts   # Authentication
│   │   ├── cartSlice.ts   # Shopping cart
│   │   ├── wishlistSlice.ts # Wishlist
│   │   ├── productSlice.ts # Products
│   │   └── orderSlice.ts  # Orders
│   ├── hooks.ts           # Typed Redux hooks
│   └── store.ts           # Store configuration
└── lib/                   # Utility functions
    └── utils.ts           # shadcn/ui utilities
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ecommerce-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Authentication (for future implementation)
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000

# Database (for future implementation)
DATABASE_URL=your-database-url
```

## 📱 Features Implementation Status

- [x] Project setup and structure
- [x] Redux store configuration
- [x] Product management system
- [x] Shopping cart functionality
- [x] Wishlist management
- [x] Basic UI components
- [x] Sample product data
- [x] Responsive design
- [ ] User authentication
- [ ] Payment integration
- [ ] Order management
- [ ] Review system
- [ ] Search functionality
- [ ] Advanced filtering
- [ ] Admin dashboard

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the design by:
- Modifying `tailwind.config.ts`
- Updating color schemes in `globals.css`
- Customizing component styles

### Components
All components are built with shadcn/ui and can be customized using:
- CSS variables for theming
- Component variants
- Custom styling overrides

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔮 Roadmap

- [ ] User authentication with NextAuth.js
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Email notifications
- [ ] Advanced search with Elasticsearch
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] Analytics dashboard
- [ ] SEO optimization
- [ ] Performance monitoring
