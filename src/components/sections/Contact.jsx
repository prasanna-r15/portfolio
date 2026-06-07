import { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { personal } from '@/data';
import styles from './Contact.module.scss';

const links = [
  { name: 'GitHub', label: 'GH', url: personal.github },
  { name: 'LinkedIn', label: 'IN', url: personal.linkedin },
  { name: 'Email', label: '@', url: `mailto:${personal.email}` },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [draftOpened, setDraftOpened] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${formState.name}`);
    const body = encodeURIComponent(`${formState.message}\n\nFrom: ${formState.name}\nEmail: ${formState.email}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setDraftOpened(true);
  };

  const motionProps = reduceMotion ? { initial: false } : { initial: { opacity: 0, y: 30 } };

  return (
    <section id="contact" className={styles.contact} ref={ref} aria-labelledby="contact-title">
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={styles.container}>
        <motion.div className={styles.header} {...motionProps} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <div className={styles.sectionLabel}>
            <span className={styles.labelLine} /><span className={styles.labelText}>Get In Touch</span>
          </div>
          <h2 id="contact-title" className={styles.heading}>
            Let's discuss your next <span className={styles.headingGradient}>engineering challenge</span>
          </h2>
          <p className={styles.subheading}>Open to senior engineering opportunities and meaningful product collaborations.</p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div className={styles.infoPanel} {...motionProps} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <div className={styles.availability}>
              <span className={styles.availDot} />
              <div>
                <span className={styles.availTitle}>Available for Opportunities</span>
                <span className={styles.availSub}>Full-time</span>
              </div>
            </div>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>IN</span>
                <div><span className={styles.contactLabel}>Location</span><span className={styles.contactValue}>{personal.location}</span></div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>@</span>
                <div><span className={styles.contactLabel}>Email</span><a href={`mailto:${personal.email}`} className={styles.contactLink}>{personal.email}</a></div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>EX</span>
                <div><span className={styles.contactLabel}>Domains</span><span className={styles.contactValue}>Banking · Payment Systems · EdTech</span></div>
              </div>
            </div>
            <div className={styles.socials}>
              <p className={styles.socialsLabel}>Connect with me</p>
              <div className={styles.socialLinks}>
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.name === 'Email' ? undefined : '_blank'}
                    rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
                    className={styles.socialLink}
                    aria-label={link.name}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className={styles.formPanel} {...motionProps} animate={inView ? { opacity: 1, y: 0 } : {}}>
            {draftOpened ? (
              <div className={styles.successState} role="status">
                <div className={styles.successIcon}>OK</div>
                <h3 className={styles.successTitle}>Email draft opened</h3>
                <p className={styles.successText}>Review the message in your email app and send it when ready.</p>
                <button className={styles.resetBtn} onClick={() => setDraftOpened(false)}>Edit Message</button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="name">Name</label>
                    <input id="name" className={styles.input} value={formState.name} onChange={(event) => setFormState((state) => ({ ...state, name: event.target.value }))} autoComplete="name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input id="email" type="email" className={styles.input} value={formState.email} onChange={(event) => setFormState((state) => ({ ...state, email: event.target.value }))} autoComplete="email" required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="message">Message</label>
                  <textarea id="message" className={`${styles.input} ${styles.textarea}`} rows={5} value={formState.message} onChange={(event) => setFormState((state) => ({ ...state, message: event.target.value }))} required />
                </div>
                <button type="submit" className={styles.submitBtn}>Open Email Draft <span aria-hidden="true">-&gt;</span></button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
