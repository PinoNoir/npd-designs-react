import styles from './Divider.module.css';

interface DividerProps {
  className?: string;
  margin?: 'small' | 'medium' | 'large';
}

const Divider = ({ className, margin = 'medium' }: DividerProps) => {
  return (
    <hr
      className={`${styles.divider} ${styles[margin]} ${className || ''}`}
    />
  );
};

export default Divider; 