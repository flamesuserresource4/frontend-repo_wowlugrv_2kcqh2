import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function GradientGlow() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[42rem] rounded-full bg-[radial-gradient(circle_at_center,_#0066FF_0%,_transparent_60%)] opacity-30 blur-2xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_#FF6B35_0%,_transparent_60%)] opacity-30 blur-2xl" />
    </div>
  );
}

export default function Hero3D() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-slate-950 text-white">
      <GradientGlow />

      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/Ujidb4bmigoHT4IV/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-fit rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-sm backdrop-blur"
        >
          Immersive 3D fitness experiences by flames.blue
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl"
        >
          Train in style with a cutting‑edge, 3D‑powered platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-slate-300"
        >
          Dark, sleek, and vibrant. Smooth interactions, frosted glass panels, and glowing accents in flame orange and electric blue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#features"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00BFFF] px-6 py-3 font-semibold text-white shadow-[0_0_25px_rgba(0,102,255,0.35)] transition-transform hover:scale-[1.02]"
          >
            Explore features
            <span className="absolute inset-0 -z-0 rounded-xl bg-white/20 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/15"
          >
            View 3D Gallery
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.25 }}
          className="mt-12 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"
        >
          <p className="text-sm text-slate-300">
            Tip: Drag and orbit the 3D scene in the background. Hover elements below to see glow and parallax effects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
