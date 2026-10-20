"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Mobile stand-in for the custom cursor: every tap sends out a soft blue shockwave
export default function TouchRipple() {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    if (!window.matchMedia("(pointer: coarse)").matches) return;
    let id = 0;
    const onDown = (e) => {
      if (e.pointerType !== "touch") return;
      const r = { id: ++id, x: e.clientX, y: e.clientY };
      setRipples((list) => [...list.slice(-4), r]);
      setTimeout(() => setRipples((list) => list.filter((x) => x.id !== r.id)), 750);
    };
    window.addEventListener("pointerdown", onDown, { passive: true });
    return () => window.removeEventListener("pointerdown", onDown);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[95] lg:hidden" aria-hidden>
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            initial={{ scale: 0, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute h-28 w-28 rounded-full border-2 border-brand-300 bg-brand-400/10"
            style={{ left: r.x - 56, top: r.y - 56 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
