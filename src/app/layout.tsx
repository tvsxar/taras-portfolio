import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "cyrillic-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taras Poiatsyka | Fullstack Developer",
  description: "Portfolio of Taras Poiatsyka – Fullstack Developer skilled in React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-1 flex flex-col justify-center">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
