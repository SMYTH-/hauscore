import { TrainerCard } from '../components/TrainerCard';
import { useTrainers } from '../hooks/useTrainers';

export function TrainersListPage() {
  const {
    q,
    setQ,
    location,
    setLocation,
    specialty,
    setSpecialty,
    locations,
    specialties,
    status,
    trainers,
  } = useTrainers();

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Trainers</h1>
          <p className="mt-1 text-sm text-zinc-600">Search by name, location, or specialty.</p>
        </div>

        <div className="hidden text-sm text-zinc-500 md:block">
          {status === 'success' ? `${trainers.length} result(s)` : ''}
        </div>
      </div>

      {/* Controls */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
        <div className="grid gap-3 md:grid-cols-3">
          <div className="md:col-span-1">
            <label className="block text-xs font-medium text-zinc-600">Search</label>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. strength, boxing, London..."
              className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none ring-zinc-900/10 focus:ring-4"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-600">Location</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none ring-zinc-900/10 focus:ring-4"
            >
              <option value="">All locations</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-600">Specialty</label>
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none ring-zinc-900/10 focus:ring-4"
            >
              <option value="">All specialties</option>
              {specialties.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Small helper row */}
        <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
          <span>Tip: try “boxing” or “strength”.</span>
          <button
            type="button"
            onClick={() => {
              setQ('');
              setLocation('');
              setSpecialty('');
            }}
            className="rounded-lg px-2 py-1 hover:bg-zinc-100"
          >
            Clear
          </button>
        </div>
      </div>

      {/* States + Results */}
      {status === 'loading' && (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-zinc-600">Loading trainers…</p>
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
          <p className="text-sm font-medium text-red-900">Something went wrong.</p>
          <p className="mt-1 text-sm text-red-800">Please try again in a moment.</p>
        </div>
      )}

      {status === 'success' && trainers.length === 0 && (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-zinc-900">No trainers found</p>
          <p className="mt-1 text-sm text-zinc-600">Try a different search or clear filters.</p>
        </div>
      )}

      {status === 'success' && trainers.length > 0 && (
        <ul className="grid gap-4 sm:grid-cols-2">
          {trainers.map((t) => (
            <TrainerCard key={t.id} trainer={t} />
          ))}
        </ul>
      )}
    </div>
  );
}
