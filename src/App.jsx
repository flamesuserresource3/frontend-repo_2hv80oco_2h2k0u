import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import PricingSection from "./components/PricingSection";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-20 backdrop-blur bg-slate-950/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-600" />
            <span className="font-bold tracking-tight">Method 0</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#checkout" className="rounded-md bg-white/10 hover:bg-white/20 px-3 py-1.5">Enroll</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Stats />
        <div id="features">
          <Features />
        </div>
        <PricingSection />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div>© {new Date().getFullYear()} Method 0. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <span>•</span>
            <span>14‑day return policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
