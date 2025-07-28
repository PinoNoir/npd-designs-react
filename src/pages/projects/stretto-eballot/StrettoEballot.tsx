import React from 'react';
import { Footer, PageTransition, ProtectedProject } from '@/components';
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
  strettoEballotDeliverables,
  strettoEballotCaseAdminProblems,
  strettoEballotCaseAdminSolutions,
  strettoEballotWebsiteProblems,
} from '@/data/projects/stretto-eballot-data';

const StrettoEballot: React.FC = () => {
  return (
    <ProtectedProject
      projectName='Stretto - E-Ballot System'
      password='stretto2024'
    >
      <PageTransition>
        <ProjectPage>
          <ProjectStage
            stageImage='/assets/img/work_images/stretto/stretto_ebw_stage.jpg'
            backgroundAlt='Stretto E-Ballot system interface showcasing the electronic balloting platform'
          />

          <ProjectOverview
            projectName='Stretto - America Works Software'
            projectType='Solicitation - E-Ballot Setup Enhancement'
            projectRole='Lead Product Designer'
            projectSoftware='Figma'
            projectDescription='While working on the corporate restructuring team at Stretto, I served as Lead Product Designer for the E-Ballot Setup Enhancement project. This initiative posed a unique challenge, requiring the redesign of two intricate software systems. My mission was to introduce new features, address longstanding pain points, and streamline workflows to make complex tasks more intuitive. Through thorough research and user-centered design, I reimagined each workflow to maximize efficiency, empowering both internal teams and external users with a significantly improved experience.'
          />

          <ProjectDivider sectionTitle='Case Admin (Internal System) - Design Problems' />

          <ProjectProcess
            isUXProject={true}
            projectOverview='The Case Admin system had numerous usability issues that made E-ballot setup inefficient and error-prone.'
            problems={strettoEballotCaseAdminProblems}
            goals={strettoEballotCaseAdminSolutions}
            outcome='The redesigned E-Ballot setup UI replaced the outdated WYSIWYG editor with a modern design that was met with widespread praise and approval. Each section was thoughtfully redesigned to align with the familiar steps and context of the E-Ballot setup process.'
          />

          <ProjectDeliverables
            deliverables={strettoEballotDeliverables.slice(0, 4)}
            sectionTitle='Case Admin System Deliverables'
          />

          <ProjectDivider sectionTitle='Electronic Ballot Website (External System) - Design Problems' />

          <ProjectProcess
            isUXProject={true}
            projectOverview='The external Electronic Ballot Website had significant limitations that hindered creditor access and voting processes.'
            problems={strettoEballotWebsiteProblems}
            goals={[]}
            outcome='More solutions and outcomes will be added as the project progresses.'
          />

          <ProjectDeliverables
            deliverables={strettoEballotDeliverables.slice(4, 5)}
            sectionTitle='Website System Deliverables'
          />

          <NextLink
            label='Best Case Cloud - Invoices & Payments'
            projectName='Go To Project'
            link='/projects/stretto-invoices-payments'
          />
        </ProjectPage>
        <Footer />
      </PageTransition>
    </ProtectedProject>
  );
};

export default StrettoEballot;
