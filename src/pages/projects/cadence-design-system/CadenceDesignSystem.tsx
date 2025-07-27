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
  cadenceDesignSystemDeliverables,
  cadenceDesignSystemOverview,
  cadenceDesignSystemSteps,
} from '@/data/projects/cadence-design-system-data';
import styles from './CadenceDesignSystem.module.css';
import { DownloadIcon } from 'lucide-react';

const CadenceDesignSystem: React.FC = () => {
  return (
    <ProtectedProject projectName="Cadence Design System" password="stretto2024">
      <PageTransition>
        <ProjectPage>
        <ProjectStage
          stageImage='/assets/img/work_images/stretto/stretto_cds_stage.jpg'
          backgroundAlt='Cadence Design System showcase'
        />

        <ProjectOverview
          projectName='Stretto'
          projectType='Storybook | React | Typescript | UI Design | Documentation'
          projectRole='Lead UX Engineer'
          projectSoftware='Figma | VS Code'
          projectDescription='Cadence Design System is a comprehensive library of reusable components, meticulously crafted to ensure consistency and efficiency across multiple React applications. This system not only enhances the development process but also guarantees cohesive ui design, styling, and user experience, aligning with my commitment to quality and innovation.'
        />

        <ProjectDivider sectionTitle='Project Overview' />

        <ProjectProcess
          projectOverview={cadenceDesignSystemOverview}
          projectSteps={cadenceDesignSystemSteps}
          stepsTitle='Development Process'
          overviewTitle='Background'
        />

        <div className={styles.presentationSection}>
          <div className={styles.container}>
            <div className={styles.content}>
              <p className={styles.description}>
                For an in-depth exploration of the CDS project, please refer to
                this deck:
              </p>
              <a
                href='/assets/files/cds_presentation_deck.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.downloadButton}
              >
                Download PDF <DownloadIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <ProjectDeliverables
          deliverables={cadenceDesignSystemDeliverables}
          sectionTitle='Project Deliverables'
        />

        <NextLink
          label='Solvably'
          projectName='Go To Project'
          link='/solvably'
        />
      </ProjectPage>
      <Footer />
    </PageTransition>
    </ProtectedProject>
  );
};

export default CadenceDesignSystem;
