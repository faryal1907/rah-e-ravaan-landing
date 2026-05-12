import { useEffect } from 'react';

export const useAnalytics = () => {
  const trackEvent = (eventName, data = {}) => {
    // In a real production app, you would send this to Google Analytics, Mixpanel, etc.
    console.log(`[Analytics] ${eventName}:`, data);
  };

  useEffect(() => {
    // Track Page Visit
    trackEvent('page_view', { path: window.location.pathname });

    // Track Scroll Depth
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > maxScroll) {
        maxScroll = Math.floor(scrollPercent);
        if (maxScroll % 25 === 0) { // Log every 25%
          trackEvent('scroll_depth', { depth: `${maxScroll}%` });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { trackEvent };
};
