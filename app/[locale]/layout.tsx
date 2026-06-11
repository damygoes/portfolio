import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { routing } from '@/lib/i18n/routing';
import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { Bricolage_Grotesque, Geist, Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const bricolage = Bricolage_Grotesque({
  variable: '--font-display',
  subsets: ['latin'],
  axes: ['opsz', 'wdth'],
});

export const metadata: Metadata = {
  title: 'Damilola Bada — Fullstack Developer',
  description:
    'Fullstack developer based in Germany, building clean and fast web and mobile applications with React, Next.js, Node.js, and Go.',
  keywords: [
    'Damilola Bada',
    'Portfolio',
    'Software Engineer',
    'Web Developer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Node.js Developer',
    'Software Development',
    'Web Development',
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Engineer',
    'Software Projects',
    'Web Applications',
    'Open Source Contributor',
    'Tech Enthusiast',
    'Software Portfolio',
    'Personal Website',
  ],
  authors: [{ name: 'Damilola Bada', url: 'https://damilolabada.com' }],
  creator: 'Damilola Bada',
  openGraph: {
    title: 'Damilola Bada — Fullstack Developer',
    description:
      'Fullstack developer based in Germany, building clean and fast web and mobile applications with React, Next.js, Node.js, and Go.',
    url: 'https://damilolabada.com',
    siteName: 'Damilola Bada — Fullstack Developer',
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} antialiased bg-background relative`}
      >
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SmoothScrollProvider>{children}</SmoothScrollProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
