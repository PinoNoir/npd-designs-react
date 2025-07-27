import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Navbar } from '../components';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
