import { FeaturedSection, Footer, Hero } from '@/components';
import SEO from '@/components/SEO/SEO';
import styles from './Home.module.css';
import {
  Code,
  AppWindow,
  LoaderPinwheel,
  SwatchBook,
  FileCode,
  Figma,
  Layout,
  Rotate3D,
} from 'lucide-react';
import ExpertiseCard from '@/components/expertise-card/ExpertiseCard';
import { homeData } from '@/data/projects';

const Home = () => {
  return (
    <>
      <SEO
        title="UI/UX Designer & Developer Portfolio"
        description="Nick Pino is a UX engineer specializing in design systems & frontend development. Crafting digital experiences that deliver results through motion design, product design, and modern web development."
        keywords="UI/UX designer, frontend developer, design systems, motion design, React developer, TypeScript, Figma, Adobe Creative Suite, user experience design, user interface design, web development, portfolio"
        url="/"
        structuredData={homeData}
      />

      <Hero
        title='Crafting Digital Experiences that Deliver Results'
        subtitle='UX engineer specializing in design systems & frontend development'
      />

      <section className={styles.introSection}>
        <div className={styles.container}>
          <h1>Areas of Expertise</h1>
          <div className={styles.expertiseGrid}>
            <ExpertiseCard
              icon={LoaderPinwheel}
              title='Motion Design & Animation'
              description='Integrating motion design and animation techniques to create microinteractions and interactive experiences that breathe life into static screens.'
            />
            <ExpertiseCard
              icon={Code}
              title='Frontend Development'
              description='Building modern, responsive web applications using React, TypeScript, and CSS. Focus on performance, accessibility, and creating seamless user experiences through clean, maintainable code.'
            />
            <ExpertiseCard
              icon={AppWindow}
              title='Product Design'
              description='Experience applying UX frameworks, working in iterative cycles, and quickly testing ideas to design products that match user expectations and reach the market faster.'
            />
            <ExpertiseCard
              icon={SwatchBook}
              title='Design Systems'
              description='The ability to harness the power of design tokens, CSS, component libraries, and new technologies to bridge the gap between design and frontend development.'
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
              title='Design/Layout'
              description='Proficient in Adobe Creative Suite for creating high-quality visual design and layouts.'
            />
            <ExpertiseCard
              icon={Rotate3D}
              title='Animation'
              description='Skilled in creating engaging animations using Lottie, Framer Motion, and CSS animations to bring interfaces to life.'
            />
            <ExpertiseCard
              icon={Figma}
              title='Prototyping'
              description='Expert in using Figma to create interactive prototypes and user interfaces.'
            />
            <ExpertiseCard
              icon={FileCode}
              title='Frontend Dev'
              description='Strong foundation in HTML5, CSS, React, TypeScript, and WCAG 2.'
            />
          </div>
        </div>
      </section>
      <FeaturedSection />
      <Footer />
    </>
  );
}

export default Home;