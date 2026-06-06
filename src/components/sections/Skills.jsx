import { motion, useReducedMotion } from 'framer-motion';
import { skillCategories } from '@/data';
import styles from './Skills.module.scss';

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className={styles.skills} aria-labelledby="skills-title">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.sectionLabel}>
            <span className={styles.labelLine} />
            <span className={styles.labelText}>Technical Skills</span>
          </div>
          <h2 id="skills-title" className={styles.heading}>
            A stack shaped by <span className={styles.headingGradient}>production work</span>
          </h2>
          <p className={styles.subheading}>Categorized by capability, without arbitrary proficiency percentages.</p>
        </motion.div>

        <div className={styles.categoryGrid}>
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              className={styles.categoryCard}
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
            >
              <div className={styles.categoryHeader}>
                <span>{category.mark}</span>
                <h3>{category.title}</h3>
              </div>
              <div className={styles.skillList}>
                {category.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
