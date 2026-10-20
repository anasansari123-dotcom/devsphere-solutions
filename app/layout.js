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

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif" });

export const metadata = {
  title: {
    default: "DevSphere Solutions | Websites, SaaS, Mobile Apps & Admin Dashboards",
    template: "%s | DevSphere Solutions",
  },
  description:
    "DevSphere Solutions is a premium software development agency building scalable websites, SaaS platforms, mobile apps, admin dashboards and AI integrations for India, Dubai, Oman & global markets.",
  icons: { icon: "/logo.jpeg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="bg-ink font-sans text-slate-200 antialiased">
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
