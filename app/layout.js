import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import SocialRail from "@/components/SocialRail";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif" });

export const metadata = {
  title: "DevSphere Solutions | Websites, SaaS, Mobile Apps & Admin Dashboards",
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
        <div className="grain" aria-hidden />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
