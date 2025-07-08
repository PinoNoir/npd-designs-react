import React from 'react';
import { PageTransition, OptimizedImage } from '@/components';

const PageTransitionExample: React.FC = () => {
  return (
    <PageTransition>
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1>Page Transition Example</h1>
        <p>This page demonstrates smooth loading transitions and scroll-to-top functionality.</p>
        
        <h2>Optimized Images</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <OptimizedImage
            src="/assets/img/work_images/swell_life_showcase_2.jpg"
            alt="Swell Life showcase"
            className="example-image"
          />
          <OptimizedImage
            src="/assets/img/work_images/swell_life_showcase_3.jpg"
            alt="Swell Life showcase"
            className="example-image"
          />
          <OptimizedImage
            src="/assets/img/work_images/swell_life_showcase_4.jpg"
            alt="Swell Life showcase"
            className="example-image"
          />
        </div>
        
        <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'var(--gray-2)', borderRadius: '8px' }}>
          <h3>Features Demonstrated:</h3>
          <ul>
            <li>✅ Smooth page fade-in transition</li>
            <li>✅ Automatic scroll to top</li>
            <li>✅ Loading spinner while images load</li>
            <li>✅ Optimized image loading with placeholders</li>
            <li>✅ Error handling for failed image loads</li>
          </ul>
        </div>
      </div>
    </PageTransition>
  );
};

export default PageTransitionExample; 