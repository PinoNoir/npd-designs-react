import React, { useState } from 'react';
import ProjectCard from '../project-card/ProjectCard';
import styles from './PortfolioGrid.module.css';
import clsx from 'clsx';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  route?: string;
}

interface PortfolioGridProps {
  projects: Project[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get unique categories from projects
  const categories = [
    'all',
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className={styles.container}>
      {/* Category Filter */}
      <div className={styles.categoryFilter}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={clsx(
              styles.categoryButton,
              selectedCategory === category && styles.categoryButtonActive,
              selectedCategory !== category && styles.categoryButtonInactive
            )}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className={styles.projectsGrid}>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.imageUrl}
            category={project.category}
            tags={project.tags}
            route={project.route}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className={styles.emptyState}>
          <h3 className={styles.emptyStateTitle}>No projects found</h3>
          <p className={styles.emptyStateText}>
            Try selecting a different category or check back later for new
            projects.
          </p>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
