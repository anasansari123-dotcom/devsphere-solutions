"use client";
import { motion } from "framer-motion";
import useIsMobile from "@/lib/useIsMobile";

// Word-by-word heading reveal. Wrap a word in *asterisks* to render it as an italic accent.
// Desktop: words slide up from behind a mask. Mobile: words zoom down out of a blur into focus.
export default function SplitReveal({ text, as: Tag = "h2", className = "", delay = 0, stagger = 0.06, immediate = false }) {
  const mobile = useIsMobile();
  const words = text.split(" ");

  const from = mobile ? { opacity: 0, scale: 1.8, y: "-20%", filter: "blur(14px)" } : { y: "110%", rotate: 4 };
  const to = mobile ? { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" } : { y: 0, rotate: 0 };
  const anim = immediate ? { animate: to } : { whileInView: to, viewport: { once: true, margin: "-60px 0px" } };

  return (
    <Tag className={className}>
      {words.map((w, i) => {
        const accent = w.startsWith("*");
        const clean = w.replace(/\*/g, "");
        return (
          <span key={i} className={`inline-block pb-[0.12em] align-top ${mobile ? "" : "overflow-hidden"}`}>
            <motion.span
              key={mobile ? "m" : "d"} // remount so the mobile starting pose applies once the breakpoint is known
              className={`inline-block ${accent ? "accent pr-[0.08em]" : ""}`}
              initial={from}
              {...anim}
              transition={{
                duration: mobile ? 1 : 0.9,
                delay: delay + i * (mobile ? stagger + 0.03 : stagger),
                ease: mobile ? [0.16, 1, 0.3, 1] : [0.22, 1, 0.36, 1],
              }}
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
