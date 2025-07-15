import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import HolyCity from '@/pages/projects/holy-city-trim-shop/HolyCity';

export const Route = createFileRoute('/holy-city')({
  component: HolyCityComponent,
});

function HolyCityComponent() {
  useEffect(() => {
    // Ensure page starts at top when navigating to this route
    window.scrollTo(0, 0);
  }, []);

  return <HolyCity />;
} 