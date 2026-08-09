import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // In a real app, this would send an email via SendGrid, Resend, etc.
    // For now, we simulate persistence by writing to a local log file.
    const logEntry = {
      timestamp: new Date().toISOString(),
      ...data
    };
    
    const logPath = path.join(process.cwd(), 'leads.log');
    fs.appendFileSync(logPath, JSON.stringify(logEntry) + '\n');
    
    return NextResponse.json({ success: true, message: 'Message received' }, { status: 200 });
  } catch (error) {
    console.error('Failed to process contact form:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
