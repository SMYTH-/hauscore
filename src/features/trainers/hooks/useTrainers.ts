import { useEffect, useRef, useState } from 'react';
import type { Trainer } from '../types';
import { trainersRepository } from '../api/trainers.repository';

export type Status = 'loading' | 'success' | 'error';

export function useTrainers() {
  const [q, setQ] = useState('');

  // Selected filters (singular)
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');

  // Available filter options (plural)
  const [locations, setLocations] = useState<string[]>([]);
  const [specialties, setSpecialties] = useState<string[]>([]);

  const [debouncedQ, setDebouncedQ] = useState('');
  const [status, setStatus] = useState<Status>('loading');
  const [trainers, setTrainers] = useState<Trainer[]>([]);

  const requestIdRef = useRef(0);

  // Load filter options once
  useEffect(() => {
    void (async () => {
      try {
        const opts = await trainersRepository.getFilterOptions();
        setLocations(opts.locations);
        setSpecialties(opts.specialties);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  // Debounce q -> debouncedQ
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQ(q);
    }, 300);

    return () => clearTimeout(timerId);
  }, [q]);

  // Fetch trainers when query or filters change
  useEffect(() => {
    const requestId = ++requestIdRef.current;

    void (async () => {
      setStatus('loading');

      try {
        const results = await trainersRepository.list({
          q: debouncedQ,
          location: location || undefined,
          specialty: specialty || undefined,
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
  }, [debouncedQ, location, specialty]);

  return {
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
  };
}
