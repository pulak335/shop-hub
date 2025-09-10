import { NextResponse } from 'next/server';

// Mock user database - in a real application, you would use a real database
const users = [
  {
    id: '1',
    email: 'user@example.com',
    password: 'password123', // In a real app, this would be hashed
    name: 'John Doe',
    phone: '+1234567890',
    addresses: [
      {
        id: '1',
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        country: 'USA',
        isDefault: true
      }
    ]
  }
];

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find user by email (in a real app, you would query your database)
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    // Check if user exists and password matches
    if (!user || user.password !== password) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Remove the password from the response
    const { password: _, ...userWithoutPassword } = user;

    // In a real app, you would generate a JWT token here
    return NextResponse.json({
      success: true,
      user: userWithoutPassword,
      token: 'mock-jwt-token'
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
