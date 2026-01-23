import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Trainer } from '../types';
import { trainersRepository } from '../api/trainers.repository';

export function TrainerProfilePage() {
  const { slug } = useParams();
  const [trainer, setTrainer] = useState<Trainer | null>(null);

  useEffect(() => {
    if (!slug) return;

    void (async () => {
      const result = await trainersRepository.getBySlug(slug);
      setTrainer(result);
    })();
  }, [slug]);

  if (!trainer) return <div>Trainer not found.</div>;

  return (
    <div>
      <h1>{trainer.name}</h1>
      <p>{trainer.location}</p>
      <p>{trainer.headline}</p>

      <h2>Specialties</h2>
      <ul>
        {trainer.specialties.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <h2>Contact</h2>
      <a href={`mailto:${trainer.email}`}>Email trainer</a>
    </div>
  );
}
