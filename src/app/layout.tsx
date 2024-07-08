import Footer from '@core/Footer';
import Header from '@core/Header';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const inter = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Rippd',
  description: 'Healthy recipes',
};

// TODO: SEO - https://dminhvu.com/post/nextjs-seo
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className + ' bg-[url("/background.webp")] m-0 p-0 min-h-full flex flex-col box-border'}>
        <Header />
        <main className="w-11/12 sm:w-4/5 lg:w-9/12 2xl:w-7/12 mx-auto pt-24 sm:pt-28 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
