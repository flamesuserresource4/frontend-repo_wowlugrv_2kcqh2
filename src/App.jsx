import Hero3D from './components/Hero3D';
import FeatureCards from './components/FeatureCards';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import ParticleField from './components/ParticleField';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
            <span className="inline-block h-5 w-5 rounded bg-gradient-to-br from-[#0066FF] to-[#00BFFF]" />
            flames.blue
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#cta" className="hover:text-white">Get started</a>
          </nav>
        </div>
      </header>

      <div className="relative">
        <ParticleField className="pointer-events-none absolute inset-0" />
        <Hero3D />
      </div>

      <FeatureCards />
      <Gallery />
      <section id="cta"><CTA /></section>

      <footer className="border-t border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <span className="inline-block h-4 w-4 rounded bg-gradient-to-br from-[#FF6B35] to-[#0066FF]" />
            <span className="font-semibold text-white">flames.blue</span>
          </div>
          <p>Futuristic. Premium. Immersive.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
