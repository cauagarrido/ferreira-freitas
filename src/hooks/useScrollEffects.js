import { useEffect } from 'react';

/**
 * useScrollEffects
 * Handles:
 * 1. IntersectionObserver for scroll-triggered reveal animations (.reveal-on-scroll)
 * 2. Parallax calculations for elements marked with [data-parallax] or .parallax-item
 * 3. Root scroll progress and position CSS variables (--scroll-y, --scroll-progress)
 */
export default function useScrollEffects() {
  useEffect(() => {
    // 1. Reveal on scroll via IntersectionObserver
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Once revealed, unobserve to maintain smooth performance
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12,
    });

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    // 2. Parallax scroll listener
    let rafId = null;
    const parallaxElements = document.querySelectorAll('[data-parallax-speed]');

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const windowHeight = window.innerHeight;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - windowHeight);
      const progress = scrollY / maxScroll;

      document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
      document.documentElement.style.setProperty('--scroll-progress', `${progress}`);

      // Apply subtle parallax offsets
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax-speed')) || 0.15;
        const rect = el.getBoundingClientRect();
        // Calculate offset relative to center of viewport
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const distance = elementCenter - viewportCenter;
        const offset = distance * -speed;

        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
}
