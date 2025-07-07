import ProjectDivider from '../project-divider/ProjectDivider';
import styles from './ProjectDeliverables.module.css';
import clsx from 'clsx';

interface Deliverable {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
}

interface ProjectDeliverablesProps {
  deliverables: Deliverable[];
  sectionTitle?: string;
  className?: string;
}

const ProjectDeliverables = ({
  deliverables,
  sectionTitle = 'Project Deliverables',
  className = '',
}: ProjectDeliverablesProps) => {
  return (
    <>
      {sectionTitle && <ProjectDivider sectionTitle={sectionTitle} />}
      <section className={clsx(styles.deliverablesSection, className)}>
        <div className={styles.deliverablesGrid}>
          {deliverables.map((deliverable) => (
            <div key={deliverable.id} className={styles.deliverable}>
              <p className={styles.deliverableLabel}>{deliverable.title}</p>
              <img
                className={styles.deliverableImage}
                src={deliverable.imageSrc}
                alt={deliverable.imageAlt}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectDeliverables;
