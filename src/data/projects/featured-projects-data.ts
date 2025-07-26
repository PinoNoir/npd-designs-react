export interface FeaturedProject {
  overline: string;
  client: string;
  projectName: string;
  problem: string;
  outcome: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
}

export const featuredProjects: Record<string, FeaturedProject> = {
  cadenceDesignSystem: {
    overline: 'Featured Work',
    client: 'Stretto',
    projectName: 'Cadence Design System',
    problem: 'Before the Cadence Design System (CDS), Stretto\'s engineering teams faced significant friction when building UI. Each product team maintained its own implementation of common components — buttons, modals, inputs — often with inconsistent styling, behaviors, and accessibility. This not only created visual fragmentation across our applications, but also led to redundant work, increased QA burden, and difficulty onboarding new engineers.',
    outcome: 'By establishing a shared set of design tokens, reusable typed components, and centralized documentation through Storybook, CDS enabled teams to move faster while delivering a more polished and unified user experience. Over time, it matured into an essential part of our product development workflow — reducing rework, improving accessibility compliance, and giving designers and engineers a common language.',
    buttonText: 'View Case Study',
    buttonLink: '/cadence-design-system',
    imageSrc: '/assets/img/work_images/stretto/stretto_cds_stage.jpg',
    imageAlt: 'Cadence Design System showcase with component library and documentation'
  },
  chicosShopThisLook: {
    overline: 'Featured Work',
    client: "Chico's FAS Inc.",
    projectName: 'Shop this Look Widget - UX Enhancements',
    problem: 'Customers found the existing Shop this Look experience difficult to use, especially on mobile devices. During testing, participants mentioned their frustration with the overall navigation and flow—page views and sales were also down, which validated these statements.',
    outcome: 'I delivered my prototypes to the development team after a few quick design iterations. Before the changes were released, testing revealed that my enhancements improved the mobile experience and allowed customers to visualize entire outfits for their wardrobe much better than before, thus improving conversions and creating more opportunities to sell products.',
    buttonText: 'View Case Study',
    buttonLink: '/chicos-shop-this-look',
    imageSrc: '/assets/img/work_images/featured-projects/chicos_featured_mock_up.png',
    imageAlt: 'Mobile phone mockup of Chicos FAS UX projects'
  },
  strettoEballot: {
    overline: 'Featured Work',
    client: 'Stretto',
    projectName: 'E-Balloting System Redesign',
    problem: 'The existing E-Ballot Setup Enhancement project required redesigning two intricate software systems with complex workflows that were difficult for users to navigate and complete successfully.',
    outcome: 'Through thorough research and user-centered design, I reimagined each workflow to maximize efficiency, empowering both internal teams and external users with a significantly improved experience that streamlined complex tasks and reduced user errors.',
    buttonText: 'View Case Study',
    buttonLink: '/stretto-eballot',
    imageSrc: '/assets/img/work_images/stretto/stretto_ebw_stage.jpg',
    imageAlt: 'Stretto E-Ballot system interface showcasing the electronic balloting platform'
  }
};

// Default featured project
export const defaultFeaturedProject = featuredProjects.cadenceDesignSystem; 