import { socialLinks } from '../../data/navigation.js';

export default function ExternalLink({ href, children, label, className = 'social-icon-btn' }) {
  const item = socialLinks.find((link) => link.href === href);
  const Icon = item?.Icon;
  const accessibleLabel = label ?? (typeof children === 'string' ? children : undefined);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      title={accessibleLabel}
      aria-label={accessibleLabel}
    >
      {Icon && <Icon />}
    </a>
  );
}
