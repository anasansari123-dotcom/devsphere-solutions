"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// One slide: tilts away and shrinks as it moves off-centre, so the deck reads like a 3D cover-flow
function Slide({ container, children }) {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container, target: ref, axis: "x", offset: ["start end", "end start"] });
  // Function forms keep these on the JS path (see the Showreel opacity note)
  const scale = useTransform(scrollXProgress, (v) => 1 - Math.min(0.14, Math.abs(v - 0.5) * 0.4));
  const rotateY = useTransform(scrollXProgress, (v) => (0.5 - v) * 40);
  const opacity = useTransform(scrollXProgress, (v) => 1 - Math.min(0.55, Math.abs(v - 0.5) * 1.3));

  return (
    <motion.div ref={ref} style={{ scale, rotateY, opacity, transformPerspective: 1000 }} className="w-[76vw] max-w-[400px] shrink-0 snap-center">
      {children}
    </motion.div>
  );
}

// Mobile swipe gallery with snap points, 3D cover-flow slides, progress dots and a swipe hint
export default function SwipeCarousel({ items, render }) {
  const container = useRef(null);
  const [active, setActive] = useState(0);
  const [touched, setTouched] = useState(false);

  const onScroll = () => {
    const el = container.current;
    const slide = el.firstElementChild?.nextElementSibling; // first child is the left spacer
    if (!slide) return;
    const step = slide.offsetWidth + 16; // offsetWidth ignores the scale transform
    setActive(Math.max(0, Math.min(items.length - 1, Math.round(el.scrollLeft / step))));
  };

  const goTo = (i) => {
    const el = container.current;
    const slide = el.children[i + 1];
    el.scrollTo({ left: slide.offsetLeft - (el.clientWidth - slide.clientWidth) / 2, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={container}
        onScroll={onScroll}
        onTouchStart={() => setTouched(true)}
        data-lenis-prevent
        className="flex snap-x snap-mandatory items-start gap-4 overflow-x-auto pb-8 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="w-[calc((100vw-min(76vw,400px))/2-16px)] shrink-0" aria-hidden />
        {items.map((item, i) => (
          <Slide key={i} container={container}>
            {render(item, i)}
          </Slide>
        ))}
        <div className="w-[calc((100vw-min(76vw,400px))/2-16px)] shrink-0" aria-hidden />
      </div>

      <div className="container-x flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-brand-400" : "w-1.5 bg-white/25"}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="font-serif text-lg italic text-white">
            {String(active + 1).padStart(2, "0")}
            <span className="text-slate-500"> / {String(items.length).padStart(2, "0")}</span>
          </span>
          {!touched && (
            <motion.span animate={{ x: [0, 10, 0] }} transition={{ duration: 1.4, repeat: Infinity }} className="label text-brand-300">
              Swipe →
            </motion.span>
          )}
        </div>
      </div>
    </div>
  );
}
