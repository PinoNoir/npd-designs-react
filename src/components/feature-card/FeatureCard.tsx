import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  overline: string;
  client: string;
  projectName: string;
}

const FeatureCard = ({ overline, client, projectName }: FeatureCardProps) => {
  return (
    <div className={styles.featureCard}>
      <span className={styles.overline}>{overline}</span>
      <span className={styles.client}>{client}</span>
      <span className={styles.projectName}>{projectName}</span>
    </div>
  );
};

export default FeatureCard; 