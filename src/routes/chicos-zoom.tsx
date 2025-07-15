import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import ChicosZoom from '@/pages/projects/chicos-zoom/ChicosZoom';

export const Route = createFileRoute('/chicos-zoom')({
  component: ChicosZoomComponent,
});

function ChicosZoomComponent() {
  useEffect(() => {
    // Ensure page starts at top when navigating to this route
    window.scrollTo(0, 0);
  }, []);

  return <ChicosZoom />;
} 