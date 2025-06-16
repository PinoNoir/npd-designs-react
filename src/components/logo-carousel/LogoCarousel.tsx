import React from 'react';
import { motion } from 'motion/react';
import './LogoCarousel.module.css';

interface LogoCarouselProps {
  logos: string[];
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos }) => {
  return (
    <div className='logo-carousel'>
      <div className='logo-track'>
          {logos.map((logo, index) => (
            <motion.div
              className='logo-item'
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                ease: 'easeIn',
                type: 'spring',
                bounce: 0.25,
              }}
            >
              <img src={logo} alt={`logo-${index}`} />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
