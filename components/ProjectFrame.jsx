"use client";
import { useEffect, useState } from "react";

// Browser-window mockup whose full-page screenshot scrolls on hover (auto-scrolls on touch devices).
// `active` scrolls it without hover; it is applied a frame after mount so the transition runs.
export default function ProjectFrame({ project, className = "", active = false }) {
  const host = project.url.replace(/^https?:\/\//, "");
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!active) return setOn(false);
    let id = requestAnimationFrame(() => (id = requestAnimationFrame(() => setOn(true))));
    return () => cancelAnimationFrame(id);
  }, [active]);
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-navy shadow-[0_40px_120px_-40px_rgba(30,144,255,0.45)] ${className}`}>
      <div className="flex items-center gap-3 border-b border-white/5 bg-white/[0.04] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto max-w-[70%] truncate rounded-md bg-white/5 px-3 py-1 text-[11px] text-slate-400">{host}</div>
      </div>
      {project.full ? (
        <div
          role="img"
          aria-label={`${project.title} website`}
          className={`scroll-shot aspect-[16/10] w-full ${on ? "is-active" : ""}`}
          style={{ backgroundImage: `url(${project.full})` }}
        />
      ) : (
        // Container-query units keep the title inside the frame at any frame width
        <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b2a5c] via-[#1d4ed8] to-[#38bdf8] [container-type:inline-size]">
          <div className="grid-bg absolute inset-0 opacity-50" />
          <div className="relative max-w-full px-[6cqw] text-center">
            <div className="display text-[clamp(1.5rem,9cqw,3.75rem)] leading-[1.05]">{project.title}</div>
            <div className="label mt-3 text-[clamp(9px,1.6cqw,12px)] text-white/70">{project.category}</div>
          </div>
        </div>
      )}
    </div>
  );
}
