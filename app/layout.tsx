import { ThemeProvider } from '@/components/providers/theme-provider';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Damilola Bada | Portfolio",
  keywords: [
    "Damilola Bada",
    "Portfolio",
    "Software Engineer",
    "Web Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Software Development",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Engineer",
    "Software Projects",
    "Web Applications",
    "Open Source Contributor",
    "Tech Enthusiast",
    "Software Portfolio",
    "Personal Website",
  ],
  authors: [{ name: "Damilola Bada", url: "https://damilolabada.com" }],
  creator: "Damilola Bada",
  openGraph: {
    title: "Damilola Bada | Portfolio",
    description: "Explore the portfolio of Damilola Bada, a software engineer specializing in full-stack development with expertise in React, Next.js, and Node.js.",
    url: "https://damilolabada.com",
    siteName: "Damilola Bada | Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
