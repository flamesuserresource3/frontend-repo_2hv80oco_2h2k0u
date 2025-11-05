import { Rocket, ShieldCheck, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
          <Rocket className="h-4 w-4 text-indigo-400" />
          <span>Introducing Method 0</span>
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          The proven system to grow views and monetize consistently
        </h1>
        <p className="mt-4 md:mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
          Method 0 is a step‑by‑step playbook I use to reach 1M+ monthly views and earn $250+ every month — packaged so you can follow it, too.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition text-white px-6 py-3 font-semibold shadow-lg shadow-indigo-600/30"
          >
            Enroll now — 4000 PKR
            <ArrowRight className="h-5 w-5" />
          </a>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            14‑day money‑back guarantee
          </div>
        </div>
      </div>
    </section>
  );
}
