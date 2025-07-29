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
  gymSyncDeliverables,
  gymSyncSteps,
} from '@/data/projects/gym-sync-data';
import { getProjectNavigation } from '@/utils/project-navigation';

const GymSync: React.FC = () => {
  const navigation = getProjectNavigation('/gym-sync');

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
            stageImage='/assets/img/work_images/gym_sync/gym_sync_stage.jpg'
            backgroundAlt='Gym Sync app showcase'
          />

          <ProjectOverview
            projectName='Gym Sync'
            projectType='Research | Branding | Product Design'
            projectRole='Branding, Research, UI Design, Rapid Prototypes'
            projectSoftware='Photoshop, Illustrator, XD'
            projectDescription='The Gym Sync App was a senior project conceptualized by me and a team of 4 other students in our User Centered Design class at UCF. My role as the lead designer was to facilitate design sprints to execute all deliverables which included: creation of a viable business model and strategy; market research to define our customer segments and discover gaps that could be exploited; validation of our hypothesis through user testing and surveys; and ideation of the brand identity and user interface.'
          />

          <ProjectDivider sectionTitle='Project Overview' />

          <ProjectProcess
            projectOverview='While researching workout apps we found that our competitors did not offer people seeking a personal trainer the ability to connect with one in their area or a way for personal trainers to market themselves. Our strategy was to design a product that solved those problems and delivered solutions for each user.'
            projectSteps={gymSyncSteps}
            stepsTitle='Strategy'
            overviewTitle='Background'
          />

          <ProjectDeliverables
            deliverables={gymSyncDeliverables}
            sectionTitle='Project Deliverables'
          />
        </ProjectPage>
      </PageTransition>
      <Footer />
    </>
  );
};

export default GymSync;
