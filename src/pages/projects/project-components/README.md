# Reusable Project Components

This directory contains reusable components for creating consistent project pages across your portfolio.

## Components

### ProjectDeliverables

A flexible component for displaying project deliverables with images and descriptions.

#### Props

```typescript
interface ProjectDeliverablesProps {
  deliverables: Deliverable[];        // Array of deliverable items
  sectionTitle?: string;              // Optional section title
  className?: string;                 // Optional CSS class
}

interface Deliverable {
  id: string;                         // Unique identifier
  title: string;                      // Deliverable title
  imageSrc: string;                   // Image source path
  imageAlt: string;                   // Image alt text
}
```

#### Usage Examples

**Basic Usage:**
```tsx
import { ProjectDeliverables } from '@/pages/projects/project-components';
import { swellLifeDeliverables } from '@/data/projects/swell-life-data';

<ProjectDeliverables 
  deliverables={swellLifeDeliverables}
  sectionTitle="Project Deliverables"
/>
```

**Custom Deliverables:**
```tsx
<ProjectDeliverables 
  deliverables={[
    {
      id: 'custom-1',
      title: 'Brand Identity Design',
      imageSrc: '/assets/img/work_images/brand_design.jpg',
      imageAlt: 'Brand identity design showcase',
    },
    {
      id: 'custom-2',
      title: 'Website Design',
      imageSrc: '/assets/img/work_images/website_design.jpg',
      imageAlt: 'Website design showcase',
    },
  ]}
  sectionTitle="Custom Project Deliverables"
/>
```

**Without Section Title:**
```tsx
<ProjectDeliverables 
  deliverables={myDeliverables}
  // sectionTitle is optional - will not render header if omitted
/>
```

## Data Management

### Project Data Files

Store your project data in `src/data/projects/` directory:

```typescript
// src/data/projects/my-project-data.ts
export const myProjectDeliverables: Deliverable[] = [
  {
    id: 'project-1',
    title: 'First Deliverable',
    imageSrc: '/assets/img/work_images/deliverable_1.jpg',
    imageAlt: 'First deliverable description',
  },
  // ... more deliverables
];
```

### Benefits

1. **Reusable**: Use the same component across all project pages
2. **Type Safe**: Full TypeScript support with proper interfaces
3. **Flexible**: Customizable titles, styling, and content
4. **Maintainable**: Centralized data management
5. **Consistent**: Ensures uniform styling across projects

### Best Practices

1. **Use descriptive IDs**: Make IDs unique and meaningful
2. **Optimize images**: Use appropriate image formats and sizes
3. **Write good alt text**: Make images accessible
4. **Group related data**: Keep project data organized in separate files
5. **Use path aliases**: Leverage `@/` aliases for cleaner imports

## Adding New Projects

1. Create a data file in `src/data/projects/`
2. Define your deliverables array
3. Import and use the `ProjectDeliverables` component
4. Pass your data as props

Example:
```tsx
// In your project page component
import { ProjectDeliverables } from '@/pages/projects/project-components';
import { myProjectDeliverables } from '@/data/projects/my-project-data';

const MyProjectPage = () => {
  return (
    <div>
      {/* Other project sections */}
      <ProjectDeliverables 
        deliverables={myProjectDeliverables}
        sectionTitle="My Project Deliverables"
      />
    </div>
  );
};
``` 