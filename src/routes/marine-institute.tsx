import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import MarineInstitute from '@/pages/projects/marine-institute/MarineInstitute';

export const Route = createFileRoute('/marine-institute')({
  component: MarineInstituteComponent,
});

function MarineInstituteComponent() {
  useEffect(() => {
    // Ensure page starts at top when navigating to this route
    window.scrollTo(0, 0);
  }, []);

  return <MarineInstitute />;
} 