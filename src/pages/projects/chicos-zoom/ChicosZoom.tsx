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
  ProjectDeck,
} from '../project-components';
import {
  chicosZoomDeliverables,
  chicosZoomProblems,
  chicosZoomGoals,
} from '@/data/projects/chicos-zoom-data';

const ChicosZoom: React.FC = () => {
  // Separate deck images from other deliverables
  const deckImages = chicosZoomDeliverables.slice(0, 11); // First 11 items are deck pages
  const otherDeliverables = chicosZoomDeliverables.slice(11); // Final design and prototypes

  return (
    <PageTransition>
      <ProjectPage>
        <ProjectStage
          stageImage='/assets/img/work_images/chicos_zoom_stage.png'
          backgroundAlt="Chico's FAS Product Zoom feature interface"
        />

        <ProjectOverview
          projectName='Chicos FAS Inc. - Product Zoom'
          projectType='Research | User Testing | UI Design | Prototyping'
          projectRole='UI/UX Designer'
          projectSoftware='Photoshop, Sketch, and Invision'
          projectDescription="My second project while working for Chico's was to evaluate the UX of the Product Zoom feature for all devices and propose changes across the entire line of Chico's FAS e-commerce sites. I knew the Zoom feature hadn't been updated in years, so I performed a heuristic evaluation and a competitive analysis to gather insight, new ideas, and distill my findings in a Powerpoint deck to share with business stakeholders."
        />

        <ProjectDivider sectionTitle='Project Overview' />

        <ProjectProcess
          isUXProject={true}
          projectOverview='UX research and design process for improving the Product Zoom feature'
          problems={chicosZoomProblems}
          goals={chicosZoomGoals}
          outcome='After my presentation, the decision was made to move forward with many of my suggestions. I collaborated with the development team to implement the enhancements quickly and the project was finished weeks ahead of schedule. Testing revealed our customers were pleased with the changes.'
        />

        <ProjectDeck
          title="Research & Analysis Deck"
          images={deckImages}
        />

        <ProjectDeliverables
          deliverables={otherDeliverables}
          sectionTitle='Final Deliverables'
        />

        <NextLink
          label="Chico's FAS - Shop This Look UX Enhancements"
          projectName='Go To Project'
          link='/chicos-shop-this-look'
        />
      </ProjectPage>
      <Footer />
    </PageTransition>
  );
};

export default ChicosZoom; 