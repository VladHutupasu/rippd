import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/new-recipe', '/new-ingredient'],
    },
    sitemap: 'https://rippd.io/sitemap.xml',
  };
}
