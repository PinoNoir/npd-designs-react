import { ArrowRight } from 'lucide-react';
import styles from './FeaturedSection.module.css';
import Button from '../button/Button';
import FeatureCard from '../feature-card/FeatureCard';
import FeaturedImage from '../featured-image/FeatureImage';
import Divider from '../divider/Divider';

const FeaturedSection = () => {
  return (
    <section className={styles.featuredSection}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.textWrapper}>
            <FeatureCard
              overline='Featured Work'
              client="Chico's FAS Inc."
              projectName='Shop this Look Widget - UX Enhancements'
            />
            <Divider />
            <h2 className={styles.sectionHeading}>Problem</h2>
            <p>
              Customers found the existing <em>Shop this Look</em> experience
              difficult to use, especially on mobile devices. During testing,
              participants mentioned their frustration with the overall
              navigation and flow—page views and sales were also down, which
              validated these statements.
            </p>
            <h2 className={styles.sectionHeading}>Outcome</h2>
            <p>
              I delivered my prototypes to the development team after a few
              quick design iterations. Before the changes were released, testing
              revealed that my enhancements improved the mobile experience and
              allowed customers to visualize entire outfits for their wardrobe
              much better than before, thus improving conversions and creating
              more opportunities to sell products.
            </p>
            <Divider />
            <Button
              href='chicos-project-shop-this-look.html'
              aria-pressed='true'
            >
              View Case Study
              <ArrowRight className={styles.buttonIcon} size={24} />
            </Button>
          </div>
          <FeaturedImage
            src='../../../assets/img/work_images/featured-projects/chicos_featured_mock_up.png'
            alt='Mobile phone mockup of Chicos FAS UX projects'
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
