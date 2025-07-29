import React from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './ProjectNavbar.module.css';

interface ProjectNavbarProps {
  currentProject: string;
  nextProject?: {
    title: string;
    route: string;
  };
  previousProject?: {
    title: string;
    route: string;
  };
}

const ProjectNavbar: React.FC<ProjectNavbarProps> = ({
  currentProject,
  nextProject,
  previousProject,
}) => {
  return (
    <nav className={styles.projectNavbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          {/* Back to Projects or Previous Project */}
          {previousProject ? (
            <Link to={previousProject.route} className={styles.backButton}>
              <ArrowLeft size={16} />
              {previousProject.title}
            </Link>
          ) : (
            <Link to='/projects' className={styles.backButton}>
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
          )}

          {/* Current Project Title */}
          <h2 className={styles.projectTitle}>{currentProject}</h2>

          {/* Next Project */}
          {nextProject ? (
            <Link to={nextProject.route} className={styles.nextButton}>
              {nextProject.title}
              <ArrowRight size={16} />
            </Link>
          ) : (
            <div className={styles.nextButtonPlaceholder} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default ProjectNavbar;
