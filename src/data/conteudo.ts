// ─────────────────────────────────────────────────────────────────────────────
// Conteúdo da página de apresentação. Para atualizar o site, edite só este arquivo.
//
// Cada texto que muda de idioma é escrito como { pt: '…', en: '…' }.
// Nomes próprios e títulos que ficam no idioma original são uma string simples.
// Os termos seguem o glossário em CONTEXT.md (Publicação, Projeto, Experiência…).
// ─────────────────────────────────────────────────────────────────────────────

import type { Texto } from '../i18n/ui';

// ── Configurações gerais ────────────────────────────────────────────────────

export const site = {
  /** Data da última revisão do conteúdo (AAAA-MM-DD), exibida no rodapé. */
  atualizadoEm: '2026-10-01',
  /**
   * Código do GoatCounter (contador de visitas invisível). Vazio = sem contador.
   * Depois de criar a conta em goatcounter.com, coloque aqui o código escolhido (ex.: 'tucelos').
   */
  goatcounter: '',
};

// ── Perfil ──────────────────────────────────────────────────────────────────

export const perfil = {
  nome: 'Tuigg Barcelos',
  nomeCompleto: 'Tuigg da Rosa Barcelos',
  /** Como o nome aparece nas listas de autores; é destacado nas publicações. */
  nomeEmCitacoes: 'Barcelos, T. R.',
  titulo: {
    pt: 'Pesquisa em segurança de agentes de IA',
    en: 'Research on AI agent security',
  },
  resumo: {
    pt: 'Investigo como agentes baseados em LLM podem ser induzidos a vazar dados, e como impedir isso.',
    en: 'I study how LLM-based agents can be tricked into leaking data, and how to prevent it.',
  },
  afiliacao: {
    pt: 'Mestrado Profissional em Engenharia de Software · UNIPAMPA · AI Horizon Labs',
    en: "Professional Master's in Software Engineering · UNIPAMPA · AI Horizon Labs",
  },
  local: { pt: 'Alegrete, RS', en: 'Alegrete, Brazil' },
  fotoAlt: {
    pt: 'Tuigg Barcelos sorrindo enquanto solda um circuito numa bancada, com impressoras 3D ao fundo.',
    en: 'Tuigg Barcelos smiling while soldering a circuit at a workbench, with 3D printers in the background.',
  },
  emailPrincipal: 'tuiggbarcelos.aluno@unipampa.edu.br',
  emailSecundario: 'tuiggrb9@gmail.com',
  /** Na ordem em que aparecem no topo. O primeiro ganha destaque. */
  perfis: [
    { icone: 'lattes', rotulo: { pt: 'Currículo Lattes', en: 'Lattes CV' }, url: 'http://lattes.cnpq.br/9627192907130585' },
    { icone: 'orcid', rotulo: 'ORCID', url: 'https://orcid.org/0009-0000-3520-102X' },
    { icone: 'scholar', rotulo: 'Google Scholar', url: 'https://scholar.google.com/citations?user=BvIlfYMAAAAJ' },
    { icone: 'github', rotulo: 'GitHub', url: 'https://github.com/Tucelos' },
    { icone: 'linkedin', rotulo: 'LinkedIn', url: 'https://www.linkedin.com/in/tuiggbarcelos/' },
    { icone: 'email', rotulo: { pt: 'E-mail', en: 'Email' }, url: 'mailto:tuiggbarcelos.aluno@unipampa.edu.br' },
  ],
} satisfies {
  nome: string;
  nomeCompleto: string;
  nomeEmCitacoes: string;
  titulo: Texto;
  resumo: Texto;
  afiliacao: Texto;
  local: Texto;
  fotoAlt: Texto;
  emailPrincipal: string;
  emailSecundario: string;
  perfis: { icone: NomeDoIcone; rotulo: Texto; url: string }[];
};

export type NomeDoIcone = 'lattes' | 'orcid' | 'scholar' | 'github' | 'linkedin' | 'email';

// ── Agora ───────────────────────────────────────────────────────────────────

