import React, { useEffect, useState, useRef } from 'react';
import styles from './PageTransition.module.css';
import clsx from 'clsx';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  className = '',
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start loading state
    setIsLoading(true);
    setIsVisible(false);

    // Scroll to top immediately
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });

    // Reduced loading time for better mobile performance
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);

      // Shorter delay for content visibility
      const visibilityTimer = setTimeout(() => {
        setIsVisible(true);
      }, 50);

      return () => clearTimeout(visibilityTimer);
    }, 300); // Reduced from 800ms to 300ms

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  // Simplified image loading logic
  useEffect(() => {
    const images = containerRef.current?.querySelectorAll('img');
    if (!images || images.length === 0) {
      setIsLoading(false);
      return;
    }

    // Check if images are already loaded
    const allImagesLoaded = Array.from(images).every((img) => img.complete);
    if (allImagesLoaded) {
      setIsLoading(false);
      setTimeout(() => setIsVisible(true), 50);
      return;
    }

    let loadedImages = 0;
    const totalImages = images.length;

    const handleImageLoad = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        setIsLoading(false);
        setTimeout(() => setIsVisible(true), 50);
      }
    };

    const handleImageError = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        setIsLoading(false);
        setTimeout(() => setIsVisible(true), 50);
      }
    };

    // Add event listeners only to images that haven't loaded
    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener('load', handleImageLoad, { once: true });
        img.addEventListener('error', handleImageError, { once: true });
      } else {
        handleImageLoad();
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageError);
      });
    };
  }, []);

  return (
    <div ref={containerRef} className={clsx(styles.pageTransition, className)}>
      {isLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingSpinner}>
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>Loading...</p>
          </div>
        </div>
      )}

      <div
        className={clsx(
          styles.content,
          isVisible ? styles.visible : styles.hidden,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
