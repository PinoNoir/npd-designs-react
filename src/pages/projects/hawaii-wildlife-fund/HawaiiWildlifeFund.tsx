import React from 'react';
import { Footer, PageTransition } from '@/components';
import {
  NextLink,
  ProjectOverview,
  ProjectProcess,
  ProjectStage,
  ProjectDeliverables,
  ProjectDivider,
  ProjectPage,
} from '../project-components';
import {
  hawaiiWildlifeFundDeliverables,
  hawaiiWildlifeFundSteps,
} from '@/data/projects/hawaii-wildlife-fund-data';

const HawaiiWildlifeFund: React.FC = () => {
  return (
    <PageTransition>
      <ProjectPage>
        <ProjectStage
          stageImage='/assets/img/work_images/hawaii_stage.jpg'
          backgroundAlt='Hawaii Wildlife Fund background'
        />

        <ProjectOverview
          projectName='Hawaii Wildlife Fund'
          projectType='Branding | UI Design | Development'
          projectRole='Branding, Style Guide, Front-end Development'
          projectSoftware='Branding, UI Design, Frontend Development'
          projectDescription={`Upon evaluation of the Hawaii Wildlife Fund brand it was apparent many issues needed to be addressed in regard to their visual identity. As part of a team, I focused on strategizing a plan to update the organization's branding and visual design. Through our work, we project our client to strengthen user engagement, increase customer loyalty, improve their community outreach efforts, and solidify their reputation as a trustworthy organization.`}
        />

        <ProjectDivider sectionTitle='Project Overview' />

        <ProjectProcess
          projectOverview='The goal was to address visual identity issues and create a comprehensive rebranding strategy for the Hawaii Wildlife Fund non-profit organization to improve user engagement and community outreach.'
          projectSteps={hawaiiWildlifeFundSteps}
          stepsTitle='Process'
        />

        <ProjectDeliverables
          deliverables={hawaiiWildlifeFundDeliverables}
          sectionTitle='Project Deliverables'
        />

        <NextLink
          label='Cadence Design System'
          projectName='Go To Project'
          link='/cadence-design-system'
        />
      </ProjectPage>
      <Footer />
    </PageTransition>
  );
};

export default HawaiiWildlifeFund; 