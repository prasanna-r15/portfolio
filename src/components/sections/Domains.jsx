import { motion, useReducedMotion } from 'framer-motion';
import { domains } from '@/data';
import styles from './Domains.module.scss';

export default function Domains() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="domains" className={styles.domains} aria-labelledby="domains-title">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.sectionLabel}>
            <span className={styles.labelLine} />
            <span className={styles.labelText}>Domain Expertise</span>
          </div>
          <h2 id="domains-title" className={styles.heading}>
            Built for <span className={styles.headingGradient}>complex, real-world systems</span>
          </h2>
          <p className={styles.subheading}>Focused expertise across two domains where reliability and user outcomes matter.</p>
        </motion.div>

        <div className={styles.expertiseGrid}>
          {domains.map((domain, index) => (
            <motion.article
              key={domain.id}
              className={styles.expertiseCard}
              style={{ '--domain-color': domain.color }}
              initial={reduceMotion ? false : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
            >
              <div className={styles.cardHeading}>
                <span className={styles.domainMark}>{domain.mark}</span>
                <div>
                  <p>Core domain</p>
                  <h3>{domain.name}</h3>
                </div>
              </div>
              <p className={styles.panelDesc}>{domain.description}</p>
              <ul className={styles.capabilityGrid}>
                {domain.capabilities.map((capability) => (
                  <li key={capability}><span aria-hidden="true">+</span>{capability}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
