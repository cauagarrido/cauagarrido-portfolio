import { Cpu, FolderGit2, GraduationCap, Send, User } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';

export const navLinks = [
  { href: '#hero', label: 'Sobre Mim', Icon: User },
  { href: '#projects', label: 'Projetos', Icon: FolderGit2 },
  { href: '#technologies', label: 'Tecnologias', Icon: Cpu },
  { href: '#about', label: 'Trajetória', Icon: GraduationCap },
  { href: '#contact', label: 'Contato', Icon: Send },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/cauagarrido', Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/cauagarrido', Icon: FaLinkedin },
  { label: 'Instagram', href: 'https://instagram.com/cauagarrido', Icon: FaInstagram },
  { label: 'WhatsApp', href: 'https://wa.me/71999847528', Icon: FaWhatsapp },
  { label: 'Linktree', href: 'https://linktr.ee/cauagarrido', Icon: SiLinktree },
];

export const siteContact = {
  email: 'cauagarrido@gmail.com',
  whatsapp: 'https://wa.me/71999847528',
  linktree: 'https://linktr.ee/cauagarrido',
};
