import React from 'react';
import {
  Footer,
  PageTransition,
  ComingSoon,
  ProtectedProject,
} from '@/components';
import {
  NextLink,
  ProjectOverview,
  ProjectStage,
  ProjectDivider,
  ProjectPage,
} from '../project-components';
import styles from './StrettoGenaiChatbot.module.css';

const StrettoGenaiChatbot: React.FC = () => {
  return (
    <ProtectedProject
      projectName='Stretto - GenAI Chatbot'
      password='pino2025'
    >
      <PageTransition>
        <ProjectPage>
          <ProjectStage
            stageImage='/assets/img/work_images/stretto/stretto_gen_ai_stage.png'
            backgroundAlt='Stretto GenAI Chatbot project'
          />

          <ProjectOverview
            projectName='Stretto - GenAI Chatbot'
            projectType='AI | TypeScript | React | Vercel AI SDK'
            projectRole='Lead Developer'
            projectSoftware='Cursor | Vercel'
            projectDescription='A concept for an AI chatbot designed to handle multiple use cases and products using the Vercel AI SDK. This project explores the integration of artificial intelligence to enhance user interactions and streamline processes across various applications.'
          />

          <ProjectDivider sectionTitle='Project Overview' />

          <div className={styles.comingSoonSection}>
            <div className={styles.container}>
              <ComingSoon
                text='Project Coming Soon'
                size='large'
                className={styles.comingSoonText}
              />
              <p className={styles.description}>
                This project is currently in development. Check back soon for
                updates on the Stretto GenAI Chatbot implementation.
              </p>
            </div>
          </div>

          <NextLink
            label='Cadence Design System'
            projectName='Go To Project'
            link='/cadence-design-system'
          />
        </ProjectPage>
        <Footer />
      </PageTransition>
    </ProtectedProject>
  );
};

export default StrettoGenaiChatbot;
