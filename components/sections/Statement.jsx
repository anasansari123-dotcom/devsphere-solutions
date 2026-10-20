import ScrollText from "@/components/ScrollText";

export default function Statement() {
  return (
    <section className="relative py-20 lg:py-44">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/10 blur-[140px]" />
      <div className="container-x relative">
        <div className="label mb-10 flex items-center gap-3">
          <span className="h-px w-10 bg-brand-400" /> What we do
        </div>
        <ScrollText
          className="display max-w-6xl text-[clamp(2.2rem,5.2vw,5rem)] leading-[1.05]"
          text="Websites. SaaS. Mobile apps. Dashboards. One *full-stack* team turning ideas into *production-ready* products that move your business forward."
        />
      </div>
    </section>
  );
}
