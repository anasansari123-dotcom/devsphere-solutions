import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "Contact",
  description: "Start a project with DevSphere Solutions — call, WhatsApp or email us. We respond within 1–2 business days.",
};

export default function ContactPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <Contact />
    </div>
  );
}
