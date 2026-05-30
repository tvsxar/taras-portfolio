import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taras Poiatsyka | Full-Stack Developer",
  description: "Portfolio of Taras Poiatsyka – Full-Stack Developer skilled in React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-1 flex flex-col justify-center">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
