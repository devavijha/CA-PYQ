import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CA Finals — Practice smarter, clear faster.',
  description:
    'Practice CA Final questions with inline ICAI suggested answers, timed sessions, Pomodoro focus timer, and repeat-frequency tracking. Built for ICAI CA Final students.',
  keywords: 'CA Final, ICAI, PYQ, Previous Year Questions, Financial Reporting, AFM, Audit, Direct Tax, GST',
  openGraph: {
    title: 'CA Finals — Practice smarter, clear faster.',
    description: 'Timed. Tracked. With ICAI answers inline. Built for CA Final aspirants.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
