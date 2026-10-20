import { useCallback, useRef, useState } from 'react';

export function useCarousel({ itemCount, itemSelector, gap = 24 }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getItemStep = useCallback(() => {
    const item = trackRef.current?.querySelector(itemSelector);
    return (item?.offsetWidth || 300) + gap;
  }, [itemSelector, gap]);

  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * getItemStep(), behavior: 'smooth' });
  }, [getItemStep]);

  const scrollByDirection = useCallback((direction) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * getItemStep(), behavior: 'smooth' });
  }, [getItemStep]);

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const step = getItemStep();
    setActiveIndex(Math.max(0, Math.round(track.scrollLeft / step)));
  }, [getItemStep]);

  const current = Math.min(activeIndex, Math.max(0, itemCount - 1));

  return {
    trackRef,
    current,
    handleScroll,
    scrollToIndex,
    scrollNext: () => scrollByDirection(1),
    scrollPrevious: () => scrollByDirection(-1),
  };
}

export default useCarousel;
