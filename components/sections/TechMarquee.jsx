import VelocityMarquee from "@/components/VelocityMarquee";

const words = ["Websites", "SaaS Platforms", "Mobile Apps", "Admin Dashboards", "AI Integrations", "E-commerce", "Cloud"];

export default function TechMarquee() {
  return (
    <section className="relative border-y border-white/5 py-10">
      <VelocityMarquee baseVelocity={1.5}>
        {words.map((w, i) => (
          <span key={w} className="flex items-center">
            <span className={`display px-6 text-6xl sm:text-8xl ${i % 2 ? "accent" : "text-outline"}`}>{w}</span>
            <span className="text-3xl text-brand-500">✦</span>
          </span>
        ))}
      </VelocityMarquee>
    </section>
  );
}
