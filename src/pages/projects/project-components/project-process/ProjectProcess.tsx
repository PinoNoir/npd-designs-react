import styles from './ProjectProcess.module.css';
import { ProjectSteps } from '../';
import { ProjectStep } from '@/data/projects/swell-life-data';

interface ProjectProcessProps {
  children?: React.ReactNode;
  projectOverview: string; // project overview text
  projectProcess?: string; // project process text
  projectSteps?: ProjectStep[]; // optional project steps
  stepsTitle?: string; // optional steps title
}

const ProjectProcess = ({
  children,
  projectOverview,
  projectProcess,
  projectSteps,
  stepsTitle = 'Execution',
}: ProjectProcessProps) => {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.processGrid}>
        <div className={styles.processLeft}>
          <h3 className={styles.processTitle}>Inspiration</h3>
          <p className={styles.processText}>{projectOverview}</p>
          <p className={styles.processText}>{projectProcess}</p>
        </div>

        <div className={styles.processRight}>
          {projectSteps ? (
            <ProjectSteps 
              steps={projectSteps}
              title={stepsTitle}
            />
          ) : (
            <div>
              <h3 className={styles.processTitle}>{stepsTitle}</h3>
              <p className={styles.processText}>
                Project execution steps will be defined here.
              </p>
            </div>
          )}
        </div>
      </div>
      {children}
    </section>
  );
};

export default ProjectProcess;
