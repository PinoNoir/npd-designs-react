import { Link } from '@tanstack/react-router';
import styles from './NextLink.module.css';
import { ArrowRightIcon } from 'lucide-react';

interface NextLinkProps {
  label: string;
  projectName: string;
  link: string;
}

const NextLink = ({ label, projectName, link }: NextLinkProps) => {
  return (
    <section className={styles.featuredSection}>
        <div className={styles.highlight}>
          <p className={styles.caseStudyOverline}>Up Next</p>
          <p className={styles.caseStudyClient}>{label}</p>
          <Link to={link} className={styles.nextProjectButton}>
            {projectName}
            <ArrowRightIcon className={styles.arrowIcon} />
          </Link>
        </div>
    </section>
  );
};

export default NextLink;
