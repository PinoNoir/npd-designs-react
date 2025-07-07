import { createFileRoute } from '@tanstack/react-router';
import { About } from '../pages';

export const Route = createFileRoute('/about')({
  component: AboutComponent,
});

function AboutComponent() {
  return <About />;
}
