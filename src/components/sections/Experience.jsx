import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '@/data';
import styles from './Experience.module.scss';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className={styles.experience} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.sectionLabel}>
            <span className={styles.labelLine} />
            <span className={styles.labelText}>Experience</span>
          </div>
          <h2 className={styles.heading}>
            Engineering <span className={styles.headingGradient}>Journey</span>
          </h2>
        </motion.div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine}>
            <motion.div
              className={styles.timelineProgress}
              initial={{ height: 0 }}
              animate={inView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>

          {experience.map((exp, expIndex) => (
            <motion.div
              key={exp.id}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + expIndex * 0.15 }}
            >
              <motion.div
                className={styles.dot}
                style={{ background: exp.color }}
                animate={expIndex === 0 ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 2.5, repeat: Infinity }}
              />

              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.cardLeft}>
                    <div className={styles.companyRow}>
                      <h3 className={styles.role}>{exp.role}</h3>
                      <span className={styles.type}>{exp.type}</span>
                    </div>
                    <p className={styles.company}>{exp.company}</p>
                    <div className={styles.meta}>
                      <span className={styles.metaItem}>{exp.period}</span>
                      <span className={styles.metaDot} />
                      <span className={styles.metaItem}>{exp.location}</span>
                    </div>
                  </div>

                  <div className={styles.domainBadges}>
                    {exp.domains.map((domain) => (
                      <span key={domain} className={styles.domainBadge}>{domain}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.highlights}>
                  <p className={styles.highlightsLabel}>Selected Achievements</p>
                  <ul className={styles.highlightsList}>
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className={styles.highlight}>
                        <span className={styles.highlightArrow}>&gt;</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={styles.skillTags}>
                    {exp.skills.map((skill) => (
                      <span key={skill} className={styles.skillTag}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            className={styles.futureItem}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
          >
            <div className={styles.futureDot} />
            <div className={styles.futureCard}>
              <span className={styles.futureText}>Still building</span>
              <span className={styles.futureSubtext}>Reliable systems with real-world impact</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
