import { useEffect, useRef } from 'react';
import './ScrollBackgroundVideo.css';

const TOTAL_FRAMES = 150;

function frameUrl(index) {
  const num = String(Math.min(TOTAL_FRAMES, Math.max(1, index + 1))).padStart(3, '0');
  return `/frames/frame_${num}.webp`;
}

export default function ScrollBackgroundVideo() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const images = new Array(TOTAL_FRAMES);
    let targetFrame = 0;
    let currentFrame = 0;
    let lastDrawn = -1;
    let rafId = 0;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      lastDrawn = -1;
    };

    const drawCover = (img) => {
      if (!img || !img.complete || img.naturalWidth === 0) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      const scale = Math.max(cw / iw, ch / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    const findNearestLoaded = (idx) => {
      if (images[idx]?.complete && images[idx].naturalWidth > 0) return images[idx];
      for (let offset = 1; offset < TOTAL_FRAMES; offset += 1) {
        if (idx - offset >= 0 && images[idx - offset]?.complete && images[idx - offset].naturalWidth > 0) {
          return images[idx - offset];
        }
        if (idx + offset < TOTAL_FRAMES && images[idx + offset]?.complete && images[idx + offset].naturalWidth > 0) {
          return images[idx + offset];
        }
      }
      return null;
    };

    const computeTargetFrame = () => {
      if (prefersReducedMotion) {
        targetFrame = 0;
        return;
      }
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
      targetFrame = progress * (TOTAL_FRAMES - 1);
    };

    const tick = () => {
      currentFrame += (targetFrame - currentFrame) * 0.16;
      const frameIndex = Math.round(currentFrame);
      if (frameIndex !== lastDrawn) {
        const img = findNearestLoaded(frameIndex);
        if (img) {
          drawCover(img);
          lastDrawn = frameIndex;
        }
      }
      rafId = window.requestAnimationFrame(tick);
    };

    resizeCanvas();
    computeTargetFrame();
    currentFrame = targetFrame;

    // Preload all frames, prioritizing frame 0 first
    for (let i = 0; i < TOTAL_FRAMES; i += 1) {
      const img = new Image();
      img.decoding = 'async';
      img.src = frameUrl(i);
      if (i === 0) {
        img.onload = () => {
          if (lastDrawn === -1) {
            drawCover(img);
            lastDrawn = 0;
          }
        };
      }
      images[i] = img;
    }

    window.addEventListener('scroll', computeTargetFrame, { passive: true });
    window.addEventListener('resize', () => {
      resizeCanvas();
      computeTargetFrame();
    }, { passive: true });

    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', computeTargetFrame);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="scroll-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="scroll-bg__canvas" />
      <div className="scroll-bg__scrim" />
    </div>
  );
}
