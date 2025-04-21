interface Page {
  path: string;
  lastMod: string;
  changeFreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const pages: Page[] = [
  {
    path: '/',
    lastMod: new Date().toISOString(),
    changeFreq: 'always',
    priority: 1.0
  },
  {
    path: '/about',
    lastMod: new Date().toISOString(),
    changeFreq: 'monthly',
    priority: 0.8
  },
  {
    path: '/privacy',
    lastMod: new Date().toISOString(),
    changeFreq: 'monthly',
    priority: 0.5
  },
  {
    path: '/terms',
    lastMod: new Date().toISOString(),
    changeFreq: 'monthly',
    priority: 0.5
  }
];

export function generateSitemap(domain: string): string {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${domain}${page.path}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

  return xml;
}

export function addPageToSitemap(page: Page): void {
  pages.push(page);
}

// Function to generate dynamic routes sitemap for common misspellings and variations
export function generateAlternateRoutesSitemap(domain: string): string {
  const alternateRoutes = [
    '/coinflip',
    '/coin-flip',
    '/flipcoin',
    '/flip-coin',
    '/flip',
    '/toss',
    '/cointoss',
    '/coin-toss',
    '/random',
    '/heads-or-tails',
    '/headsortails'
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${alternateRoutes.map(route => `
  <url>
    <loc>${domain}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

  return xml;
}