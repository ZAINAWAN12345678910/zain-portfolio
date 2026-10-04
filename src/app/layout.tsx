import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zain Ul Hassan Awan | AI Engineer Portfolio",
  description: "AI Engineer & Data Scientist specializing in Machine Learning and NLP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-[#121212]">
      <body className={`${inter.className} antialiased text-white overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
