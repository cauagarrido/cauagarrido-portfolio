import { navLinks, socialLinks } from '../../data/navigation.js';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock.js';

export default function MobileDrawer({ open, onClose }) {
  useBodyScrollLock(open);

  return (
    <div className={`mobile-drawer ${open ? 'open' : ''}`} onClick={onClose}>
      <div className="mobile-drawer-content" onClick={(event) => event.stopPropagation()}>
        <div className="mobile-drawer-links">
          {navLinks.map(({ href, label, Icon }) => (
            <a key={href} href={href} onClick={onClose} className="mobile-nav-link">
              <Icon />
              <span>{label}</span>
            </a>
          ))}
        </div>
        <div className="mobile-drawer-socials">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              onClick={onClose}
              className={`mobile-social-chip ${label === 'WhatsApp' ? 'whatsapp' : ''}`}
            >
              <Icon />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
