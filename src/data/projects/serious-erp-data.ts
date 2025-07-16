import { Deliverable, ProjectStep } from './types';

export const seriousErpDeliverables: Deliverable[] = [
  {
    id: 'serp-1',
    title: 'Before',
    imageSrc: '/assets/img/work_images/serp_showcase_before.jpg',
    imageAlt: 'Original Serious ERP system design',
  },
  {
    id: 'serp-2',
    title: 'After - Final Mockups',
    imageSrc: '/assets/img/work_images/serp_showcase_1.jpg',
    imageAlt: 'Redesigned Serious ERP system using Material Design principles',
  },
];

export const seriousErpProblems: ProjectStep[] = [
  {
    id: 'serp-problem-1',
    text: 'Lack of design consistency and cohesive information architecture',
  },
  {
    id: 'serp-problem-2',
    text: 'Failed to meet WCAG 2.1 AA accessibility standards',
  },
  {
    id: 'serp-problem-3',
    text: 'Not responsive on tablets and mobile devices',
  },
  {
    id: 'serp-problem-4',
    text: 'Slow page load times and poor performance',
  },
];

export const seriousErpGoals: ProjectStep[] = [
  {
    id: 'serp-goal-1',
    text: 'Gather design specs and technical requirements of the current system',
  },
  {
    id: 'serp-goal-2',
    text: 'Research design systems and component libraries for inspiration and adaptation',
  },
  {
    id: 'serp-goal-3',
    text: 'Build new components in Figma that followed Material Design principles and styling',
  },
  {
    id: 'serp-goal-4',
    text: 'Create prototypes and facilitate meetings to gather feedback for further refinement',
  },
  {
    id: 'serp-goal-5',
    text: 'Work directly with frontend dev team to deliver screens and document design requirements clearly',
  },
]; 