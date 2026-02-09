import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const svgPath = path.join(__dirname, '../public/og.svg');
const pngPath = path.join(__dirname, '../public/og.png');

try {
  await sharp(svgPath)
    .png()
    .toFile(pngPath);
  
  console.log(`✓ OG image generated: ${pngPath}`);
} catch (error) {
  console.error('✗ Error generating OG image:', error.message);
  process.exit(1);
}