export const agora = {
  pesquisaAtual: {
    pt: 'Ataques e defesas em agentes de IA que usam o Model Context Protocol (MCP).',
    en: 'Attacks and defenses in AI agents that use the Model Context Protocol (MCP).',
  },
  orientacao: {
    pt: 'Orientação de Silvio Ereno Quincozes e coorientação de Paulo Silas Severo de Souza.',
    en: 'Advised by Silvio Ereno Quincozes and co-advised by Paulo Silas Severo de Souza.',
  },
  /** O primeiro é o grupo principal. */
  grupos: [
    {
      nome: 'AI Horizon Labs',
      descricao: {
        pt: 'Laboratório de IA e Engenharia de Software da UNIPAMPA.',
        en: "UNIPAMPA's AI and Software Engineering lab.",
      },
      url: 'https://ai-horizon-labs.github.io/',
    },
    {
      nome: 'Grupo de Pesquisa em Defesa Cibernética',
      descricao: { pt: '@defesacibernetica.dc', en: 'Cyber Defense Research Group' },
      url: 'https://www.instagram.com/defesacibernetica.dc/',
    },
  ],
  bolsa: {
    titulo: { pt: 'CNPq SET-G na Messo IA', en: 'CNPq SET-G fellowship at Messo IA' },
    descricao: {
      pt: 'Startup aprovada no Programa Centelha.',
      en: 'A startup selected by the Centelha program.',
    },
  },
} satisfies {
  pesquisaAtual: Texto;
  orientacao: Texto;
  grupos: { nome: string; descricao: Texto; url: string }[];
  bolsa: { titulo: Texto; descricao: Texto };
};

// ── Sobre (um parágrafo por item) ───────────────────────────────────────────

export const sobre: Texto[] = [
  {
    pt: 'Me formei em Análise e Desenvolvimento de Sistemas no IFFar, fiz especialização em Ciência de Dados na UNIASSELVI e hoje faço o Mestrado Profissional em Engenharia de Software na UNIPAMPA, onde pesquiso no AI Horizon Labs.',
    en: "I graduated in Systems Analysis and Development at IFFar, completed a specialization in Data Science at UNIASSELVI, and I'm now pursuing a Professional Master's in Software Engineering at UNIPAMPA, where I do research at AI Horizon Labs.",
  },
  {
    pt: 'Antes da pesquisa, passei cinco anos cuidando de TI e comunicação no Exército Brasileiro, fiz estágio em blockchain na Compass UOL e a Residência em TIC no Instituto BRISA.',
    en: 'Before research, I spent five years running IT and communications for the Brazilian Army, interned as a blockchain developer at Compass UOL, and completed the ICT Residency program at Instituto BRISA.',
  },
];

// ── Pesquisa ────────────────────────────────────────────────────────────────

/** As mesmas três do Lattes. */
export const linhasDePesquisa: Texto[] = [
  { pt: 'Cibersegurança Inteligente', en: 'Intelligent Cybersecurity' },
  { pt: 'Inteligência Artificial Aplicada', en: 'Applied Artificial Intelligence' },
  { pt: 'Sistemas Distribuídos', en: 'Distributed Systems' },
];

/** Exibidas junto com as linhas de pesquisa. */
export const areasDeInteresse: Texto[] = [
  { pt: 'Engenharia de software aplicada', en: 'Applied software engineering' },
  { pt: 'Ciência de dados', en: 'Data science' },
  { pt: 'Inovação tecnológica', en: 'Technological innovation' },
  { pt: 'Tecnologia e educação', en: 'Technology and education' },
];

// ── Publicações ─────────────────────────────────────────────────────────────
// Só entram publicações já publicadas, como no Lattes e no Google Scholar.
// Ficou de fora, por escolha: o artigo do Chemicall no Brazilian Journal of Business (2026).
//
// DOIs dos artigos do SBSeg 2026, para quando passarem a funcionar (em 2026-10-01 ainda não abriam):
//   Data Exfiltration…  10.5753/sbseg.2026.28936          IoTEdu Core  10.5753/sbseg_estendido.2026.33721
//   KETRIN              10.5753/sbseg_estendido.2026.33724 Toward Agentic…  10.5753/sbseg_estendido.2026.33720
//   APEX                10.5753/sbseg_estendido.2026.29810

