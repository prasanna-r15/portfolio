import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { navLinks } from '@/data';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-35% 0px -55%', threshold: 0 }
    );
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        aria-label="Primary navigation"
      >
        <div className={styles.container}>
          <a href="#hero" className={styles.logo} onClick={(event) => handleNavClick(event, '#hero')}>
            <span className={styles.logoMark}>PR</span><span className={styles.logoDot} />
          </a>
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`${styles.link} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
                  onClick={(event) => handleNavClick(event, link.href)}
                >
                  <span className={styles.linkText}>{link.label}</span><span className={styles.linkUnderline} />
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.controls}>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              aria-pressed={theme === 'light'}
            >
              <span className={styles.themeIcon}>{theme === 'lightdark' ? 'dark' : 'light'}</span>
            </button>
            <a href="#contact" className={styles.cta} onClick={(event) => handleNavClick(event, '#contact')}>
              Let's Talk
            </a>
            <button
              className={`${styles.menuBtn} ${menuOpen ? styles.open : ''}`}
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className={styles.mobileMenu}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
          >
            <nav className={styles.mobileLinks} aria-label="Mobile navigation">
              {navLinks.map((link, index) => (
                <a key={link.label} href={link.href} className={styles.mobileLink} onClick={(event) => handleNavClick(event, link.href)}>
                  <span className={styles.mobileLinkNum}>0{index + 1}</span>{link.label}
                </a>
              ))}
            </nav>
            <div className={styles.mobileFooter}>
              <p className={styles.mobileFooterText}>Prasanna R · Software Engineer</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
