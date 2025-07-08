import { useEffect } from 'react';

export const useScrollToTop = (smooth: boolean = true) => {
  useEffect(() => {
    // Use requestAnimationFrame to ensure DOM is ready
    const scrollToTop = () => {
      if (smooth) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      }
    };

    // Small delay to ensure route transition is complete
    const timer = setTimeout(scrollToTop, 50);
    
    return () => clearTimeout(timer);
  }, [smooth]);
}; 