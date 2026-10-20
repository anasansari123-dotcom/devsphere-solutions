"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { projects } from "@/lib/content";
import useIsMobile from "@/lib/useIsMobile";

const reel = ["Chacha Mobile CRM", "Royal Metro EV", "Marina Muse International", "Digital Career Center", "Fixigo Repair", "Crossline Cricket Stadium", "MPCPCT"];

// Video card that grows from an inset card to full-bleed as the section scrolls
export default function Showreel() {
  const ref = useRef(null);
  const video = useRef(null);
  const [current, setCurrent] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });

  const inset = useTransform(scrollYProgress, [0.15, 0.75], [18, 0]);
  const radius = useTransform(scrollYProgress, [0.15, 0.75], [32, 0]);
  const clipPath = useMotionTemplate`inset(${inset}% ${inset}% ${inset}% ${inset}% round ${radius}px)`;
  const scale = useTransform(scrollYProgress, [0.15, 0.75], [1.12, 1]);
  const textY = useTransform(scrollYProgress, [0.3, 1], ["40%", "-20%"]);
  // Function form keeps this on the JS path; the accelerated scroll-timeline path left it stuck at 0
  const textOpacity = useTransform(scrollYProgress, (v) => Math.min(1, Math.max(0, (v - 0.45) / 0.25)));

  const mobile = useIsMobile();

  // Caption follows the clip currently playing (each clip is ~3.2s of the reel)
  useEffect(() => {
    const v = video.current;
    if (!v) return;
    const onTime = () => setCurrent(Math.min(reel.length - 1, Math.floor(v.currentTime / 3.2)));
    v.addEventListener("timeupdate", onTime);
    return () => v.removeEventListener("timeupdate", onTime);
  }, [mobile]);

  const url = projects.find((p) => p.title === reel[current])?.url;

  // Portrait screens: a plain 16:9 card instead of the pinned full-bleed expansion
  if (mobile) {
    return (
      <section id="showreel" className="relative py-16">
        <div className="container-x">
          <div className="label text-brand-300">Showreel · Live client work</div>
          <h2 className="display mt-3 text-5xl">
            Build. <span className="accent">Launch.</span> Scale.
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px 0px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-30px_rgba(30,144,255,0.5)]"
          >
            <video
              ref={video}
              className="aspect-video w-full object-cover"
              src="/media/showreel.mp4"
              poster="/media/showreel-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </motion.div>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="label">Now playing</span>
            <a href={url} target="_blank" rel="noopener noreferrer" className="font-serif text-xl italic text-white">
              {reel[current]} ↗
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="showreel" ref={ref} className="relative h-[220vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ clipPath }} className="absolute inset-0">
          <motion.video
            ref={video}
            style={{ scale }}
            className="h-full w-full object-cover"
            src="/media/showreel.mp4"
            poster="/media/showreel-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
        </motion.div>

        <motion.div style={{ y: textY, opacity: textOpacity }} className="container-x relative z-10 flex h-full flex-col justify-end pb-16">
          <div className="label text-brand-300">Showreel · Live client work</div>
          <h2 className="display mt-4 text-[clamp(2.8rem,8vw,7.5rem)]">
            Build. <span className="accent">Launch.</span> Scale.
          </h2>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="label">Now playing</span>
            <motion.a key={current} href={url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-2xl italic text-white hover:text-brand-300">
              {reel[current]} ↗
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
