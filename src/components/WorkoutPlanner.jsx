import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

export default function WorkoutPlanner() {
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('3');
  const [reps, setReps] = useState('10');
  const [plan, setPlan] = useState([]);

  const addItem = () => {
    const name = exercise.trim();
    if (!name) return;
    setPlan((p) => [
      ...p,
      { id: crypto.randomUUID(), name, sets: Number(sets) || 0, reps: Number(reps) || 0 }
    ]);
    setExercise('');
  };

  const removeItem = (id) => setPlan((p) => p.filter((i) => i.id !== id));

  const totalVolume = plan.reduce((sum, i) => sum + i.sets * i.reps, 0);

  return (
    <section id="planner" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Quick workout planner</h2>
            <p className="mt-2 text-slate-600">Create a simple routine and track total volume instantly.</p>
          </div>
          <div className="text-sm text-slate-500">Total volume: <span className="font-semibold text-slate-900">{totalVolume}</span></div>
        </div>

        <div className="mt-8 grid gap-6">
          <div className="grid md:grid-cols-5 gap-3">
            <input
              value={exercise}
              onChange={(e) => setExercise(e.target.value)}
              placeholder="Exercise (e.g., Bench Press)"
              className="md:col-span-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              value={sets}
              onChange={(e) => setSets(e.target.value)}
              placeholder="Sets"
              type="number"
              min="1"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              placeholder="Reps"
              type="number"
              min="1"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button
              onClick={addItem}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 font-medium hover:bg-slate-800"
            >
              <Plus className="h-5 w-5" /> Add
            </button>
          </div>

          <div className="grid gap-3">
            {plan.length === 0 && (
              <div className="rounded-lg border border-dashed border-slate-300 p-6 text-center text-slate-500">
                No exercises yet. Add your first one above.
              </div>
            )}
            {plan.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="text-slate-900 font-medium">{item.name}</div>
                  <div className="text-slate-600 text-sm">{item.sets} sets × {item.reps} reps</div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-slate-500 hover:text-red-600"
                  aria-label={`Remove ${item.name}`}
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
