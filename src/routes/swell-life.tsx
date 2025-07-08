import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import SwellLife from '@/pages/projects/swell-life-magazine/SwellLife';

export const Route = createFileRoute('/swell-life')({
  component: SwellLifeComponent,
});

function SwellLifeComponent() {
  useEffect(() => {
    // Ensure page starts at top when navigating to this route
    window.scrollTo(0, 0);
  }, []);

  return <SwellLife />;
} 