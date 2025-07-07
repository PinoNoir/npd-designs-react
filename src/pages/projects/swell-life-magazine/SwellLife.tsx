import React from 'react';
import styles from '../styles/sharedStyles.module.css';
import { Footer } from '@/components';
import {
  NextLink,
  ProjectOverview,
  ProjectProcess,
  ProjectStage,
  ProjectDeliverables,
  ProjectDivider,
} from '../project-components';
import { swellLifeDeliverables } from '@/data/projects/swell-life-data';

const SwellLife: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <ProjectStage
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
          projectOverview='After speaking with the client I researched some of the most popular surf magazines and brands to brainstorm ideas for the layout of Swell Life. I looked to world renoun designer and surfer David Carson for inspiration--their use of typography, color, shape, and texture was the style I wanted to emulate, but with my own interpretation. I decided to put strong emphasis on typograpic treatment to give each story/article a unique look and feel and incorporate a consistent visual language for each issue of the magazine.'
          projectProcess='I decided to put strong emphasis on typograpic treatment to give each story/article a unique look and feel and incorporate a consistent visual language for each issue of the magazine.'
          projectMoodBoard='/assets/img/work_images/swell_life_inspiration.jpg'
          projectMoodBoardDescription='Design inspiration for Swell Life magazine'
        />

        <ProjectDeliverables
          deliverables={swellLifeDeliverables}
          sectionTitle='Project Deliverables'
        />

        <NextLink
          label='Makoto Japanese Steakhouse'
          projectName='Go To Project'
          link='#'
        />
      </div>
      <Footer />
    </div>
  );
};

export default SwellLife;
