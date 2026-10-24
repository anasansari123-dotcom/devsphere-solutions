"use client";
import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import Magnetic from "@/components/Magnetic";
import SocialIcon from "@/components/SocialIcon";
import { company, projectTypes, budgets } from "@/lib/content";

const inputCls =
  "peer w-full border-0 border-b border-white/15 bg-transparent px-0 pb-3 pt-6 text-lg text-white outline-none transition placeholder:text-transparent focus:border-brand-400";

export default function Contact() {
  // No backend: hand the enquiry to WhatsApp with the form pre-filled
  const onSubmit = (e) => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget));
    const msg = [
      "Hi DevSphere Solutions, I'd like to start a project.",
      `Name: ${f.name}`,
      `Email: ${f.email}`,
      f.phone && `Phone: ${f.phone}`,
      `Project Type: ${f.type}`,
      `Budget: ${f.budget}`,
      `Details: ${f.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`${company.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute bottom-0 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-brand-600/15 blur-[160px]" />
      <div className="container-x relative">
        <div className="text-center">
          <div className="label">Start a project</div>
          <SplitReveal as="h1" text="Let's connect and grow *together.*" className="display mx-auto mt-6 max-w-6xl text-[clamp(3rem,8vw,8.5rem)]" />
          <Reveal delay={0.3}>
            <a href={`mailto:${company.email}`} className="group relative mt-8 inline-block text-xl text-slate-200 sm:text-2xl">
              {company.email}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left bg-brand-400 transition-transform duration-500 group-hover:scale-x-0" />
            </a>
            <p className="mt-4 text-slate-500">We respond within {company.responseTime}.</p>
          </Reveal>
        </div>

        <div className="mt-14 lg:mt-24 grid gap-16 lg:grid-cols-[1fr_1.6fr]">
          <Reveal className="space-y-8">
            <div className="border-b border-white/10 pb-6">
              <div className="label">Phone</div>
              {company.phones.map((ph) => (
                <a key={ph.href} href={ph.href} className="display mt-2 block text-3xl hover:text-brand-300">
                  {ph.label}
                </a>
              ))}
            </div>
            {[
              ["WhatsApp", "Chat with us ↗", company.whatsapp],
              ["Studio", company.location, null],
            ].map(([k, v, href]) => (
              <div key={k} className="border-b border-white/10 pb-6">
                <div className="label">{k}</div>
                {href ? (
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="display mt-2 block text-3xl hover:text-brand-300">
                    {v}
                  </a>
                ) : (
                  <div className="display mt-2 text-3xl">{v}</div>
                )}
              </div>
            ))}
            <div>
              <div className="label mb-4">Follow DevSphere</div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {company.socials
                  .filter((s) => s.handle)
                  .map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="Follow"
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:-translate-y-1 hover:border-brand-400/50 hover:bg-brand-500/10"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white transition group-hover:rotate-[-8deg] group-hover:scale-110">
                        <SocialIcon name={s.label} size={22} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-[0.2em] text-slate-500">{s.label}</span>
                        <span className="block truncate font-medium text-white">{s.handle}</span>
                      </span>
                      <span className="ml-auto text-slate-500 transition group-hover:translate-x-1 group-hover:text-brand-300">↗</span>
                    </a>
                  ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={onSubmit} className="glass grid gap-x-8 gap-y-6 rounded-[2rem] p-8 sm:grid-cols-2 sm:p-12">
              <Field label="Your name" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" required={false} />
              <Select label="Project type" name="type" options={projectTypes} />
              <div className="sm:col-span-2">
                <div className="label mb-3">Budget range</div>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b, i) => (
                    <label key={b} className="cursor-pointer">
                      <input type="radio" name="budget" value={b} defaultChecked={i === 0} className="peer sr-only" />
                      <span className="block rounded-full border border-white/15 px-4 py-2 text-sm text-slate-300 transition peer-checked:border-brand-400 peer-checked:bg-brand-500 peer-checked:text-white">
                        {b}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-2">
                <Field label="Tell us about your project" name="message" textarea />
              </div>
              <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
                <Magnetic>
                  <button type="submit" className="btn-primary">Send via WhatsApp →</button>
                </Magnetic>
                <span className="text-sm text-slate-500">Opens WhatsApp with your details filled in.</span>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// Floating label input
function Field({ label, name, type = "text", required = true, textarea = false }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <label className="relative block">
      <Tag name={name} type={textarea ? undefined : type} required={required} placeholder={label} rows={textarea ? 3 : undefined} className={`${inputCls} ${textarea ? "resize-none" : ""}`} />
      <span className="pointer-events-none absolute left-0 top-1 text-xs uppercase tracking-[0.2em] text-slate-500 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-1 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-brand-300">
        {label}
      </span>
    </label>
  );
}

function Select({ label, name, options }) {
  return (
    <label className="relative block">
      <span className="absolute left-0 top-1 text-xs uppercase tracking-[0.2em] text-slate-500">{label}</span>
      <select name={name} className={`${inputCls} [&>option]:bg-navy`}>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
