import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { personal } from '@/data';
import styles from './About.module.scss';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? {} : { opacity: 1, y: 0 };

  return (
    <section id="about" className={styles.about} ref={ref} aria-labelledby="about-title">
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div
            className={styles.left}
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={inView ? reveal : {}}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.photoBlock}>
              <div className={styles.photoFrame}>
                <div className={styles.photoInner}>
                  <img
                    src={personal.photo}
                    alt="Prasanna R, Software Engineer"
                    className={styles.photo}
                    width="600"
                    height="750"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className={styles.badge}>
                <span className={styles.badgeIcon}>SE</span>
                <div>
                  <span className={styles.badgeTitle}>Software Engineer</span>
                  <span className={styles.badgeSub}>Banking · Payments · EdTech</span>
                </div>
              </div>
              <div className={styles.locationTag}>Coimbatore, India</div>
            </div>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={inView ? reveal : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <div className={styles.sectionLabel}>
              <span className={styles.labelLine} />
              <span className={styles.labelText}>Professional Summary</span>
            </div>
            <h2 id="about-title" className={styles.heading}>
              Engineering secure systems that <span className={styles.headingAccent}>move money</span>
              {' '}and <span className={styles.headingAccent2}>power learning.</span>
            </h2>
            <p className={styles.bio}>{personal.summary}</p>
            <p className={styles.bio}>
              I work across backend architecture and modern product interfaces, translating complex
              business flows into reliable software that teams can operate, extend and trust.
            </p>
            <div className={styles.values} aria-label="Engineering strengths">
              {['Secure by Design', 'Production Focused', 'Full Stack Delivery', 'AI-Augmented Workflows'].map((item) => (
                <div key={item} className={styles.value}><span aria-hidden="true">+</span><span>{item}</span></div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
