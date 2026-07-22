import type { Metadata } from 'next';
import { Inter, Bricolage_Grotesque } from 'next/font/google';
import Nav from '@/components/Nav';
import './globals.css';

// exposed as CSS variables so the font stacks in src/config/theme.js can pick them up
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Logesh Waran — Full-stack Engineer',
  description:
    'Portfolio of Logesh Waran (Lokie) — a full-stack engineer with a design eye.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="min-h-screen antialiased selection:bg-accent-blue selection:text-paper">
        <Nav />
        {children}
      </body>
    </html>
  );
}
