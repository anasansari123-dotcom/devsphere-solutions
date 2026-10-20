"use client";
import { motion } from "framer-motion";
import SocialIcon from "./SocialIcon";
import { company } from "@/lib/content";

// Fixed vertical social links on the left edge (desktop only)
export default function SocialRail() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2.6, duration: 0.8 }}
      className="fixed bottom-8 left-5 z-40 hidden flex-col items-center gap-3 xl:flex"
    >
      {company.socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          data-cursor={s.label === "WhatsApp" ? "Chat" : "Follow"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-ink/60 text-slate-300 backdrop-blur transition hover:-translate-y-1 hover:border-brand-400 hover:bg-brand-500 hover:text-white"
        >
          <SocialIcon name={s.label} />
        </a>
      ))}
      <span className="mt-2 h-16 w-px bg-gradient-to-b from-white/30 to-transparent" />
    </motion.div>
  );
}
