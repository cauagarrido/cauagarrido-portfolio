import { useEffect, useRef, useState } from 'react';
import { technologies } from '../../data/technologies.js';
import SectionHeading from '../common/SectionHeading.jsx';

export default function Technologies() {
  const trackRef = useRef(null);
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
    if (!isMobile) {
      setActiveIndex(0);
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % technologies.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;

    const track = trackRef.current;
    const activeCard = track?.children[activeIndex];
    if (track && activeCard) {
      track.scrollTo({ left: activeCard.offsetLeft, behavior: 'smooth' });
    }
  }, [activeIndex, isMobile]);

  return (
    <section className="technologies-section" id="technologies">
      <div className="container">
        <SectionHeading
          tag="Habilidades & Especialidades"
          title={<>Stack & <span className="purple">Tecnologias</span></>}
          text="Ferramentas e linguagens dominadas que utilizo no dia a dia para desenvolver sistemas de alta performance, do backend ao frontend."
        />

        <div className="tech-carousel" aria-roledescription="carrossel" aria-label="Tecnologias">
          <div className="tech-cards-grid" ref={trackRef}>
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

          <div className="tech-carousel-dots" aria-hidden="true">
            {technologies.map(({ id }, index) => (
              <span key={id} className={index === activeIndex ? 'active' : ''} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
