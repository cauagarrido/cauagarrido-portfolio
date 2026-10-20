import { ArrowDownRight, MessageSquare } from 'lucide-react';
import { socialLinks } from '../../data/navigation.js';
import ExternalLink from '../common/ExternalLink.jsx';

const heroStats = [
  { title: 'Fullstack', label: 'Aplicações End-to-End', color: 'purple' },
  { title: 'Clean Code', label: 'Arquitetura & Qualidade', color: 'mint' },
  { title: 'UI/UX', label: 'Design Moderno & Fluido', color: '' },
  { title: 'Performance', label: 'Código Otimizado & Veloz', color: 'purple' },
];

export default function Hero() {
  return (
    <header className="hero-section" id="hero">
      <div className="hero-bg-auras">
        <div className="aura-blob aura-blob-1" />
        <div className="aura-blob aura-blob-2" />
        <div className="aura-blob aura-blob-3" />
      </div>

      <div className="container">
        <div className="hero-center-content">
          <div className="section-tag">
            <span className="status-dot-pulse" />
            Desenvolvedor Fullstack · Salvador, BA
          </div>

          <h1 className="hero-headline">
            Construo interfaces <span className="highlight-purple">modernas</span> e aplicações de
            {' '}<span className="highlight-mint">alto impacto.</span>
          </h1>

          <p className="hero-subheadline">
            Aliando design contemporâneo a uma arquitetura sólida. Especialista no desenvolvimento de
            ecossistemas web completos com{' '}
            <strong>Python, React, Node.js, JavaScript e SQL</strong>.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn-pill-purple">
              <span>Ver Projetos em Destaque</span>
              <ArrowDownRight />
            </a>
            <a href="#contact" className="btn-pill-dark">
              <MessageSquare />
              <span>Entrar em Contato</span>
            </a>
          </div>

          <div className="hero-social-strip">
            <span className="hero-social-label">Redes & Conexões:</span>
            <div className="hero-social-icons">
              {socialLinks.map(({ href, label }) => (
                <ExternalLink key={label} href={href}>{label}</ExternalLink>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-stats-bar">
          {heroStats.map(({ title, label, color }) => (
            <div className="hero-stat-item" key={title}>
              <span className={`hero-stat-number ${color}`}>{title}</span>
              <span className="hero-stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
