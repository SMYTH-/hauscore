import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TrainerBanner } from '../components/TrainerBanner';

export function ForTrainerPage() {

  return (
    <div>
      <TrainerBanner />
    </div>
  );
}
