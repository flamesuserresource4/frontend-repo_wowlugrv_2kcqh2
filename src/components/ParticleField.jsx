import { useEffect, useRef } from 'react';

export default function ParticleField({ className = '' }) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf; let w; let h;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const particles = Array.from({ length: 140 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
      color: Math.random() > 0.5 ? '#00BFFF' : '#FF6B35',
    }));

    function resize() {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;

        const px = (p.x - 0.5) * (1 + p.z * 0.4) + 0.5;
        const py = (p.y - 0.5) * (1 + p.z * 0.4) + 0.5;

        const mx = mouse.current.x / w - 0.5;
        const my = mouse.current.y / h - 0.5;
        const dx = px - (0.5 + mx * 0.2);
        const dy = py - (0.5 + my * 0.2);
        const dist = Math.hypot(dx, dy);
        const parallax = Math.max(0.6, 1.4 - dist * 2);

        const x = px * w; const y = py * h;
        const r = 1.2 + p.z * 2 * parallax;

        ctx.beginPath();
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r * 6);
        grad.addColorStop(0, p.color);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}
