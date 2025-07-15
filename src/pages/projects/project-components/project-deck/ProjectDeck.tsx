import React from 'react';
import styles from './ProjectDeck.module.css';

interface DeckImage {
  id: string;
  imageSrc: string;
  imageAlt: string;
}

interface ProjectDeckProps {
  title: string;
  images: DeckImage[];
  className?: string;
}

const ProjectDeck: React.FC<ProjectDeckProps> = ({ title, images, className }) => {
  return (
    <div className={className}>
      <h4 className={styles.deckTitle}>{title}</h4>
      <div className={styles.scrollingWrapper}>
        {images.map((image) => (
          <div key={image.id} className={styles.deckImage}>
            <img
              className={styles.scrollImage}
              src={image.imageSrc}
              alt={image.imageAlt}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDeck; 