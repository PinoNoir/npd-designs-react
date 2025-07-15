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
  chicosShopThisLookDeliverables,
  chicosShopThisLookProblems,
  chicosShopThisLookGoals,
} from '@/data/projects/chicos-stl-data';

const ChicosShopThisLook: React.FC = () => {
  return (
    <PageTransition>
      <ProjectPage>
        <ProjectStage
          stageImage='/assets/img/work_images/chicos_stage.png'
          backgroundAlt="Chico's FAS retail environment showcasing the Shop This Look feature"
        />

        <ProjectOverview
          projectName='Chicos FAS Inc. - Shop This Look'
          projectType='Research | User Testing | UI Design | Prototyping'
          projectRole='UI/UX Designer'
          projectSoftware='Photoshop, Sketch, and Invision'
          projectDescription="The Shop this Look feature was an interactive outfitting tool powered by Stylitics and customized to work on all Chico's FAS e-commerce sites. A few weeks after its initial realease, the Data Analytics team found that customers weren't using the feature on mobile devices and conversion rates were down significantly. Through additional research we found that STL failed to meet customer expectations and hindered their ability to shop for outfits effectively.."
        />

        <ProjectDivider sectionTitle='Project Overview' />

        <ProjectProcess
          isUXProject={true}
          projectOverview='UX research and design process for improving the Shop This Look feature'
          problems={chicosShopThisLookProblems}
          goals={chicosShopThisLookGoals}
          outcome='I delivered my prototypes to the development team after a few
          quick design iterations. Before the changes were released, testing
          revealed that my enhancements improved the mobile experience and
          allowed customers to visualize entire outfits for their wardrobe
          much better than before, thus improving conversions and creating
          more opportunities to sell products.'
        />

        <ProjectDeliverables
          deliverables={chicosShopThisLookDeliverables}
          sectionTitle='Project Deliverables'
        />

        <NextLink
          label="Chico's FAS - Simply Soma Subscription Service"
          projectName='Go To Project'
          link='/chicos-simply-soma'
        />
      </ProjectPage>
      <Footer />
    </PageTransition>
  );
};

export default ChicosShopThisLook;
