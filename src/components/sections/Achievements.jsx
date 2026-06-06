import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { achievements } from '@/data';
import { useCounter } from '@/hooks';
import styles from './Achievements.module.scss';

function CounterCard({ label, value, mark, color, index, trigger, reduceMotion }) {
  const count = useCounter(value, reduceMotion ? 0 : 1600, trigger);
  const suffix = value.replace(/[0-9]/g, '');

  return (
    <motion.div
      className={styles.card}
      style={{ '--card-color': color }}
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <div className={styles.cardIcon}>{mark}</div>
      <div className={styles.cardValue}>{`${count}${suffix}`}</div>
      <div className={styles.cardLabel}>{label}</div>
      <div className={styles.cardBorder} />
    </motion.div>
  );
}

const marqueeItems = [
  'Java', 'Spring Boot', 'React.js', 'ISO8583', 'Payment Gateways', 'OpenAI APIs',
  'MySQL', 'PostgreSQL', 'REST APIs', 'Banking Systems', 'EdTech', 'Microservices',
  'Python', 'Groovy/Grails', 'PGP', 'Transaction Processing',
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();

  return (
    <section id="achievements" className={styles.achievements} ref={ref} aria-labelledby="impact-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionLabel}>
            <span className={styles.labelLine} />
            <span className={styles.labelText}>Impact Metrics</span>
          </div>
          <h2 id="impact-title" className={styles.heading}>
            Experience translated into <span className={styles.headingGradient}>delivery</span>
          </h2>
        </div>
        <div className={styles.grid}>
          {achievements.map((item, index) => (
            <CounterCard
              key={item.label}
              {...item}
              index={index}
              trigger={inView}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
        <div className={styles.marqueeWrapper} aria-hidden="true">
          <div className={styles.marqueeTrack}>
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className={styles.marqueeItem}>
                <span className={styles.marqueeDot} />{item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
