import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { validateEnvironment } from "@/lib/security";
import SecurityMonitor from "@/components/SecurityMonitor";
import NoJavaScriptWarning from "@/components/NoJavaScriptWarning";

// Validate environment on startup
if (process.env.NODE_ENV === 'production') {
  try {
    validateEnvironment();
  } catch (error) {
    console.error('Environment validation failed:', error);
  }
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dinusanth Surendran - Portfolio",
  description: "Professional portfolio showcasing my work in software development, automation, and community impact.",
  keywords: ["Software Engineer", "Backend Developer", "Portfolio", "React", "Node.js", "TypeScript", "Automation"],
  authors: [{ name: "Dinusanth Surendran" }],
  creator: "Dinusanth Surendran",
  publisher: "Dinusanth Surendran",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Dinusanth Surendran - Portfolio',
    description: 'Professional portfolio showcasing my work in software development, automation, and community impact.',
    siteName: 'Dinusanth Surendran Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dinusanth Surendran - Portfolio',
    description: 'Professional portfolio showcasing my work in software development, automation, and community impact.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${inter.className} bg-pale-blue min-h-screen`}
        suppressHydrationWarning={true}
      >
        {children}
        <SecurityMonitor />
        <NoJavaScriptWarning />
      </body>
    </html>
  );
}
