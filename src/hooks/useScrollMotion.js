import { useEffect } from 'react';

export function useScrollMotion() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealVisibleByRect = () => {
      const vh = window.innerHeight || 800;
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
        if (prefersReducedMotion) {
          el.classList.add('is-visible');
          return;
        }
        const rect = el.getBoundingClientRect();
        if (rect.top < vh + 60 && rect.bottom > -60) {
          el.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '60px 0px 60px 0px' }
    );

    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
        if (prefersReducedMotion) {
          el.classList.add('is-visible');
        } else {
          observer.observe(el);
        }
      });
      revealVisibleByRect();
    };

    observeAll();

    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    let rafId = 0;

    const updateOnScroll = () => {
      rafId = 0;
      revealVisibleByRect();

      if (prefersReducedMotion) return;

      const viewportHeight = window.innerHeight || 1;
      const viewportCenter = viewportHeight / 2;

      document.querySelectorAll('[data-parallax]').forEach((el) => {
        const speed = Number.parseFloat(el.dataset.parallax || '0');
        if (!speed) return;
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distanceFromCenter = elementCenter - viewportCenter;
        const offset = Math.max(-70, Math.min(70, -distanceFromCenter * speed));
        el.style.setProperty('--parallax-y', `${offset.toFixed(2)}px`);
      });
    };

    const requestTick = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateOnScroll);
      }
    };

    updateOnScroll();
    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick, { passive: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('scroll', requestTick);
      window.removeEventListener('resize', requestTick);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);
}
