import React from 'react';
import styles from './ComingSoon.module.css';
import clsx from 'clsx';

interface ComingSoonProps {
  text?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({
  text = 'Coming Soon',
  size = 'medium',
  className = '',
}) => {
  return (
    <div className={clsx(styles.comingSoon, styles[size], className)}>
      {text}
    </div>
  );
};

export default ComingSoon; 