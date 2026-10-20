import { Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { siteContact, socialLinks } from '../../data/navigation.js';

export default function Contact() {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-banner-sphere">
          <div className="cta-banner-content">
            <span className="cta-banner-tag">Vamos construir algo incrível</span>
            <h2 className="cta-banner-title">Descubra soluções digitais ou planeje seu próximo projeto.</h2>
            <p className="cta-banner-desc">
              Estou disponível para novas oportunidades, projetos freelancers e desafios de engenharia de
              software. Vamos transformar sua visão em realidade?
            </p>

            <div className="cta-banner-buttons">
              <a href={siteContact.whatsapp} target="_blank" rel="noreferrer" className="btn-cta-dark">
                <FaWhatsapp />
                <span>Conversar no WhatsApp</span>
              </a>
              <a href={`mailto:${siteContact.email}`} className="btn-cta-light">
                <Mail />
                <span>{siteContact.email}</span>
              </a>
            </div>

            <div className="cta-social-bar">
              {socialLinks.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="social-pill-link">
                  <Icon />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
