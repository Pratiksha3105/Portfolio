import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pratiksha Ubale — AI/ML Engineer & Full Stack Developer',
  description: 'Portfolio of Pratiksha Ubale — Computer Engineering student specializing in AI/ML, Full Stack Development, and Data Science.',
  keywords: ['Pratiksha Ubale', 'AI Engineer', 'ML Developer', 'Full Stack', 'React', 'Python', 'Portfolio'],
  authors: [{ name: 'Pratiksha Ubale' }],
  openGraph: {
    title: 'Pratiksha Ubale — AI/ML Engineer',
    description: 'Building intelligent systems at the intersection of AI and full-stack development.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
