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
  marineInstituteDeliverables,
  marineInstituteSteps,
} from '@/data/projects/marine-institute-data';
import { getProjectNavigation } from '@/utils/project-navigation';

const MarineInstitute: React.FC = () => {
  const navigation = getProjectNavigation('/marine-institute');

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
            stageImage='/assets/img/work_images/marine_institute/marine_showcase_2.jpg'
            backgroundAlt='Marine Institute background'
          />

          <ProjectOverview
            projectName='Marine Institute'
            projectType='Research | UX Design | Frontend Development'
            projectRole='Art Direction and Illustration'
            projectSoftware='UI Design, Frontend & Backend Development'
            projectDescription={`For this project I wanted to capture how incredible and mysterious the ocean is, especially the bioluminescent creatures of the deep. It's a world that scientists and explorers know very little about and are only just beginning to discover. The concept was to create a simple interface that biologists could use to upload new discoveries and keep track of each specimen through a single online portal. The site is responsive across all devices, has a section where users can view different species utilizing JavaScript and AJAX, and includes a database built with MySQL and PHP to handle all of the server-side functionality.`}
          />

          <ProjectDivider sectionTitle='Project Overview' />

          <ProjectProcess
            projectOverview='The goal was to create a portal for marine biologists to review, upload, and track new ocean discoveries, with a focus on bioluminescent species.'
            projectSteps={marineInstituteSteps}
            stepsTitle='Process'
            overviewTitle='Inspiration'
          />

          <ProjectDeliverables
            deliverables={marineInstituteDeliverables}
            sectionTitle='Project Deliverables'
          />
        </ProjectPage>
      </PageTransition>
      <Footer />
    </>
  );
};

export default MarineInstitute;
