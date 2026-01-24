import { Link } from 'react-router-dom';
import type { Trainer } from '../types';

type Props = { trainer: Trainer };

export function TrainerCard({ trainer }: Props) {
  return (
    <li className="group rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <Link
            to={`/trainers/${trainer.slug}`}
            className="block text-base font-semibold tracking-tight text-zinc-900 group-hover:underline"
          >
            {trainer.name}
          </Link>

          <p className="mt-1 text-sm text-zinc-600">{trainer.headline}</p>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700">
              {trainer.location}
            </span>

            {trainer.specialties.slice(0, 2).map((s) => (
              <span
                key={s}
                className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-700"
              >
                {s}
              </span>
            ))}

            {trainer.specialties.length > 2 && (
              <span className="text-xs text-zinc-500">+{trainer.specialties.length - 2} more</span>
            )}
          </div>
        </div>

        <div className="shrink-0">
          <span className="inline-flex items-center rounded-full bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-white">
            View
          </span>
        </div>
      </div>
    </li>
  );
}
