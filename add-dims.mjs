import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

async function processFiles() {
  const dir = path.resolve('src/components/layouts');
  const files = await fs.readdir(dir);

  for (const file of files) {
    if (!file.endsWith('.jsx') && !file.endsWith('.tsx')) continue;

    const filePath = path.join(dir, file);
    let content = await fs.readFile(filePath, 'utf-8');

    const newContent = await processImageTags(content, file);
    if (newContent !== content) {
      await fs.writeFile(filePath, newContent);
      console.log(`Added dimensions in ${file}`);
    }
  }
}

async function processImageTags(content, fileName) {
  let result = content;
  const imgRegex = /<img\s([^>]+)>/g;
  let match;
  
  const matches = [...content.matchAll(imgRegex)];

  for (const m of matches) {
    let full = m[0];
    let inner = m[1];

    if (inner.includes('width=') || inner.includes('height=')) continue; // skip if already has dimensions
    
    const srcMatch = inner.match(/src=(?:'([^']+)'|"([^"]+)"|\{['"`]?([^'"`}]+)['"`]?\})/);
    if (!srcMatch) continue;
    
    let srcStr = srcMatch[1] || srcMatch[2] || srcMatch[3];
    if (!srcStr) continue;
    
    if (srcStr.startsWith('/')) {
       const actualPath = path.resolve('public' + srcStr);
       try {
           const metadata = await sharp(actualPath).metadata();
           const width = metadata.width;
           const height = metadata.height;
           if (width && height) {
               // If it's AboutSection (near fold), strip lazy loading and add fetchpriority high
               let modifiedInner = inner;
               if (fileName === 'AboutSection.jsx') {
                   modifiedInner = modifiedInner.replace(/loading="lazy"\s*/g, '');
                   modifiedInner = modifiedInner.replace(/decoding="async"\s*/g, 'fetchpriority="high" ');
               }
               
               const replaceStr = `<img width="${width}" height="${height}" ${modifiedInner}>`;
               result = result.replace(full, replaceStr);
           }
       } catch(e) {
           // file might not exist locally, silent
       }
    }
  }
  return result;
}

processFiles().catch(console.error);
