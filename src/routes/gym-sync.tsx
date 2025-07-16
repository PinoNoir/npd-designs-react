import { createFileRoute } from '@tanstack/react-router';
import GymSync from '@/pages/projects/gym-sync/GymSync';

export const Route = createFileRoute('/gym-sync')({
  component: GymSync,
}); 