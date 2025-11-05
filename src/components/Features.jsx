import { CheckCircle2, PlayCircle, FileText, Clock, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: CheckCircle2,
      title: "Step‑by‑step roadmap",
      desc: "Follow the exact sequence I use — from niche to publishing to monetization.",
    },
    {
      icon: PlayCircle,
      title: "Actionable video lessons",
      desc: "Short, focused videos with worksheets so you can implement as you watch.",
    },
    {
      icon: FileText,
      title: "Templates & scripts",
      desc: "Titles, hooks, and outreach scripts you can copy and adapt instantly.",
    },
    {
      icon: Clock,
      title: "Fast results",
      desc: "Designed to get you your first wins in weeks, not months.",
    },
    {
      icon: Users,
      title: "Beginner friendly",
      desc: "No prior audience needed — learn the fundamentals that actually matter.",
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">What you’ll learn inside Method 0</h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Everything is distilled to the essentials — so you can focus on doing the work that moves the needle.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <Icon className="h-6 w-6 text-indigo-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-white/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
