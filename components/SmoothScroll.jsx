"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenisRef.current = lenis;
    window.__lenis = lenis; // shared with controls like the mobile back-to-top ring
    let id;
    const raf = (t) => {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);

    // Links to a section on the current page ("#x" or "/this-page#x") scroll smoothly through Lenis
    const onClick = (e) => {
      const a = e.target.closest("a[href*='#']");
      if (!a || a.target === "_blank") return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return;
      const el = document.querySelector(url.hash);
      if (el) {
        e.preventDefault();
        history.replaceState(null, "", url.hash);
        lenis.scrollTo(el, { offset: -80 });
      }
    };
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(id);
      document.removeEventListener("click", onClick);
      lenis.destroy();
      if (window.__lenis === lenis) delete window.__lenis;
    };
  }, []);

  // On route change: jump to the top, or to the #section the link pointed at once it has rendered
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    const hash = window.location.hash;
    if (!hash) {
      lenis.scrollTo(0, { immediate: true });
      return;
    }
    const t = setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) lenis.scrollTo(el, { offset: -80, immediate: true });
    }, 150);
    return () => clearTimeout(t);
  }, [pathname]);

  return children;
}
