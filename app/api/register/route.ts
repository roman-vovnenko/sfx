// app/api/register/route.ts
import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb'; // Named import
import User from '@/models/User';

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();

    const { username, email, firstName, lastName } = data;

    if (!username || !email || !firstName || !lastName) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'User with this email already exists' },
        { status: 400 }
      );
    }

    const newUser = new User({
      username,
      email,
      firstName,
      lastName,
    });

    await newUser.save();

    return NextResponse.json(
      { message: 'User registered successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error registering user:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
