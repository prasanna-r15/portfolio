import { useEffect, useRef, useState, useCallback } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ===========================
// LENIS SMOOTH SCROLL
// ===========================
export function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const update = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
    };
  }, []);

  return lenisRef;
}

// ===========================
// MOUSE POSITION
// ===========================
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [normalizedPosition, setNormalizedPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setNormalizedPosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return { position, normalizedPosition };
}

// ===========================
// MAGNETIC EFFECT
// ===========================
export function useMagnet(strength = 0.35) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      gsap.to(el, {
        x: dx * strength,
        y: dy * strength,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [strength]);

  return ref;
}

// ===========================
// SCROLL TRIGGER ANIMATION
// ===========================
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 40,
      opacity = 0,
      duration = 0.8,
      stagger = 0,
      delay = 0,
      ease = 'power3.out',
      scrub = false,
    } = options;

    const targets = stagger ? el.querySelectorAll('[data-reveal]') : el;

    const tl = gsap.fromTo(
      targets,
      { y, opacity, scale: options.scale || 1 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration,
        stagger,
        delay,
        ease,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse',
          scrub,
        },
      }
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return ref;
}

// ===========================
// TYPEWRITER
// ===========================
export function useTypewriter(texts, speed = 80, deleteSpeed = 40, pause = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts, speed, deleteSpeed, pause]);

  return displayText;
}

// ===========================
// INTERSECTION OBSERVER
// ===========================
export function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

// ===========================
// WINDOW SIZE
// ===========================
export function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

// ===========================
// COUNTER ANIMATION
// ===========================
export function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime;
    const numericTarget = parseInt(target.replace(/\D/g, ''), 10);
    if (duration === 0) {
      setCount(numericTarget);
      return undefined;
    }
    
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericTarget));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}
