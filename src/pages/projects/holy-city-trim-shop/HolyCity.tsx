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
  holyCityDeliverables,
  holyCitySteps,
} from '@/data/projects/holy-city-data';

const HolyCity: React.FC = () => {
  return (
    <PageTransition>
      <ProjectPage>
        <ProjectStage
          stageImage='/assets/img/work_images/holy_city_stage.jpg'
          stageLogo='/assets/img/work_images/holy_city_logo_1.png'
          stageDescription='Holy City Trim Shop caricature logo'
        />

        <ProjectOverview
          projectName='Holy City Trim Shop'
          projectType='Brand Identity | Visual Design | Illustration'
          projectRole='Creative Director'
          projectSoftware='Photoshop and Illustrator'
          projectDescription="This project was a labor of love. The client and I worked together tirelessly until each of his logos were unique and refined. The caricature logo was designed to resemble the client's physical features and attitude—it is currently being used on clothing and other marketing materials. The secondary logo was designed with less detail so that it could be reproduced for stamping his brand into materials used for projects, thus leaving a special trademark of quality on his work."
        />

        <ProjectDivider sectionTitle='Project Overview' />

        <ProjectProcess
          projectOverview="This branding project required deep collaboration and iteration to create logos that truly represented the client's personality and business needs. The caricature logo captures the client's distinctive features and attitude, while the secondary logo was designed specifically for practical applications like leather stamping. The process involved multiple rounds of refinement to ensure each logo was unique, polished, and perfectly suited for its intended use."
          projectSteps={holyCitySteps}
          stepsTitle='Execution'
        />

        <ProjectDeliverables
          deliverables={holyCityDeliverables}
          sectionTitle='Project Deliverables'
        />

        <NextLink label='Hawaii Wildlife Fund' projectName='Go To Project' link='/hawaii-wildlife-fund' />
      </ProjectPage>
      <Footer />
    </PageTransition>
  );
};

export default HolyCity; 