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
  seriousErpDeliverables,
  seriousErpProblems,
  seriousErpGoals,
} from '@/data/projects/serious-erp-data';

const SeriousErp: React.FC = () => {
  return (
    <PageTransition>
      <ProjectPage>
        <ProjectStage
          stageImage='/assets/img/work_images/serp/serp_stage.jpg'
          backgroundAlt="Serious ERP system interface showcasing the redesigned platform"
        />

        <ProjectOverview
          projectName='Serious ERP'
          projectType='Component Library | Micro Interactions | Information Architecture'
          projectRole='Product Designer'
          projectSoftware='Figma | After Effects | Lottie'
          projectDescription="Serious ERP is a multi-functional software platform built for the growing needs of the home healthcare industry. Initially, the client approached me about improving the design of their ordering/cart system. It soon turned into a large scale project with various technical issues that needed to be solved. My goal as the designer was to take a design thinking approach to solve these complex problems and improve the usability of their system."
        />

        <ProjectDivider sectionTitle='Project Overview' />

        <ProjectProcess
          isUXProject={true}
          projectOverview="While evaluating the client's software using NNg's Usability Heuristics for UI Design, the most glaring issues were lack of consistency and cohesive information architecture. Serious ERP was an outdated system that failed to meet current responsive web design standards—resulting in a poor mobile experience and terrible performance. My goals for this project were to take a design thinking approach to every complex issue I was faced with and ensure the development team had an arsenal of reusable components and clear guidelines to rebuild the site efficiently. I relied upon Google Material Design to do the heavy lifting for me and it turned out to be a smashing success."
          problems={seriousErpProblems}
          goals={seriousErpGoals}
          outcome="After a few short weeks of meetings and working with the client's dev team, we found solutions to many of the issues I uncovered in my heuristic evaluation. Implementing Material's Angular component library and following Google's design principles to refactor the UI was also a welcomed change and a smooth transition from the dev team's perspective. I consider SERP to be the first successful UX project that I lead solely from start to finish. The use of Google's Material Design principles in my work was a great lesson in interaction design and I gained valuable technical knowledge implementing a frontend framework. It was also the first time I used such a powerful collaborative tool like Figma—allowing me to present my ideas and deliver my work more effectively."
        />

        <ProjectDeliverables
          deliverables={seriousErpDeliverables}
          sectionTitle='Project Deliverables'
        />

        <NextLink
          label="Solvably"
          projectName='Go To Project'
          link='/projects/solvably'
        />
      </ProjectPage>
      <Footer />
    </PageTransition>
  );
};

export default SeriousErp; 