# E-Commerce Platform

A full-stack e-commerce application built with Next.js, Redux, Node.js, Express, and MongoDB.

## Features

- User authentication with JWT
- Product browsing and searching
- Shopping cart and wishlist functionality
- Order management
- Admin dashboard
- Responsive design

## Tech Stack

### Frontend
- Next.js
- Redux Toolkit
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- JWT Authentication

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB installation

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd ecommerce-app
```

2. Install frontend dependencies
```bash
npm install
```

3. Install backend dependencies
```bash
cd backend
npm install
cd ..
```

4. Set up environment variables
   - Create a `.env` file in the `backend` directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=7d
   NODE_ENV=development
   ```
   
   - Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

5. Run the development server
```bash
# Run both frontend and backend
npm run dev:all

# Run frontend only
npm run dev

# Run backend only
npm run server
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)
- `GET /api/products/featured` - Get featured products
- `GET /api/products/new-arrivals` - Get new arrivals
- `GET /api/products/best-sellers` - Get best sellers
- `GET /api/products/on-sale` - Get products on sale

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get single category
- `POST /api/categories` - Create new category (Admin)
- `PUT /api/categories/:id` - Update category (Admin)
- `DELETE /api/categories/:id` - Delete category (Admin)
- `GET /api/categories/hierarchy` - Get category hierarchy

### Orders
- `GET /api/orders` - Get all orders (Admin)
- `GET /api/orders/myorders` - Get user orders
- `GET /api/orders/:id` - Get single order
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id/status` - Update order status (Admin)
- `PUT /api/orders/:id/pay` - Update order to paid
- `DELETE /api/orders/:id` - Delete order (Admin)
- `GET /api/orders/stats` - Get order stats (Admin)

### Users
- `GET /api/users` - Get all users (Admin)
- `GET /api/users/:id` - Get single user (Admin)
- `POST /api/users` - Create user (Admin)
- `PUT /api/users/:id` - Update user (Admin)
- `DELETE /api/users/:id` - Delete user (Admin)
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/stats` - Get user stats (Admin)

## Folder Structure

```
ecommerce-app/
├── backend/              # Backend API
│   ├── config/           # Configuration files
│   ├── controllers/      # API controllers
│   ├── middleware/       # Custom middleware
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   └── server.js         # Entry point
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js app router
│   │   └── (main)/       # Main site pages
│   ├── components/       # React components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── store/            # Redux store
└── package.json
```

## License

This project is licensed under the MIT License.