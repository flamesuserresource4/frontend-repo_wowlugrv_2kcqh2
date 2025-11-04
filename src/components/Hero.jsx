import { Rocket, Dumbbell } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
        <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#g)" />
          <circle cx="700" cy="200" r="120" fill="url(#g)" />
          <circle cx="300" cy="500" r="100" fill="url(#g)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="flex items-center gap-2 w-fit rounded-full bg-white/10 border border-white/10 px-3 py-1 text-sm backdrop-blur">
          <Rocket className="h-4 w-4 text-cyan-300" />
          <span className="text-slate-200">Level up your training</span>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Your personal fitness companion
            </h1>
            <p className="mt-4 text-slate-300 text-lg max-w-xl">
              Plan smarter workouts, track your progress, and stay motivated with a clean, modern experience designed for results.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#planner"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-medium text-slate-900 hover:bg-cyan-300 transition"
              >
                <Dumbbell className="h-5 w-5" /> Start planning
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-medium text-white hover:bg-white/10 transition"
              >
                Explore features
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-tr from-cyan-400/20 via-fuchsia-400/10 to-emerald-400/20 border border-white/10 p-2">
              <div className="h-full w-full rounded-xl bg-slate-950/50 backdrop-blur flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 p-6 w-full">
                  {[
                    'Push-ups','Squats','Plank','Lunges','Burpees','Crunches','Pull-ups','Mountain climbers','Deadlifts',
                  ].map((w, i) => (
                    <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-slate-200">
                      {w}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
