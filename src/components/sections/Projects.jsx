import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects.js';
import { useCarousel } from '../../hooks/useCarousel.js';
import SectionHeading from '../common/SectionHeading.jsx';
import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
  const {
    trackRef, current, handleScroll, scrollToIndex, scrollNext, scrollPrevious,
  } = useCarousel({ itemCount: projects.length, itemSelector: '.case-study-card-carousel' });

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="projects-header-row">
          <SectionHeading
            tag="Case Studies & Portfólio"
            mint
            title={<>Projetos em <span className="purple">Destaque</span></>}
            text="Aplicações reais desenvolvidas com rigor técnico, arquitetura escalável e design refinado no padrão das melhores agências digitais."
          />

          <div className="carousel-controls">
            <div className="carousel-counter">
              <span className="carousel-current">{String(current + 1).padStart(2, '0')}</span>
              <span className="carousel-divider">/</span>
              <span className="carousel-total">{String(projects.length).padStart(2, '0')}</span>
            </div>
            <div className="carousel-nav-buttons">
              <button type="button" className="carousel-nav-btn" onClick={scrollPrevious} aria-label="Projeto anterior">
                <ArrowLeft />
              </button>
              <button type="button" className="carousel-nav-btn" onClick={scrollNext} aria-label="Próximo projeto">
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="projects-carousel-wrapper">
          <div className="projects-carousel-track" ref={trackRef} onScroll={handleScroll}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="carousel-dots-wrap">
          <div className="carousel-dots">
            {projects.map((project, index) => (
              <button
                type="button"
                key={project.id}
                className={`carousel-dot ${current === index ? 'active' : ''}`}
                onClick={() => scrollToIndex(index)}
                aria-label={`Ir para projeto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
