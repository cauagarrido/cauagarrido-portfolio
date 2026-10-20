import { navLinks, socialLinks } from '../../data/navigation.js';
import ExternalLink from '../common/ExternalLink.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>CAUÃ GARRIDO</h2>
            <p>Desenvolvedor Fullstack — Interfaces modernas, performance e elegância.</p>
          </div>
          <div className="footer-nav">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href}>{label}</a>
            ))}
            <a href="https://linktr.ee/cauagarrido" target="_blank" rel="noreferrer">Linktree</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Cauã Garrido. Todos os direitos reservados.</p>
          <div className="footer-social-icons">
            {socialLinks.map(({ href, label }) => (
              <ExternalLink key={label} href={href}>{label}</ExternalLink>
            ))}
          </div>
          <div className="status-badge">
            <span className="status-dot-pulse" />
            <span>Disponível para novos projetos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
