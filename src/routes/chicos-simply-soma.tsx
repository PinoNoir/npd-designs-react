import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import ChicosSimplySoma from '@/pages/projects/chicos-simply-soma/ChicosSimplySoma';

export const Route = createFileRoute('/chicos-simply-soma')({
  component: ChicosSimplySomaComponent,
});

function ChicosSimplySomaComponent() {
  useEffect(() => {
    // Ensure page starts at top when navigating to this route
    window.scrollTo(0, 0);
  }, []);

  return <ChicosSimplySoma />;
} 