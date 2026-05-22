import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Abdihakim Mohamed | Safaricom Employee & Tech Enthusiast",
  description:
    "Explore the portfolio of Abdihakim Mohamed, a professional at Safaricom and a technology enthusiast passionate about innovation and modern digital experiences.",
  keywords: [
    "Abdihakim Mohamed",
    "Safaricom",
    "Tech Enthusiast",
    "Creative Thinker",
    "Professional Portfolio",
    "Kenya Tech",
  ],
  authors: [{ name: "Abdihakim Mohamed" }],
  openGraph: {
    title: "Abdihakim Mohamed | Personal Portfolio",
    description:
      "Safaricom Employee & Tech Enthusiast — Exploring the future of technology and innovation.",
    url: "#",
    siteName: "Abdihakim Mohamed Portfolio",
    images: [
      {
        url: "/Website-overview.png",
        width: 1200,
        height: 630,
        alt: "Abdihakim Mohamed Portfolio Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdihakim Mohamed | Tech Enthusiast",
    description:
      "Exploring modern digital experiences and technology innovation.",
    images: ["/Website-overview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="text-white">
          <div className="container">{children}</div>
        </main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
