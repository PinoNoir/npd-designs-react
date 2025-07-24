import React from 'react';
import { Footer, PageTransition } from '@/components';
import { DownloadCloud } from 'lucide-react';
import styles from './Resume.module.css';

const Resume: React.FC = () => {
  return (
    <PageTransition>
      <div className={styles.resumePage}>
        <div className={styles.container}>
          <div className={styles.downloadButtonContainer}>
            <a
              href='/assets/files/nick_pino_resume.pdf'
              download='Nick_Pino_Resume.pdf'
              className={styles.downloadButton}
            >
              <DownloadCloud size={18} /> Download PDF
            </a>
          </div>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <div className={styles.logoNameTitle}>
                <div>
                  <span className={styles.name}>NICHOLAS PINO</span>
                  <h2 className={styles.role}>
                    Product Designer | Frontend Developer
                  </h2>
                </div>
              </div>
            </div>
            <div className={styles.headerRight}>
              <div className={styles.contactInfo}>
                <span>nickpinodesigns.com</span>
                <span>nickpino.designs@gmail.com</span>
                <span>727-430-5188</span>
              </div>
            </div>
          </div>

          <div className={styles.resumeGrid}>
            {/* Left Column */}
            <div className={styles.leftCol}>
              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Overview</h3>
                <p className={styles.summary}>
                  Creative professional with over 15 years of expertise in
                  design and web development, seamlessly blending
                  aesthetics with functionality. My experience includes 6 years
                  in development, with a strong focus on React & Typescript, and
                  4 years in product design, where I&apos;ve built and scaled
                  enterprise-level design systems using atomic design principles.
                  I excel in building trust and fostering collaboration across
                  cross-functional teams to tackle complex challenges and deliver
                  user-centered solutions that align with business goals.
                </p>
              </section>

              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>EDUCATION</h3>
                <div className={styles.educationBlock}>
                  <span className={styles.eduSchool}>
                    University of Central Florida
                  </span>
                  <br />
                  <span className={styles.eduDegree}>
                    Digital Media (Web Design)
                  </span>
                  <br />
                  <span className={styles.eduDetails}>
                    2018 | BA | Cum Laude Honors
                  </span>
                </div>
                <div className={styles.educationBlock}>
                  <span className={styles.eduSchool}>
                    Eastern Florida State College
                  </span>
                  <br />
                  <span className={styles.eduDegree}>
                    Graphic Design & Interactive Media
                  </span>
                  <br />
                  <span className={styles.eduDetails}>
                    2013 | AS | Cum Laude Honors
                  </span>
                </div>
                <div className={styles.educationBlock}>
                  <span className={styles.eduSchool}>
                    Pinellas Technical College
                  </span>
                  <br />
                  <span className={styles.eduDegree}>Graphic Design</span>
                  <br />
                  <span className={styles.eduDetails}>
                    2005 | Certification
                  </span>
                </div>
              </section>

              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>SKILLS</h3>
                <div className={styles.skillsBlock}>
                  <div className={styles.skillCategory}>
                    <span className={styles.skillLabel}>
                      Design & Multimedia:
                    </span>{' '}
                    Photoshop, Illustrator, Premiere Pro, After Effects, Figma,
                    Framer
                  </div>
                  <div className={styles.skillCategory}>
                    <span className={styles.skillLabel}>Web Development:</span>{' '}
                    HTML, CSS, JavaScript, TypeScript, React, MDX, Storybook JS,
                    Node.js, WCAG 2.2
                  </div>
                  <div className={styles.skillCategory}>
                    <span className={styles.skillLabel}>Devops:</span> Version
                    control, release management, automated testing, CI/CD
                  </div>
                  <div className={styles.skillCategory}>
                    <span className={styles.skillLabel}>Communication:</span>{' '}
                    Proficient in conveying complex technical concepts to
                    stakeholders and negotiating design solutions.
                  </div>
                  <div className={styles.skillCategory}>
                    <span className={styles.skillLabel}>Collaboration:</span>{' '}
                    Experienced in agile development and working with
                    cross-functional teams, facilitating productive discussions,
                    and aligning project goals.
                  </div>
                  <div className={styles.skillCategory}>
                    <span className={styles.skillLabel}>Leadership:</span>{' '}
                    Mentoring junior designers, leading projects, and driving
                    initiatives from conception to implementation.
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className={styles.rightCol}>
              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>EXPERIENCE</h3>
                <div className={styles.experienceBlock}>
                  <div className={styles.expHeader}>
                    <span className={styles.expRole}>UX Engineer</span>
                    <span className={styles.expCompany}>Stretto</span>
                    <span className={styles.expDates}>Oct 2022 - Present</span>
                  </div>
                  <div className={styles.expDetails}>
                    Hired internally as Stretto’s first UX engineer, I’m the
                    lead maintainer of the Cadence Design System project used in
                    React applications. I work closely with development and
                    product teams to improve the quality of our products while
                    enhancing the developer experience. Other key
                    responsibilities are as followed:
                    <ul>
                      <li>
                        Build components in React/Typescript following atomic
                        design principles
                      </li>
                      <li>
                        Create custom and reusable React hooks to encapsulate
                        complex logic
                      </li>
                      <li>
                        Designed a custom Storybook environment for
                        components/docs
                      </li>
                      <li>
                        Write detailed documentation and implementation guides
                        in MDX
                      </li>
                      <li>
                        Built a custom styling framework in SCSS using design
                        tokens
                      </li>
                      <li>
                        Use Style Dictionary to build a custom design token
                        framework
                      </li>
                      <li>
                        Developed a release strategy for npm packages used in
                        production
                      </li>
                      <li>
                        Write unit tests in Jest/RTL for each component before
                        release
                      </li>
                      <li>
                        Collaborate with offshore development teams to improve
                        code quality
                      </li>
                      <li>
                        Conduct workshops for proper use of the design
                        system/components
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.experienceBlock}>
                  <div className={styles.expHeader}>
                    <span className={styles.expRole}>Product Designer</span>
                    <span className={styles.expCompany}>Stretto</span>
                    <span className={styles.expDates}>Dec 2020 - Sep 2022</span>
                  </div>
                  <div className={styles.expDetails}>
                    Lead UI designer on the Cadence Design System
                    project—building and maintaining component libraries in
                    Figma for all business verticals. I also worked on a
                    cross-functional team to oversee and contribute to the
                    redesign of several high-priority features for multiple
                    applications. Other key responsibilities are as followed:
                    <ul>
                      <li>
                        Lead the effort of migrating all design assets from
                        Axure to Figma.
                      </li>
                      <li>
                        Built component libraries in Figma using atomic design
                        principles.
                      </li>
                      <li>
                        Created a custom design-token system for colors,
                        spacing, etc.
                      </li>
                      <li>
                        Designed a cohesive visual language for Stretto’s
                        products.
                      </li>
                      <li>
                        Lead workshops and evangelized design systems across the
                        org
                      </li>
                      <li>
                        Mentored newly hired designers in following design
                        principles.
                      </li>
                      <li>
                        Conducted learning sessions for effective use of the
                        design system.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.experienceBlock}>
                  <div className={styles.expHeader}>
                    <span className={styles.expRole}>UX Designer</span>
                    <span className={styles.expCompany}>Chico&apos;s FAS Inc.</span>
                    <span className={styles.expDates}>
                      July 2019 - April 2020
                    </span>
                  </div>
                  <div className={styles.expDetails}>
                    Worked closely with project managers, senior designers, and
                    business stakeholders in multiple capacities to update and
                    maintain enterprise level e-commerce projects for all
                    Chico&apos;s FAS brands. My role consisted of the following
                    responsibilities:
                    <ul>
                      <li>
                        Built prototypes in InVision Studio and component
                        libraries in Sketch
                      </li>
                      <li>Documented design requirements in Jira</li>
                      <li>Created testing protocols and interviewed users</li>
                      <li>
                        Performed heuristic evaluations and proposed UX
                        improvements
                      </li>
                      <li>
                        Maintained the UI library as part of the design system
                        initiative.
                      </li>
                    </ul>
                  </div>
                </div>
                <p className={styles.references}>
                  References available upon request.
                </p>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Resume;
