"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import SocialIcon from "./SocialIcon";
import { company, services, projects, projectHref } from "@/lib/content";

const cols = [
  ["Services", services.map((s) => [s.title, "/services"])],
  ["Projects", projects.map((p) => [p.title, projectHref(p)])],
  [
    "Company",
    [
      ["Home", "/"],
      ["About", "/about"],
      ["Founders", "/about#team"],
      ["Work", "/work"],
      ["Services", "/services"],
      ["Stack", "/services#technologies"],
      ["Process", "/services#process"],
      ["Contact", "/contact"],
    ],
  ],
];

const brand = "DevSphere".split("");

export default function Footer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-white/5 bg-navy/40 pt-20">
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-10 pb-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12 lg:pb-16">
        <div className="col-span-2 lg:col-span-1">
          <Link href="/" aria-label="DevSphere Solutions home" className="relative block h-14 w-[200px] overflow-hidden rounded-md">
            <Image src="/logo.jpeg" alt="DevSphere Solutions" fill className="object-cover" sizes="200px" />
          </Link>
          <p className="mt-5 max-w-sm text-slate-400">{company.tagline}</p>
          <div className="mt-5 space-y-1 text-sm text-slate-400">
            <a href={`mailto:${company.email}`} className="block hover:text-brand-300">{company.email}</a>
            {company.phones.map((ph) => (
              <a key={ph.href} href={ph.href} className="block hover:text-brand-300">{ph.label}</a>
            ))}
            <div>{company.location}</div>
          </div>
          <div className="mt-6 flex gap-3">
            {company.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:-translate-y-1 hover:border-brand-400 hover:bg-brand-500 hover:text-white"
              >
                <SocialIcon name={s.label} />
              </a>
            ))}
          </div>
        </div>
        {cols.map(([h, links]) => (
          <div key={h}>
            <h4 className="label">{h}</h4>
            <ul className="mt-5 space-y-2.5">
              {links.map(([l, href]) => (
                <li key={l}>
                  <Link href={href} className="text-sm text-slate-400 transition hover:pl-1 hover:text-brand-300">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Giant wordmark rises letter by letter as the footer scrolls in */}
      <div className="flex select-none justify-center overflow-hidden px-4 pt-6" aria-hidden>
        {brand.map((ch, i) => (
          <Letter key={i} ch={ch} i={i} progress={scrollYProgress} />
        ))}
      </div>

      <div className="border-t border-white/5 py-6">
        <div className="container-x flex flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
          <span>© {new Date().getFullYear()} DevSphere Solutions. All rights reserved.</span>
          <span>India · Dubai · Oman · Global</span>
          <div className="flex gap-5">
            {company.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-brand-300">{s.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function Letter({ ch, i, progress }) {
  const y = useTransform(progress, [0.2 + i * 0.03, 0.75 + i * 0.025], ["100%", "0%"]);
  return (
    <motion.span style={{ y }} className={`inline-block font-serif text-[23vw] leading-[0.9] tracking-[-0.03em] ${i >= 3 ? "accent" : "text-white"}`}>
      {ch}
    </motion.span>
  );
}
