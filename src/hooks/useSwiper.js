import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for managing Swiper carousel functionality
 * @param {Array} slides - Array of slide data
 * @param {Object} options - Swiper configuration options
 * @returns {Object} - Swiper ref, current index, and utility functions
 */
export const useSwiper = (slides = [], options = {}) => {
  const swiperRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const defaultOptions = {
    autoplayDelay: 2000,
    enableAccessibility: true,
    ...options
  };

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper || slides.length === 0) return;

    setIsReady(true);
    setCurrentSlideIndex(0);
    
    // Initialize autoplay with a slight delay
    const autoplayTimer = setTimeout(() => {
      if (swiper.autoplay && defaultOptions.autoplayDelay) {
        swiper.autoplay.start();
      }
    }, 100);
    
    // Handle slide changes
    const handleSlideChange = () => {
      const newIndex = swiper.realIndex;
      setCurrentSlideIndex(newIndex);
      
      // Announce slide changes for screen readers if accessibility is enabled
      if (defaultOptions.enableAccessibility) {
        const activeSlide = slides[newIndex];
        if (activeSlide) {
          const announcement = document.createElement('div');
          announcement.setAttribute('aria-live', 'polite');
          announcement.setAttribute('aria-atomic', 'true');
          announcement.className = 'sr-only';
          announcement.textContent = `Slide ${newIndex + 1} of ${slides.length}: ${activeSlide.alt || activeSlide.dynamicText || 'Slide content'}`;
          document.body.appendChild(announcement);
          
          // Clean up announcement after screen reader has time to read it
          setTimeout(() => {
            if (document.body.contains(announcement)) {
              document.body.removeChild(announcement);
            }
          }, 1000);
        }
      }
    };
    
    swiper.on('slideChange', handleSlideChange);
    
    // Cleanup function
    return () => {
      clearTimeout(autoplayTimer);
      swiper.off('slideChange', handleSlideChange);
    };
  }, [slides, defaultOptions.autoplayDelay, defaultOptions.enableAccessibility]);

  // Utility functions
  const goToSlide = (index) => {
    const swiper = swiperRef.current?.swiper;
    if (swiper && index >= 0 && index < slides.length) {
      swiper.slideTo(index);
    }
  };

  const nextSlide = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      swiper.slideNext();
    }
  };

  const prevSlide = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const pauseAutoplay = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper && swiper.autoplay) {
      swiper.autoplay.stop();
    }
  };

  const resumeAutoplay = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper && swiper.autoplay) {
      swiper.autoplay.start();
    }
  };

  return {
    swiperRef,
    currentSlideIndex,
    isReady,
    goToSlide,
    nextSlide,
    prevSlide,
    pauseAutoplay,
    resumeAutoplay
  };
};

export default useSwiper;
