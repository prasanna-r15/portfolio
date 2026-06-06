import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '@/data';
import styles from './Projects.module.scss';

function ProjectCard({ project, index, reduceMotion }) {
  return (
    <motion.article
      className={styles.card}
      initial={reduceMotion ? false : { opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
    >
      <div className={styles.cardTopBorder} style={{ background: project.gradient }} />
      <div className={styles.cardHeader}>
        <div className={styles.cardMeta}>
          <span className={styles.cardNum}>{project.number}</span>
          <span className={styles.cardDomain} style={{ color: project.domainColor }}>{project.domain}</span>
        </div>
        <span className={styles.caseStudy}>Case study</span>
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <div className={styles.projectDetail}>
          <span>Business problem</span>
          <p>{project.problem}</p>
        </div>
        <div className={styles.projectDetail}>
          <span>Solution</span>
          <p>{project.solution}</p>
        </div>
        <div className={styles.impact}>
          <span className={styles.impactIcon} aria-hidden="true">+</span>
          <span className={styles.impactText}>{project.achievement}</span>
        </div>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.techStack} aria-label="Technologies used">
          {project.tech.map((tech) => <span key={tech} className={styles.techTag}>{tech}</span>)}
        </div>
        <a className={styles.viewBtn} href="#contact">Request details</a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className={styles.projects} aria-labelledby="projects-title">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.sectionLabel}>
            <span className={styles.labelLine} />
            <span className={styles.labelText}>Featured Work</span>
          </div>
          <h2 id="projects-title" className={styles.heading}>
            Projects with <span className={styles.headingGradient}>business context</span>
          </h2>
          <p className={styles.subheading}>
            Selected enterprise work. Screenshots and deeper implementation details are available where confidentiality permits.
          </p>
        </motion.div>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} reduceMotion={reduceMotion} />
          ))}
        </div>
      </div>
    </section>
  );
}
