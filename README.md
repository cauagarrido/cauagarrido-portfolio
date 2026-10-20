# Cauã Garrido — Portfólio

Portfólio pessoal desenvolvido em **React 19 + Vite**, single page com seções de projetos, tecnologias, trajetória e contato.

## Stack

- **React 19** (`StrictMode`, componentes funcionais + Hooks)
- **Vite 8** com `@vitejs/plugin-react` (HMR e build de produção)
- **lucide-react** e **react-icons** para iconografia
- **CSS global modularizado** por seção (variáveis CSS como design tokens)
- **ESLint 10** (flat config) com `eslint-plugin-react-hooks` e `eslint-plugin-react-refresh`

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com HMR |
| `npm run build` | Build de produção em `dist/` |
| `npm run preview` | Visualiza o build de produção |
| `npm run lint` | Verifica o código com ESLint |
| `npm run lint:fix` | Corrige automaticamente o que o ESLint conseguir |

## Estrutura do projeto

```
├── index.html                  # Entry HTML (meta tags, fonts, #root)
├── vite.config.js              # Configuração do Vite + plugin React
├── eslint.config.js            # Lint (flat config, React Hooks + Refresh)
├── package.json
└── src/
    ├── main.jsx                # Bootstrap do React (StrictMode + createRoot)
    ├── App.jsx                 # Composição das seções da página
    ├── assets/                 # Imagens e mídia importadas pelo bundler
    ├── components/
    │   ├── common/             # Blocos reutilizáveis
    │   │   ├── ExternalLink.jsx    # Link externo com ícone da rede social
    │   │   └── SectionHeading.jsx  # Cabeçalho padrão de seção (tag/título/texto)
    │   ├── layout/             # Estrutura da página
    │   │   ├── Navbar.jsx          # Nav glass + estado de scroll
    │   │   ├── MobileDrawer.jsx    # Menu mobile com lock de scroll do body
    │   │   └── Footer.jsx
    │   └── sections/           # Seções independentes da one-page
    │       ├── Hero.jsx
    │       ├── Projects.jsx        # Carrossel de case studies
    │       ├── ProjectCard.jsx
    │       ├── Technologies.jsx
    │       ├── Experience.jsx      # Seção "Trajetória"
    │       ├── TimelineColumn.jsx
    │       └── Contact.jsx         # CTA final
    ├── data/                   # Conteúdo do site (sem lógica de UI)
    │   ├── navigation.js       # Links de navegação, redes sociais e contato
    │   ├── projects.js         # Projetos do portfólio + imagens
    │   ├── technologies.js     # Stack, ícones e cores
    │   └── timeline.js         # Formação e experiência profissional
    ├── hooks/                  # Lógica reutilizável de estado/efeitos
    │   ├── index.js            # Barrel com todos os hooks
    │   ├── useScrolled.js      # Detecta scroll além de um threshold
    │   ├── useCarousel.js      # Índice, navegação e scroll do carrossel
    │   └── useBodyScrollLock.js# Trava o scroll do body (menu aberto)
    └── styles/                 # CSS dividido por responsabilidade
        ├── index.css           # Ordem de importação de todos os arquivos
        ├── tokens.css          # Variáveis globais (cores, tipografia, motion)
        ├── base.css            # Reset e estilos globais
        ├── typography.css      # Escala tipográfica e utilitários
        ├── navigation.css      # Navbar, drawer e botões pill
        ├── hero.css            # Seção hero e stats
        ├── projects.css        # Carrossel e cards de projeto
        ├── technologies.css    # Grid de tecnologias
        ├── timeline.css        # Trajetória (formação/experiência)
        ├── cta.css             # Banner final de contato
        ├── footer.css          # Rodapé
        └── responsive.css      # Breakpoints (1024/600/375px)
```

## Convenções

- **Conteúdo vs. apresentação**: textos, listas e imagens vivem em `src/data`; componentes só renderizam.
- **Um componente por arquivo**, nome do arquivo igual ao componente.
- **Hooks** concentram efeitos (`scroll`, carrossel, lock de body); componentes não escrevem `addEventListener` direto.
- **CSS global** segue a ordem de `src/styles/index.css` — tokens primeiro, responsivo por último.
- **Acessibilidade**: `aria-label`, `aria-expanded`, `role="link"` com `tabIndex` e foco visível já aplicados nos controles interativos.
