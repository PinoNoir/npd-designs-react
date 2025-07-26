import styles from './ProjectProcess.module.css';
import { ProjectSteps } from '../';
import { ProjectStep } from '@/data/projects/types';

interface ProjectProcessProps {
  children?: React.ReactNode;
  projectOverview: string;
  projectProcess?: string;
  projectSteps?: ProjectStep[];
  stepsTitle?: string;
  overviewTitle?: string;
  // UX-specific props
  problems?: ProjectStep[];
  goals?: ProjectStep[];
  outcome?: string;
  isUXProject?: boolean;
}

const ProjectProcess = ({
  children,
  projectOverview,
  projectProcess,
  projectSteps,
  stepsTitle = 'Execution',
  overviewTitle = 'Inspiration',
  problems,
  goals,
  outcome,
  isUXProject = false,
}: ProjectProcessProps) => {
  if (isUXProject) {
    return (
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          {/* Problems Section */}
          {problems && (
            <div className={styles.uxSection}>
              <h3 className={styles.sectionTitle}>Problems</h3>
              <ol className={styles.numberedList}>
                {problems.map((problem) => (
                  <li key={problem.id} className={styles.listItem}>
                    {problem.text}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Goals Section */}
          {goals && (
            <div className={styles.uxSection}>
              <h3 className={styles.sectionTitle}>Project Goals</h3>
              <ol className={styles.numberedList}>
                {goals.map((goal) => (
                  <li key={goal.id} className={styles.listItem}>
                    {goal.text}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Outcome Section */}
          {outcome && (
            <div className={styles.uxSection}>
              <h3 className={styles.sectionTitle}>Outcome</h3>
              <p className={styles.outcomeText}>{outcome}</p>
            </div>
          )}
        </div>
        {children}
      </section>
    );
  }

  // Original layout for non-UX projects
  return (
    <section className={styles.projectsSection}>
      <div className={styles.processGrid}>
        <div className={styles.processLeft}>
          <h3 className={styles.processTitle}>{overviewTitle}</h3>
          {projectOverview.split('\n\n').map((paragraph, index) => (
            <p key={index} className={styles.processText}>
              {paragraph}
            </p>
          ))}
          {projectProcess && (
            <p className={styles.processText}>{projectProcess}</p>
          )}
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
