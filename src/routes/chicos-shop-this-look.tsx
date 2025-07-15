import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import ChicosShopThisLook from '@/pages/projects/chicos-shop-this-look/ChicosShopThisLook';

export const Route = createFileRoute('/chicos-shop-this-look')({
  component: ChicosShopThisLookComponent,
});

function ChicosShopThisLookComponent() {
  useEffect(() => {
    // Ensure page starts at top when navigating to this route
    window.scrollTo(0, 0);
  }, []);

  return <ChicosShopThisLook />;
} 