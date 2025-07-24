import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import HawaiiWildlifeFund from '@/pages/projects/hawaii-wildlife-fund/HawaiiWildlifeFund';

export const Route = createFileRoute('/hawaii-wildlife-fund')({
  component: HawaiiWildlifeFundComponent,
});

function HawaiiWildlifeFundComponent() {
  useEffect(() => {
    // Ensure page starts at top when navigating to this route
    window.scrollTo(0, 0);
  }, []);

  return <HawaiiWildlifeFund />;
} 