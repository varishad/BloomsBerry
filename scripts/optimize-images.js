const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Increase sharp's limit for large images
sharp.concurrency(4);
sharp.cache({ files: 0 });

async function optimizeImages() {
  const publicDir = path.join(__dirname, '../public');
  
  // Optimize logo
  const logoPath = path.join(publicDir, 'bloomsberry logo.PNG');
  const logoWebPPath = path.join(publicDir, 'bloomsberry-logo.webp');
  
  console.log('Optimizing logo...');
  
  try {
    // Convert to WebP with compression - process large image with reduced quality first
    await sharp(logoPath, {
      limitInputPixels: 268402689 // Increase limit for large images
    })
      .resize(400, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ 
        quality: 85,
        effort: 4
      })
      .toFile(logoWebPPath);
    
    const originalSize = fs.statSync(logoPath).size;
    const optimizedSize = fs.statSync(logoWebPPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ Logo optimized:`);
    console.log(`   Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Optimized: ${(optimizedSize / 1024).toFixed(2)} KB`);
    console.log(`   Savings: ${savings}%`);
    
    // Also create a compressed PNG as fallback
    const logoCompressedPath = path.join(publicDir, 'bloomsberry-logo.png');
    await sharp(logoPath, {
      limitInputPixels: 268402689
    })
      .resize(400, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .png({ 
        quality: 90,
        compressionLevel: 9
      })
      .toFile(logoCompressedPath);
    
    const pngSize = fs.statSync(logoCompressedPath).size;
    console.log(`   PNG fallback: ${(pngSize / 1024).toFixed(2)} KB`);
    
  } catch (error) {
    console.error('Error optimizing logo:', error);
    console.log('⚠️  Logo optimization failed. You may need to manually compress the logo image.');
  }
  
  // Optimize other images
  const imagesToOptimize = [
    'hero-bg.png',
    'about-img.png',
    'gallery-1.png',
    'gallery-2.png',
    'gallery-3.png'
  ];
  
  console.log('\nOptimizing other images...');
  
  for (const imageName of imagesToOptimize) {
    const imagePath = path.join(publicDir, imageName);
    if (fs.existsSync(imagePath)) {
      try {
        const webpPath = path.join(publicDir, imageName.replace('.png', '.webp'));
        await sharp(imagePath)
          .webp({ 
            quality: 85,
            effort: 6
          })
          .toFile(webpPath);
        
        const originalSize = fs.statSync(imagePath).size;
        const optimizedSize = fs.statSync(webpPath).size;
        const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
        
        console.log(`✅ ${imageName}: ${(originalSize / 1024).toFixed(1)} KB → ${(optimizedSize / 1024).toFixed(1)} KB (${savings}% smaller)`);
      } catch (error) {
        console.error(`Error optimizing ${imageName}:`, error);
      }
    }
  }
  
  console.log('\n✨ Image optimization complete!');
}

optimizeImages();
