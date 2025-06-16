import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  children,
  className,
}) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {image && (
        <div className={styles.cardImageContainer}>
          <img src={image} alt={title ?? styles.cardImage} className={styles.cardImage} />
        </div>
      )}
      {title && <h3 className={styles.cardTitle}>{title}</h3>}
      {description && <p className={styles.cardDescription}>{description}</p>}
      {children && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default Card;
