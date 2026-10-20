"use client";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";

// Mobile-only: circular reading progress that doubles as a back-to-top button
export default function ScrollRing() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28 });
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setShow(v > 500));

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.4, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.4, rotate: 90 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileTap={{ scale: 0.85 }}
          onClick={() => (window.__lenis ? window.__lenis.scrollTo(0, { duration: 1.4 }) : window.scrollTo({ top: 0, behavior: "smooth" }))}
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-[45] flex h-14 w-14 items-center justify-center rounded-full bg-ink/80 text-white shadow-[0_10px_30px_-10px_rgba(30,144,255,0.8)] backdrop-blur lg:hidden"
        >
          <svg viewBox="0 0 56 56" className="absolute inset-0 -rotate-90" aria-hidden>
            <circle cx="28" cy="28" r="25" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2.5" />
            <motion.circle cx="28" cy="28" r="25" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" style={{ pathLength: progress }} />
          </svg>
          <motion.span animate={{ y: [0, -3, 0] }} transition={{ duration: 1.6, repeat: Infinity }} className="relative text-lg">
            ↑
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
