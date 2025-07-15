import { Deliverable, ProjectStep } from './types';

export const chicosSomaDeliverables: Deliverable[] = [
  {
    id: 'chicos-soma-1',
    title: 'Design Callouts',
    imageSrc: '/assets/img/work_images/chicos_og_comparison.png',
    imageAlt: 'My Account Design Callout showing before and after comparison',
  },
  {
    id: 'chicos-soma-2',
    title: 'Screen Flow',
    imageSrc: '/assets/img/work_images/chicos_og_screenflow.jpg',
    imageAlt: 'Simply Soma Subscription Service Screen Flow',
  },
  {
    id: 'chicos-soma-3',
    title: 'Task Flow',
    imageSrc: '/assets/img/work_images/chicos_og_taskflow.jpg',
    imageAlt: 'Simply Soma Subscription Service Flowchart',
  },
];

export const chicosSomaProblems: ProjectStep[] = [
  {
    id: 'chicos-soma-problem-1',
    text: 'Before the UX team was informed of the project, there was no strategy or plan on how the service should work or support customers.',
  },
  {
    id: 'chicos-soma-problem-2',
    text: 'An extremely short window of time to make design improvements before development started.',
  },
  {
    id: 'chicos-soma-problem-3',
    text: 'Ordergroove\'s codebase was difficult to customize and retrofit to Soma\'s website.',
  },
  {
    id: 'chicos-soma-problem-4',
    text: 'No clear direction from Soma on design specifications.',
  },
];

export const chicosSomaGoals: ProjectStep[] = [
  {
    id: 'chicos-soma-goal-1',
    text: 'Work directly with Ordergroove (vendor) and the internal Soma marketing team to gather design requirements.',
  },
  {
    id: 'chicos-soma-goal-2',
    text: 'Build screen flows, UI components, landing pages, and write clear messaging for each step of the order process.',
  },
  {
    id: 'chicos-soma-goal-3',
    text: 'Work with developers and hand-off screens with clear design requirements and documentation.',
  },
]; 