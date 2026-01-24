import { TrainerCard } from '../components/TrainerCard';
import { useTrainers } from '../hooks/useTrainers';

export function TrainersListPage() {
  const { q, setQ, status, trainers } = useTrainers();

  let content = null;

  if (status === 'loading') {
    content = <p>Loading...</p>;
  } else if (status === 'error') {
    content = <p>Something went wrong loading trainers</p>;
  } else if (status === 'success' && trainers.length === 0) {
    content = <p>No trainers found.</p>;
  } else {
    content = (
      <ul style={{ marginTop: 16 }}>
        {trainers.map((t) => (
          <li key={t.id} style={{ marginBottom: 12 }}>
            <TrainerCard trainer={t} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h1>Trainers</h1>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search trainers..."
        style={{ padding: 8, width: '100%', maxWidth: 420 }}
      />

      {content}
    </div>
  );
}
