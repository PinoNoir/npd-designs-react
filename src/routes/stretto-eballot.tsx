import { createFileRoute } from '@tanstack/react-router';
import StrettoEballot from '../pages/projects/stretto-eballot/StrettoEballot';

export const Route = createFileRoute('/stretto-eballot')({
  component: StrettoEballot,
}); 