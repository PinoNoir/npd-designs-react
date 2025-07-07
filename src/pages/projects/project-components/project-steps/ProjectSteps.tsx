import styles from './ProjectSteps.module.css';

interface ProjectStepsProps {
  steps: { id: string; text: string }[];
  title?: string;
}

const ProjectSteps = ({ steps, title = 'Execution' }: ProjectStepsProps) => (
  <div className={styles.projectSteps}>
    {title && <h3 className={styles.stepsTitle}>{title}</h3>}
    <ol className={styles.numberedList}>
      {steps.map((step) => (
        <li key={step.id} className={styles.listItem}>
          {step.text}
        </li>
      ))}
    </ol>
  </div>
);

export default ProjectSteps; 