/* Reproducible local deck-photo optimization. Run from the repository root. */
const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('sharp');
const services = require('../src/data/deckServiceContent.json');
const root = path.resolve(__dirname, '..');
const asset = src => path.join(root, 'static', src.replace(/^\//, ''));
const report = { generated: new Date().toISOString(), assets: [], beforeBytes: 0, afterBytes: 0 };
async function socialImage(input, slug, service, dir) {
  const escape = value => value.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[char]));
  const headline = escape(service.navLabel || service.eyebrow);
  const overlay = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><defs><linearGradient id="shade"><stop stop-color="#0c281a" stop-opacity=".95"/><stop offset=".75" stop-color="#0c281a" stop-opacity=".55"/><stop offset="1" stop-color="#0c281a" stop-opacity=".12"/></linearGradient></defs><rect width="1200" height="630" fill="url(#shade)"/><rect x="42" y="38" width="360" height="86" rx="16" fill="#fff"/><text x="48" y="295" font-family="Arial,sans-serif" font-size="66" font-weight="700" fill="#fff">${headline}</text><text x="48" y="380" font-family="Arial,sans-serif" font-size="56" font-weight="700" fill="#fff">Lexington, KY</text><path d="M50 405Q330 392 650 404" fill="none" stroke="#f66c20" stroke-width="7" stroke-linecap="round"/><text x="48" y="535" font-family="Arial,sans-serif" font-size="27" fill="#fff">Free on-site estimate · Yellowstone Renovation</text></svg>`);
  const logo = await sharp(asset('/local-deck/img/logo.webp')).resize({width:320}).png().toBuffer();
  await sharp(input).rotate().resize(1200,630,{fit:'cover',position:'attention'}).composite([{input:overlay},{input:logo,left:62,top:48}]).jpeg({quality:85,mozjpeg:true}).toFile(path.join(dir,`${slug}-social.jpg`));
}
async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const all = await Promise.all(entries.map(entry => entry.isDirectory() ? walk(path.join(dir, entry.name)) : path.join(dir, entry.name)));
  return all.flat();
}
async function optimize(file) {
  const before = await fs.readFile(file);
  if (before.length < 220000 || !/\.webp$/i.test(file)) return;
  const full = /[\\/]gallery[\\/]full[\\/]/.test(file);
  const max = full ? 1920 : 1600;
  let buffer = await sharp(before).rotate().resize({ width: max, height: max, fit: 'inside', withoutEnlargement: true }).webp({ quality: 84, effort: 6 }).toBuffer();
  if (buffer.length > 650000) buffer = await sharp(before).rotate().resize({ width: max, height: max, fit: 'inside', withoutEnlargement: true }).webp({ quality: 80, effort: 6 }).toBuffer();
  if (buffer.length >= before.length) return;
  await fs.writeFile(file, buffer);
  report.assets.push({ src: '/' + path.relative(path.join(root, 'static'), file).split(path.sep).join('/'), before: before.length, after: buffer.length });
  report.beforeBytes += before.length; report.afterBytes += buffer.length;
}
if (process.argv.includes('--social-only')) {
  (async () => { const dir=asset('/deck-services'); for(const [slug,service] of Object.entries(services)) await socialImage(await fs.readFile(asset(service.heroImage)),slug,service,dir); console.log('Updated 8 branded social previews from real project photos.'); })().catch(error=>{console.error(error);process.exitCode=1;});
} else (async () => {
  const files = (await Promise.all(['local-deck/img', 'images/deck'].map(dir => walk(asset(dir))))).flat();
  // Bounded concurrency avoids using all memory while encoding large originals.
  for (let index = 0; index < files.length; index += 4) await Promise.all(files.slice(index, index + 4).map(optimize));
  const dir = asset('/deck-services'); await fs.mkdir(dir, { recursive: true });
  const variants = {};
  for (const [slug, service] of Object.entries(services)) {
    const input = await fs.readFile(asset(service.heroImage));
    await sharp(input).rotate().resize({ width: 1800, height: 1400, fit: 'inside', withoutEnlargement: true }).webp({ quality: 84, effort: 6 }).toFile(path.join(dir, `${slug}-hero.webp`));
    await sharp(input).rotate().resize({ width: 768, height: 1100, fit: 'inside', withoutEnlargement: true }).webp({ quality: 83, effort: 6 }).toFile(path.join(dir, `${slug}-mobile.webp`));
    await sharp(input).rotate().resize(800, 600, { fit: 'cover', position: 'attention' }).webp({ quality: 82, effort: 6 }).toFile(path.join(dir, `${slug}-card.webp`));
    // JPEG is retained for social-preview compatibility; all visible photos use WebP.
    await socialImage(input, slug, service, dir);
    variants[slug] = {};
    for (const variant of ['hero', 'mobile', 'card', 'social']) {
      const src = `/deck-services/${slug}-${variant}.${variant === 'social' ? 'jpg' : 'webp'}`;
      const { width, height } = await sharp(asset(src)).metadata();
      variants[slug][variant] = { src, width, height };
    }
  }
  await fs.writeFile(path.join(root, 'src/data/deckServiceMedia.json'), JSON.stringify(variants, null, 2)+'\n');
  for (const src of ['/local-deck/img/hero-intro-sharp.jpg', '/images/logo.png', '/images/yellowstone-back-logo.png', '/images/deck-bg.jpg']) {
    try { await sharp(asset(src)).rotate().resize({ width: 1800, height: 1800, fit: 'inside', withoutEnlargement: true }).webp({ quality: 86, effort: 6 }).toFile(asset(src.replace(/\.(jpg|png)$/, '.webp'))); } catch (error) { if (error.code !== 'ENOENT' && !String(error.message).includes('missing')) throw error; }
  }
  await fs.mkdir(path.join(root, 'docs/seo'), { recursive: true });
  await fs.writeFile(path.join(root, 'docs/seo/media-optimization.json'), JSON.stringify(report, null, 2)+'\n');
  console.log(JSON.stringify({ optimized: report.assets.length, beforeMB: +(report.beforeBytes/1e6).toFixed(2), afterMB: +(report.afterBytes/1e6).toFixed(2), savedPercent: +(100*(1-report.afterBytes/report.beforeBytes)).toFixed(1), serviceVariants: Object.keys(services).length*4 }));
})().catch(error => { console.error(error); process.exitCode = 1; });
