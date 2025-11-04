import Hero from './components/Hero';
import Features from './components/Features';
import WorkoutPlanner from './components/WorkoutPlanner';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-extrabold text-xl">
            <span className="inline-block h-6 w-6 rounded bg-gradient-to-tr from-cyan-400 to-violet-500" />
            FitVibe
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#planner" className="hover:text-slate-900">Planner</a>
            <a href="#testimonials" className="hover:text-slate-900">Stories</a>
            <a href="#" className="rounded-lg bg-slate-900 text-white px-4 py-2 font-medium hover:bg-slate-800">Get Started</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <WorkoutPlanner />
        <section id="testimonials"><Testimonials /></section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-block h-5 w-5 rounded bg-gradient-to-tr from-cyan-400 to-violet-500" />
            <span className="font-semibold text-slate-900">FitVibe</span>
          </div>
          <p>Train smart. Stay consistent. Own your progress.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
