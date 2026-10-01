// Idiomas do site e textos fixos da interface (rótulos, títulos de seção).
// O conteúdo em si (publicações, projetos, trajetória…) fica em src/data/conteudo.ts.

export const idiomas = {
  'pt-br': { lang: 'pt-BR', og: 'pt_BR', caminho: '/' },
  en: { lang: 'en', og: 'en_US', caminho: '/en/' },
} as const;

export type Idioma = keyof typeof idiomas;

/** Texto bilíngue. Use uma string simples quando for igual nos dois idiomas (nomes, títulos originais). */
export type Texto = string | { pt: string; en: string };

export function traduzir(texto: Texto, idioma: Idioma): string {
  if (typeof texto === 'string') return texto;
  return idioma === 'en' ? texto.en : texto.pt;
}

export function outroIdioma(idioma: Idioma): Idioma {
  return idioma === 'en' ? 'pt-br' : 'en';
}

const pt = {
  'meta.descricao':
    'Tuigg Barcelos pesquisa a segurança de agentes de IA baseados em LLM no Mestrado Profissional em Engenharia de Software da UNIPAMPA, no AI Horizon Labs.',
  'a11y.pular': 'Pular para o conteúdo',
  'nav.rotulo': 'Seções',
  'nav.agora': 'Agora',
  'nav.pesquisa': 'Pesquisa',
  'nav.publicacoes': 'Publicações',
  'nav.projetos': 'Projetos',
  'nav.trajetoria': 'Trajetória',
  'nav.contato': 'Contato',
  'id.agora': 'agora',
  'id.pesquisa': 'pesquisa',
  'id.publicacoes': 'publicacoes',
  'id.projetos': 'projetos',
  'id.trajetoria': 'trajetoria',
  'id.contato': 'contato',
  'idioma.sigla': 'EN',
  'idioma.trocar': 'Read this page in English',
  'tema.alternar': 'Alternar entre tema claro e escuro',
  'topo.perfis': 'Perfis acadêmicos e profissionais',
  'topo.rolar': 'Role',
  'agora.titulo': 'Agora',
  'agora.pesquisaAtual': 'Pesquisa atual',
  'agora.grupos': 'Grupos de pesquisa',
  'agora.principal': 'principal',
  'agora.bolsa': 'Bolsa',
  'sobre.titulo': 'Sobre',
  'pesquisa.linhas': 'Linhas de pesquisa',
  'pesquisa.areas': 'Linhas de pesquisa e áreas de interesse',
  'pub.destaque': 'Publicações em destaque',
  'pub.todas': 'Ver todas as {n} publicações',
  'pub.completos': 'Trabalhos completos em anais de eventos',
  'pub.resumos': 'Resumos expandidos em anais de eventos',
  'pub.artigo': 'artigo',
  'pub.anais': 'anais',
  'pub.codigo': 'código',
  'pub.paginas': 'p.',
  'proj.titulo': 'Projetos',
  'proj.meuPapel': 'Meu papel:',
  'proj.mais': 'Mais projetos no GitHub',
  'traj.titulo': 'Trajetória',
  'traj.formacao': 'Formação',
  'traj.experiencia': 'Experiência',
  'rec.titulo': 'Reconhecimentos e atuação institucional',
  'contato.titulo': 'Contato',
  'contato.ou': 'ou',
  'rodape.atualizado': 'Atualizado em',
  'rodape.feito': 'Feito com Astro',
  'erro.titulo': 'Página não encontrada',
  'erro.texto': 'O endereço que você abriu não existe aqui.',
  'erro.voltar': 'Voltar para o início',
};

type ChaveDaInterface = keyof typeof pt;

const en: Record<ChaveDaInterface, string> = {
  'meta.descricao':
    "Tuigg Barcelos researches the security of LLM-based AI agents in UNIPAMPA's Professional Master's in Software Engineering, at AI Horizon Labs.",
  'a11y.pular': 'Skip to content',
  'nav.rotulo': 'Sections',
  'nav.agora': 'Now',
  'nav.pesquisa': 'Research',
  'nav.publicacoes': 'Publications',
  'nav.projetos': 'Projects',
  'nav.trajetoria': 'Background',
  'nav.contato': 'Contact',
  'id.agora': 'now',
  'id.pesquisa': 'research',
  'id.publicacoes': 'publications',
  'id.projetos': 'projects',
  'id.trajetoria': 'background',
  'id.contato': 'contact',
  'idioma.sigla': 'PT',
  'idioma.trocar': 'Ler esta página em português',
  'tema.alternar': 'Switch between light and dark theme',
  'topo.perfis': 'Academic and professional profiles',
  'topo.rolar': 'Scroll',
  'agora.titulo': 'Now',
  'agora.pesquisaAtual': 'Current research',
  'agora.grupos': 'Research groups',
  'agora.principal': 'main',
  'agora.bolsa': 'Fellowship',
  'sobre.titulo': 'About',
  'pesquisa.linhas': 'Research lines',
  'pesquisa.areas': 'Research lines and areas of interest',
  'pub.destaque': 'Selected publications',
  'pub.todas': 'See all {n} publications',
  'pub.completos': 'Full papers in conference proceedings',
  'pub.resumos': 'Extended abstracts in conference proceedings',
  'pub.artigo': 'paper',
  'pub.anais': 'proceedings',
  'pub.codigo': 'code',
  'pub.paginas': 'pp.',
  'proj.titulo': 'Projects',
  'proj.meuPapel': 'My role:',
  'proj.mais': 'More projects on GitHub',
  'traj.titulo': 'Background',
  'traj.formacao': 'Education',
  'traj.experiencia': 'Experience',
  'rec.titulo': 'Awards and institutional roles',
  'contato.titulo': 'Contact',
  'contato.ou': 'or',
  'rodape.atualizado': 'Updated on',
  'rodape.feito': 'Built with Astro',
  'erro.titulo': 'Page not found',
  'erro.texto': "The address you opened doesn't exist here.",
  'erro.voltar': 'Back to the home page',
};

const textos: Record<Idioma, Record<ChaveDaInterface, string>> = { 'pt-br': pt, en };

/** Devolve uma função que traduz as chaves de interface para o idioma da página. */
export function textosDaInterface(idioma: Idioma) {
  return (chave: ChaveDaInterface) => textos[idioma][chave];
}
