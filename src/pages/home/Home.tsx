import {
  FeaturedSection,
  Footer,
  Hero,
  ExpertiseCard,
  SEO,
} from '@/components';
import styles from './Home.module.css';
import {
  BoxesIcon,
  AppWindow,
  SwatchBook,
  FileCode,
  Figma,
  Layout,
  Rotate3D,
} from 'lucide-react';
import { homeData } from '@/data/projects';

const Home = () => {
  return (
    <>
      <SEO
        title='UI/UX Designer & Developer Portfolio'
        description='Nick Pino is a UX engineer specializing in design systems & frontend development. Crafting digital experiences that deliver results through motion design, product design, and modern web development.'
        keywords='UI/UX designer, frontend developer, design systems, motion design, React developer, TypeScript, Figma, Adobe Creative Suite, user experience design, user interface design, web development, portfolio'
        url='/'
        structuredData={homeData}
      />

      <Hero
        title='Unifying Design & Code to Build Better Products, Faster.'
        subtitle='UX Engineer specializing in scalable design systems & frontend architecture.'
      />

      <section className={styles.introSection}>
        <div className={styles.container}>
          <h1>Areas of Expertise</h1>
          <div className={styles.expertiseGrid}>
            <ExpertiseCard
              icon={AppWindow}
              title='Product Design'
              description='Designing intuitive products through iterative UX cycles, rapid prototyping, and user-centered frameworks to align business goals with user needs.'
            />
            <ExpertiseCard
              icon={BoxesIcon}
              title='Frontend Architecture'
              description='Architecting modern, component-based UIs with React and TypeScript—focusing on reusability, scalability, and performance.'
            />

            <ExpertiseCard
              icon={SwatchBook}
              title='Design Systems'
              description='Building single-source-of-truth systems using tokens, documentation, and reusable components to ensure cross-team consistency and velocity.'
            />
          </div>
        </div>
      </section>

      <section className={styles.toolsSection}>
        <div className={styles.container}>
          <h1>Software & Technologies</h1>
          <div className={styles.toolsGrid}>
            <ExpertiseCard
              icon={Layout}
              title='Design Layout'
              description='Proficient in Adobe Creative Suite & Figma creating high-quality visual design and layouts.'
            />
            <ExpertiseCard
              icon={Rotate3D}
              title='Animation'
              description='Skilled in creating engaging animations using Lottie, Framer Motion, and CSS animations to bring interfaces to life.'
            />
            <ExpertiseCard
              icon={Figma}
              title='Prototyping'
              description='Expert in using Figma to create interactive prototypes, user interfaces, and component libraries.'
            />
            <ExpertiseCard
              icon={FileCode}
              title='Frontend Dev'
              description='Strong foundation in modern web technologies like React and Node.js, with experience in release management & Git.'
            />
          </div>
        </div>
      </section>
      <FeaturedSection />
      <Footer />
    </>
  );
};

export default Home;
