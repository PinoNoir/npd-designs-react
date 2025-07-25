import { Deliverable, ProjectStep } from './types';

export const chicosShopThisLookDeliverables: Deliverable[] = [
  {
    id: 'chicos-stl-1',
    title: 'Initial Sketches & Notes',
    imageSrc: '/assets/img/work_images/chicos/chicos_stl_sketches.jpg',
    imageAlt: 'Initial sketches and notes for Shop This Look project',
  },
  {
    id: 'chicos-stl-2',
    title: 'Final Mockups',
    imageSrc: '/assets/img/work_images/chicos/chicos_stl_final.jpg',
    imageAlt: 'Finished screens for Shop This Look project',
  },
  {
    id: 'chicos-stl-3',
    title: 'Mobile Prototype',
    imageSrc: '/assets/video/stl_mobile_prototype.mov',
    imageAlt: 'Mobile prototype for Shop This Look widget',
    isVideo: true,
    videoType: 'mp4',
  },
  {
    id: 'chicos-stl-4',
    title: 'Desktop Prototype',
    imageSrc: '/assets/video/stl_desktop_prototype.mov',
    imageAlt: 'Desktop prototype for Shop This Look widget',
    isVideo: true,
    videoType: 'mp4',
  },
];

export const chicosShopThisLookProblems: ProjectStep[] = [
  {
    id: 'chicos-problem-1',
    text: 'Several customers mentioned the navigation was frustrating to use on mobile devices.',
  },
  {
    id: 'chicos-problem-2',
    text: 'Links redirected users off of the page and forced them to reopen the widget and restart the process.',
  },
  {
    id: 'chicos-problem-3',
    text: 'The UI and micro-interactions needed to be improved for the mobile experience.',
  },
  {
    id: 'chicos-problem-4',
    text: 'Stylitics needed additional development work to improve backend integration.',
  },
];

export const chicosShopThisLookGoals: ProjectStep[] = [
  {
    id: 'chicos-goal-1',
    text: 'Review prior research to understand the design problem.',
  },
  {
    id: 'chicos-goal-2',
    text: 'Gather design specs and technical requirements.',
  },
  {
    id: 'chicos-goal-3',
    text: 'Build out user flows and create rapid prototypes for user testing.',
  },
  {
    id: 'chicos-goal-4',
    text: 'Collaborate with the dev team to review design and hand-off prototypes.',
  },
]; 