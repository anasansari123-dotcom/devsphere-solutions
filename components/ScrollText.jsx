"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Paragraph whose words light up one by one as it scrolls through the viewport
export default function ScrollText({ text, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} accent={w.startsWith("*")}>
          {w.replace(/\*/g, "")}
        </Word>
      ))}
    </p>
  );
}

function Word({ children, progress, range, accent }) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <motion.span style={{ opacity }} className={`mr-[0.25em] inline-block ${accent ? "accent" : ""}`}>
      {children}
    </motion.span>
  );
}
