import { createFileRoute } from '@tanstack/react-router';
import Solvably from '@/pages/projects/solvably/Solvably';

export const Route = createFileRoute('/solvably')({
  component: Solvably,
}); 