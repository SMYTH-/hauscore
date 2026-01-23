import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './layout/AppLayout';
import { HomePage } from '../features/home/pages/HomePage';
import { TrainersListPage } from '../features/trainers/pages/TrainersListPage';
import { TrainerProfilePage } from '../features/trainers/pages/TrainerProfilePage';

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/trainers" element={<TrainersListPage />} />
        <Route path="/trainers/:slug" element={<TrainerProfilePage />} />
      </Route>
    </Routes>
  );
}
