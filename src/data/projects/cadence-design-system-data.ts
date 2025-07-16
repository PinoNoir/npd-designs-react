import { Deliverable, ProjectStep } from './types';

export const cadenceDesignSystemDeliverables: Deliverable[] = [
  {
    id: 'cds-1',
    title: 'Component Library',
    imageSrc: '/assets/img/work_images/stretto_ds_stage.jpg',
    imageAlt: 'Cadence Design System component library showcase',
  },
  {
    id: 'cds-2',
    title: 'Storybook Documentation',
    imageSrc: '/assets/img/work_images/stretto_ds_stage.jpg',
    imageAlt: 'Cadence Design System Storybook documentation',
  },
  {
    id: 'cds-3',
    title: 'Design Tokens',
    imageSrc: '/assets/img/work_images/stretto_ds_stage.jpg',
    imageAlt: 'Cadence Design System design tokens and variables',
  },
  {
    id: 'cds-4',
    title: 'React Components',
    imageSrc: '/assets/img/work_images/stretto_ds_stage.jpg',
    imageAlt: 'Cadence Design System React component implementation',
  },
];

export const cadenceDesignSystemSteps: ProjectStep[] = [
  {
    id: 'cds-research',
    text: 'Analyzed existing UI patterns and identified inconsistencies across applications.',
  },
  {
    id: 'cds-design-1',
    text: 'Created comprehensive design tokens for colors, typography, spacing, and components.',
  },
  {
    id: 'cds-design-2',
    text: 'Built reusable React components with TypeScript for type safety.',
  },
  {
    id: 'cds-documentation',
    text: 'Developed Storybook documentation for component usage and examples.',
  },
  {
    id: 'cds-implementation',
    text: 'Established design system governance and contribution guidelines.',
  },
]; 