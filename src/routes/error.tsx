import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/error')({
  component: ErrorPage,
});

export function ErrorPage() {
  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}
