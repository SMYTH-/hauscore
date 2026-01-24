import { Link } from 'react-router-dom';
import type { Trainer } from '../types';

type Props = {
  trainer: Trainer;
};

export function TrainerCard({ trainer }: Props) {
  return (
    <>
      <Link to={`/trainers/${trainer.slug}`}>{trainer.name}</Link>
      <div>{trainer.location}</div>
      <div>{trainer.headline}</div>
    </>
  );
}