export type Publicacao = {
  titulo: string;
  /** Idioma em que o título está escrito. */
  idiomaDoTitulo: 'pt' | 'en';
  autores: string[];
  evento: Texto;
  /** Rótulo curto do evento, usado nos destaques. */
  sigla: string;
  ano: number;
  paginas: string;
  tipo: 'completo' | 'resumo';
  /** Aparece em "Publicações em destaque" (as marcadas com estrela no Lattes). */
  destaque?: boolean;
  /** Página do artigo (ou dos anais, quando não há link por artigo). */
  link?: string;
  linkEhDosAnais?: boolean;
  codigo?: string;
};

export const publicacoes: Publicacao[] = [
  {
    titulo: 'Data Exfiltration in Model Context Protocol (MCP)-Based Intelligent Agents: An Evaluation of Prompt Injection Vectors',
    idiomaDoTitulo: 'en',
    autores: ['Barcelos, T. R.', 'Quincozes, S. E.', 'Souza, P. S. S.'],
    evento: {
      pt: 'XXVI Simpósio Brasileiro de Cibersegurança (SBSeg)',
      en: 'XXVI Brazilian Symposium on Cybersecurity (SBSeg)',
    },
    sigla: 'SBSeg 2026',
    ano: 2026,
    paginas: '440–455',
    tipo: 'completo',
    destaque: true,
    link: 'https://sol.sbc.org.br/index.php/sbseg/article/view/44305',
    codigo: 'https://github.com/Tucelos/Teste_vulnerabilidade_MCP',
  },
  {
    titulo: 'Toward Agentic Intrusion Detection in the Internet of Things: Rule Generation and Live Validation for XRCE-DDS Attacks',
    idiomaDoTitulo: 'en',
    autores: ['Ciocca, M.', 'Ferreira, E. C.', 'Barcelos, T. R.', 'Quincozes, S. E.', 'Kreutz, D.', 'Souza, P. S. S.'],
    evento: {
      pt: 'Salão de Ferramentas do XXVI SBSeg (Anais Estendidos)',
      en: 'Tools Session, XXVI SBSeg (Extended Proceedings)',
    },
    sigla: 'SBSeg 2026',
    ano: 2026,
    paginas: '242–250',
    tipo: 'completo',
    destaque: true,
    link: 'https://sol.sbc.org.br/index.php/sbseg_estendido/article/view/44471',
    codigo: 'https://github.com/cwrricio/llm_rules_tk/tree/sbseg-2026',
  },
  {
    titulo: 'APEX: Agentic Pentesting Execution',
    idiomaDoTitulo: 'en',
    autores: ['Barcelos, T. R.', 'Quincozes, C. B.', 'Bellagamba, G. P.', 'Souza, P. S. S.', 'Quincozes, S. E.'],
    evento: {
      pt: 'Workshop de Trabalhos de Iniciação Científica e de Graduação (WTICG) do XXVI SBSeg (Anais Estendidos)',
      en: 'Undergraduate Research Workshop (WTICG), XXVI SBSeg (Extended Proceedings)',
    },
    sigla: 'SBSeg 2026',
    ano: 2026,
    paginas: '785–791',
    tipo: 'completo',
    link: 'https://sol.sbc.org.br/index.php/sbseg_estendido/article/view/44525',
  },
  {
    titulo: 'IoTEdu Core: Multi-IDS Correlation and Automated Containment of Attacks in Institutional IoT Networks',
    idiomaDoTitulo: 'en',
    autores: ['Ferreira, E. C.', 'Ciocca, M.', 'Fideles, D.', 'Barcelos, T. R.', 'Quincozes, S. E.', 'Kreutz, D.'],
    evento: {
      pt: 'Salão de Ferramentas do XXVI SBSeg (Anais Estendidos)',
      en: 'Tools Session, XXVI SBSeg (Extended Proceedings)',
    },
    sigla: 'SBSeg 2026',
    ano: 2026,
    paginas: '156–165',
    tipo: 'completo',
    link: 'https://sol.sbc.org.br/index.php/sbseg_estendido/article/view/44462',
  },
  {
    titulo: 'KETRIN: Elicitação Adaptativa de Conhecimento para Diagnóstico de Maturidade em Proteção de Dados',
    idiomaDoTitulo: 'pt',
    autores: ['Vargas, K. D. A. R.', 'Barcelos, T. R.', 'Quincozes, C. B.', 'Quincozes, S. E.', 'Souza, P. S. S.'],
    evento: {
      pt: 'Salão de Ferramentas do XXVI SBSeg (Anais Estendidos)',
      en: 'Tools Session, XXVI SBSeg (Extended Proceedings)',
    },
    sigla: 'SBSeg 2026',
    ano: 2026,
    paginas: '166–175',
    tipo: 'completo',
    link: 'https://sol.sbc.org.br/index.php/sbseg_estendido/article/view/44463',
  },
  {
    titulo: 'Chemicall: Sistema de gestão de produtos químicos para laboratórios de Institutos Federais',
    idiomaDoTitulo: 'pt',
    autores: ['Barcelos, T. R.', 'Roza, M. P.', 'Farias, A. C. A.'],
    evento: {
      pt: 'XV Mostra da Educação Profissional e Tecnológica (MEPT)',
      en: 'XV Professional and Technological Education Fair (MEPT)',
    },
    sigla: 'MEPT 2024',
    ano: 2024,
    paginas: '785–787',
    tipo: 'resumo',
    link: 'https://arandu.iffarroupilha.edu.br/handle/itemid/540',
    linkEhDosAnais: true,
    codigo: 'https://github.com/Tucelos/Chemicall',
  },
  {
    titulo: 'StockManager: um software para controle de estoques alimentícios no refeitório do IFFAR – Campus Alegrete',
    idiomaDoTitulo: 'pt',
    autores: ['Farias, A. C. A.', 'Santos, I. A. S.', 'Barcelos, T. R.'],
    evento: {
      pt: 'XV Mostra da Educação Profissional e Tecnológica (MEPT)',
      en: 'XV Professional and Technological Education Fair (MEPT)',
    },
    sigla: 'MEPT 2024',
    ano: 2024,
    paginas: '788–790',
    tipo: 'resumo',
    link: 'https://arandu.iffarroupilha.edu.br/handle/itemid/540',
    linkEhDosAnais: true,
  },
  {
    titulo: 'Caminhos para a docência na cultura digital: um framework para adoção do ensino híbrido na formação docente dos Institutos Federais',
    idiomaDoTitulo: 'pt',
    autores: ['Kemmerich, M.', 'Barcelos, T. R.', 'Roza, J. C.', 'Roza, M. P.'],
    evento: {
      pt: 'XIV Mostra da Educação Profissional e Tecnológica (MEPT)',
      en: 'XIV Professional and Technological Education Fair (MEPT)',
    },
    sigla: 'MEPT 2023',
    ano: 2023,
    paginas: '819–821',
    tipo: 'resumo',
    link: 'https://arandu.iffarroupilha.edu.br/handle/itemid/452',
    linkEhDosAnais: true,
  },
];

