import { Deliverable, ProjectStep } from './types';

export const cadenceDesignSystemDeliverables: Deliverable[] = [
  {
    id: 'cds-1',
    title: 'Component Library with Storybook',
    description:
      'Designed and developed a robust library of 60+ atomic and composite components in a custom Storybook environment, focusing on scalability, accessibility (WCAG), and developer experience. Used controls, MDX, and custom theming to ensure components were easy to test, explore, and consume.',
    imageSrc: '/assets/img/work_images/stretto/stretto_cds_storybook.png',
    imageAlt: 'Cadence Design System component library showcase',
  },
  {
    id: 'cds-2',
    title: 'Component Documentation (MDX)',
    description:
      'Authored living documentation using MDX in Storybook, providing usage guidelines, props tables, accessibility considerations, and real-world examples. This documentation served as the single source of truth for design-engineering alignment.',
    imageSrc: '/assets/img/work_images/stretto/stretto_cds_docs.png',
    imageAlt: 'Cadence Design System Storybook documentation',
  },
  {
    id: 'cds-3',
    title: 'Cross-App Design Tokens',
    description:
      'Built a design token architecture using Style Dictionary to support brand consistency across 5+ products. Tokens covered color, spacing, typography, elevation, and supported dark/light themes through a multi-variant system.',
    imageSrc: '/assets/img/work_images/stretto/stretto_cds_tokens.png',
    imageAlt: 'Cadence Design System design tokens and variables',
  },
  {
    id: 'cds-4',
    title: 'Typed React Component Library',
    description:
      'Engineered a reusable React/TypeScript component library with strong typing, internal state control patterns, and theme-aware set of design tokens for styling with CSS modules. Supported custom props and overrides for downstream flexibility.',
    imageSrc: '/assets/img/work_images/stretto/stretto_cds_component.png',
    imageAlt: 'Cadence Design System React component implementation',
  },
];

export const cadenceDesignSystemSteps: ProjectStep[] = [
  {
    id: 'cds-research',
    text: 'Audited UI patterns across multiple legacy applications to identify visual and functional inconsistencies.',
  },
  {
    id: 'cds-design-1',
    text: 'Created a design token system for consistent application of color, spacing, typography, and elevation across brands and themes.',
  },
  {
    id: 'cds-design-2',
    text: 'Developed a React component architecture focused on reusability, accessibility, and customizability, using TypeScript for safety.',
  },
  {
    id: 'cds-documentation',
    text: 'Integrated detailed Storybook documentation using MDX to guide engineers and designers on component usage and behavior.',
  },
  {
    id: 'cds-implementation',
    text: 'Established contribution guidelines, linting rules, and versioning strategies to govern component updates and adoption across teams.',
  },
];

export const cadenceDesignSystemOverview = `Before Cadence Design System (CDS), Stretto’s engineering teams faced significant friction when building UI. Each product team maintained its own implementation of common components — buttons, modals, inputs — often with inconsistent styling, behaviors, and accessibility. This not only created visual fragmentation across our applications, but also led to redundant work, increased QA burden, and difficulty onboarding new engineers.

There was no single source of truth between design and development. Designers would hand off Figma files that developers interpreted differently across codebases, resulting in a patchwork UI and a poor user experience.

The design system initiative was born out of this need for alignment, efficiency, and consistency.

By establishing a shared set of design tokens, reusable typed components, and centralized documentation through Storybook, CDS enabled teams to move faster while delivering a more polished and unified user experience. Over time, it matured into an essential part of our product development workflow — reducing rework, improving accessibility compliance, and giving designers and engineers a common language.`