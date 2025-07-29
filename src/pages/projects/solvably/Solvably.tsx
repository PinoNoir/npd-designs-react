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
  solvablyDeliverables,
  solvablySteps,
} from '@/data/projects/solvably-data';
import { getProjectNavigation } from '@/utils/project-navigation';

const Solvably: React.FC = () => {
  const navigation = getProjectNavigation('/solvably');

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
            stageImage='/assets/img/work_images/massive_u/massive_u_stage.jpg'
            backgroundAlt='Solvably ed-tech platform showcase'
          />

          <ProjectOverview
            projectName='Solvably'
            projectType='Component Library | Micro Interactions | Information Architecture'
            projectRole='Product Designer'
            projectSoftware='Figma | After Effects | Lottie'
            projectDescription='I worked with an Ed-Tech startup to overhaul the UX of their e-learning and authoring tool. Me and a small team of teachers and engineers collaborated to revamp customer facing authoring tools used to build lesson plans for students. I also built a bootstrap UI library in Figma that was implemented by the development team.'
          />

          <ProjectDivider sectionTitle='Project Overview' />

          <ProjectProcess
            projectOverview='Collaborated with teachers and engineers to redesign an e-learning authoring tool, focusing on improving the user experience for educators creating lesson plans.'
            projectSteps={solvablySteps}
            stepsTitle='Process'
            overviewTitle='Background'
          />

          <ProjectDeliverables
            deliverables={solvablyDeliverables}
            sectionTitle='Project Deliverables'
          />
        </ProjectPage>
      </PageTransition>
      <Footer />
    </>
  );
};

export default Solvably;
