// Repository answers questions, it does not care if the data exists, it just reports reality in a predictable shape.
// | Question               | Answer                    |
// | ---------------------- | ------------------------- |
// | “Give me all trainers” | `Trainer[]` (maybe empty) |
// | “Give me this trainer” | `Trainer` or `null`       |

import type { Trainer } from '../types';
import { trainersMock } from '../data/trainers.mock';

export type TrainerListFilters = {
  location?: string;
  specialty?: string;
  q?: string; // simple text search
};

export interface TrainersRepository {
  list(filters?: TrainerListFilters): Promise<Trainer[]>;
  getBySlug(slug: string): Promise<Trainer | null>;
  getFilterOptions(): Promise<{ locations: string[]; specialties: string[] }>;
}

// Mock implementation for now.
// Later you replace THIS implementation with Supabase and your pages won't change.
export const trainersRepository: TrainersRepository = {
  async list(filters) {
    let results = trainersMock;

    if (filters?.location) {
      results = results.filter((t) => t.location.toLowerCase() === filters.location!.toLowerCase());
    }

    if (filters?.specialty) {
      results = results.filter((t) =>
        t.specialties.some((s) => s.toLowerCase() === filters.specialty!.toLowerCase()),
      );
    }

    if (filters?.q) {
      const q = filters.q.toLowerCase();
      results = results.filter((t) => {
        return (
          t.name.toLowerCase().includes(q) ||
          t.headline.toLowerCase().includes(q) ||
          t.specialties.some((s) => s.toLowerCase().includes(q))
        );
      });
    }

    return results;
  },

  async getBySlug(slug) {
    return trainersMock.find((t) => t.slug === slug) ?? null;
  },

  async getFilterOptions() {
    const locations = Array.from(new Set(trainersMock.map((t) => t.location))).sort();
    const specialties = Array.from(new Set(trainersMock.flatMap((t) => t.specialties))).sort();

    return { locations, specialties };
  },
};
