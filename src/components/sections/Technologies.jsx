import { useEffect, useRef, useState } from 'react';
import { technologies } from '../../data/technologies.js';
import SectionHeading from '../common/SectionHeading.jsx';

export default function Technologies() {
  const trackRef = useRef(null);
  const programmaticScrollRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 768px)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener('change', updateViewport);
    return () => mediaQuery.removeEventListener('change', updateViewport);
  }, []);

  useEffect(() => {
    if (!isMobile) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % technologies.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
      setActiveIndex(0);
      return;
    }

    const track = trackRef.current;
    const activeCard = track?.children[activeIndex];
    if (track && activeCard) {
      programmaticScrollRef.current = true;
      const targetLeft = track.scrollLeft
        + activeCard.getBoundingClientRect().left
        - track.getBoundingClientRect().left;
      track.scrollTo({ left: targetLeft, behavior: 'smooth' });

      const timeoutId = window.setTimeout(() => {
        programmaticScrollRef.current = false;
      }, 700);
      return () => window.clearTimeout(timeoutId);
    }
    return undefined;
  }, [activeIndex, isMobile]);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || !isMobile || programmaticScrollRef.current) return;

    const trackLeft = track.getBoundingClientRect().left;
    let closestIndex = 0;
    let closestDistance = Infinity;

    Array.from(track.children).forEach((card, index) => {
      const distance = Math.abs(card.getBoundingClientRect().left - trackLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex((currentIndex) => (currentIndex === closestIndex ? currentIndex : closestIndex));
  };

  const goToStack = (index) => {
    setActiveIndex(index);
  };

  const goToPreviousStack = () => {
    setActiveIndex((currentIndex) => (
      currentIndex === 0 ? technologies.length - 1 : currentIndex - 1
    ));
  };

  const goToNextStack = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % technologies.length);
  };

  const activeTechnology = technologies[activeIndex];

  return (
    <section className="technologies-section" id="technologies">
      <div className="container">
        <SectionHeading
          tag="Habilidades & Especialidades"
          title={<>Stack & <span className="purple">Tecnologias</span></>}
          text="Ferramentas e linguagens dominadas que utilizo no dia a dia para desenvolver sistemas de alta performance, do backend ao frontend."
        />

        <div
          className="tech-carousel"
          aria-roledescription="carrossel"
          aria-label="Tecnologias"
        >
          <div className="tech-cards-grid" ref={trackRef} onScroll={handleScroll}>
          {technologies.map(({
            id, category, name, description, BrandIcon, FooterIcon, footer, color,
          }) => (
            <div className="tech-card" data-category={category} key={id}>
              <div className="tech-card-header">
                <div className="tech-icon-box">
                  <BrandIcon />
                </div>
              </div>
              <div className="tech-card-body">
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
              <div className="tech-card-footer">
                <FooterIcon style={{ color }} />
                <span>{footer}</span>
              </div>
            </div>
          ))}
          </div>

          <div className="tech-carousel-pagination" aria-label="Navegação das stacks">
            <span className="tech-carousel-current" aria-live="polite">
              {activeTechnology.name}
            </span>
            <div className="tech-carousel-navigation">
              <button
                type="button"
                className="tech-carousel-arrow"
                aria-label="Stack anterior"
                onClick={goToPreviousStack}
              >‹</button>
              <div className="tech-carousel-dots">
                {technologies.map(({ id, name }, index) => (
                  <button
                    key={id}
                    type="button"
                    className={`tech-carousel-dot ${index === activeIndex ? 'active' : ''}`}
                    aria-label={`Ir para ${name}`}
                    aria-current={index === activeIndex ? 'true' : undefined}
                    onClick={() => goToStack(index)}
                  />
                ))}
              </div>
              <button
                type="button"
                className="tech-carousel-arrow"
                aria-label="Próxima stack"
                onClick={goToNextStack}
              >›</button>
            </div>
            <span className="tech-carousel-count">
              {String(activeIndex + 1).padStart(2, '0')} / {String(technologies.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
