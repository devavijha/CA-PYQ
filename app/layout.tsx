import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CA PYQ — Every question ICAI ever asked. Timed. Tracked. Answered.',
  description:
    'Practice CA Final PYQs with inline ICAI suggested answers, timed sessions, and repeat-frequency tracking. Built for ICAI CA Final students.',
  keywords: 'CA Final, ICAI, PYQ, Previous Year Questions, Financial Reporting, AFM, Audit, Direct Tax, GST',
  openGraph: {
    title: 'CA PYQ — Every question ICAI ever asked.',
    description: 'Practice CA Final PYQs with inline ICAI suggested answers.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
