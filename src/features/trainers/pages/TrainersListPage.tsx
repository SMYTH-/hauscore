import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Trainer } from '../types';
import { trainersRepository } from '../api/trainers.repository';

export function TrainersListPage() {
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    void (async () => {
      const results = await trainersRepository.list({ q });
      setTrainers(results);
    })();
  }, [q]);

  return (
    <div>
      <h1>Trainers</h1>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search trainers..."
        style={{ padding: 8, width: '100%', maxWidth: 420 }}
      />

      <ul style={{ marginTop: 16 }}>
        {trainers.map((t) => (
          <li key={t.id} style={{ marginBottom: 12 }}>
            <Link to={`/trainers/${t.slug}`}>{t.name}</Link>
            <div>{t.location}</div>
            <div>{t.headline}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
