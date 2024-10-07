// app/api/users/route.ts

import { NextResponse } from 'next/server';
import { clientPromise } from '@/lib/mongodb2'; 

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(); 
    const users = await db.collection('users').find({}).toArray();

    return NextResponse.json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
