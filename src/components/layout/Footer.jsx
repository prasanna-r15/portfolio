import { navLinks } from '@/data';
import styles from './Footer.module.scss';

export default function Footer() {
  const year = new Date().getFullYear();
  const handleNavClick = (event, href) => {
    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} />
      <div className={styles.container}>
        <div className={styles.bigName}>Prasanna <span className={styles.bigNameAccent}>R</span></div>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <p className={styles.brandDesc}>
              Software Engineer building secure banking, payment, enterprise and AI-integrated applications.
            </p>
            <div className={styles.brandTags}>
              {['Banking', 'Payment Systems', 'EdTech'].map((tag) => <span key={tag} className={styles.brandTag}>{tag}</span>)}
            </div>
          </div>
          <div className={styles.navSection}>
            <p className={styles.navTitle}>Navigation</p>
            <nav className={styles.navLinks} aria-label="Footer navigation">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className={styles.navLink} onClick={(event) => handleNavClick(event, link.href)}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className={styles.techSection}>
            <p className={styles.navTitle}>Core Stack</p>
            <div className={styles.techList}>
              {['Java', 'Spring Boot', 'React.js', 'ISO8583', 'MySQL', 'OpenAI APIs'].map((tech) => (
                <span key={tech} className={styles.techItem}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>© {year} Prasanna R. Engineered with precision.</p>
          <span className={styles.builtWith}>Built with React, Vite and purposeful motion.</span>
        </div>
      </div>
    </footer>
  );
}
