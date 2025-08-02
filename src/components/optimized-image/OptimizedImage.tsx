import React, { useState, useEffect } from 'react';
import styles from './OptimizedImage.module.css';
import clsx from 'clsx';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  sizes = '100vw',
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (priority) {
      setIsLoaded(true);
    }
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  if (hasError) {
    return (
      <div className={clsx(styles.errorPlaceholder, className)}>
        <span>Image failed to load</span>
      </div>
    );
  }

  return (
    <div className={clsx(styles.imageContainer, className)}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        sizes={sizes}
        className={clsx(styles.image, isLoaded && styles.loaded)}
        onLoad={handleLoad}
        onError={handleError}
        // Performance optimizations
        decoding='async'
        fetchPriority={priority ? 'high' : 'auto'}
      />
      {!isLoaded && !priority && <div className={styles.skeleton} />}
    </div>
  );
};

export default OptimizedImage;
