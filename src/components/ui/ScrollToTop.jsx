import { useEffect } from 'react';

export function ScrollToTop({ containerRef }) {
  useEffect(() => {
    containerRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, [containerRef]);

  return null;
} 