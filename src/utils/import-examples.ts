// Example file demonstrating path aliases usage
// This file shows how to use the configured aliases for cleaner imports

// Instead of: import { Button } from '../../../components/button/Button';
// You can now use:
// import { Button } from '@/components/button/Button';

// Instead of: import styles from '../../styles/global.css';
// You can now use:
// import styles from '@/styles/global.css';

// Instead of: import { SwellLife } from '../pages/projects/swell-life-magazine/SwellLife';
// You can now use:
// import { SwellLife } from '@/pages/projects/swell-life-magazine/SwellLife';

// Available aliases:
// @/* - Points to src/*
// @/components/* - Points to src/components/*
// @/pages/* - Points to src/pages/*
// @/routes/* - Points to src/routes/*
// @/styles/* - Points to src/styles/*
// @/assets/* - Points to public/assets/*
// @/types/* - Points to src/types/*
// @/utils/* - Points to src/utils/*
// @/hooks/* - Points to src/hooks/*
// @/constants/* - Points to src/constants/*

export const aliasExamples = {
  components: 'Use @/components/* for component imports',
  pages: 'Use @/pages/* for page component imports',
  routes: 'Use @/routes/* for route file imports',
  styles: 'Use @/styles/* for CSS/styling imports',
  assets: 'Use @/assets/* for asset imports (in JS/TS files)',
  utils: 'Use @/utils/* for utility function imports',
  hooks: 'Use @/hooks/* for custom hook imports',
  constants: 'Use @/constants/* for constant imports',
}; 