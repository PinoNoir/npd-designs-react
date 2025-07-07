import { createFileRoute } from '@tanstack/react-router';
import SwellLife from '@/pages/projects/swell-life-magazine/SwellLife';

export const Route = createFileRoute('/swell-life')({
  component: SwellLifeComponent,
});

function SwellLifeComponent() {
  return <SwellLife />;
} 