import styles from './ProjectOverview.module.css';

interface ProjectOverviewProps {
    projectName: string;
    projectType: string;
    projectRole: string;
    projectSoftware: string;
    projectDescription: string;
}

const ProjectOverview = ({ projectName, projectType, projectRole, projectSoftware, projectDescription }: ProjectOverviewProps) => {
    return (
        <section className={styles.projectOverview}>
        <div className={styles.container}>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewLeft}>
              <h1 className={styles.projectName}>{projectName}</h1>
              <h2 className={styles.projectType}>
                {projectType}
              </h2>
              
              <div className={styles.projectDetails}>
                <p className={styles.projectLabel}>
                  Role: <span className={styles.projectDescription}>{projectRole}</span>
                </p>
                <p className={styles.projectLabel}>
                  Software: <span className={styles.projectDescription}>{projectSoftware}</span>
                </p>
              </div>
            </div>
            
            <div className={styles.overviewRight}>
              <p className={styles.projectLead}>
                {projectDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ProjectOverview;