import balloneImage from '../assets/ballone.png';
import ecommerceImage from '../assets/ecommerce_api.jpg';
import laisImage from '../assets/laisgarrido.png';
import milheiroImage from '../assets/WhatsApp Image 2026-04-07 at 10.57.59.jpeg';
import petfinderImage from '../assets/petfinder.jpg';

export const projects = [
  {
    id: 'lais-garrido-arquitetura',
    title: 'Laís Garrido — Arquitetura',
    category: 'Arquitetura & Design de Interiores',
    image: laisImage,
    site: 'https://laisgarrido.vercel.app/',
    repo: 'https://github.com/cauagarrido/laisgarrido-arq',
    tags: ['Projeto Freelancer', 'React & TypeScript', 'Tailwind CSS', '2024 / 2025'],
    description:
      'Landing page de alto padrão e portfólio completo para escritório de arquitetura e design de interiores. Desenvolvido com React, TypeScript e Tailwind CSS, combinando estética minimalista de alto padrão, navegação fluida e apresentação imersiva de projetos.',
  },
  {
    id: 'manual-do-milheiro',
    title: 'Manual do Milheiro Iniciante',
    category: 'Landing Page & Conversão',
    image: milheiroImage,
    site: 'https://manualdomilheiro.vercel.app/',
    repo: 'https://github.com/cauagarrido/ManualDoMilheiro',
    tags: ['Projeto Freelancer', 'Landing Page', 'UI/UX & Design', '2025'],
    description:
      'Landing page estratégica e produto digital com foco em conversão e organização para acúmulo inteligente de milhas aéreas. Desenvolvido com experiência mobile-first, visual moderno e alta taxa de engajamento.',
  },
  {
    id: 'ballone',
    title: 'BallOne — Mesas de Sinuca & Lazer',
    category: 'E-Commerce & Catálogo Interativo',
    image: balloneImage,
    site: 'https://ballone.vercel.app/',
    repo: 'https://github.com/cauagarrido/BallOne',
    tags: ['Projeto Freelancer', 'Catálogo & E-commerce', 'Next.js & Tailwind', '2024 / 2025'],
    description:
      'Plataforma institucional e catálogo digital interativo para fabricante de mesas de sinuca de alto padrão, pebolins e acessórios de lazer. Apresentação imersiva de produtos sob medida, integração direta de orçamentos via WhatsApp e layout responsivo de alta conversão.',
  },
  {
    id: 'ecommerce-api',
    title: 'API para Ecommerce',
    category: 'Backend & Arquitetura REST',
    image: ecommerceImage,
    repo: 'https://github.com/cauagarrido/ecommerce-flask',
    tags: ['Backend & REST API', 'Python & Flask', 'SQLite / PostgreSQL', '2025'],
    description:
      'API RESTful para gestão completa de e-commerce construída com Flask e Flask-SQLAlchemy. Permite autenticação, catálogo de produtos, manipulação de pedidos e banco de dados relacional com transações seguras e validação rigorosa.',
  },
  {
    id: 'petfinder',
    title: 'Plataforma PetFinder',
    category: 'Fullstack Web & Mobile',
    image: petfinderImage,
    repo: 'https://github.com/Dux4/PetFinder',
    tags: ['Trabalho Acadêmico (TCC)', 'React & Node.js', 'PostgreSQL', '2025'],
    description:
      'Sistema fullstack desenvolvido como TCC voltado à localização, resgate e adoção responsável de pets. Conta com interface rica em React, mapas interativos, perfis completos e arquitetura em banco de dados PostgreSQL.',
  },
];
