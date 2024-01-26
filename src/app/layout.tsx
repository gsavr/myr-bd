import type { Metadata } from "next";
import { Alegreya_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/layout/footer";
import { Header } from "@/layout/header";

const aleg = Alegreya_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Myrian - Enchanting Professional Bellydance Performances in Austin, TX",
  description:
    "Explore the mesmerizing world of Myrian, a seasoned professional bellydancer with over 15 years of expertise. Serving Austin, TX.",
  keywords: "belly, dancing, bellydancing, Myrian, Sanchez, Austin, TX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${aleg.className} flex min-h-screen w-full flex-col`}>
        <main className="flex min-h-screen flex-col items-center p-6 !pt-0 md:p-24">
          <Header />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
