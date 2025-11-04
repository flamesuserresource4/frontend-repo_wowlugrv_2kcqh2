import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_#0066FF_0%,_transparent_60%)] opacity-20 blur-2xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 text-center text-white shadow-[0_0_60px_rgba(0,102,255,0.25)] backdrop-blur">
          <h3 className="text-3xl font-bold md:text-4xl">
            Ready to feel the flames.blue energy?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Experience an immersive, premium interface with responsive 3D visuals and silky-smooth motion.
          </p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="relative mx-auto mt-8 inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#FF6B35] via-[#FF8C42] to-[#0066FF] px-8 py-4 text-lg font-semibold text-white shadow-[0_0_30px_rgba(255,107,53,0.45)]"
          >
            Get Started
            <span className="absolute inset-0 pointer-events-none bg-white/20 opacity-0 blur-lg transition-opacity duration-300 hover:opacity-100" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
