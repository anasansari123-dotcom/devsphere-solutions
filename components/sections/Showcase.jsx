"use client";
import dynamic from "next/dynamic";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import SceneBoundary from "@/components/three/SceneBoundary";
import { whyChoose } from "@/lib/content";

const ShowcaseScene = dynamic(() => import("@/components/three/ShowcaseScene"), { ssr: false });

export default function Showcase() {
  return (
    <section id="why" className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_50%,rgba(30,144,255,0.12),transparent_60%)]" />
      <div className="container-x relative grid gap-6 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="label flex items-center gap-3">
            <span className="h-px w-10 bg-brand-400" /> Why DevSphere
          </div>
          <SplitReveal text="Built right, built to *last.*" className="display mt-4 text-[clamp(2.6rem,6vw,6rem)] lg:mt-6" />
          <div className="pointer-events-none relative -mx-5 mt-2 h-[220px] sm:mx-0 sm:h-[460px] lg:pointer-events-auto lg:mt-6" data-cursor="Drag">
            <SceneBoundary>
              <ShowcaseScene />
            </SceneBoundary>
          </div>
        </div>

        {/* Each row draws only its top border (the Reveal wrapper breaks :first-child), the list closes the bottom */}
        <ul className="border-b border-white/10 lg:pt-24">
          {whyChoose.map(([t, d], i) => (
            <Reveal key={t} delay={0.05} mobileX={i % 2 ? 90 : -90}>
              <li className="group grid grid-cols-[36px_1fr] gap-3 border-t border-white/10 py-5 lg:grid-cols-[56px_1fr] lg:gap-4 lg:py-8">
                <span className="pt-1 font-serif text-lg italic text-brand-400 transition-transform duration-500 group-hover:-translate-y-1 lg:pt-0 lg:text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="display text-[1.7rem] transition-colors duration-300 group-hover:text-brand-300 sm:text-4xl lg:text-4xl">{t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400 lg:mt-2 lg:text-base">{d}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
