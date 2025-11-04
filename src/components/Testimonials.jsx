export default function Testimonials() {
  const items = [
    {
      quote:
        'I finally have a consistent routine. The planner is simple and keeps me focused.',
      name: 'Sam P.'
    },
    {
      quote:
        'Love the clean interface and how quick it is to log workouts. My progress has never been clearer.',
      name: 'Avery R.'
    },
    {
      quote:
        'The features hit the sweet spot—everything I need without the clutter.',
      name: 'Jordan K.'
    }
  ];

  return (
    <section className="bg-slate-900 text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">What athletes say</h2>
        <p className="mt-3 text-slate-300 text-center max-w-2xl mx-auto">
          Real stories from people using the app to build momentum and stay consistent.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <blockquote className="text-slate-100">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-300">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
