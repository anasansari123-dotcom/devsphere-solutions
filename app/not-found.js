import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,144,255,0.15),transparent_60%)]" />
      <div className="container-x relative text-center">
        <div className="display text-[clamp(7rem,25vw,18rem)] leading-none">
          4<span className="accent">0</span>4
        </div>
        <p className="mx-auto mt-6 max-w-md text-lg text-slate-400">This page drifted out of orbit. Let&apos;s get you back on track.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/work" className="btn-ghost">See our work</Link>
        </div>
      </div>
    </section>
  );
}
