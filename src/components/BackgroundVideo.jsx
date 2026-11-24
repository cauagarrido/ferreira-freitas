import { useEffect, useRef } from 'react';
import './BackgroundVideo.css';

/**
 * BackgroundVideo component that smoothly scrubs through video frames
 * based on user scroll position, with liquid-glass ambient overlay.
 */
export default function BackgroundVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId = null;
    let targetTime = 0;
    let currentTime = 0;
    let isMetadataLoaded = false;

    const handleLoadedMetadata = () => {
      isMetadataLoaded = true;
      video.pause();
      updateScrollTarget();
    };

    const updateScrollTarget = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

      if (video.duration && !isNaN(video.duration)) {
        targetTime = progress * video.duration;
      }
    };

    const tick = () => {
      if (isMetadataLoaded && video.duration) {
        // Smooth interpolation for fluid scrubbing across frames
        const diff = targetTime - currentTime;
        if (Math.abs(diff) > 0.002) {
          currentTime += diff * 0.14;
          video.currentTime = currentTime;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    } else {
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    window.addEventListener('scroll', updateScrollTarget, { passive: true });
    window.addEventListener('resize', updateScrollTarget);

    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', updateScrollTarget);
      window.removeEventListener('resize', updateScrollTarget);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="bg-video-container" aria-hidden="true">
      <video
        ref={videoRef}
        className="bg-video"
        src="/background-video.mp4"
        muted
        playsInline
        preload="auto"
      />
      {/* Dynamic warm tone overlay with subtle frosted refraction */}
      <div className="bg-video-overlay" />
    </div>
  );
}
