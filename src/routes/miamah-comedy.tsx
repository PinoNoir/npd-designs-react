import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import MiamahComedy from '@/pages/projects/miamah-comedy/MiamahComedy';

export const Route = createFileRoute('/miamah-comedy')({
  component: MiamahComedyComponent,
});

function MiamahComedyComponent() {
  useEffect(() => {
    // Ensure page starts at top when navigating to this route
    window.scrollTo(0, 0);
  }, []);

  return <MiamahComedy />;
} 