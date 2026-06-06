import { motion, useReducedMotion } from 'framer-motion';
import { whyHireMe } from '@/data';
import styles from './WhyHireMe.module.scss';

export default function WhyHireMe() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="why-hire-title">
      <div className={styles.container}>
        <div className={styles.intro}>
          <div className={styles.sectionLabel}>
            <span className={styles.labelLine} />
            <span className={styles.labelText}>Why Hire Me</span>
          </div>
          <h2 id="why-hire-title">Engineering depth with <span>product perspective.</span></h2>
          <p>
            I bring domain context, hands-on implementation experience and a practical approach to
            shipping software that performs beyond the demo.
          </p>
        </div>
        <div className={styles.grid}>
          {whyHireMe.map((item, index) => (
            <motion.article
              key={item.title}
              className={styles.card}
              initial={reduceMotion ? false : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <span className={styles.mark}>{item.mark}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
