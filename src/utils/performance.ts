// Performance monitoring utilities

// Extend Navigator interface for device memory and connection
interface ExtendedNavigator extends Navigator {
  deviceMemory?: number;
  connection?: {
    effectiveType?: string;
  };
}

export const performanceUtils = {
  // Measure time taken for a function to execute
  measureTime: (name: string, fn: () => void) => {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start}ms`);
    return end - start;
  },

  // Check if device is mobile
  isMobile: () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  },

  // Check if device has low memory
  hasLowMemory: () => {
    const extendedNavigator = navigator as ExtendedNavigator;
    if ('deviceMemory' in navigator) {
      return (extendedNavigator.deviceMemory || 0) < 4; // Less than 4GB
    }
    return false;
  },

  // Check connection speed
  getConnectionSpeed: () => {
    const extendedNavigator = navigator as ExtendedNavigator;
    if ('connection' in navigator) {
      const connection = extendedNavigator.connection;
      return connection?.effectiveType || 'unknown';
    }
    return 'unknown';
  },

  // Log performance info
  logPerformanceInfo: () => {
    const isMobile = performanceUtils.isMobile();
    const hasLowMemory = performanceUtils.hasLowMemory();
    const connectionSpeed = performanceUtils.getConnectionSpeed();
    
    console.log('Performance Info:', {
      isMobile,
      hasLowMemory,
      connectionSpeed,
      userAgent: navigator.userAgent,
    });
  },

  // Debounce function for performance
  debounce: <T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle function for performance
  throttle: <T extends (...args: unknown[]) => unknown>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },
};

// Auto-log performance info in development
if (import.meta.env.DEV) {
  performanceUtils.logPerformanceInfo();
} 