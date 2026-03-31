import { NextResponse } from 'next/server';

// Test endpoint
export async function GET(request) {
  return NextResponse.json({ 
    message: 'Smart Student AI Toolkit API is running!',
    info: 'AI tools now use direct frontend API calls to Google Gemini'
  });
}

// Health check
export async function POST(request) {
  return NextResponse.json({ 
    error: 'This endpoint is deprecated. AI tools now use direct frontend calls.' 
  }, { status: 410 });
}
