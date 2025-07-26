import { createFileRoute } from '@tanstack/react-router';
import CadenceDesignSystem from '@/pages/projects/cadence-design-system/CadenceDesignSystem';
import { useEffect } from 'react';

export const Route = createFileRoute('/cadence-design-system')({
  component: CadenceDesignSystemComponent,
}); 

function CadenceDesignSystemComponent() {
  useEffect(() => {
    // Ensure page starts at top when navigating to this route
    window.scrollTo(0, 0);
  }, []);

  return <CadenceDesignSystem />;
} 