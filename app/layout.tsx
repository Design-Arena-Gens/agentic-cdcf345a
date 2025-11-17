import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Aurora Studio — Digital Product Design Agency',
  description:
    'Aurora Studio crafts immersive digital experiences with a focus on strategy, storytelling, and scalable design systems.',
  openGraph: {
    title: 'Aurora Studio — Digital Product Design Agency',
    description:
      'Aurora Studio crafts immersive digital experiences with a focus on strategy, storytelling, and scalable design systems.',
    url: 'https://agentic-cdcf345a.vercel.app',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Aurora Studio hero preview'
      }
    ]
  },
  icons: {
    icon: '/icon.svg'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
