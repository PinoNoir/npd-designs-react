import { createFileRoute } from '@tanstack/react-router';
import { PortfolioGrid } from '../components';

const projects = [
  {
    id: '1',
    title: 'Design System Development',
    description: 'Created a comprehensive design system for enterprise applications',
    imageUrl: '/assets/img/projects/design-system.jpg',
    category: 'Design Systems',
    tags: ['UX Design', 'Design Systems', 'React']
  },
  {
    id: '2',
    title: 'E-commerce Platform',
    description: 'Developed a modern e-commerce solution with advanced features',
    imageUrl: '/assets/img/projects/ecommerce.jpg',
    category: 'Frontend',
    tags: ['Frontend', 'TypeScript', 'Next.js']
  }
];

export const Route = createFileRoute('/work')({
  component: WorkComponent,
});

function WorkComponent() {
  return (
    <div className="work-page">
      <h1>My Work</h1>
      <PortfolioGrid projects={projects} />
    </div>
  );
}
