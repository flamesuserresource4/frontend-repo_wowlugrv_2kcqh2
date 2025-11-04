import { Dumbbell, Heart, Clock, Trophy } from 'lucide-react';

const features = [
  {
    icon: Dumbbell,
    title: 'Smart Workouts',
    desc: 'Build structured routines with sets, reps, and rest timers tailored to your goals.'
  },
  {
    icon: Heart,
    title: 'Health Focused',
    desc: 'Prioritize form and recovery with gentle reminders and wellness insights.'
  },
  {
    icon: Clock,
    title: 'Progress Tracking',
    desc: 'Log sessions in seconds and see streaks, volume, and PRs at a glance.'
  },
  {
    icon: Trophy,
    title: 'Stay Motivated',
    desc: 'Earn milestones and share achievements to keep momentum strong.'
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Features that drive results</h2>
        <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">
          Everything you need to plan, execute, and track your fitness journey in one streamlined experience.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 text-cyan-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
