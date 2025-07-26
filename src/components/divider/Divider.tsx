import clsx from 'clsx';
import styles from './Divider.module.css';

interface DividerProps {
  className?: string;
  margin?: 'none' | 'small' | 'medium' | 'large';
  marginTop?: 'small' | 'medium' | 'large';
  marginBottom?: 'small' | 'medium' | 'large';
}

const Divider = ({ 
  className, 
  margin = 'medium',
  marginTop,
  marginBottom 
}: DividerProps) => {
  const marginClasses = [
    styles.divider,
    // Only apply general margin if no individual margins are specified
    (!marginTop && !marginBottom) ? styles[margin] : null,
    marginTop && styles[`marginTop${marginTop.charAt(0).toUpperCase() + marginTop.slice(1)}`],
    marginBottom && styles[`marginBottom${marginBottom.charAt(0).toUpperCase() + marginBottom.slice(1)}`],
    className
  ].filter(Boolean);

  return (
    <hr className={clsx(marginClasses)} />
  );
};

export default Divider; 