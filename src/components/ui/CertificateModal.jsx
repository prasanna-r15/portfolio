import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import styles from './CertificateModal.module.scss';

const FOCUSABLE_SELECTOR = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function CertificateModal({ certificate, onClose }) {
  const reduceMotion = useReducedMotion();
  const [zoom, setZoom] = useState(1);
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === '+' || event.key === '=') {
        setZoom((value) => Math.min(value + 0.25, 3));
      }

      if (event.key === '-') {
        setZoom((value) => Math.max(value - 0.25, 1));
      }

      if (event.key !== 'Tab' || !modalRef.current) return;

      const focusable = [...modalRef.current.querySelectorAll(FOCUSABLE_SELECTOR)]
        .filter((element) => !element.hasAttribute('disabled'));

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!certificate) return undefined;

    previousFocusRef.current = document.activeElement;
    setZoom(1);
    const scrollY = document.body.style.top;

    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';

    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    window.addEventListener('keydown', handleKeyDown);

    requestAnimationFrame(() => {
      const closeButton = modalRef.current?.querySelector(FOCUSABLE_SELECTOR);
      closeButton?.focus();
    });

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      previousFocusRef.current?.focus?.();
    };
  }, [certificate, handleKeyDown]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {certificate && (
        <motion.div
          className={styles.overlay}
          data-cursor-ignore="false"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={modalRef}
            className={styles.modal}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.header}>
              <div>
                <p className={styles.label}>{certificate.organization}</p>
                <h3 id="certificate-modal-title" className={styles.title}>{certificate.title}</h3>
              </div>
              <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close certificate viewer">
                ×
              </button>
            </div>

            <div className={styles.viewer} onWheel={(e) => {
              e.stopPropagation();
            }}>
              <div className={styles.imageWrap}>
                <motion.img
                  src={certificate.image}
                  alt={`${certificate.title} certificate from ${certificate.organization}`}
                  className={styles.image}
                  style={{ scale: zoom }}
                  drag={!reduceMotion}
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                />
              </div>
            </div>

            <div className={styles.controls}>
              <button type="button" className={styles.controlBtn} onClick={() => setZoom((value) => Math.max(value - 0.25, 1))} aria-label="Zoom out">
                −
              </button>
              <span className={styles.zoomLabel} aria-live="polite">{Math.round(zoom * 100)}%</span>
              <button type="button" className={styles.controlBtn} onClick={() => setZoom((value) => Math.min(value + 0.25, 3))} aria-label="Zoom in">
                +
              </button>
              <span className={styles.hint}>Press ESC to close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
