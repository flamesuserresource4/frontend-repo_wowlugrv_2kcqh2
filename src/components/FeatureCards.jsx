import { motion } from 'framer-motion';

function MiniCube() {
  return (
    <div className="relative h-20 w-20 [perspective:600px]">
      <div className="absolute inset-0 animate-[spin_10s_linear_infinite] [transform-style:preserve-3d]">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className="absolute inset-0 m-auto h-20 w-20 rounded-lg border border-white/20 bg-gradient-to-br from-[#00BFFF]/20 to-[#FF6B35]/20 shadow-[0_0_30px_rgba(0,191,255,0.15)] [transform-style:preserve-3d]"
            style={{
              transform:
                i === 0
                  ? 'translateZ(40px)'
                  : i === 1
                  ? 'translateZ(-40px) rotateY(180deg)'
                  : i === 2
                  ? 'rotateY(90deg) translateZ(40px)'
                  : i === 3
                  ? 'rotateY(-90deg) translateZ(40px)'
                  : i === 4
                  ? 'rotateX(90deg) translateZ(40px)'
                  : 'rotateX(-90deg) translateZ(40px)'
            }}
          />
        ))}
      </div>
    </div>
  );
}

const items = [
  {
    title: '3D Workouts',
    desc: 'Interact with dynamic scenes that respond to your movement.',
  },
  {
    title: 'Glass UI',
    desc: 'Frosted panels deliver clarity and focus with premium flair.',
  },
  {
    title: 'Smooth Motion',
    desc: 'Delightful animations everywhere with buttery transitions.',
  },
  {
    title: 'Performance',
    desc: 'Optimized rendering for crisp visuals on any device.',
  },
];

export default function FeatureCards() {
  return (
    <section id="features" className="relative bg-slate-950 py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,_#FF8C42_0%,_transparent_60%)] opacity-20 blur-2xl" />
        <div className="absolute right-[-10%] top-10 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,_#0066FF_0%,_transparent_60%)] opacity-20 blur-2xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">Features that feel alive</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
          High-contrast design, glowing accents, and interactive 3D previews.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-6 text-white shadow-[0_0_40px_rgba(255,107,53,0.07)] backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <MiniCube />
                <div className="h-2 w-2 rounded-full bg-[#00BFFF] shadow-[0_0_18px_6px_rgba(0,191,255,0.6)]" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-300">{f.desc}</p>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/10 via-transparent to-[#FF6B35]/10" />
                <div className="absolute inset-0 shadow-[0_0_60px_10px_rgba(0,191,255,0.15)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
