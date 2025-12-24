import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
        }

        const GOOGLE_FORM_URL = process.env.GOOGLE_FORM_URL;
        const ENTRY_ID = process.env.GOOGLE_FORM_EMAIL_ENTRY_ID;

        if (!GOOGLE_FORM_URL || !ENTRY_ID) {
            console.error('Missing Google Form configuration');
            // For now, let's return a specific error if not configured
            return NextResponse.json({ error: 'System configuration error' }, { status: 500 });
        }

        // Google Forms expects a URL-encoded form submission
        const formData = new URLSearchParams();
        formData.append(ENTRY_ID, email);

        const response = await fetch(GOOGLE_FORM_URL, {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        // Google Form returns a success even if the POST is technically just a redirect/response
        // Usually, 200 or 302 means it worked.
        if (response.ok || response.status === 302) {
            return NextResponse.json({ success: true });
        } else {
            throw new Error('Failed to submit to Google Form');
        }
    } catch (error) {
        console.error('Early access submission error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
