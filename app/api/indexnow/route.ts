import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        // 1. Authorization check
        // If INDEXNOW_SECRET is configured, we enforce authentication.
        const INDEXNOW_SECRET = process.env.INDEXNOW_SECRET;
        if (INDEXNOW_SECRET) {
            const authHeader = request.headers.get('Authorization');
            const token = authHeader ? authHeader.replace('Bearer ', '').trim() : '';
            const customHeader = request.headers.get('x-indexnow-secret') || '';
            
            if (token !== INDEXNOW_SECRET && customHeader !== INDEXNOW_SECRET) {
                return NextResponse.json({ error: 'Unauthorized: Invalid token' }, { status: 401 });
            }
        }

        // 2. Read sitemap
        const sitemapPath = path.join(process.cwd(), 'public/sitemap.xml');
        if (!fs.existsSync(sitemapPath)) {
            return NextResponse.json({ error: 'Sitemap not found' }, { status: 404 });
        }

        const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
        const locRegex = /<loc>(.*?)<\/loc>/g;
        const urls: string[] = [];
        let match;

        while ((match = locRegex.exec(sitemapContent)) !== null) {
            urls.push(match[1].trim());
        }

        if (urls.length === 0) {
            return NextResponse.json({ message: 'No URLs found in sitemap.xml to submit' }, { status: 200 });
        }

        // 3. Setup IndexNow details
        const KEY = process.env.INDEXNOW_KEY || '929dcea24943473ea0757f0052d7abb8';
        const HOST = process.env.INDEXNOW_HOST || 'appbai.com';
        const KEY_LOCATION = process.env.INDEXNOW_KEY_LOCATION || `https://${HOST}/${KEY}.txt`;
        const INDEXNOW_API = 'https://api.indexnow.org/indexnow';

        const payload = {
            host: HOST,
            key: KEY,
            keyLocation: KEY_LOCATION,
            urlList: urls
        };

        // 4. Send POST request
        const response = await fetch(INDEXNOW_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(payload)
        });

        const status = response.status;

        if (status === 200 || status === 202) {
            return NextResponse.json({
                success: true,
                message: status === 200 
                    ? 'URLs submitted successfully to IndexNow' 
                    : 'URLs submitted successfully, pending key verification/processing',
                submittedUrls: urls,
            }, { status });
        } else {
            let errorDetail = 'API key mismatch or invalid format';
            if (status === 400) errorDetail = 'Invalid format';
            if (status === 403) errorDetail = 'Key is invalid or verification file not found/matching';
            if (status === 422) errorDetail = 'URLs do not belong to the host, or key does not match schema';
            if (status === 429) errorDetail = 'Too many requests';

            return NextResponse.json({
                success: false,
                message: `IndexNow API returned status code ${status} (${errorDetail})`,
                submittedUrls: urls,
            }, { status });
        }
    } catch (error) {
        const err = error as Error;
        console.error('Error submitting to IndexNow:', err);
        return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 });
    }
}
