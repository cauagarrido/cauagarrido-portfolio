import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navLinks, siteContact } from '../../data/navigation.js';
import { useScrolled } from '../../hooks/useScrolled.js';
import ExternalLink from '../common/ExternalLink.jsx';
import MobileDrawer from './MobileDrawer.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(50);

  return (
    <>
      <nav
        className="glass-nav"
        style={scrolled
          ? { background: 'rgba(10, 10, 15, 0.95)', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.7)' }
          : undefined}
      >
        <a href="#hero" className="nav-brand" aria-label="Página inicial">
          <span className="nav-brand-title">CAUÃ GARRIDO</span>
        </a>

        <div className="nav-links">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
        </div>

        <div className="nav-actions">
          <ExternalLink href={siteContact.linktree} className="btn-pill-linktree" label="Linktree">
            <span className="linktree-label">Linktree</span>
          </ExternalLink>
          <a href="#contact" className="btn-pill-primary">
            <span className="btn-pill-text">Falar Comigo</span>
            <ArrowUpRight />
          </a>
          <button
            type="button"
            className="nav-mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
