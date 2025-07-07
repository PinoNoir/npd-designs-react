import styles from './ProjectStage.module.css';

interface ProjectStageProps {
    stageLogo: string;
    stageDescription: string;
}

const ProjectStage = ({ stageLogo, stageDescription }: ProjectStageProps) => {
    return (
        <section className={styles.projectStage}>
        <div className={styles.container}>
          <div className={styles.stageContent}>
            <img 
              className={styles.stageLogo} 
              src={stageLogo} 
              alt={stageDescription}
            />
          </div>
        </div>
      </section>
    );
};

export default ProjectStage;