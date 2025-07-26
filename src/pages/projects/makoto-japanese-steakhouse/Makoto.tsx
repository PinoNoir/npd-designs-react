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
  makotosDeliverables,
  makotosSteps,
} from '@/data/projects/makotos-data';

const Makoto: React.FC = () => {
  return (
    <PageTransition>
      <ProjectPage>
        <ProjectStage
          stageImage='/assets/img/work_images/makoto/makoto_stage.jpg'
          stageLogo='/assets/img/work_images/makoto/makoto_logo_1.png'
          stageDescription='Makoto Japanese Steakhouse brand logo'
        />

        <ProjectOverview
          projectName='Makoto Japanese Steakhouse'
          projectType='Illustration | Visual Design'
          projectRole='Art Direction and Illustration'
          projectSoftware='Photoshop and Illustrator'
          projectDescription="The client requested custom Japanese inspired designs to be displayed and framed in traditional soji screens throughout their teppanyaki steakhouse. While researching ideas for the proposal, I was inspired by Japanese Ukiyo-e masters of the late nineteenth century. The end result was an elegant installation acrylic prints that fit perfectly with the existing decor and added a beautiful ambience to the interior."
        />

        <ProjectDivider sectionTitle='Project Overview' />

        <ProjectProcess
          projectOverview='At the time, in 2014, this was my first large scale project. After building a rapport with the client to guage what they liked and tour the restaurant to get a feel for the interior design and decor, I knew exactly what style I wanted to work towards. My research process began with immersing myself in traditional Japanese art—drawing inspiration from Ukiyo-e masters such as Hokusai and Hiroshige. It was challenging to create 8 separate pieces of art and also be consistent enough to flow throughout the restaurant without clashing with any of the existing decor. The result of careful planning, sketching, and attention to detail led to a beautiful display of classical woodblock style prints that completely rejuvenated the interior.'
          projectSteps={makotosSteps}
          stepsTitle='Execution'
          overviewTitle='Inspiration'
        />

        <ProjectDeliverables
          deliverables={makotosDeliverables}
          sectionTitle='Project Deliverables'
        />

        <NextLink label='Miamah Comedy' projectName='Go To Project' link='/projects/miamah-comedy' />
      </ProjectPage>
      <Footer />
    </PageTransition>
  );
};

export default Makoto;
