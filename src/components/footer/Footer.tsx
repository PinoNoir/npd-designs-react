import React from 'react';
import { Link } from '@tanstack/react-router';
import styles from './Footer.module.css';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Behance',
      href: 'https://www.behance.net/nick-pino-designs/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px" className={styles.socialIcon}><path d="M16.6,10.8a1.73,1.73,0,0,0-1.7,1.5h3.2A1.36,1.36,0,0,0,16.6,10.8ZM9.3,12.4H6.4V15H9.2c.4,0,1.2-.1,1.2-1.3C10.3,12.3,9.3,12.4,9.3,12.4ZM0,2V22a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V2a2,2,0,0,0-2-2H2A2,2,0,0,0,0,2ZM14.5,7.4h4.1V8.6H14.5Zm-2.1,6.4c0,3-3.1,2.9-3.1,2.9H4.2V6.9H9.4a2.52,2.52,0,0,1,2.8,2.6,1.71,1.71,0,0,1-1.5,1.9C12.5,11.4,12.4,13.8,12.4,13.8Zm7.6-.1H14.9a1.59,1.59,0,0,0,1.7,1.7c1.6,0,1.6-1,1.6-1h1.7c0,2.8-3.4,2.6-3.4,2.6a3.56,3.56,0,0,1-3.8-3.8s0-3.8,3.8-3.8C20.6,9.4,20,13.7,20,13.7Zm-10-4c0-1-.7-1-.7-1H6.4v2.2H9.1C9.6,10.8,10,10.7,10,9.7Z"/></svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/PinoNoir',
      icon: <GitHubLogoIcon className={styles.socialIcon} />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nick-pino-designs/',
      icon: <LinkedInLogoIcon className={styles.socialIcon} />,
    },
  ];

  const footerLinks = [
    { name: 'Home', to: '/' },
    { name: 'Projects', to: '/projects' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
    { name: 'Resume', to: '/resume' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          {footerLinks.map((link) => (
            <Link key={link.name} to={link.to} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className={styles.socialContainer}>
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={styles.socialLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className={styles.srOnly}>{item.name}</span>
              {item.icon}
            </a>
          ))}
        </div>

        <div className={styles.copyrightContainer}>
          <p className={styles.copyright}>
            &copy; {currentYear} NPD Designs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
