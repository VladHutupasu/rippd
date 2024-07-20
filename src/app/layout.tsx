import Footer from '@core/Footer';
import Header from '@core/Header';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { CSPostHogProvider } from './_analytics/provider';
import './globals.css';

const inter = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rippd.io'),
  keywords: [
    'healthy recipes',
    'fitness meals',
    'high-protein recipes',
    'low-carb meals',
    'nutrition',
    'fitness diet',
    'Rippd',
    'food blog',
    'health tips',
  ],
  title: {
    default: 'Rippd - Healthy & High Protein Recipes',
    template: '%s | Rippd Healthy & High Protein Recipes',
  },
  description:
    'Explore a wide range of healthy recipes, from high-protein to low-carb options. Rippd has everything you need for a balanced lifestyle.',
  openGraph: {
    title: 'Rippd - Healthy & High Protein Recipes',
    description:
      'Discover healthy and high protein recipes on Rippd. Stay fit with delicious and nutritious meals. Explore our blog for additional tips on food and nutrition.',
    url: 'https://rippd.io',
    type: 'website',
    images: [
      {
        url: 'https://rippd.io/images/isometric/hero.png',
        width: 1024,
        height: 1024,
        alt: 'Rippd - Healthy & High Protein Recipes',
      },
    ],
    siteName: 'Rippd',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rippd - Healthy & High Protein Recipes',

    description:
      'Discover healthy and high protein recipes on Rippd. Stay fit with delicious and nutritious meals. Explore our blog for additional tips on food and nutrition.',
    images: [
      {
        url: 'https://rippd.io/images/isometric/hero.png',
        width: 1024,
        height: 1024,
        alt: 'Rippd - Healthy & High Protein Recipes',
      },
    ],
  },
};

// TODO: SEO - https://dminhvu.com/post/nextjs-seo
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <CSPostHogProvider>
        <body className={inter.className + ' bg-[url("/background.webp")] m-0 p-0 min-h-full flex flex-col box-border'}>
          <main className="w-11/12 sm:w-4/5 lg:w-9/12 2xl:w-7/12 mx-auto pt-24 sm:pt-28 flex-1">{children}</main>
          {/* Moving Header below <main> fixes the layout shoft when refreshin page with slow internet - e.g. blog page */}
          <Header />
          <Footer />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
