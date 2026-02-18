import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './layout/AppLayout';
import { HomePage } from '../features/home/pages/HomePage';
import { TrainersListPage } from '../features/trainers/pages/TrainersListPage';
import { TrainerProfilePage } from '../features/trainers/pages/TrainerProfilePage';
import { ForTrainerPage } from '../features/trainers/pages/ForTrainerPage';
import { TrainerApplicationPage } from '../features/trainers/pages/TrainerApplicationPage';

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-a-trainer" element={<TrainersListPage />} />
        <Route path="/for-trainers" element={<ForTrainerPage />} />
        <Route path="/trainers/:slug" element={<TrainerProfilePage />} />
        <Route path="/for-trainers/apply" element={<TrainerApplicationPage />} />
      </Route>
    </Routes>
  );
}
