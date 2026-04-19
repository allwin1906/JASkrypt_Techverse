import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JASkrypt Techverse — Premium Tech Company & Website Building',
  description:
    'JASkrypt Techverse is an elite engineering company architecting high-converting websites, native mobile apps, and scalable SaaS solutions. Join our engineering internship cohort.',
  keywords: ['tech company', 'website building agency', 'JASkrypt Techverse', 'enterprise web development', 'SaaS architecture', 'software engineering internship', 'digital products', 'mobile app development'],
  openGraph: {
    title: 'JASkrypt Techverse — Scale your Enterprise',
    description: 'We build digital products that generate predictable revenue for ambitious businesses.',
    type: 'website',
    locale: 'en_US',
    siteName: 'JASkrypt Techverse'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JASkrypt Techverse',
    description: 'Premium software engineering and technical design studio.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: '#0a0a0a' }}>
        {children}
      </body>
    </html>
  );
}
