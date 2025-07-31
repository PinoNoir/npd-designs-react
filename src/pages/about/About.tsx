import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { GraduationCap, Lightbulb, Code } from 'lucide-react';
import { Footer, Hero } from '../../components';
import styles from './About.module.css';

const About = () => {
  return (
    <>
      <Hero
        title='About'
        subtitle='UX engineer specializing in design systems & frontend development'
        description='I translate design prototypes into production-ready code, building scalable UI systems that maintain visual consistency and performance. My hybrid background lets me think like both a designer and developer—helping teams ship polished, high-quality interfaces faster.'
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
                  I've immersed myself in design and web development for over a
                  decade—constantly learning new techniques and dedicating
                  myself to academia. In 2018 I graduated with a BA in Digital
                  Media from UCF to refresh my knowledge and stay current with
                  emerging tech and best practices.
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
                  reinvent the wheel. I can follow industry guidelines and
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
                <p style={{ marginBottom: '1rem' }}>
                  I began my frontend development journey in 2009, starting with
                  HTML and CSS, then moving into more advanced languages like
                  JavaScript, jQuery, and PHP. As CSS frameworks like Bootstrap
                  and Material Design emerged, I recognized the growing need for
                  consistency, scalability, and shared UI patterns in modern
                  software development.
                </p>
                
                <p>
                  Fast-forward to today, and the importance of reusable, themed
                  components has never been greater. By combining my design background
                  with technical skills in React, TypeScript, and CSS,
                  I help bridge the gap between design and implementation—ensuring
                  the final product matches the original vision while meeting
                  technical requirements and best practices.
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
