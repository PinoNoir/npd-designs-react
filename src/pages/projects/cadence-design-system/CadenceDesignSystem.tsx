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
  cadenceDesignSystemDeliverables,
  cadenceDesignSystemSteps,
} from '@/data/projects/cadence-design-system-data';
import styles from './CadenceDesignSystem.module.css';

const CadenceDesignSystem: React.FC = () => {
  return (
    <PageTransition>
      <ProjectPage>
        <ProjectStage
          stageImage='/assets/img/work_images/stretto_ds_stage.jpg'
          backgroundAlt='Cadence Design System showcase'
        />

        <ProjectOverview
          projectName='Stretto'
          projectType='Storybook | React | Typescript | UI Design | Documentation'
          projectRole='Lead UX Engineer'
          projectSoftware='Figma'
          projectDescription='Cadence Design System is a comprehensive library of reusable components, meticulously crafted to ensure consistency and efficiency across our React applications. This system not only enhances the development process but also guarantees a cohesive user experience, aligning with our commitment to quality and innovation.'
        />

        <ProjectDivider sectionTitle='Project Overview' />

        <div className={styles.presentationSection}>
          <div className={styles.container}>
            <div className={styles.content}>
              <p className={styles.description}>
                For an in-depth exploration of the CDS project, please refer to this deck:
              </p>
              <a
                href='/files/cds_presentation_deck.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.downloadButton}
              >
                Cadence Design System
              </a>
            </div>
          </div>
        </div>

        <ProjectProcess
          projectOverview='Led the development of a comprehensive design system that standardizes UI components across all Stretto applications, improving development efficiency and user experience consistency.'
          projectSteps={cadenceDesignSystemSteps}
          stepsTitle='Development Process'
        />

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
  );
};

export default CadenceDesignSystem; 