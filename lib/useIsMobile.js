"use client";
import { useEffect, useState } from "react";

// True below the lg breakpoint (1024px); false during SSR and the first client render
export default function useIsMobile(query = "(max-width: 1023px)") {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);
  return mobile;
}