// ── Projetos ────────────────────────────────────────────────────────────────

export type Projeto = {
  nome: Texto;
  /** Texto curto na faixa colorida do cartão. */
  rotulo: Texto;
  descricao: Texto;
  /** Só nos projetos feitos em equipe. */
  meuPapel?: Texto;
  tecnologias: string[];
  url: string;
};

export const projetos: Projeto[] = [
  {
    nome: { pt: 'Teste de vulnerabilidade em agentes MCP', en: 'Vulnerability testing for MCP agents' },
    rotulo: { pt: 'Segurança de LLM', en: 'LLM security' },
    descricao: {
      pt: 'Prova de conceito que mede se agentes LLM conectados por MCP vazam dados sensíveis sob injeção de prompt. É o código do artigo do SBSeg 2026.',
      en: 'A proof of concept that measures whether LLM agents connected through MCP leak sensitive data under prompt injection. It is the code behind the SBSeg 2026 paper.',
    },
    tecnologias: ['Python', 'Agno', 'FastMCP'],
    url: 'https://github.com/Tucelos/Teste_vulnerabilidade_MCP',
  },
  {
    nome: 'Rules Farmer',
    rotulo: 'IDS · IoT',
    descricao: {
      pt: 'Agentes que transformam uma intenção em regras do Snort 3 e as validam contra ataques reais até convergir.',
      en: 'Agents that turn an intent into Snort 3 rules and validate them against real attacks until they converge.',
    },
    meuPapel: {
      pt: 'coautoria; executei os primeiros experimentos em lote e contribuí com os primeiros resultados e regras validadas.',
      en: 'co-author; I ran the first batch experiments and contributed the first set of results and validated rules.',
    },
    tecnologias: ['Python', 'Snort 3', 'Docker'],
    url: 'https://github.com/cwrricio/llm_rules_tk/tree/sbseg-2026',
  },
  {
    nome: 'Chemicall',
    rotulo: { pt: 'Sistema web · TCC', en: 'Web system · Thesis' },
    descricao: {
      pt: 'Gestão de reagentes químicos para laboratórios de Institutos Federais: validade, produtos controlados e relatórios. Foi meu TCC no IFFar.',
      en: 'Chemical reagent management for Federal Institute labs: expiry dates, controlled substances and reports. It was my undergraduate thesis at IFFar.',
    },
    tecnologias: ['PHP', 'MariaDB', 'Bootstrap'],
    url: 'https://github.com/Tucelos/Chemicall',
  },
  {
    nome: 'Projeto Aqui',
    rotulo: { pt: 'IoT · Biometria', en: 'IoT · Biometrics' },
    descricao: {
      pt: 'Chamada por biometria: leitores em Raspberry Pi publicam via MQTT para uma API FastAPI. Projeto em equipe da Residência em TIC.',
      en: 'Biometric attendance: Raspberry Pi readers publish over MQTT to a FastAPI backend. A team project from the ICT Residency program.',
    },
    meuPapel: {
      pt: 'integrei o backend ao MQTT, fiz a autenticação JWT e as APIs por perfil e coloquei a aplicação em contêineres com Docker Compose.',
      en: 'I integrated the backend with MQTT, built JWT authentication and role-based APIs, and containerized the stack with Docker Compose.',
    },
    tecnologias: ['FastAPI', 'MQTT', 'React', 'Docker'],
    url: 'https://github.com/Tucelos/Projeto_Aqui',
  },
];

