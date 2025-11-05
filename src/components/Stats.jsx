import { BarChart3, DollarSign, ShieldCheck, User } from "lucide-react";

export default function Stats() {
  const items = [
    { icon: BarChart3, label: "Monthly Views", value: "1M+" },
    { icon: DollarSign, label: "Avg. Monthly Earnings", value: "$250+" },
    { icon: ShieldCheck, label: "Return Policy", value: "14 days" },
    { icon: User, label: "Skill Level", value: "Beginner friendly" },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm"
            >
              <Icon className="mx-auto h-6 w-6 text-indigo-400" />
              <div className="mt-3 text-2xl font-bold text-white">{value}</div>
              <div className="text-sm text-white/70">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
