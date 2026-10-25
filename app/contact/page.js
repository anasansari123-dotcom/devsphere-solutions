import Contact from "@/components/sections/Contact";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact DevSphere Solutions — IT Company in Uttar Pradesh",
  description:
    "Start your project with DevSphere Solutions, Uttar Pradesh. Call +91 94578 18861, WhatsApp or email us for a free quote on websites, apps and software — reply within 1–2 business days.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <JsonLd data={breadcrumbJsonLd([["Contact", "/contact"]])} />
      <Contact />
    </div>
  );
}
