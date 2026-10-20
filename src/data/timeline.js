import { Briefcase, Code2, GraduationCap, MessageSquare, Palette, Rocket } from 'lucide-react';

export const education = [
  {
    id: 'ucsal',
    period: '2023 — 2025',
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Universidade Católica do Salvador (Ucsal)',
    description:
      'Formação superior focada na arquitetura de software, desenvolvimento de aplicações web e desktop, estruturas de dados, modelagem de banco de dados e engenharia de requisitos. Uso de Java, PostgreSQL, HTML5, CSS3 e JavaScript.',
    Icon: GraduationCap,
  },
  {
    id: 'infinity-school',
    period: '2023',
    title: 'Desenvolvimento Web & Sistemas',
    institution: 'Infinity School',
    description:
      'Imersão intensiva em programação prática: criação de sistemas web completos utilizando Python, bancos de dados SQL, APIs REST, JavaScript moderno e contato com frameworks do ecossistema React.',
    Icon: Rocket,
  },
  {
    id: 'escola-saga',
    period: '2019 — 2021',
    title: 'Design Gráfico, Edição & Multimídia 3D',
    institution: 'Escola Saga',
    description:
      'Especialização profunda em comunicação visual, composição estética, edição de imagem, produção audiovisual e modelagem 3D. Essa base garante que meus projetos web tenham acabamento visual superior.',
    Icon: Palette,
  },
];

export const career = [
  {
    id: 'freelancer',
    period: '2024 — Presente',
    title: 'Programador Web Freelancer',
    institution: 'Desenvolvimento Fullstack & Soluções Digitais',
    description:
      'Desenvolvimento de projetos web completos citados no portfólio, atuando desde o design UI/UX responsivo até a arquitetura de backend e deploy.',
    Icon: Code2,
  },
  {
    id: 'sindauto',
    period: '1 Ano de Experiência',
    title: 'Suporte de TI & Help Desk',
    institution: 'Sindauto Bahia',
    description:
      'Atuação como help desk e suporte técnico direto ao usuário. Gestão e resolução de chamados utilizando GLPI e criação de scripts em Python para automação da rotina de atendimentos.',
    Icon: MessageSquare,
  },
];

export const timelineColumns = [
  { id: 'education', title: 'Formação Acadêmica', Icon: GraduationCap, mint: false, entries: education },
  { id: 'career', title: 'Experiências Anteriores', Icon: Briefcase, mint: true, entries: career },
];
