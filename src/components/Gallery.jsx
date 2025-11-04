import { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

function TiltCard({ children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  function onMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-50, Math.min(50, dx)));
    y.set(Math.max(-50, Math.min(50, dy)));
  }

  function onMouseLeave() { x.set(0); y.set(0); }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-6 text-white backdrop-blur"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/10 via-transparent to-[#FF6B35]/10" />
      </div>
      {children}
    </motion.div>
  );
}

function Sphere() {
  return (
    <div className="relative mx-auto h-40 w-40">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,_white_0%,_#00BFFF_25%,_#0b1020_60%)] shadow-[0_0_40px_10px_rgba(0,191,255,0.25)] animate-pulse" />
      <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,_transparent_0%,_transparent_70%,_rgba(255,107,53,0.5)_85%,_transparent_100%)] blur-sm animate-[spin_6s_linear_infinite]" />
    </div>
  );
}

function Torus() {
  return (
    <div className="relative mx-auto h-40 w-40">
      <div className="absolute inset-0 rounded-full border-8 border-[#0066FF]/70 shadow-[0_0_30px_rgba(0,102,255,0.45)_inset,_0_0_30px_rgba(0,102,255,0.35)]" />
      <div className="absolute inset-0 rounded-full ring-2 ring-[#FF6B35]/70 blur-[2px] animate-[spin_5s_linear_infinite]" />
    </div>
  );
}

function Abstract() {
  return (
    <div className="relative mx-auto h-40 w-40 [perspective:800px]">
      <div className="absolute inset-0 [transform-style:preserve-3d] animate-[spin_8s_linear_infinite]">
        {Array.from({ length: 18 }).map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i} className="absolute left-1/2 top-1/2 h-1 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#00BFFF] opacity-80" style={{ transform: `rotateY(${i * 20}deg) translateZ(40px)` }} />
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-slate-950 py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_#00BFFF_0%,_transparent_60%)] opacity-20 blur-2xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_#FF6B35_0%,_transparent_60%)] opacity-20 blur-2xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">Interactive 3D gallery</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
          Tilt, hover, and explore abstract shapes with glow and depth.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <TiltCard>
            <div className="flex flex-col items-center gap-4">
              <Sphere />
              <div className="text-center">
                <h3 className="text-lg font-semibold">Glowing Sphere</h3>
                <p className="text-sm text-slate-300">Soft blue core with subtle flame highlights.</p>
              </div>
            </div>
          </TiltCard>
          <TiltCard>
            <div className="flex flex-col items-center gap-4">
              <Torus />
              <div className="text-center">
                <h3 className="text-lg font-semibold">Energy Ring</h3>
                <p className="text-sm text-slate-300">Vibrant loop with rotating orange shimmer.</p>
              </div>
            </div>
          </TiltCard>
          <TiltCard>
            <div className="flex flex-col items-center gap-4">
              <Abstract />
              <div className="text-center">
                <h3 className="text-lg font-semibold">Abstract Lattice</h3>
                <p className="text-sm text-slate-300">Layered beams forming a dynamic lattice.</p>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
