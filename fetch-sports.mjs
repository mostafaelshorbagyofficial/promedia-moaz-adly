import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const baseDir = 'D:/promedia-moaz-adly/public/assets/thumbnails/sports';
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

const reels = [
  { id: 'DcPBRshOQxk', file: 'sports-1.jpg' },
  { id: 'Dcb-qnDISy6', file: 'sports-2.jpg' },
  { id: 'DfdG9FbuGer', file: 'sports-3.jpg' },
  { id: 'Dc1kLZZusdo', file: 'sports-4.jpg' }
];

for (const r of reels) {
  try {
    const curlCmd = `curl.exe -s -L -A "facebookexternalhit/1.1" "https://www.instagram.com/reel/${r.id}/"`;
    const html = execSync(curlCmd, { maxBuffer: 10 * 1024 * 1024 }).toString();
    const match = html.match(/property="og:image"\s+content="([^"]+)"/) ||
                  html.match(/name="twitter:image"\s+content="([^"]+)"/);
    if (match && match[1]) {
      const imgUrl = match[1].replace(/&amp;/g, '&');
      console.log(`Found image for ${r.id}: downloading to ${r.file}...`);
      const dest = path.join(baseDir, r.file);
      execSync(`curl.exe -s -L -o "${dest}" "${imgUrl}"`);
      const stat = fs.statSync(dest);
      console.log(`Downloaded ${r.file}: ${stat.size} bytes`);
    } else {
      console.log(`No og:image for ${r.id}, searching other images...`);
      // check other matches
      const imgMatches = [...html.matchAll(/(https:\/\/[^"'\s<>]+\.(?:jpg|jpeg|webp)[^"'\s<>]*)/g)];
      console.log(`Found ${imgMatches.length} possible urls in page`);
      for (const m of imgMatches.slice(0, 3)) {
        console.log('Sample:', m[1].slice(0, 100));
      }
    }
  } catch (err) {
    console.error(`Error on ${r.id}:`, err.message);
  }
}
