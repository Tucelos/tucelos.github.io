// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site de usuário do GitHub Pages (tucelos.github.io): não precisa de `base`.
export default defineConfig({
  site: 'https://tucelos.github.io',
  // Sem a barra de ferramentas do Astro no modo de desenvolvimento: a prévia fica igual ao site publicado.
  devToolbar: { enabled: false },
  i18n: {
    // Português na raiz (/), inglês em /en/.
    locales: ['pt-br', 'en'],
    defaultLocale: 'pt-br',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pt-br',
        locales: { 'pt-br': 'pt-BR', en: 'en' },
      },
    }),
  ],
});
