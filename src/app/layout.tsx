import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://austinlaw.com.np'),
  title: {
    default: "Austin Law Consult & Justice Point | Legal Information Portal Nepal",
    template: "%s | Austin Law Consult & Justice Point"
  },
  description: "Austin Law Consult & Justice Point provides professional legal consultancy and informational resources in Kathmandu, Nepal. Led by Senior Advocate Shyam Raja Karki.",
  keywords: [
    "Austin Law Consult", "Justice Point Nepal", "Law Firm in Kathmandu", 
    "Shyam Raja Karki Lawyer", "Legal Consultancy Nepal", "Corporate Law Nepal", 
    "Criminal Defense Nepal", "Divorce Lawyer Nepal", "Real Estate Law Nepal"
  ],
  authors: [{ name: "Shyam Raja Karki" }],
  creator: "Austin Law Consult",
  publisher: "Austin Law Consult & Justice Point",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Austin Law Consult & Justice Point",
    description: "Professional Legal Consultancy & Information in Nepal. Independence and Integrity in every case.",
    url: "https://austinlaw.com.np",
    siteName: "Austin Law Consult & Justice Point",
    locale: "en_NP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Law Consult & Justice Point",
    description: "Professional Legal Consultancy in Nepal. Led by Senior Advocate Shyam Raja Karki.",
  },
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
  alternates: {
    canonical: '/',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Austin Law Consult & Justice Point",
  "image": "https://austinlaw.com.np/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jyatha, Kantipath",
    "addressLocality": "Kathmandu",
    "addressRegion": "Bagmati",
    "postalCode": "44600",
    "addressCountry": "NP"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "27.7088",
    "longitude": "85.3135"
  },
  "url": "https://austinlaw.com.np",
  "telephone": "+9779841356979",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "founder": {
    "@type": "Person",
    "name": "Shyam Raja Karki",
    "jobTitle": "Managing Director"
  }
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground dark:bg-primary-navy">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
