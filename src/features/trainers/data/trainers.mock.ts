import type { Trainer } from '../types';

export const trainersMock: Trainer[] = [
  {
    id: 't_001',
    slug: 'alex-porter',
    name: 'Alex Porter',
    location: 'London',
    specialties: ['Strength', 'Body Composition'],
    headline: 'Strength coach specialising in sustainable progress.',
    email: 'alex@example.com',
  },
  {
    id: 't_002',
    slug: 'maya-singh',
    name: 'Maya Singh',
    location: 'London',
    specialties: ['Mobility', 'Rehab'],
    headline: 'Movement-first coaching for pain-free training.',
    email: 'maya@example.com',
  },
];
