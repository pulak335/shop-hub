import { NextResponse } from 'next/server';

// Mock user database - in a real application, you would use a real database
const users = [
  {
    id: '1',
    email: 'user@example.com',
    password: 'password123', // In a real app, this would be hashed
    name: 'John Doe',
    phone: '+1234567890',
    addresses: []
  }
];

export async function POST(request) {
  try {
    const { email, password, name, phone } = await request.json();

    // Validate input
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Email, password, and name are required' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const userExists = users.some(u => u.email.toLowerCase() === email.toLowerCase());
    if (userExists) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Create new user (in a real app, you would hash the password and save to database)
    const newUser = {
      id: (users.length + 1).toString(),
      email,
      password, // In a real app, this would be hashed
      name,
      phone: phone || '',
      addresses: []
    };

    // Add user to mock database (in a real app, you would save to the actual database)
    users.push(newUser);

    // Remove password from response
    const { password: _, ...userWithoutPassword } = newUser;

    // In a real app, you would generate a JWT token here
    return NextResponse.json({
      success: true,
      user: userWithoutPassword,
      token: 'mock-jwt-token'
    });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
