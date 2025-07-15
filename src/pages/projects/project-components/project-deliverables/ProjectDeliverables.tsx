import ProjectDivider from '../project-divider/ProjectDivider';
import styles from './ProjectDeliverables.module.css';
import clsx from 'clsx';

interface Deliverable {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  isVideo?: boolean;
  videoType?: 'iframe' | 'mp4' | 'webm';
}

interface ProjectDeliverablesProps {
  deliverables: Deliverable[];
  sectionTitle?: string;
  className?: string;
}

const ProjectDeliverables = ({
  deliverables,
  sectionTitle = 'Project Deliverables',
  className,
}: ProjectDeliverablesProps) => {
  const renderVideo = (deliverable: Deliverable) => {
    const { imageSrc, imageAlt, videoType = 'iframe' } = deliverable;
    
    if (videoType === 'iframe') {
      // For embedded videos (Gfycat, Vimeo, etc.)
      return (
        <iframe
          className={styles.deliverableVideo}
          src={imageSrc}
          title={imageAlt}
          allow="fullscreen"
          loading="lazy"
        />
      );
    }
    
    // For self-hosted videos
    return (
      <video
        className={styles.deliverableVideo}
        controls
        preload="metadata"
        poster={`${imageSrc}?poster=true`}
      >
        <source src={imageSrc} type={`video/${videoType}`} />
        <track kind="captions" src={`${imageSrc}.vtt`} label="English" />
        Your browser does not support the video tag.
      </video>
    );
  };

  return (
    <>
      {sectionTitle && <ProjectDivider sectionTitle={sectionTitle} />}
      <section className={clsx(styles.deliverablesSection, className)}>
        <div className={styles.deliverablesGrid}>
          {deliverables.map((deliverable) => (
            <div key={deliverable.id} className={styles.deliverable}>
              <p className={styles.deliverableLabel}>{deliverable.title}</p>
              {deliverable.isVideo ? (
                <div className={styles.videoContainer}>
                  {renderVideo(deliverable)}
                </div>
              ) : (
                <img
                  className={styles.deliverableImage}
                  src={deliverable.imageSrc}
                  alt={deliverable.imageAlt}
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectDeliverables;
