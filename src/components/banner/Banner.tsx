import React from 'react';
import { motion } from 'motion/react';
import styles from './Banner.module.css';

interface BannerProps {
  children: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ children }) => {
  const renderChildren = () =>
    React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return null;

      if (child.type === 'h1') {
        return (
          <motion.h1
            className={styles.bannerText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
          >
            {child.props.children}
          </motion.h1>
        );
      }

      return (
        <motion.div
          className={styles.subtextContainer}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: 'easeOut' }}
        >
          {child}
        </motion.div>
      );
    });

  return <motion.section className={styles.bannerSection}>{renderChildren()}</motion.section>;
};

export default Banner;
