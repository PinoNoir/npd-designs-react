import { Deliverable, ProjectStep } from './types';

export const marineInstituteDeliverables: Deliverable[] = [
  {
    id: 'marine-1',
    title: 'Home Page Design',
    imageSrc: '/assets/img/work_images/marine_institute/marine_showcase_1.jpg',
    imageAlt: 'Marine Institute home page displaying on iMac screen',
  },
  {
    id: 'marine-2',
    title: 'Online Portal - View Discoveries',
    imageSrc: '/assets/img/work_images/marine_institute/marine_showcase_02.jpg',
    imageAlt: 'Marine Institute online portal to view scientific discoveries',
  },
  {
    id: 'marine-3',
    title: 'Online Portal - Upload Discoveries',
    imageSrc: '/assets/img/work_images/marine_institute/marine_showcase_3.jpg',
    imageAlt: 'Marine Institute online portal to upload scientific discoveries',
  },
  {
    id: 'marine-4',
    title: 'Isometric Design Showcase',
    imageSrc: '/assets/img/work_images/marine_institute/marine_showcase_2.jpg',
    imageAlt: 'Marine Institute web page isometric design showcase',
  },
];

export const marineInstituteSteps: ProjectStep[] = [
  {
    id: 'marine-step-1',
    text: 'Research bioluminescent ocean life and the needs of marine biologists.'
  },
  {
    id: 'marine-step-2',
    text: 'Design a simple, intuitive interface for uploading and tracking new discoveries.'
  },
  {
    id: 'marine-step-3',
    text: 'Develop a responsive site with a MySQL/PHP backend and AJAX-powered species viewer.'
  },
  {
    id: 'marine-step-4',
    text: 'Test usability and ensure accessibility across all devices.'
  },
]; 