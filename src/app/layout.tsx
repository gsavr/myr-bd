import type { Metadata } from "next";
import { Alegreya_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/layout/footer";
import { Header } from "@/layout/header";

const aleg = Alegreya_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://myrianbellydancing.com"),
  title: "Enchanting Professional Bellydance Performances by Myrian in Austin",
  description:
    "Explore the mesmerizing world of Myrian, a seasoned professional bellydancer with over 15 years of expertise. Serving Austin, TX.",
  applicationName: "Myrian Bellydance",
  authors: [{ name: "Giorgio Savron", url: "https://giorgiosavron.com" }],
  publisher: "Giorgio Savron",
  generator: "Next.js",
  keywords:
    "belly, dancing,dance, professional, bellydancing, bellydance, Myrian, Sanchez, Austin, TX, cultural dance",
  referrer: "origin",
  abstract: "Myrian Bellydance - Professional Performances in Austin, TX",
  viewport: "width=device-width, initial-scale=1",
  creator: "Myrian Sanchez",
  robots: "index, follow",
  alternates: {
    canonical: "https://myrianbellydancing.com",
  },
  icons: "https://www.myrianbellydancing.com/favicon.ico",

  openGraph: {
    type: "website",
    url: "https://myrianbellydancing.com/",
    title: "Austin Bellydance Performances | Myrian",
    description: "Professional bellydance artist with cultural influences.",
    images: [
      {
        url: "https://www.myrianbellydancing.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fred.f7ac7aea.webp&w=3840&q=75",
        width: 1200,
        height: 630,
        alt: "Myrian Bellydance Performances Austin",
      },
    ],
    siteName: "Myrian Bellydancing",
    emails: "myrianbellydancing@gmail.com",
    locale: "Austin",
    phoneNumbers: "15129986317",
  },
  category: "Arts & Entertainment",
  classification: "Professional Bellydance",
  appleWebApp: {
    capable: true,
    title: "Myrian Bellydance",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
  },
  other: { facebook: "6370779839619425" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${aleg.className} flex min-h-screen w-full flex-col overflow-x-hidden`}
      >
        <main className="flex min-h-screen flex-col items-center overflow-x-hidden p-6 !pt-0 md:p-24">
          <Header />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
