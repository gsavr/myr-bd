import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Myrian Bellydancing",
  description: "Professional Bellydance",
  keywords: "belly, dancing, bellydancing, Myrian, Sanchez, Austin, TX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen w-full flex-col`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
