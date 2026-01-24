import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Trainer } from '../types';
import { trainersRepository } from '../api/trainers.repository';

type Status = 'loading' | 'success' | 'error';

export function TrainersListPage() {
  const requestIdRef = useRef(0);
  const [status, setStatus] = useState<Status>('loading');
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [q, setQ] = useState('');
  const [debouncedQ, setDebouncedQ] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQ(q);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [q]);

  useEffect(() => {
    const requestId = ++requestIdRef.current;

    void (async () => {
      setStatus('loading');

      try {
        const results = await trainersRepository.list({
          q: debouncedQ,
        });

        if (requestId !== requestIdRef.current) return;

        setTrainers(results);
        setStatus('success');
      } catch (error) {
        console.error(error);

        if (requestId !== requestIdRef.current) return;

        setStatus('error');
      }
    })();
  }, [debouncedQ]);

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
            <Link to={`/trainers/${t.slug}`}>{t.name}</Link>
            <div>{t.location}</div>
            <div>{t.headline}</div>
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
