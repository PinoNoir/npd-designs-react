import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { useTheme, Toggle, SVGIcon, Button } from '../components';
import styles from './styles/Navbar.module.css';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const themeContext = useTheme();
  if (!themeContext) {
    return null;
  }
  const { theme, toggleTheme } = themeContext;

  return (
    <>
      <nav className={styles.navbar}>
        <SVGIcon
          className={styles.navbarLogo}
          viewBox='0 0 48 28.8'
          path='M42.9,4.65v16a.29.29,0,0,1-.3.3H41.26c-.37,0-.46-.07-.46-.28V20.6H31a.29.29,0,0,1-.3-.3V6.8a.29.29,0,0,1,.3-.3h6.78a.49.49,0,0,1,.45.29l.68,1.49a.3.3,0,0,1-.27.42H32.7v9.5a.29.29,0,0,0,.3.3h7.4a.29.29,0,0,0,.3-.3V2.86a.49.49,0,0,0-.22-.41L37.4.34A2,2,0,0,0,36.29,0H2A2,2,0,0,0,0,2V16.15a2,2,0,0,0,.87,1.64L16.6,28.46a2,2,0,0,0,1.11.34H45.88a2.1,2.1,0,0,0,2.12-2V8.31a1.41,1.41,0,0,0-.58-1.25L43.36,4.4A.3.3,0,0,0,42.9,4.65ZM16.83,22.29l-1.41-.94a.5.5,0,0,1-.22-.42V8.9a.29.29,0,0,0-.3-.3H7.5a.29.29,0,0,0-.3.3v6.24a.3.3,0,0,1-.47.25l-1.41-.94A.5.5,0,0,1,5.1,14V6.3A.29.29,0,0,1,5.4,6H6.88c.24,0,.32.1.32.32V6.6H17a.29.29,0,0,1,.3.3V22A.3.3,0,0,1,16.83,22.29ZM29.5,20.4H22.92a.5.5,0,0,1-.45-.3l-.67-1.47a.3.3,0,0,1,.27-.43H27.7a.31.31,0,0,0,.3-.3v-9a.29.29,0,0,0-.3-.3H20.3a.29.29,0,0,0-.3.3V23.84a.3.3,0,0,1-.46.25l-1.42-.94a.5.5,0,0,1-.22-.42V6.3a.29.29,0,0,1,.3-.3h1.39c.41,0,.41.15.41.3v.1h9.8a.29.29,0,0,1,.3.3L30,19.9A.5.5,0,0,1,29.5,20.4Z'
        />
        <div className={styles.navbarMenu}>
          <ul>
            <li>
              <Link to='/'>Profile</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.wrapper}>
          <Button variant='ghost' href='/resume'>
            Resumé
          </Button>
        </div>
        <div className={styles.themeToggle}>
          <Toggle
            value={theme === 'dark' ? 'right' : 'left'}
            onValueChange={() => {
              toggleTheme();
            }}
          />
        </div>
      </nav>
      <Outlet />
    </>
  );
}
