import Header from '@shared/components/core/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="w-11/12 sm:w-4/5 m-auto flex flex-col mt-28 sm:mt-36">{children}</main>
      </body>
    </html>
  );
}
