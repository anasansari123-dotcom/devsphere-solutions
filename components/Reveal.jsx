"use client";
import { motion } from "framer-motion";
import useIsMobile from "@/lib/useIsMobile";

// Desktop: fade + slide up. Mobile: 3D flip-up out of a blur, or a tilted slide from the side when `mobileX` is set.
export default function Reveal({ children, delay = 0, y = 40, mobileX = 0, className = "" }) {
  const mobile = useIsMobile();

  if (mobile) {
    return (
      <motion.div
        key="m" // remount so the mobile starting pose applies once the breakpoint is known
        className={className}
        style={{ transformPerspective: 900 }}
        initial={
          mobileX
            ? { opacity: 0, x: mobileX, rotate: mobileX > 0 ? 5 : -5, filter: "blur(4px)" }
            : { opacity: 0, y: 70, rotateX: -35, scale: 0.92, filter: "blur(6px)" }
        }
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, rotateX: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-40px 0px" }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
