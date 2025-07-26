import { ArrowRight } from 'lucide-react';
import styles from './FeaturedSection.module.css';
import Button from '../button/Button';
import FeatureCard from '../feature-card/FeatureCard';
import FeaturedImage from '../featured-image/FeatureImage';
import {
  FeaturedProject,
  defaultFeaturedProject,
} from '@/data/projects/featured-projects-data';

interface FeaturedSectionProps {
  project?: FeaturedProject;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  project = defaultFeaturedProject,
}) => {
  return (
    <section className={styles.featuredSection}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* Header - Full Width */}
          <div className={styles.header}>
            <FeatureCard
              overline={project.overline}
              client={project.client}
              projectName={project.projectName}
            />
          </div>

          {/* Body - Content + Image */}
          <div className={styles.body}>
            <div className={styles.textContent}>
              <h2 className={styles.sectionHeading}>Problem</h2>
              <p>{project.problem}</p>
              <h2 className={styles.sectionHeading}>Outcome</h2>
              <p>{project.outcome}</p>
            </div>

            <div className={styles.imageContainer}>
              <FeaturedImage src={project.imageSrc} alt={project.imageAlt} />
            </div>
          </div>

          {/* Footer - Full Width */}
          <div className={styles.footer}>
            <Button href={project.buttonLink} aria-pressed='true'>
              {project.buttonText}
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
