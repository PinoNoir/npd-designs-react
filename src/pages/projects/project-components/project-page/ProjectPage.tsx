import clsx from 'clsx';
import styles from './ProjectPage.module.css';

interface ProjectPageProps {
  children: React.ReactNode;
  className?: string;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ children, className }) => {
  return (
    <div className={clsx(styles.page, className)}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default ProjectPage;
