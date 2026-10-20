"use client";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";

const initials = (n) => n.replace("Dr. ", "").split(" ").map((w) => w[0]).join("");

const variants = {
  exit: (dir) => ({ x: dir * 520, rotate: dir * 24, opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }),
};

function Card({ item, depth, dir, onSwipe }) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-220, 220], [-16, 16]);
  const glow = useTransform(x, [-150, 0, 150], [1, 0, 1]);
  const top = depth === 0;

  return (
    <motion.div
      custom={dir}
      variants={variants}
      initial={{ scale: 0.82, y: 60, opacity: 0 }}
      animate={{ scale: 1 - depth * 0.06, y: depth * 18, opacity: depth === 2 ? 0.45 : 1, rotate: top ? 0 : depth % 2 ? -3 : 3 }}
      exit="exit"
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      style={top ? { x, rotate, zIndex: 10 } : { zIndex: 10 - depth }}
      drag={top ? "x" : false}
      dragSnapToOrigin
      dragElastic={0.9}
      onDragEnd={(_, info) => {
        if (Math.abs(info.offset.x) > 90 || Math.abs(info.velocity.x) > 500) onSwipe(info.offset.x > 0 ? 1 : -1);
      }}
      className="absolute inset-x-0 top-0 h-[370px] origin-bottom touch-pan-y select-none overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#10203d] to-[#070b16] p-6 shadow-[0_30px_60px_-30px_rgba(30,144,255,0.6)]"
    >
      {top && <motion.div style={{ opacity: glow }} className="pointer-events-none absolute inset-0 rounded-[1.75rem] border-2 border-brand-400" />}
      <span className="pointer-events-none absolute -right-2 -top-10 font-serif text-[9rem] leading-none text-brand-500/15">&rdquo;</span>
      <div className="relative flex h-full flex-col">
        <div className="text-sm tracking-[0.3em] text-brand-300">★★★★★</div>
        <p className="mt-4 flex-1 font-serif text-[1.45rem] leading-snug text-white">&ldquo;{item.text}&rdquo;</p>
        <div className="flex items-center gap-3 border-t border-white/10 pt-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-300 text-sm font-semibold text-white">
            {initials(item.name)}
          </div>
          <div className="min-w-0">
            <div className="truncate font-semibold text-white">{item.name}</div>
            <div className="truncate text-xs text-slate-400">{item.role}</div>
            <div className="accent text-xs">{item.place}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Mobile testimonials: a stack of cards you flick away left or right (Tinder-style)
export default function SwipeDeck({ items, index, onNext, onPick, onInteract }) {
  const [dir, setDir] = useState(-1);
  const n = items.length;

  const swipe = (d) => {
    setDir(d);
    onInteract?.();
    onNext();
  };

  return (
    <div>
      <div className="relative h-[420px]">
        <AnimatePresence custom={dir} initial={false}>
          {[2, 1, 0].map((depth) => {
            const k = (index + depth) % n;
            return <Card key={k} item={items[k]} depth={depth} dir={dir} onSwipe={swipe} />;
          })}
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">
          {items.map((_, k) => (
            <button
              key={k}
              onClick={() => {
                onInteract?.();
                onPick(k);
              }}
              aria-label={`Testimonial ${k + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${k === index ? "w-8 bg-brand-400" : "w-1.5 bg-white/25"}`}
            />
          ))}
        </div>
        <motion.span animate={{ x: [-4, 4, -4] }} transition={{ duration: 1.6, repeat: Infinity }} className="label text-brand-300">
          ← Swipe →
        </motion.span>
      </div>
    </div>
  );
}
