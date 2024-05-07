import Header from '@shared/components/core/Header';
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className + ' min-h-full bg-[url("/background.webp")] m-0 p-0 box-border'}>
        <Header />
        <main className="w-11/12 sm:w-7/12 m-auto flex flex-col pt-28 sm:pt-36">{children}</main>
      </body>
    </html>
  );
}
