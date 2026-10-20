"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, animate } from "framer-motion";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [n, setN] = useState(0);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const c = animate(0, 100, {
      duration: 1.8,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setN(Math.round(v)),
      onComplete: () => setTimeout(() => setDone(true), 250),
    });
    return () => c.stop();
  }, []);

  useEffect(() => {
    if (!done) return;
    document.documentElement.style.overflow = "";
    window.__dsIntroDone = true;
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{ clipPath: "inset(0 0 0% 0)" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink"
        >
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative h-16 w-[230px] overflow-hidden rounded-md">
            <Image src="/logo.jpeg" alt="DevSphere Solutions" fill priority sizes="230px" className="object-cover" />
          </motion.div>
          <div className="mt-10 h-px w-56 overflow-hidden bg-white/10">
            <div className="h-full bg-gradient-to-r from-brand-600 to-brand-300" style={{ width: `${n}%` }} />
          </div>
          <div className="absolute bottom-10 right-10 font-serif text-7xl text-white/90 sm:text-9xl">
            {n}
            <span className="text-brand-400">%</span>
          </div>
          <div className="label absolute bottom-12 left-10">Building digital worlds</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
