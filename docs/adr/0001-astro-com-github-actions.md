# Astro, publicado pelo GitHub Actions

O site é gerado com Astro e publicado no GitHub Pages por um workflow do GitHub Actions, em vez de HTML puro ou do Jekyll embutido no Pages. O conteúdo precisa ficar separado do layout (editável por Tuigg ou por uma IA), existir em português e inglês e ter espaço para páginas novas no futuro. HTML puro obrigaria a duplicar o HTML por idioma ou a carregar o texto por JavaScript; o Jekyll do Pages é antigo, aceita poucos plugins e não roda localmente sem Ruby.

## Consequências

- A origem do GitHub Pages no repositório precisa ser "GitHub Actions", e não "Deploy from a branch".
- Rodar o site localmente exige Node.
