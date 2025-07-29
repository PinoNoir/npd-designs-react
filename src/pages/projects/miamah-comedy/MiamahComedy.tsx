import React from 'react';
import { Footer, PageTransition, ProjectNavbar } from '@/components';
import {
  ProjectOverview,
  ProjectProcess,
  ProjectStage,
  ProjectDeliverables,
  ProjectDivider,
  ProjectPage,
} from '../project-components';
import {
  miamahComedyDeliverables,
  miamahComedySteps,
} from '@/data/projects/miamah-data';
import { getProjectNavigation } from '@/utils/project-navigation';

const MiamahComedy: React.FC = () => {
  const navigation = getProjectNavigation('/miamah-comedy');

  return (
    <>
      <ProjectNavbar
        currentProject={navigation.current.title}
        nextProject={navigation.next}
        previousProject={navigation.previous}
      />
      <PageTransition>
        <ProjectPage>
          <ProjectStage
            stageImage='/assets/img/work_images/miamah/miamah_stage.jpg'
            stageLogo='/assets/img/work_images/miamah/miamah_logo_1.png'
            stageDescription='Miamah Comedy brand logo'
          />

          <ProjectOverview
            projectName='Miamah Comedy'
            projectType='Brand Identity | Visual Design | Illustration'
            projectRole='Art Direction and Illustration'
            projectSoftware='Photoshop, Illustrator, and InDesign'
            projectDescription='The client invited me to flex my creative muscle with this project. It was crucial for me to represent her comedy club with branding that set her apart from the competition. I used imagery from several different sources as a reference including, I love Lucy, Laurel and Hardy, and various design movements of the twentieth century. The result of careful research produced a fusion of styles that told a comedic story while still giving the business a professional look.'
          />

          <ProjectDivider sectionTitle='Project Overview' />

          <ProjectProcess
            projectOverview='For this comedy club branding project, I drew inspiration from classic comedy icons and 20th-century design movements to create a unique visual identity that would stand out in the competitive entertainment market. The challenge was to balance humor with professionalism while creating a memorable brand that would resonate with both performers and audiences.'
            projectSteps={miamahComedySteps}
            stepsTitle='Execution'
          />

          <ProjectDeliverables
            deliverables={miamahComedyDeliverables}
            sectionTitle='Project Deliverables'
          />
        </ProjectPage>
      </PageTransition>
      <Footer />
    </>
  );
};

export default MiamahComedy;
