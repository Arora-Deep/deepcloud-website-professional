import './globals.css';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>DeepCloud - Enterprise Cloud Solutions</title>
        <meta name="description" content="Enterprise-grade cloud solutions including VPS, DaaS, Storage, and Application Publishing services." />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}