"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Dot + trailing ring; elements with data-cursor="Label" expand it into a labelled bubble
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 260, damping: 26, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 260, damping: 26, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("has-cursor");
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target.closest?.("[data-cursor]");
      setLabel(t ? t.getAttribute("data-cursor") : "");
      setHovering(!!e.target.closest?.("a, button, input, textarea, select, [role=button]"));
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;
  const size = label ? 96 : hovering ? 56 : 36;

  return (
    <>
      <motion.div style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[100] -ml-1 -mt-1 h-2 w-2 rounded-full bg-brand-300 mix-blend-difference" />
      <motion.div
        style={{ x: rx, y: ry }}
        animate={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={`pointer-events-none fixed left-0 top-0 z-[99] flex items-center justify-center rounded-full ${
          label ? "bg-brand-500 text-white" : "border border-brand-300/60"
        }`}
      >
        {label && <span className="text-xs font-semibold uppercase tracking-widest">{label}</span>}
      </motion.div>
    </>
  );
}
