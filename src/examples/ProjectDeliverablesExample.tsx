import React from 'react';
import { ProjectDeliverables } from '@/pages/projects/project-components';
import { 
  swellLifeDeliverables, 
  miamahComedyDeliverables, 
  makotoDeliverables 
} from '@/data/projects/swell-life-data';

// Example component showing how to use ProjectDeliverables for different projects
const ProjectDeliverablesExample: React.FC = () => {
  return (
    <div>
      {/* Swell Life Magazine Deliverables */}
      <ProjectDeliverables 
        deliverables={swellLifeDeliverables}
        sectionTitle="Swell Life Magazine Deliverables"
      />

      {/* Miamah Comedy Deliverables */}
      <ProjectDeliverables 
        deliverables={miamahComedyDeliverables}
        sectionTitle="Miamah Comedy Deliverables"
      />

      {/* Makoto Restaurant Deliverables */}
      <ProjectDeliverables 
        deliverables={makotoDeliverables}
        sectionTitle="Makoto Restaurant Deliverables"
      />

      {/* Custom Deliverables Example */}
      <ProjectDeliverables 
        deliverables={[
          {
            id: 'custom-1',
            title: 'Custom Design 1',
            imageSrc: '/assets/img/work_images/custom_image_1.jpg',
            imageAlt: 'Custom design showcase 1',
          },
          {
            id: 'custom-2',
            title: 'Custom Design 2',
            imageSrc: '/assets/img/work_images/custom_image_2.jpg',
            imageAlt: 'Custom design showcase 2',
          },
        ]}
        sectionTitle="Custom Project Deliverables"
      />
    </div>
  );
};

export default ProjectDeliverablesExample; 