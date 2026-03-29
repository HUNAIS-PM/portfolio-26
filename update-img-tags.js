import fs from 'fs/promises';
import path from 'path';

async function processFiles() {
  const dir = path.resolve('src/components/layouts');
  const files = await fs.readdir(dir);

  for (const file of files) {
    if (file.endsWith('.jsx')) {
      const filePath = path.join(dir, file);
      let content = await fs.readFile(filePath, 'utf-8');
      
      let modified = false;

      // Extremely simple regex: find <img src="...jpg|png" ... />
      // And replace the extension with .webp and add loading="lazy" if not present.
      
      const newContent = content.replace(/<img([^>]*)>/g, (match, prefix) => {
        // Skip if already webp or if we should skip FirstSection eagerly loaded things
        // But let's just make sure everything except FirstSection gets lazy loading
        
        let newImg = match;
        
        // Convert .jpg / .png to WebP
        if (newImg.includes('.jpg') || newImg.includes('.png')) {
          newImg = newImg.replace(/\.(jpg|png)/g, '.webp');
          modified = true;
        }

        // Add loading="lazy" if this is NOT FirstSection or it doesn't already have it
        if (!file.includes('FirstSection') && !newImg.includes('loading=')) {
          newImg = newImg.replace('<img ', '<img loading="lazy" decoding="async" ');
          modified = true;
        }
        
        return newImg;
      });

      if (modified) {
        await fs.writeFile(filePath, newContent);
        console.log(`Updated ${file}`);
      }
    }
  }
}

processFiles().catch(console.error);
