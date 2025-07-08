import React, { useState, useEffect } from 'react';
import styles from './OptimizedImage.module.css';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

// Type guard to validate src
const isValidImageSrc = (src: string): boolean => {
  return Boolean(
    src && src.trim() !== '' && src !== 'null' && src !== 'undefined',
  );
};

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  onLoad,
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    // Validate src prop
    if (!isValidImageSrc(src)) {
      console.warn('OptimizedImage: Invalid or empty src provided:', src);
      setHasError(true);
      setIsLoading(false);
      onError?.();
      return;
    }

    setIsLoading(true);
    setHasError(false);

    // Preload image
    const img = new Image();

    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
      onLoad?.();
    };

    img.onerror = () => {
      setHasError(true);
      setIsLoading(false);
      onError?.();
    };

    img.src = src;
  }, [src, onLoad, onError]);

  if (hasError) {
    return (
      <div className={`${styles.errorContainer} ${className}`}>
        <p className={styles.errorText}>Failed to load image</p>
      </div>
    );
  }

  return (
    <div className={`${styles.imageContainer} ${className}`}>
      {isLoading && (
        <div className={styles.loadingPlaceholder}>
          <div className={styles.loadingSpinner}></div>
        </div>
      )}

      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`${styles.image} ${
            isLoading ? styles.hidden : styles.visible
          }`}
          onLoad={() => setIsLoading(false)}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
