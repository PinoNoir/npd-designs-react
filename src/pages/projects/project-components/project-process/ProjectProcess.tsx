import styles from './ProjectProcess.module.css';

interface ProjectProcessProps {
    projectOverview: string; // project overview text
    projectProcess: string; // project process text
    projectMoodBoard: string; // project mood board image path
    projectMoodBoardDescription: string; // project mood board description
}

const ProjectProcess = ({ projectOverview, projectProcess, projectMoodBoard, projectMoodBoardDescription }: ProjectProcessProps) => {
    return (
        <section className={styles.projectsSection}>
        <div className={styles.container}>
          <div className={styles.processGrid}>
            <div className={styles.processLeft}>
              <h3 className={styles.processTitle}>Inspiration</h3>
              <p className={styles.processText}>
                {projectOverview}
              </p>
              <p className={styles.processText}>
                {projectProcess}
              </p>
              <p className={styles.processText}>
                {projectProcess}
              </p>
            </div>
            
            <div className={styles.processRight}>
              <h3 className={styles.processTitle}>Execution</h3>
              <ol className={styles.numberedList}>
                <li className={styles.listItem}>Work with client to plan a design strategy for the magazine.</li>
                <li className={styles.listItem}>Conduct research, gather design assets, and begin brainstorming.</li>
                <li className={styles.listItem}>Create thumbnail sketches and rough drafts for initial presentation.</li>
                <li className={styles.listItem}>Collaborate with photographers and print production specialists.</li>
                <li className={styles.listItem}>Create and prepare digital assets for print production.</li>
              </ol>
            </div>
          </div>
          
          <div className={styles.moodBoard}>
            <p className={styles.deliverableLabel}>Swell Life Magazine Mood Board</p>
            <img 
              className={styles.moodBoardImage} 
              src={projectMoodBoard} 
              alt={projectMoodBoardDescription}
            />
          </div>
        </div>
      </section>
    );
};

export default ProjectProcess;