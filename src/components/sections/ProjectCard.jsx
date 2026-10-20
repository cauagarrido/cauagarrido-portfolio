import { ArrowUpRight, ExternalLink as ExternalLinkIcon } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  const mainUrl = project.site || project.repo;

  const openProject = () => window.open(mainUrl, '_blank', 'noopener,noreferrer');

  return (
    <article
      className="case-study-card-carousel"
      onClick={openProject}
      onKeyDown={(event) => {
        if (event.key === 'Enter') openProject();
      }}
      role="link"
      tabIndex="0"
      aria-label={`Abrir projeto ${project.title}`}
    >
      <img src={project.image} alt={project.title} className="case-study-bg-img" loading="lazy" />
      <div className="case-study-gradient-overlay" />

      <div className="case-study-top-bar">
        <div className="case-study-tags">
          {project.tags.map((tag, index) => (
            <span key={tag} className={`tag-pill ${index === 0 ? 'accent' : ''}`}>{tag}</span>
          ))}
        </div>
        <div className="btn-case-study-circle">
          <ArrowUpRight />
        </div>
      </div>

      <div className="case-study-middle-info">
        <span className="case-study-category">{project.category}</span>
        <h3 className="case-study-title">{project.title}</h3>
        <p className="case-study-desc">{project.description}</p>
      </div>

      <div className="case-study-actions">
        {project.site && (
          <a
            href={project.site}
            target="_blank"
            rel="noreferrer"
            className="btn-pill-action"
            onClick={(event) => event.stopPropagation()}
          >
            <ExternalLinkIcon />
            <span>Acessar Site</span>
          </a>
        )}
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className={`btn-pill-action ${project.site ? 'secondary' : ''}`}
          onClick={(event) => event.stopPropagation()}
        >
          <FaGithub />
          <span>{project.site ? 'Repositório' : 'Ver no GitHub'}</span>
        </a>
      </div>
    </article>
  );
}
