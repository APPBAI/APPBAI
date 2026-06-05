const fs = require('fs');
const path = require('path');
const dns = require('dns');

// Force IPv4 first to prevent ETIMEDOUT errors on systems with misconfigured IPv6 routing
if (dns.setDefaultResultOrder) {
    dns.setDefaultResultOrder('ipv4first');
}

// Configuration
const KEY = process.env.INDEXNOW_KEY || '05f8de14719c4895b91895ac432b9d01';
const HOST = process.env.INDEXNOW_HOST || 'appbai.com';
const KEY_LOCATION = process.env.INDEXNOW_KEY_LOCATION || `https://${HOST}/${KEY}.txt`;
const INDEXNOW_API = 'https://api.indexnow.org/indexnow';

async function submitIndexNow() {
    console.log('🚀 Starting IndexNow URL submission...');
    
    // 1. Read and parse sitemap.xml
    const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
    if (!fs.existsSync(sitemapPath)) {
        console.error('❌ Error: public/sitemap.xml not found!');
        process.exit(1);
    }

    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const locRegex = /<loc>(.*?)<\/loc>/g;
    const urls = [];
    let match;

    while ((match = locRegex.exec(sitemapContent)) !== null) {
        urls.push(match[1].trim());
    }

    if (urls.length === 0) {
        console.warn('⚠️ Warning: No URLs found in sitemap.xml.');
        process.exit(0);
    }

    console.log(`📋 Found ${urls.length} URL(s) to submit:`);
    urls.forEach(url => console.log(`  - ${url}`));

    // 2. Prepare payload
    const payload = {
        host: HOST,
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList: urls
    };

    console.log('\n📡 Sending request to IndexNow...');
    console.log(`Endpoint: ${INDEXNOW_API}`);
    console.log(`Payload: ${JSON.stringify(payload, null, 2)}\n`);

    // 3. Send POST request
    try {
        const response = await fetch(INDEXNOW_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(payload)
        });

        const status = response.status;
        console.log(`Response Status Code: ${status}`);

        const isSuccess = status === 200 || status === 202;

        // Status code interpretations according to IndexNow protocol
        switch (status) {
            case 200:
                console.log('✅ Success: URLs submitted successfully to IndexNow.');
                break;
            case 202:
                console.log('✅ Accepted: URLs submitted successfully, pending key verification/processing.');
                break;
            case 400:
                console.error('❌ Bad Request: Invalid request format.');
                break;
            case 403:
                console.error('❌ Forbidden: Invalid key (key not found, or file found but key does not match).');
                break;
            case 422:
                console.error('❌ Unprocessable Entity: URLs do not belong to the host, or key does not match the schema.');
                break;
            case 429:
                console.warn('⚠️ Too Many Requests: Potential spam detected.');
                break;
            default:
                console.warn(`⚠️ Unexpected response status: ${status}`);
        }

        if (!isSuccess) {
            process.exit(1);
        }
    } catch (error) {
        console.error('❌ Network or System Error occurred during submission:', error);
        process.exit(1);
    }
}

submitIndexNow();