export const maisProjetos = 'https://github.com/Tucelos?tab=repositories';

// ── Trajetória ──────────────────────────────────────────────────────────────

export type ItemDaTrajetoria = {
  periodo: Texto;
  titulo: Texto;
  lugar: Texto;
  detalhe?: Texto;
};

/** Do mais recente para o mais antigo. */
export const formacao: ItemDaTrajetoria[] = [
  {
    periodo: { pt: '2026 — em andamento', en: '2026 — in progress' },
    titulo: { pt: 'Mestrado Profissional em Engenharia de Software', en: "Professional Master's in Software Engineering" },
    lugar: 'UNIPAMPA',
    detalhe: {
      pt: 'Orientação de Silvio Ereno Quincozes; coorientação de Paulo Silas Severo de Souza.',
      en: 'Advised by Silvio Ereno Quincozes; co-advised by Paulo Silas Severo de Souza.',
    },
  },
  {
    periodo: '2026',
    titulo: { pt: 'Especialização em Ciência de Dados', en: 'Specialization in Data Science' },
    lugar: 'UNIASSELVI',
  },
  {
    periodo: '2022 — 2025',
    titulo: { pt: 'Tecnologia em Análise e Desenvolvimento de Sistemas', en: 'Technology degree in Systems Analysis and Development' },
    lugar: 'IFFar',
    detalhe: {
      pt: 'TCC: Chemicall, com orientação de Marcelo Pedroso da Roza.',
      en: 'Thesis: Chemicall, advised by Marcelo Pedroso da Roza.',
    },
  },
];

