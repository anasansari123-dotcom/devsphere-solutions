"use client";
import Link from "next/link";
import SplitReveal from "./SplitReveal";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { company } from "@/lib/content";

// Closing call-to-action used at the bottom of every page except /contact
export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/15 blur-[150px]" />
      {/* Faint background ticker: two identical halves so the -50% loop is seamless */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 overflow-hidden opacity-[0.06]" aria-hidden>
        <div className="flex w-max shrink-0 animate-marquee">
          {[0, 1].map((half) => (
            <div key={half} className="flex shrink-0">
              {[0, 1, 2].map((k) => (
                <span key={k} className="display shrink-0 whitespace-nowrap px-10 text-[16vw]">
                  Let&apos;s talk <span className="accent">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="container-x relative text-center">
        <div className="label">Have a project in mind?</div>
        <SplitReveal text="Let's build something *great* together." className="display mx-auto mt-6 max-w-5xl text-[clamp(2.8rem,7vw,7rem)]" />
        <Reveal delay={0.25} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <Link href="/contact" className="btn-primary">Start a Project →</Link>
          </Magnetic>
          <Magnetic>
            <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp us ↗</a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
