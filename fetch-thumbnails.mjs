import fs from 'fs';
import path from 'path';

const baseDir = 'C:/Users/0000/.gemini/antigravity/scratch/promedia-elzuzzat/public/assets/thumbnails';

const items = [
  // Retail
  { id: 'DfnQTmEM92u', file: 'retail/retail-1.jpg' },
  { id: 'DehtmEDsh9W', file: 'retail/retail-2.jpg' },
  { id: 'DecqyiDs4mf', file: 'retail/retail-3.jpg' },
  { id: 'DeZzTaLMMLw', file: 'retail/retail-4.jpg' },
  { id: 'DdtitGssHtw', file: 'retail/retail-5.jpg' },
  // Tourism
  { id: 'DTvvnLZDKFW', file: 'tourism/tourism-1.jpg' },
  { id: 'DTYm26djLAn', file: 'tourism/tourism-2.jpg' },
  { id: 'DTJWaQajAsI', file: 'tourism/tourism-3.jpg' },
  { id: 'DTGAyh0jIub', file: 'tourism/tourism-4.jpg' },
  { id: 'DTEHFcRDC1C', file: 'tourism/tourism-5.jpg' },
  { id: 'DTBjTeCjHM5', file: 'tourism/tourism-6.jpg' },
  // Restaurants
  { id: 'DHZHs-JSv4z', file: 'restaurants/restaurant-1.jpg' },
  { id: 'DQ402FGDNkB', file: 'restaurants/restaurant-2.jpg' },
  { id: 'DDNM_6rN_EH', file: 'restaurants/restaurant-3.jpg' },
  { id: 'DGGyOJJNkQb', file: 'restaurants/restaurant-4.jpg' },
];

async function downloadThumbnail(reelId, destFile) {
  const destPath = path.join(baseDir, destFile);
  try {
    const embedUrl = `https://www.instagram.com/p/${reelId}/embed/`;
    const res = await fetch(embedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      }
    });
    const html = await res.text();
    
    // Look for EmbeddedMediaImage or similar image tag
    let match = html.match(/class="[^"]*EmbeddedMediaImage[^"]*"[^>]*src="([^"]+)"/i);
    if (!match) {
      match = html.match(/src="([^"]+)"[^>]*class="[^"]*EmbeddedMediaImage[^"]*"/i);
    }
    if (!match) {
      match = html.match(/"display_url":"([^"]+)"/);
    }
    
    if (match && match[1]) {
      const imgUrl = match[1].replace(/&amp;/g, '&').replace(/\\u0026/g, '&');
      console.log(`Found image for ${reelId}: downloading...`);
      const imgRes = await fetch(imgUrl);
      if (imgRes.ok) {
        const buffer = await imgRes.arrayBuffer();
        fs.writeFileSync(destPath, Buffer.from(buffer));
        console.log(`Saved ${destFile} (${buffer.byteLength} bytes)`);
        return true;
      }
    }
    console.warn(`No thumbnail found for ${reelId}`);
    return false;
  } catch (err) {
    console.error(`Error downloading for ${reelId}:`, err.message);
    return false;
  }
}

async function run() {
  console.log(`Starting thumbnail downloads for ${items.length} items...`);
  for (const item of items) {
    await downloadThumbnail(item.id, item.file);
  }
  console.log('All downloads completed!');
}

run();
