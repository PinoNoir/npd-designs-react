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
  chicosSomaDeliverables,
  chicosSomaProblems,
  chicosSomaGoals,
} from '@/data/projects/chicos-soma-data';

const ChicosSimplySoma: React.FC = () => {
  return (
    <PageTransition>
      <ProjectPage>
        <ProjectStage
          stageImage='/assets/img/work_images/chicos/chicos_og_stage.jpg'
          backgroundAlt="Chico's FAS Simply Soma subscription service interface"
        />

        <ProjectOverview
          projectName='Chicos FAS Inc. - Simply Soma'
          projectType='Research | User Testing | UI Design | Prototyping'
          projectRole='UI/UX Designer'
          projectSoftware='Photoshop, Sketch, and Invision'
          projectDescription="Simply Soma was a subscription service for Soma's line of clothing and accessories. The goals of the business were to increase customer retention and maximize recurring revenue through a partnership with Ordergroove, a 3rd party e-commerce platform. My team and I had a vested interest in ensuring the feature met our usability standards and that it was integrated properly on Soma's website. I found several issues and addressed them accordingly using best practices."
        />

        <ProjectDivider sectionTitle='Project Overview' />

        <ProjectProcess
          isUXProject={true}
          projectOverview='UX research and design process for the Simply Soma subscription service'
          problems={chicosSomaProblems}
          goals={chicosSomaGoals}
          outcome='After several stakeholder meetings and refinements I was able to deliver my screens well before the deadline while working with my team and developers to alleviate pain points and account for scenarios that could potentially cause dissatisfaction with the product—improving it significantly.'
        />

        <ProjectDeliverables
          deliverables={chicosSomaDeliverables}
          sectionTitle='Design Callouts'
        />

        <NextLink
          label="Chico's FAS - Product Zoom UX Enhancements"
          projectName='Go To Project'
          link='/chicos-zoom'
        />
      </ProjectPage>
      <Footer />
    </PageTransition>
  );
};

export default ChicosSimplySoma; 