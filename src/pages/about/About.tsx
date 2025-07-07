import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { GraduationCap, Lightbulb, Code } from 'lucide-react';
import { Footer, Hero } from '../../components';
import styles from './About.module.css';

const About = () => {
  return (
    <>
      <Hero
        title='About Me'
        subtitle='UX Designer & Frontend Developer'
        description="I'm passionate about creating intuitive and engaging digital experiences that solve real problems. With expertise in UX design, design systems, and frontend development, I bring a holistic approach to every project."
      />
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <AspectRatio ratio={1}>
              <img
                className={styles.image}
                src='/assets/img/profile1_1.jpg'
                alt='Nick Pino - UX Designer & Frontend Developer'
              />
            </AspectRatio>
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <div className={styles.aboutHeader}>
                  <GraduationCap size={24} />
                  <h2>Education & Background</h2>
                </div>
                <p>
                  I've immersed myself in the field of design for over a
                  decade—constantly learning new techniques and dedicating
                  myself to academia. In 2018 I graduated with a BA in Digital
                  Media from UCF to refresh my knowledge and stay current with
                  emerging technology and best practices. My current focus is UX
                  design—building digital products that improve workflows, solve
                  problems, and deliver better experiences.
                </p>
              </div>
              <div className={styles.aboutText}>
                <div className={styles.aboutHeader}>
                  <Lightbulb size={24} />
                  <h2>Thought Process</h2>
                </div>
                <p>
                  I've worked as a designer long enough to know silver bullets
                  don't exist. Every project is unique and always riddled with
                  ambiguity and constraints. Fortunately, there's no need to
                  reinvent the wheel, I can follow industry guidelines and
                  proven UX frameworks—beginning with a discovery phase to
                  understand the problem; followed by prototyping, validating my
                  ideas with users, and collaborating with stakeholders
                  throughout the process. Taking these simple steps has never
                  failed me and always leads to innovative solutions and
                  successful outcomes.
                </p>
              </div>
              <div className={styles.aboutText}>
                <div className={styles.aboutHeader}>
                  <Code size={24} />
                  <h2>Development Approach</h2>
                </div>
                <p>
                  My journey in frontend development complements my design
                  background perfectly. I believe in writing clean, maintainable
                  code that not only looks great but performs exceptionally
                  well. I focus on creating accessible, responsive interfaces
                  that work seamlessly across all devices. By combining my
                  design expertise with technical skills in React, TypeScript,
                  and modern CSS, I can bridge the gap between design and
                  implementation, ensuring that the final product matches the
                  vision while meeting technical requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
