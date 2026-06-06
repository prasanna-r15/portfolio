import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Loader.module.scss';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete?.(), 300);
          return 100;
        }
        // Fast at start, slow middle, fast end
        const increment = p < 30 ? 3 : p < 70 ? 1.5 : 4;
        return Math.min(p + increment, 100);
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (progress > 30) setPhase(1);
    if (progress > 65) setPhase(2);
    if (progress > 90) setPhase(3);
  }, [progress]);

  const phases = [
    'Initializing systems...',
    'Loading components...',
    'Compiling experience...',
    'Ready.',
  ];

  return (
    <motion.div
      className={styles.loader}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background grid */}
      <div className={styles.grid} />

      <div className={styles.content}>
        {/* Logo */}
        <motion.div
          className={styles.logo}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          PR
        </motion.div>

        {/* Phase text */}
        <motion.p
          key={phase}
          className={styles.phaseText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {phases[phase]}
        </motion.p>

        {/* Progress bar */}
        <div className={styles.progressTrack}>
          <motion.div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          />
          <div className={styles.progressGlow} style={{ left: `${progress}%` }} />
        </div>

        {/* Progress number */}
        <span className={styles.progressNum}>{Math.round(progress)}%</span>
      </div>

      {/* Corner decorations */}
      <div className={`${styles.corner} ${styles.topLeft}`} />
      <div className={`${styles.corner} ${styles.topRight}`} />
      <div className={`${styles.corner} ${styles.bottomLeft}`} />
      <div className={`${styles.corner} ${styles.bottomRight}`} />
    </motion.div>
  );
}
