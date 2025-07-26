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
  strettoInvoicesPaymentsDeliverables,
  strettoInvoicesPaymentsProblems,
  strettoInvoicesPaymentsGoals,
} from '@/data/projects/stretto-invoices-payments-data';

const StrettoInvoicesPayments: React.FC = () => {
  return (
    <PageTransition>
      <ProjectPage>
        <ProjectStage
          stageImage='/assets/img/work_images/stretto/stretto_ip_stage.jpg'
          backgroundAlt="Stretto Best Case Cloud Invoices & Payments interface showcasing the payment collection system"
        />

        <ProjectOverview
          projectName='Stretto - Best Case Cloud'
          projectType='Best Case Cloud - Invoices & Payments'
          projectRole='Lead Product Designer'
          projectSoftware='Figma'
          projectDescription="After joining the bankruptcy division I was tasked with redesigning the Invoices & Payments feature for Best Case Cloud. Because it is an integral part of the software and a huge revenue driver for the business, I felt a lot of pressure in making sure the design was easy to use. On top of having no prior experience working on a payment system, it needed to support unique scenarios only found in bankruptcy law, which made it even more complex. But with the help of cognitive walkthroughs, design reviews, and user testing, I was able to design a flexible tool that helped users collect payments from their clients with much less effort."
        />

        <ProjectDivider sectionTitle='Project Overview' />

        <ProjectProcess
          isUXProject={true}
          projectOverview="The Invoices & Payments feature redesign was a high-stakes project that required balancing complex bankruptcy law requirements with intuitive user experience design. The challenge was to create a payment system that could handle unique legal scenarios while remaining accessible to legal professionals with varying technical expertise."
          problems={strettoInvoicesPaymentsProblems}
          goals={strettoInvoicesPaymentsGoals}
          outcome="Through cognitive walkthroughs, design reviews, and user testing, I successfully designed a flexible payment collection tool that significantly reduced user effort while supporting the complex requirements of bankruptcy law. The redesigned system improved the overall user experience for payment collection workflows and helped legal professionals collect payments from their clients more efficiently."
        />

        <ProjectDeliverables
          deliverables={strettoInvoicesPaymentsDeliverables}
          sectionTitle='Project Deliverables'
        />

        <NextLink
          label="More Projects Coming Soon"
          projectName='Back to Projects'
          link='/projects'
        />
      </ProjectPage>
      <Footer />
    </PageTransition>
  );
};

export default StrettoInvoicesPayments; 