import React from 'react';
import { ProjectSteps } from '@/pages/projects/project-components';

const ProjectStepsExample: React.FC = () => {
  const steps = [
    { id: '1', text: 'Define project requirements.' },
    { id: '2', text: 'Conduct research and gather inspiration.' },
    { id: '3', text: 'Create initial concepts and mockups.' },
    { id: '4', text: 'Refine designs based on feedback.' },
    { id: '5', text: 'Finalize and deliver project assets.' },
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>ProjectSteps Examples</h1>
      
      <h2>Default</h2>
      <ProjectSteps steps={steps} />
      
      <h2>Custom Title</h2>
      <ProjectSteps steps={steps} title="Project Workflow" />
      
      <h2>No Title</h2>
      <ProjectSteps steps={steps} title="" />
    </div>
  );
};

export default ProjectStepsExample; 