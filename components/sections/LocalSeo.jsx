import Link from "next/link";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { services } from "@/lib/content";
import { areasServed, localFaqs, faqJsonLd } from "@/lib/seo";

// Local-search block: who we are in Muzaffarnagar, areas served and an FAQ (with FAQPage schema).
// `full` adds the services grid for the dedicated landing page.
export default function LocalSeo({ full = false, faqSchema = true }) {
  return (
    <section id="muzaffarnagar" className="relative py-20 lg:py-28">
      {faqSchema && <JsonLd data={faqJsonLd(localFaqs)} />}
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <div className="label flex items-center gap-3">
              <span className="h-px w-10 bg-brand-400" /> IT company in Muzaffarnagar
            </div>
            <h2 className="display mt-6 text-[clamp(2.6rem,5.5vw,5.5rem)]">
              Muzaffarnagar&apos;s <span className="accent">full-stack</span> IT company.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="space-y-5 text-lg text-slate-400 lg:pt-10">
            <p>
              <strong className="font-semibold text-slate-200">DevSphere Solutions</strong> — also known as{" "}
              <strong className="font-semibold text-slate-200">DevSphere MZN</strong> — is an IT and software development company based in
              Muzaffarnagar, Uttar Pradesh. We design and build fast, SEO-ready websites, web apps, SaaS platforms, mobile apps, CRMs and admin
              dashboards for businesses in MZN and across India, Dubai and Oman.
            </p>
            <p>
              Local businesses get a team they can meet in person, with the engineering standards of a global agency: clean production-ready
              code, Google-friendly SEO and long-term support after launch.
            </p>
          </Reveal>
        </div>

        {full && (
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <div className="glass h-full rounded-2xl p-6">
                  <h3 className="display text-3xl">
                    {s.title} <span className="accent text-2xl">in Muzaffarnagar</span>
                  </h3>
                  <p className="mt-3 text-slate-400">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal className="mt-14">
          <div className="label mb-4">Areas we serve</div>
          <ul className="flex flex-wrap gap-2">
            {areasServed.map((a) => (
              <li key={a} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
                {a}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <h2 className="display text-4xl sm:text-5xl">
              Frequently asked <span className="accent">questions</span>
            </h2>
            <p className="mt-4 max-w-sm text-slate-400">Everything businesses in Muzaffarnagar usually ask before starting a project.</p>
            <Link href="/contact" className="btn-primary mt-8">Get a free quote →</Link>
          </Reveal>
          <div>
            {localFaqs.map(([q, a]) => (
              <details key={q} className="group border-b border-white/10 py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg text-slate-100 transition-colors hover:text-brand-300">
                  <h3>{q}</h3>
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-brand-300 transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-2xl text-slate-400">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
