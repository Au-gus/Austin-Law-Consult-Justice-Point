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
  title: "Austin Law Consult & Justice Point | Premier Law Firm in Nepal",
  description: "Austin Law Consult & Justice Point provides expert corporate, criminal, and commercial legal services in Kathmandu, Nepal. Driven by independence and integrity.",
  keywords: ["Law Firm Nepal", "Corporate Law Kathmandu", "Criminal Defense Nepal", "Austin Law Consult & Justice Point", "Legal Services Nepal", "Best Lawyers Kathmandu"],
  openGraph: {
    title: "Austin Law Consult & Justice Point",
    description: "Expert Legal Services in Nepal. Our independence makes the difference.",
    url: "https://austinlaw.com.np",
    siteName: "Austin Law Consult & Justice Point",
    locale: "en_NP",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
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
