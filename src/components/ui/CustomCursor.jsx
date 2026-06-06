import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './CustomCursor.module.scss';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const pos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
      return undefined;
    }
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: 'none',
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: 'power2.out',
      });
    };

    const handleEnter = (e) => {
      const el = e.target.closest('[data-cursor]');
      if (el) {
        const type = el.dataset.cursor;
        setIsHovering(true);
        setCursorText(type === 'link' ? '' : type || '');
        gsap.to(follower, { scale: type === 'link' ? 2.5 : 3, duration: 0.3 });
        gsap.to(cursor, { scale: 0.4, duration: 0.3 });
      }
    };

    const handleLeave = (e) => {
      const el = e.target.closest('[data-cursor]');
      if (el) {
        setIsHovering(false);
        setCursorText('');
        gsap.to(follower, { scale: 1, duration: 0.3 });
        gsap.to(cursor, { scale: 1, duration: 0.3 });
      }
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', handleEnter);
    document.addEventListener('mouseout', handleLeave);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', handleEnter);
      document.removeEventListener('mouseout', handleLeave);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={`${styles.cursor} ${isHovering ? styles.hovering : ''}`} />
      <div ref={followerRef} className={`${styles.follower} ${isHovering ? styles.hovering : ''}`}>
        {cursorText && <span className={styles.text}>{cursorText}</span>}
      </div>
    </>
  );
}
