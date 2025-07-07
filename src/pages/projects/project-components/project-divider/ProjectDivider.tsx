import styles from './ProjectDivider.module.css';

interface ProjectDividerProps {
  sectionTitle: string;
}

const ProjectDivider = ({ sectionTitle }: ProjectDividerProps) => {
  return (
    <div className={styles.sectionDivider}>
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
    </div>
  );
};

export default ProjectDivider;
