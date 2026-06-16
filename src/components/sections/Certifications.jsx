import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { certifications } from '@/data';
import CertificateModal from '@/components/ui/CertificateModal';
import styles from './Certifications.module.scss';

function CertificateCard({ certificate, index, reduceMotion, onView }) {
  return (
    <motion.article
      className={styles.card}
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
    >
      <div className={styles.imageFrame}>
        <motion.img
          src={certificate.image}
          alt={`${certificate.title} preview`}
          className={styles.previewImage}
          loading="lazy"
          decoding="async"
          whileHover={reduceMotion ? undefined : { scale: 1.04 }}
          transition={{ duration: 0.35 }}
        />
        <div className={styles.imageOverlay} aria-hidden="true" />
      </div>

      <div className={styles.cardBody}>
        <p className={styles.organization}>{certificate.organization}</p>
        <h3 className={styles.title}>{certificate.title}</h3>
        {certificate.period && <p className={styles.period}>{certificate.period}</p>}
        <p className={styles.description}>{certificate.description}</p>
        <button type="button" className={styles.viewBtn} onClick={() => onView(certificate)}>
          View Full Certificate
        </button>
      </div>
    </motion.article>
  );
}

export default function Certifications() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const [activeCertificate, setActiveCertificate] = useState(null);

  return (
    <>
      <section
        id="certifications"
        className={styles.certifications}
        ref={ref}
        aria-labelledby="certifications-title"
      >
        <div className={styles.container}>
          <motion.div
            className={styles.header}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.sectionLabel}>
              <span className={styles.labelLine} />
              <span className={styles.labelText}>Recognition</span>
            </div>
            <h2 id="certifications-title" className={styles.heading}>
              Achievements & <span className={styles.headingGradient}>Certifications</span>
            </h2>
            <p className={styles.subheading}>
              Recognition received for professional excellence, dedication, and performance throughout my career.
            </p>
          </motion.div>

          <div className={styles.grid}>
            {certifications.map((certificate, index) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                index={index}
                reduceMotion={reduceMotion}
                onView={setActiveCertificate}
              />
            ))}
          </div>
        </div>
      </section>

      <CertificateModal
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </>
  );
}
