"use client";
import { motion } from "framer-motion";

// Word-by-word slide-up reveal. Wrap a word in *asterisks* to render it as an italic accent.
export default function SplitReveal({ text, as: Tag = "h2", className = "", delay = 0, stagger = 0.06, immediate = false }) {
  const words = text.split(" ");
  const anim = immediate
    ? { animate: { y: 0, rotate: 0 } }
    : { whileInView: { y: 0, rotate: 0 }, viewport: { once: true, margin: "-60px 0px" } };

  return (
    <Tag className={className}>
      {words.map((w, i) => {
        const accent = w.startsWith("*");
        const clean = w.replace(/\*/g, "");
        return (
          <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-top">
            <motion.span
              className={`inline-block ${accent ? "accent pr-[0.08em]" : ""}`}
              initial={{ y: "110%", rotate: 4 }}
              {...anim}
              transition={{ duration: 0.9, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
            >
              {clean}
            </motion.span>
            {i < words.length - 1 && " "}
          </span>
        );
      })}
    </Tag>
  );
}
