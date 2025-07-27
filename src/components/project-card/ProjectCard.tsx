import styles from './ProjectCard.module.css';
import { ArrowRightIcon, Lock } from 'lucide-react'; 
import { Button } from '@/components';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  route?: string;
  password?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  category,
  image,
  tags,
  route,
  password,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={category} className={styles.image} />
        {password && (
          <div className={styles.passwordIndicator}>
            <Lock size={16} />
            <span>Protected</span>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <Button href={route || '/projects'}>
          View Project
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
