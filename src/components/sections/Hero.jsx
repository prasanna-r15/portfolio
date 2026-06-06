import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { gsap } from 'gsap';
import { useMagnet } from '@/hooks';
import { heroStats, heroTech, personal } from '@/data';
import styles from './Hero.module.scss';

const ParticleBackground = lazy(() => import('@/components/three/ParticleBackground'));

export default function Hero() {
  const mouseRef = useRef({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const primaryRef = useMagnet(0.25);
  const contactRef = useMagnet(0.2);
  const reduceMotion = useReducedMotion();
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    if (reduceMotion || window.matchMedia('(max-width: 768px)').matches) return undefined;
    const enableParticles = () => setShowParticles(true);
    window.addEventListener('pointermove', enableParticles, { once: true, passive: true });
    return () => window.removeEventListener('pointermove', enableParticles);
  }, [reduceMotion]);

  useEffect(() => {
    if (!showParticles) return undefined;
    const handleMove = (event) => {
      mouseRef.current = {
        x: event.clientX - window.innerWidth / 2,
        y: event.clientY - window.innerHeight / 2,
      };
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, [showParticles]);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const context = gsap.context(() => {
      gsap.from('[data-hero-reveal]', {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
      });
    }, heroRef);
    return () => context.revert();
  }, [reduceMotion]);

  const scrollTo = (selector) => (event) => {
    event.preventDefault();
    document.querySelector(selector)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero} ref={heroRef} aria-labelledby="hero-title">
      {showParticles && (
        <div className={styles.canvasContainer} aria-hidden="true">
          <Suspense fallback={null}>
            <ParticleBackground mouseRef={mouseRef} />
          </Suspense>
        </div>
      )}
      <div className={styles.blobs} aria-hidden="true">
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
      </div>
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.tag} data-hero-reveal>
            <span className={styles.tagDot} />
            Software Engineer · 3+ Years
          </div>

          <p className={styles.eyebrow} data-hero-reveal>{personal.name}</p>
          <h1 id="hero-title" className={styles.headline} data-hero-reveal>
            Building Scalable <span>Banking, Payments</span> & Enterprise Applications
          </h1>
          <p className={styles.description} data-hero-reveal>
            Software Engineer with 3+ years of experience developing high-performance applications
            across Banking, Payments and EdTech using Java, Spring Boot, React and Microservices.
          </p>

          <div className={styles.domainLine} data-hero-reveal>
            <span>Banking & Payments</span>
            <span>EdTech</span>
            <span>AI Integrations</span>
          </div>

          <div className={styles.pills} data-hero-reveal aria-label="Core technologies">
            {heroTech.map((tech) => <span key={tech} className={styles.pill}>{tech}</span>)}
          </div>

          <div className={styles.ctas} data-hero-reveal>
            <motion.a
              ref={primaryRef}
              href="#projects"
              className={styles.ctaPrimary}
              onClick={scrollTo('#projects')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects <span aria-hidden="true">-&gt;</span>
            </motion.a>
            <a className={styles.ctaSecondary} href={personal.resume} download>
              Download Resume
            </a>
            <motion.a
              ref={contactRef}
              className={styles.ctaText}
              href="#contact"
              onClick={scrollTo('#contact')}
              whileHover={{ x: 3 }}
            >
              Contact Me
            </motion.a>
          </div>

          <div className={styles.stats} data-hero-reveal aria-label="Career highlights">
            {heroStats.map((stat) => (
              <motion.div
                key={stat.label}
                className={styles.stat}
                whileHover={reduceMotion ? undefined : { y: -4 }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.aside
          className={styles.currentRole}
          initial={reduceMotion ? false : { opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <span className={styles.currentRoleLabel}>Current focus</span>
          <strong>Mission-critical payment systems</strong>
          <p>
            Real-time gateways, multi-bank integrations, secure financial messaging and
            high-availability transaction services.
          </p>
          <div className={styles.currentRoleTech}>
            <span>ISO 20022</span><span>ISO8583</span><span>Kafka</span><span>IBM MQ</span>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
