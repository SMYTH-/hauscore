import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { cn } from '../../../lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import type { Trainer } from '../types';
import styles from './TrainerCard.module.css'

type Props = { trainer: Trainer };

export function TrainerCard({ trainer }: Props) {
  return (
    <li className="group transition hover:-translate-y-0.5">
      <Card className={cn(styles.card, 'h-full transition hover:border-zinc-300 hover:shadow-md')}>
        <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0 p-4">
          <div className="min-w-0 space-y-1.5">
            <CardTitle>
              <Link
                to={`/trainers/${trainer.slug}`}
                className="block group-hover:underline"
              >
                {trainer.name}
              </Link>
            </CardTitle>
            <CardDescription>{trainer.headline}</CardDescription>
          </div>
          <div className="shrink-0">
            <Button asChild size="sm" variant="outline">
              <Link to={`/trainers/${trainer.slug}`}>View</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="flex flex-wrap items-center gap-2">
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
              <span className="text-xs text-zinc-500">
                +{trainer.specialties.length - 2} more
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </li>
  );
}
