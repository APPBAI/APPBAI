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
            return NextResponse.json({ error: 'System configuration error' }, { status: 500 });
        }

        const formData = new URLSearchParams();
        formData.append(ENTRY_ID, email);

        const response = await fetch(GOOGLE_FORM_URL, {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        if (response.ok || response.status === 302 || (response.status >= 200 && response.status < 400)) {
            return NextResponse.json({ success: true });
        } else {
            throw new Error(`Failed to submit to Google Form: ${response.status}`);
        }
    } catch (error) {
        console.error('Early access submission error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
