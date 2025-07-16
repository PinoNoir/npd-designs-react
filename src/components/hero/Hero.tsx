import React from 'react';
import Button from '../button/Button';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  overlayImage?: string;
  noBackground?: boolean;
  overlayBlendMode?: React.CSSProperties['mixBlendMode'];
  overlayOpacity?: number;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  overlayImage,
  noBackground,
  overlayBlendMode = 'overlay',
  overlayOpacity = 0.3,
}) => {
  return (
    <section className={`${styles.container} ${noBackground ? styles.noBackground : ''}`}>
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
          <Button href='/projects'>Explore Work</Button>
          <Button variant='secondary' href='/contact'>
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
