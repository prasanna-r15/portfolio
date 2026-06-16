import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './CustomCursor.module.scss';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  // Mount cursor DOM nodes directly on <html> via vanilla JS
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
      return undefined;
    }

    // Create container and append to <html>
    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;top:0;left:0;width:0;height:0;z-index:2147483647;pointer-events:none;';
    document.documentElement.appendChild(container);
    containerRef.current = container;

    const cursor = document.createElement('div');
    cursor.className = styles.cursor;
    cursor.style.opacity = '0';

    const follower = document.createElement('div');
    follower.className = styles.follower;
    follower.style.opacity = '0';

    container.appendChild(cursor);
    container.appendChild(follower);

    cursorRef.current = cursor;
    followerRef.current = follower;

    const move = (e) => {
      cursor.style.opacity = '1';
      follower.style.opacity = '1';
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.08, ease: 'none' });
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power2.out' });
    };

    const handleEnter = (e) => {
      const el = e.target.closest('[data-cursor]');
      if (el) {
        const type = el.dataset.cursor;
        setIsHovering(true);
        setCursorText(type === 'link' ? '' : type || '');
        cursor.classList.add(styles.hovering);
        follower.classList.add(styles.hovering);
        gsap.to(follower, { scale: type === 'link' ? 2.5 : 3, duration: 0.3 });
        gsap.to(cursor, { scale: 0.4, duration: 0.3 });
      }
    };

    const handleLeave = (e) => {
      const el = e.target.closest('[data-cursor]');
      if (el) {
        setIsHovering(false);
        setCursorText('');
        cursor.classList.remove(styles.hovering);
        follower.classList.remove(styles.hovering);
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
      document.documentElement.removeChild(container);
    };
  }, []);

  // Sync cursorText into DOM node
  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;
    let textSpan = follower.querySelector(`.${styles.text}`);
    if (cursorText) {
      if (!textSpan) {
        textSpan = document.createElement('span');
        textSpan.className = styles.text;
        follower.appendChild(textSpan);
      }
      textSpan.textContent = cursorText;
    } else {
      textSpan?.remove();
    }
  }, [cursorText]);

  return null; // Nothing rendered in React tree
}