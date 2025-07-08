import React, { useEffect, useState, useRef } from 'react';
import styles from './PageTransition.module.css';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  className = '' 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start loading state
    setIsLoading(true);
    setIsVisible(false);

    // Use requestAnimationFrame to ensure DOM is ready
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Use instant to avoid smooth scroll conflicts
      });
    };

    // Scroll to top after a brief delay to ensure route transition is complete
    const scrollTimer = setTimeout(scrollToTop, 50);

    // Simulate loading time for images and content
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      
      // Small delay before showing content for smooth transition
      const visibilityTimer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      
      return () => clearTimeout(visibilityTimer);
    }, 800);

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  // Handle image loading
  useEffect(() => {
    const images = containerRef.current?.querySelectorAll('img');
    if (!images || images.length === 0) {
      setIsLoading(false);
      return;
    }

    let loadedImages = 0;
    const totalImages = images.length;

    const handleImageLoad = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        setIsLoading(false);
        setTimeout(() => setIsVisible(true), 100);
      }
    };

    const handleImageError = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        setIsLoading(false);
        setTimeout(() => setIsVisible(true), 100);
      }
    };

    images.forEach(img => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad);
        img.addEventListener('error', handleImageError);
      }
    });

    return () => {
      images.forEach(img => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageError);
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`${styles.pageTransition} ${className}`}
    >
      {isLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingSpinner}>
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>Loading...</p>
          </div>
        </div>
      )}
      
      <div 
        className={`${styles.content} ${
          isVisible ? styles.visible : styles.hidden
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default PageTransition; 