import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import Makoto from '@/pages/projects/makoto-japanese-steakhouse/Makoto';

export const Route = createFileRoute('/makoto')({
  component: MakotoComponent,
});

function MakotoComponent() {
  useEffect(() => {
    // Ensure page starts at top when navigating to this route
    window.scrollTo(0, 0);
  }, []);

  return <Makoto />;
} 