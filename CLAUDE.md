# tucelos.github.io

Página de apresentação de Tuigg Barcelos: Astro estático, em português (`/`) e inglês (`/en/`), publicado no GitHub Pages.

## Atualizar o conteúdo

O conteúdo inteiro mora em `src/data/conteudo.ts`; os componentes só leem esse arquivo. Os comentários de cada bloco são a regra do que entra e do que ficou de fora de propósito: leia o bloco antes de mexer nele.

- Todo texto novo vai nos dois idiomas, `{ pt, en }`, em primeira pessoa. Rótulos fixos da interface ficam em `src/i18n/ui.ts`.
- Use os termos de `CONTEXT.md` (Publicação, Projeto, Experiência…). Termo novo ou com sentido novo: registre lá também.
- Toda mudança de conteúdo atualiza `site.atualizadoEm`.

Pronto quando `npm run build` termina sem erros e a mudança aparece em `/` e em `/en/`.

## Git

Commits saem com a identidade git do dono como autor único: a mensagem termina sem trailer de coautoria, porque o dono não quer o Claude na lista de colaboradores. Push na `main` publica o site, então cada push espera o OK explícito do dono.

## Decisões anteriores

- `docs/adr/`: decisões difíceis de reverter (ex.: Astro publicado pelo GitHub Actions).
- Branch `prototipo/visual`: protótipos de visual. A F virou o site; a D (bento escuro) é a alternativa que o dono pode querer retomar.
