import { LucideIcon } from 'lucide-react';
import styles from './ExpertiseCard.module.css';

interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ExpertiseCard = ({
  icon: Icon,
  title,
  description,
}: ExpertiseCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.iconWrapper}>
          <Icon size={24} />
        </div>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ExpertiseCard;