/** Do mais recente para o mais antigo. */
export const experiencia: ItemDaTrajetoria[] = [
  {
    periodo: { pt: '2026 — hoje', en: '2026 — present' },
    titulo: { pt: 'Bolsista CNPq SET-G', en: 'CNPq SET-G fellow' },
    lugar: 'Messo IA',
    detalhe: {
      pt: 'Startup aprovada no Programa Centelha. Auditoria de segurança, cibersegurança inteligente e desenvolvimento de software seguro.',
      en: 'A startup selected by the Centelha program. Security auditing, intelligent cybersecurity and secure software development.',
    },
  },
  {
    periodo: '2025 — 2026',
    titulo: { pt: 'Residência em TIC', en: 'ICT Residency' },
    lugar: 'Instituto BRISA',
    detalhe: {
      pt: 'Desenvolvimento full-stack, APIs com bancos de dados relacionais e protótipos de IoT, com Scrum e Kanban.',
      en: 'Full-stack development, APIs backed by relational databases and IoT prototypes, using Scrum and Kanban.',
    },
  },
  {
    periodo: '2024 — 2026',
    titulo: { pt: 'Arte gráfica e produção', en: 'Graphic and production artist' },
    lugar: 'Alenro Gráfica e Comunicação Visual',
    detalhe: {
      pt: 'Peças gráficas e de comunicação visual, além de apoio aos sistemas internos.',
      en: 'Graphic and visual communication pieces, plus support for internal systems.',
    },
  },
  {
    periodo: '2023',
    titulo: { pt: 'Estágio em desenvolvimento blockchain', en: 'Blockchain developer intern' },
    lugar: 'Compass UOL',
    detalhe: {
      pt: 'Back-end de uma plataforma educacional com contratos inteligentes em Solidity e APIs em Node.js, no programa de bolsas com AWS e IFFar.',
      en: 'Back end for an educational platform with Solidity smart contracts and Node.js APIs, in a scholarship program with AWS and IFFar.',
    },
  },
  {
    periodo: '2019 — 2024',
    titulo: { pt: 'TI e Comunicação', en: 'IT and communications' },
    lugar: { pt: 'Exército Brasileiro', en: 'Brazilian Army' },
    detalhe: {
      pt: 'Sites, redes sociais e infraestrutura de TI da organização.',
      en: "The organization's websites, social media and IT infrastructure.",
    },
  },
];

// ── Reconhecimentos e atuação institucional ─────────────────────────────────

export const reconhecimentos: { ano?: number; texto: Texto }[] = [
  {
    ano: 2026,
    texto: { pt: 'Banca de TCC em Engenharia de Software na UNIPAMPA', en: 'Undergraduate thesis committee in Software Engineering at UNIPAMPA' },
  },
  {
    ano: 2024,
    texto: { pt: '1º lugar na Competição de Programação BugCup, IFFar Campus Alegrete', en: '1st place in the BugCup programming competition, IFFar Alegrete campus' },
  },
  {
    ano: 2024,
    texto: { pt: 'Organização da XIII Semana Tech do curso de ADS do IFFar', en: "Organizer of the 13th Tech Week of IFFar's Systems Analysis and Development program" },
  },
  {
    texto: {
      pt: 'Presidência da Câmara Especializada de Extensão, Pesquisa e Pós-Graduação do Conselho Superior do IFFar',
      en: "Chair of the Extension, Research and Graduate Studies Committee of IFFar's Higher Council",
    },
  },
  {
    texto: { pt: 'Presidência do Diretório Acadêmico por três anos', en: 'President of the student union (Diretório Acadêmico) for three years' },
  },
  {
    texto: { pt: 'Associação de Pós-Graduandos (APG) da UNIPAMPA', en: "UNIPAMPA's Graduate Student Association (APG)" },
  },
  {
    texto: {
      pt: 'Certificados de Honra ao Mérito por serviços prestados ao IFFar e ao Exército Brasileiro',
      en: 'Certificates of Honor for service to IFFar and the Brazilian Army',
    },
  },
];
