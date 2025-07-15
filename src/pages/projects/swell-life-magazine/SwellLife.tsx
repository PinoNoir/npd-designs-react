import React from 'react';
import styles from './SwellLife.module.css';
import { Divider, Footer, PageTransition, OptimizedImage } from '@/components';
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
  swellLifeDeliverables,
  swellLifeSteps,
} from '@/data/projects/swell-life-data';

const SwellLife: React.FC = () => {
  return (
    <PageTransition>
      <ProjectPage>
        <ProjectStage
          stageImage='/assets/img/work_images/swell_life_stage.jpg'
          stageLogo='/assets/img/work_images/swell_life_logo.svg'
          stageDescription='Swell Life brand logo'
        />

        <ProjectOverview
          projectName='Swell Life Magazine'
          projectType='Brand Identity | Visual Design | Product Development'
          projectRole='Creative Director'
          projectSoftware='InDesign, Illustrator, and Photoshop'
          projectDescription='The client approached me about creating a magazine that put a spotlight on the Cocoa Beach surf scene, local artists, and raised environmental awareness. The idea had great potential so we set out on a journey to create a brand with a fresh look that appealed to a wide range of readers. We released our first printed issue in the fall of 2016 and continued for four additional issues thereafter. Swell Life Magazine became a sensation within our local community with a circulation of over 10,000 copies each quarter.'
        />

        <ProjectDivider sectionTitle='Project Overview' />

        <ProjectProcess
          projectOverview='For inspiration, I explored top surf magazines and brands, drawing particularly from the bold, textural style of designer and surfer David Carson. I focused on expressive typography to give each story a unique voice, while establishing a consistent visual language across the magazine.'
          projectSteps={swellLifeSteps}
          stepsTitle='Execution'
        >
          <Divider />
          <div className={styles.moodBoard}>
            <p className={styles.deliverableLabel}>Mood Board</p>
            <OptimizedImage
              className={styles.moodBoardImage}
              src='/assets/img/work_images/swell_life_inspiration.jpg'
              alt='Design inspiration for Swell Life magazine'
            />
          </div>
        </ProjectProcess>

        <ProjectDeliverables
          deliverables={swellLifeDeliverables}
          sectionTitle='Project Deliverables'
        />

        <NextLink
          label='Makoto Japanese Steakhouse'
          projectName='Go To Project'
          link='#'
        />
      </ProjectPage>
      <Footer />
    </PageTransition>
  );
};

export default SwellLife;
