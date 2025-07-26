import { createFileRoute } from '@tanstack/react-router';
import { Error } from '@/pages';

export const Route = createFileRoute('/error')({
  component: ErrorPage,
});

function ErrorPage() {
  return <Error />;
}
