import React from 'react';
import { motion } from 'framer-motion';
import Button from '../button/Button';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, description }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={styles.container}>
      <motion.div 
        className={styles.textContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <motion.h1 className={styles.heading} variants={itemVariants}>
          {title}
        </motion.h1>
        {subtitle && (
          <motion.h2 className={styles.subtitle} variants={itemVariants}>
            {subtitle}
          </motion.h2>
        )}
        <motion.p className={styles.description} variants={itemVariants}>
          {description}
        </motion.p>
        <motion.div 
          className={styles.buttonContainer}
          variants={itemVariants}
        >
          <Button>Explore Work</Button>
          <Button variant='secondary'>Contact Me</Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
