import { Deliverable, ProjectStep } from './types';

export const makotoDeliverables: Deliverable[] = [
  {
    id: 'makoto-1',
    title: 'Restaurant Branding',
    imageSrc: '/assets/img/work_images/makoto_logo_1.png',
    imageAlt: 'Makoto restaurant branding design',
  },
  {
    id: 'makoto-2',
    title: 'Menu Design',
    imageSrc: '/assets/img/work_images/makoto_showcase_1.jpg',
    imageAlt: 'Makoto menu design showcase',
  },
  {
    id: 'makoto-3',
    title: 'Interior Design Elements',
    imageSrc: '/assets/img/work_images/makoto_showcase_2.jpg',
    imageAlt: 'Makoto interior design elements',
  },
];

export const makotoSteps: ProjectStep[] = [
  {
    id: 'makoto-step-1',
    text: 'Research Japanese restaurant branding and culture.',
  },
  {
    id: 'makoto-step-2',
    text: 'Develop restaurant brand identity and logo.',
  },
  {
    id: 'makoto-step-3',
    text: 'Design menu layout and typography.',
  },
  {
    id: 'makoto-step-4',
    text: 'Create interior design elements and signage.',
  },
];
