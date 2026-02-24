const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function cropFavicon() {
    const inputPath = path.join(__dirname, '..', 'public', 'logo.png');
    const publicDir = path.join(__dirname, '..', 'public');
    const appDir = path.join(__dirname, '..', 'src', 'app');

    try {
        const metadata = await sharp(inputPath).metadata();
        console.log(`Input image size: ${metadata.width}x${metadata.height}`);

        // The circle is on the far left. Assuming it's a square aspect ratio for the emblem.
        // Based on visual preview, the circle height is likely the full height of the image.
        const size = metadata.height;

        // Crop the leftmost square
        const emblem = sharp(inputPath).extract({ left: 0, top: 0, width: size, height: size });

        // Generate different sizes
        await emblem.clone().resize(32, 32).toFile(path.join(publicDir, 'favicon-32x32.png'));
        await emblem.clone().resize(16, 16).toFile(path.join(publicDir, 'favicon-16x16.png'));
        await emblem.clone().resize(180, 180).toFile(path.join(publicDir, 'apple-touch-icon.png'));

        // Also update the .ico files (simple rename or conversion)
        await emblem.clone().resize(32, 32).toFile(path.join(publicDir, 'favicon.ico'));
        await emblem.clone().resize(32, 32).toFile(path.join(appDir, 'favicon.ico'));

        console.log('Successfully generated resized favicon assets.');
    } catch (err) {
        console.error('Error processing image:', err);
    }
}

cropFavicon();
