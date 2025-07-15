import styles from './ProjectStage.module.css';

interface ProjectStageProps {
  stageImage: string;
  stageLogo?: string;
  stageDescription?: string;
  backgroundAlt?: string;
}

const ProjectStage = ({ 
  stageImage, 
  stageLogo, 
  stageDescription, 
  backgroundAlt 
}: ProjectStageProps) => {
  return (
    <section 
      className={styles.projectStage}
      style={{
        backgroundImage: `url(${stageImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      aria-label={backgroundAlt}
    >
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
