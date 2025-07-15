import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import Resume from '@/pages/resume/Resume';

export const Route = createFileRoute('/resume')({
  component: ResumeComponent,
});

function ResumeComponent() {
  useEffect(() => {
    // Ensure page starts at top when navigating to this route
    window.scrollTo(0, 0);
  }, []);

  return <Resume />;
} 