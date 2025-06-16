import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import './styles/global.css';
import './styles/tokens.css';
import { ThemeProvider } from './components';

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('app')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
