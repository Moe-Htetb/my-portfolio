import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moe Htet | Full-Stack Developer & Technical Instructor",
  description:
    "Portfolio of Moe Htet — a full-stack developer and technical instructor specializing in React, Next.js, Node.js, and TypeScript. Building robust, scalable applications and empowering the next generation of developers.",
  keywords: [
    "Moe Htet",
    "Full-Stack Developer",
    "Technical Instructor",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Moe Htet" }],
  creator: "Moe Htet",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moehtet.dev",
    siteName: "Moe Htet — Portfolio",
    title: "Moe Htet | Full-Stack Developer & Technical Instructor",
    description:
      "Building robust, scalable applications and empowering the next generation of developers. Specializing in React, Next.js, Node.js, and TypeScript.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moe Htet | Full-Stack Developer & Technical Instructor",
    description:
      "Building robust, scalable applications and empowering the next generation of developers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      {/* Dark class is set by default on <html> and managed by ThemeProvider */}
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
