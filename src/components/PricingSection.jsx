import { CheckCircle2, ShieldCheck } from "lucide-react";

export default function PricingSection() {
  const benefits = [
    "Lifetime access + future updates",
    "Full Method 0 video curriculum",
    "Templates, scripts, and checklists",
    "Email support for setup questions",
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Start today for just 4000 PKR</h2>
            <p className="mt-3 text-white/70 max-w-xl">
              Learn the exact approach I use to consistently reach 1M+ monthly views and earn $250+ every month. If it’s not for you, get a full refund within 14 days. No hassle.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-emerald-300">
              <ShieldCheck className="h-5 w-5" /> 14‑day money‑back guarantee
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur">
            <div className="flex items-baseline gap-2">
              <div className="text-4xl font-extrabold text-white">4000</div>
              <div className="text-white/70">PKR • one‑time</div>
            </div>

            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-white/90">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="#checkout"
              className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition text-white px-6 py-3 font-semibold shadow-lg shadow-indigo-600/30"
            >
              Enroll in Method 0
            </a>
            <p className="mt-3 text-center text-xs text-white/60">
              Secure checkout • Instant access • VAT included where applicable
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
