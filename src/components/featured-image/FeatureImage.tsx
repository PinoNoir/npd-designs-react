import styles from './FeatureImage.module.css';

interface FeaturedImageProps {
  src: string;
  alt: string;
}

const FeaturedImage = ({ src, alt }: FeaturedImageProps) => {
  return (
    <div className={styles.imageWrapper}>
      <img className={styles.featuredImage} src={src} alt={alt} />
    </div>
  );
};

export default FeaturedImage; 