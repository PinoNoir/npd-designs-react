import React from 'react';
import Button from '../button/Button';
import styles from './Hero.module.css';
import clsx from 'clsx';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  overlayImage?: string;
  backgroundImage?: string;
  noBackground?: boolean;
  overlayBlendMode?: React.CSSProperties['mixBlendMode'];
  overlayOpacity?: number;
  showProjectsButton?: boolean;
  showContactButton?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  overlayImage,
  backgroundImage,
  noBackground,
  overlayBlendMode = 'overlay',
  overlayOpacity = 0.3,
  showProjectsButton = true,
  showContactButton = true,
}) => {
  return (
    <section 
      className={clsx(styles.container, noBackground && styles.noBackground)}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {/* Optional overlay image */}
      {overlayImage && (
        <div
          className={styles.overlayImage}
          style={{
            mixBlendMode: overlayBlendMode,
            opacity: overlayOpacity,
          }}
        >
          <img
            src={overlayImage}
            alt="Hero overlay"
            className={styles.overlayImg}
          />
        </div>
      )}
      
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>
          {title}
        </h1>
        {subtitle && (
          <h2 className={styles.subtitle}>
            {subtitle}
          </h2>
        )}
        <p className={styles.description}>
          {description}
        </p>
        <div className={styles.buttonContainer}>
          {showProjectsButton && (
            <Button href='/projects'>Explore Work</Button>
          )}
          {showContactButton && (
            <Button variant='secondary' href='/contact'>
              Contact Me
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
