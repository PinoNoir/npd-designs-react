import { createFileRoute } from '@tanstack/react-router';
import { Footer, Hero, PortfolioGrid } from '@/components';

const projects = [
  {
    id: '1',
    title: 'Design Systems',
    description: 'Building scalable systems for enterprise React applications',
    imageUrl: '/assets/img/projects/design-system.jpg',
    category: 'Design Systems',
    tags: ['UX Design', 'Design Systems', 'React'],
  },
  {
    id: '2',
    title: 'GenAI Chatbot',
    description:
      'Building a modern AI chatbot for multiple use cases and products',
    imageUrl: '/assets/img/projects/ecommerce.jpg',
    category: 'Vercel AI SDK',
    tags: ['TypeScript', 'AI', 'React'],
  },
  {
    id: '3',
    title: 'Miamah Comedy',
    description:
      'A complete brand refresh for a comedy collective in Miami, Florida',
    imageUrl: '/assets/img/work_images/miamah_stage.jpg',
    category: 'Branding',
    tags: ['Branding', 'Visual Design'],
  },
  {
    id: '4',
    title: 'Swell Life Magazine',
    description:
      'A surf culture magazine that put a spotlight on the Cocoa Beach surf scene, local artists, and raised environmental awareness.',
    imageUrl: '/assets/img/work_images/swell_life_stage.jpg',
    category: 'Branding',
    tags: ['Branding', 'Visual Design'],
    route: '/swell-life',
  },
];

export const Route = createFileRoute('/work')({
  component: WorkComponent,
});

function WorkComponent() {
  return (
    <>
      <Hero
        title='My Work'
        subtitle="An overview of the different projects I've worked on"
      />
      <PortfolioGrid projects={projects} />
      <Footer />
    </>
  );
}
