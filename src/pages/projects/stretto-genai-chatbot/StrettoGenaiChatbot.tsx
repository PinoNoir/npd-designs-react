import React from 'react';
import {
  Footer,
  PageTransition,
  ComingSoon,
  ProtectedProject,
  ProjectNavbar,
} from '@/components';
import {
  ProjectOverview,
  ProjectStage,
  ProjectDivider,
  ProjectPage,
} from '../project-components';
import styles from './StrettoGenaiChatbot.module.css';
import { getProjectNavigation } from '@/utils/project-navigation';

const StrettoGenaiChatbot: React.FC = () => {
  const navigation = getProjectNavigation('/stretto-genai-chatbot');

  return (
    <ProtectedProject projectName='Stretto - Gen AI Chatbot' password='pino2025'>
      <ProjectNavbar
        currentProject={navigation.current.title}
        nextProject={navigation.next}
        previousProject={navigation.previous}
      />
      <PageTransition>
        <ProjectPage>
          <ProjectStage
            stageImage='/assets/img/work_images/stretto/stretto_gen_ai_stage.png'
            backgroundAlt='Stretto Gen AI Chatbot project'
          />

          <ProjectOverview
            projectName='Stretto - Gen AI Chatbot'
            projectType='TypeScript | React | Vercel AI SDK'
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
                updates on the Stretto Gen AI Chatbot implementation.
              </p>
            </div>
          </div>
        </ProjectPage>
      </PageTransition>
      <Footer />
    </ProtectedProject>
  );
};

export default StrettoGenaiChatbot;
