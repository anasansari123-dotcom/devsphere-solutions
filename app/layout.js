import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import SocialRail from "@/components/SocialRail";
import TouchRipple from "@/components/mobile/TouchRipple";
import ScrollRing from "@/components/mobile/ScrollRing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteUrl, keywords, geo, organizationJsonLd } from "@/lib/seo";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif" });

const description =
  "DevSphere Solutions is a leading IT company in Uttar Pradesh — building websites, SaaS platforms, mobile apps, CRMs and admin dashboards for India, Dubai, Oman & global clients.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DevSphere Solutions | IT Company in Uttar Pradesh — Website & App Development",
    template: "%s | DevSphere Solutions",
  },
  description,
  keywords,
  applicationName: "DevSphere Solutions",
  authors: [{ name: "DevSphere Solutions", url: siteUrl }],
  creator: "DevSphere Solutions",
  publisher: "DevSphere Solutions",
  category: "technology",
  alternates: { canonical: "/" },
  icons: { icon: "/logo.jpeg", apple: "/logo.jpeg" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "DevSphere Solutions",
    url: "/",
    title: "DevSphere Solutions | IT Company in Uttar Pradesh",
    description,
  },
  twitter: { card: "summary_large_image", title: "DevSphere Solutions | IT Company in Uttar Pradesh", description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  // Local-search signals
  other: {
    "geo.region": geo.regionCode,
    "geo.placename": `${geo.region}, India`,
  },
};

export const viewport = { themeColor: "#070b16" };

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: browser extensions (e.g. QuillBot, Grammarly) inject attributes on <html>/<body> before React hydrates
    <html lang="en-IN" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <body className="bg-ink font-sans text-slate-200 antialiased" suppressHydrationWarning>
        <JsonLd data={organizationJsonLd()} />
        <Preloader />
        <ScrollProgress />
        <Cursor />
        <SocialRail />
        <TouchRipple />
        <ScrollRing />
        <div className="grain" aria-hidden />
        <SmoothScroll>
          <Navbar />
          <main className="relative overflow-x-clip">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
