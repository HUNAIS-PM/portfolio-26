import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const DIRECTORIES = [
  'public/img/nature',
  'public/img/leaf',
  // Will add more if necessary based on traversal
];

async function scanAndConvert(dirPath) {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    for (let entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        await scanAndConvert(fullPath);
      } else if (entry.isFile() && /\.(jpg|jpeg|png)$/i.test(entry.name)) {
        console.log(`Processing ${fullPath}...`);
        
        const ext = path.extname(entry.name);
        const nameWithoutExt = path.basename(entry.name, ext);
        const outPath = path.join(dirPath, `${nameWithoutExt}.webp`);
        const outPathSmall = path.join(dirPath, `${nameWithoutExt}-small.webp`);

        // Get metadata to conditionally resize
        const metadata = await sharp(fullPath).metadata();
        
        let targetWidth = metadata.width;
        if (targetWidth > 1200) targetWidth = 1200;

        // Create main optimized webp (max width 1200)
        await sharp(fullPath)
          .resize(targetWidth)
          .webp({ quality: 80 })
          .toFile(outPath);
          
        // Create small thumbnail webp (max width 400)
        await sharp(fullPath)
          .resize(Math.min(metadata.width, 400))
          .webp({ quality: 60 })
          .toFile(outPathSmall);

        console.log(`Created ${outPath} and ${outPathSmall}`);
      }
    }
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.error(`Error processing directory ${dirPath}:`, err);
    }
  }
}

async function main() {
  const baseDir = path.resolve('public/img');
  await scanAndConvert(baseDir);
  console.log("Done converting images!");
}

main();
