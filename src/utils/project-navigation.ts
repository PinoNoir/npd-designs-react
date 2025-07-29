import { projects } from '@/data/projects/all-projects-data';

export interface ProjectNavigation {
  current: {
    title: string;
    route: string;
  };
  next?: {
    title: string;
    route: string;
  };
  previous?: {
    title: string;
    route: string;
  };
}

export const getProjectNavigation = (currentRoute: string): ProjectNavigation => {
  const currentIndex = projects.findIndex(project => project.route === currentRoute);
  
  if (currentIndex === -1) {
    return {
      current: { title: 'Project', route: currentRoute }
    };
  }

  const currentProject = projects[currentIndex];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined;
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : undefined;

  return {
    current: {
      title: currentProject.title,
      route: currentProject.route
    },
    next: nextProject ? {
      title: nextProject.title,
      route: nextProject.route
    } : undefined,
    previous: previousProject ? {
      title: previousProject.title,
      route: previousProject.route
    } : undefined
  };
}; 