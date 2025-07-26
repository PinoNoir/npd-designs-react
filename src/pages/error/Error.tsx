import React from 'react';
import { Footer, PageTransition, Button } from '@/components';
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react';
import styles from './Error.module.css';

const Error: React.FC = () => {
  return (
    <PageTransition>
      <div className={styles.errorPage}>
        <div className={styles.container}>
          <div className={styles.errorContent}>
            <div className={styles.errorIcon}>
              <AlertTriangle size={64} />
            </div>
            
            <h1 className={styles.errorTitle}>Oops! Something went wrong</h1>
            
            <p className={styles.errorMessage}>
              We're sorry, but something unexpected happened. The page you're looking for might have been moved, deleted, or there might be a temporary issue.
            </p>
            
            <div className={styles.errorCode}>
              Error 404
            </div>
            
            <div className={styles.actionButtons}>
              <Button 
                href="/" 
                className={styles.homeButton}
              >
                <Home size={18} />
                Go Home
              </Button>
              
              <Button 
                onClick={() => window.history.back()} 
                variant="secondary"
                className={styles.backButton}
              >
                <ArrowLeft size={18} />
                Go Back
              </Button>
            </div>
            
            <div className={styles.helpText}>
              <p>If this problem persists, please contact me at:</p>
              <a href="mailto:nickpino.designs@gmail.com" className={styles.contactLink}>
                nickpino.designs@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
};

export default Error;
