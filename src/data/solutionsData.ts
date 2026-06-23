export interface SolutionSection {
  title: string;
  description?: string;
  items: string[];
}

export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  text?: string; // Mantido para compatibilidade com outros componentes se necessário
  paragraphs: string[];
  sections: SolutionSection[];
  images: string[];
}

export const solutionsData: Solution[] = [
  {
    id: 'educacao',
    title: 'Educação e Conscientização Energética',
    subtitle: 'Formando cidadãos mais conscientes para um futuro sustentável',
    text: 'Desenvolvemos programas educacionais que promovem o uso consciente da energia elétrica, sustentabilidade, economia circular e cidadania ambiental.',
    paragraphs: [
      'Desenvolvemos programas educacionais que promovem o uso consciente da energia elétrica, sustentabilidade, economia circular e cidadania ambiental.',
      'Nossas metodologias utilizam capacitação de professores, formação de alunos, experiências imersivas, gamificação, realidade virtual, teatro educativo e tecnologias interativas para estimular mudanças de comportamento e a construção de uma cultura sustentável.'
    ],
    sections: [
      {
        title: 'Principais Atividades',
        items: [
          'Programas educacionais em escolas',
          'Formação de professores',
          'Oficinas e palestras educativas',
          'Teatro educativo',
          'Realidade virtual',
          'Jogos e atividades interativas',
          'Educação ambiental',
          'Consumo consciente de energia'
        ]
      },
      {
        title: 'Projetos Desenvolvidos',
        items: [
          'Enel Compartilha Energia na Escola',
          'E+ Educação',
          'Programas Educacionais Comunitários'
        ]
      }
    ],
    images: [
      '/site-poweresco/img/imagem01_nossassolucoes.png',
      '/site-poweresco/img/imagem01_casedesucessos.png',
      '/site-poweresco/img/imagemquemsomos.png'
    ]
  },
  {
    id: 'eficiencia',
    title: 'Eficiência Energética',
    subtitle: 'Economia para as famílias e sustentabilidade para as comunidades',
    text: 'Executamos programas de eficiência energética que promovem a redução do consumo de energia, economia financeira e melhoria da qualidade de vida da população.',
    paragraphs: [
      'Executamos programas de eficiência energética que promovem a redução do consumo de energia, economia financeira e melhoria da qualidade de vida da população.',
      'Atuamos desde a mobilização dos beneficiários até a logística operacional, substituição de equipamentos, monitoramento de resultados e descarte ambientalmente adequado.'
    ],
    sections: [
      {
        title: 'Principais Atividades',
        items: [
          'Troca de geladeiras',
          'Troca de lâmpadas LED',
          'Diagnósticos energéticos',
          'Campanhas de consumo consciente',
          'Medição e verificação de resultados',
          'Gestão logística e operacional',
          'Atendimento aos beneficiários'
        ]
      },
      {
        title: 'Projetos Desenvolvidos',
        items: [
          'Programas de Troca de Geladeiras',
          'Programas de Troca de Lâmpadas',
          'Eficiência Energética Residencial'
        ]
      }
    ],
    images: [
      '/site-poweresco/img/imagem01_nossassolucoes.png',
      '/site-poweresco/img/imagem01_casedesucessos.png',
      '/site-poweresco/img/imagemquemsomos.png'
    ]
  },
  {
    id: 'engajamento',
    title: 'Engajamento Comunitário',
    subtitle: 'Construindo relações de confiança e transformação social',
    text: 'A Power Esco desenvolve estratégias de relacionamento comunitário que fortalecem o diálogo entre concessionárias, instituições e comunidades.',
    paragraphs: [
      'A Power Esco desenvolve estratégias de relacionamento comunitário que fortalecem o diálogo entre concessionárias, instituições e comunidades.',
      'Nossa atuação promove participação social, construção coletiva de soluções, fortalecimento de lideranças e desenvolvimento sustentável dos territórios.'
    ],
    sections: [
      {
        title: 'Rede de Lideranças Comunitárias',
        description: 'Criamos e fortalecemos redes compostas por associações de moradores, organizações sociais, instituições de ensino e representantes comunitários.',
        items: [
          'Mobilização de lideranças',
          'Mediação de diálogo',
          'Formação de multiplicadores',
          'Capacitação em sustentabilidade',
          'Desenvolvimento de projetos comunitários',
          'Articulação institucional'
        ]
      },
      {
        title: 'Mobilização Social e Territorial',
        items: [
          'Mapeamento de stakeholders',
          'Sensibilização comunitária',
          'Relacionamento institucional',
          'Comunicação social',
          'Apoio à implantação de projetos'
        ]
      },
      {
        title: 'Eventos e Experiências Comunitárias',
        items: [
          'Feiras de sustentabilidade',
          'Eventos comunitários',
          'Campanhas educativas',
          'Ações itinerantes',
          'Experiências interativas',
          'Ativações em espaços públicos'
        ]
      },
      {
        title: 'Impacto Gerado',
        items: [
          'Fortalecimento do relacionamento comunitário',
          'Formação de lideranças',
          'Ampliação dos canais de diálogo',
          'Redução de conflitos',
          'Desenvolvimento territorial sustentável'
        ]
      }
    ],
    images: [
      '/site-poweresco/img/imagem01_nossassolucoes.png',
      '/site-poweresco/img/imagem01_casedesucessos.png',
      '/site-poweresco/img/imagemquemsomos.png'
    ]
  },
  {
    id: 'desenvolvimento-social',
    title: 'Desenvolvimento Social e Empregabilidade',
    subtitle: 'Capacitando pessoas e ampliando oportunidades',
    text: 'Desenvolvemos programas de qualificação profissional, empregabilidade e inclusão produtiva que contribuem para o desenvolvimento econômico e social das comunidades.',
    paragraphs: [
      'Desenvolvemos programas de qualificação profissional, empregabilidade e inclusão produtiva que contribuem para o desenvolvimento econômico e social das comunidades.',
      'Nossas iniciativas fortalecem competências técnicas e comportamentais, ampliando oportunidades de trabalho, geração de renda e crescimento profissional.'
    ],
    sections: [
      {
        title: 'Empregabilidade e Inserção Profissional',
        items: [
          'Preparação para entrevistas',
          'Elaboração de currículo',
          'Planejamento de carreira',
          'Desenvolvimento comportamental',
          'Encaminhamento para vagas e estágios'
        ]
      },
      {
        title: 'Formação Profissional',
        items: [
          'Formação de eletricistas',
          'Cursos profissionalizantes',
          'Capacitações técnicas',
          'Segurança com energia elétrica',
          'Formação para serviços especializados'
        ]
      },
      {
        title: 'Projetos Desenvolvidos',
        items: [
          'Enel Compartilha Oportunidade',
          'E+ Profissional'
        ]
      }
    ],
    images: [
      '/site-poweresco/img/imagem01_nossassolucoes.png',
      '/site-poweresco/img/imagem01_casedesucessos.png',
      '/site-poweresco/img/imagemquemsomos.png'
    ]
  },
  {
    id: 'economia-circular',
    title: 'Economia Circular e Negócios de Impacto',
    subtitle: 'Transformando potencial local em oportunidades sustentáveis',
    text: 'Promovemos iniciativas que unem empreendedorismo, geração de renda, reaproveitamento de materiais e desenvolvimento de cadeias produtivas sustentáveis.',
    paragraphs: [
      'Promovemos iniciativas que unem empreendedorismo, geração de renda, reaproveitamento de materiais e desenvolvimento de cadeias produtivas sustentáveis.',
      'Apoiamos empreendedores, grupos produtivos e negócios comunitários na construção de oportunidades econômicas alinhadas aos princípios da sustentabilidade.'
    ],
    sections: [
      {
        title: 'Formação Empreendedora',
        items: [
          'Desenvolvimento de negócios',
          'Educação financeira',
          'Planejamento empresarial',
          'Gestão de pequenos empreendimentos'
        ]
      },
      {
        title: 'Economia Circular',
        items: [
          'Reaproveitamento de materiais',
          'Upcycling',
          'Gestão de resíduos sólidos',
          'Produção sustentável'
        ]
      },
      {
        title: 'Grupos Produtivos',
        items: [
          'Diagnóstico territorial',
          'Formação de grupos',
          'Acompanhamento produtivo',
          'Desenvolvimento de identidade local'
        ]
      },
      {
        title: 'Comercialização',
        items: [
          'Feiras e bazares',
          'Exposição de produtos',
          'Desenvolvimento de canais de venda',
          'Conexão com mercados'
        ]
      },
      {
        title: 'Projetos Desenvolvidos',
        items: [
          'Enel Compartilha Eficiência (Empreendedorismo)',
          'Programas de Economia Circular',
          'Projetos de Geração de Renda'
        ]
      }
    ],
    images: [
      '/site-poweresco/img/imagem01_nossassolucoes.png',
      '/site-poweresco/img/imagem01_casedesucessos.png',
      '/site-poweresco/img/imagemquemsomos.png'
    ]
  },
  {
    id: 'desenvolvimento-humano',
    title: 'Desenvolvimento Humano e Transformação Social',
    subtitle: 'Pessoas no centro da transformação sustentável',
    text: 'Promovemos iniciativas voltadas ao fortalecimento da cidadania, autonomia, protagonismo social e desenvolvimento comunitário.',
    paragraphs: [
      'Promovemos iniciativas voltadas ao fortalecimento da cidadania, autonomia, protagonismo social e desenvolvimento comunitário.',
      'Por meio de oficinas, capacitações e ações educativas, estimulamos mudanças de comportamento e o fortalecimento de vínculos comunitários.'
    ],
    sections: [
      {
        title: 'Protagonismo Feminino',
        description: 'Programas voltados ao fortalecimento das mulheres como agentes multiplicadoras de conhecimento e transformação social. Temas trabalhados:',
        items: [
          'Consumo consciente',
          'Sustentabilidade',
          'Educação financeira',
          'Direitos do consumidor',
          'Cidadania',
          'Segurança com energia elétrica'
        ]
      },
      {
        title: 'Educação para Cidadania',
        items: [
          'Participação social',
          'Ética',
          'Direitos e deveres',
          'Desenvolvimento comunitário'
        ]
      },
      {
        title: 'Formação de Multiplicadores',
        items: [
          'Lideranças locais',
          'Agentes comunitários',
          'Mobilizadores sociais'
        ]
      },
      {
        title: 'Projetos Desenvolvidos',
        items: [
          'Oficinas para Mulheres',
          'Programas de Desenvolvimento Comunitário',
          'Formação de Multiplicadores Sociais'
        ]
      }
    ],
    images: [
      '/site-poweresco/img/imagem01_nossassolucoes.png',
      '/site-poweresco/img/imagem01_casedesucessos.png',
      '/site-poweresco/img/imagemquemsomos.png'
    ]
  },
  {
    id: 'sustentabilidade-esg',
    title: 'Sustentabilidade e ESG',
    subtitle: 'Estratégias sustentáveis que geram valor para empresas e comunidades',
    text: 'Desenvolvemos iniciativas alinhadas às melhores práticas ESG, integrando educação, responsabilidade ambiental, eficiência energética, desenvolvimento social e engajamento comunitário.',
    paragraphs: [
      'Desenvolvemos iniciativas alinhadas às melhores práticas ESG, integrando educação, responsabilidade ambiental, eficiência energética, desenvolvimento social e engajamento comunitário.',
      'Nossos projetos contribuem diretamente para metas corporativas de sustentabilidade e para os Objetivos de Desenvolvimento Sustentável da ONU.'
    ],
    sections: [
      {
        title: 'Temas Trabalhados',
        items: [
          'Agenda 2030',
          'ODS',
          'Economia Circular',
          'Consumo Consciente',
          'Energia Limpa e Acessível',
          'Educação de Qualidade',
          'Desenvolvimento Comunitário',
          'Inclusão Social'
        ]
      }
    ],
    images: [
      '/site-poweresco/img/imagem01_nossassolucoes.png',
      '/site-poweresco/img/imagem01_casedesucessos.png',
      '/site-poweresco/img/imagemquemsomos.png'
    ]
  },
  {
    id: 'gestao-projetos',
    title: 'Gestão Integrada de Projetos',
    subtitle: 'Planejamento, execução e resultados',
    text: 'Oferecemos gestão completa de projetos, desde a concepção estratégica até a execução operacional e avaliação de impacto.',
    paragraphs: [
      'Oferecemos gestão completa de projetos, desde a concepção estratégica até a execução operacional e avaliação de impacto.',
      'Nossa metodologia garante qualidade, eficiência, controle e transparência in todas as etapas.'
    ],
    sections: [
      {
        title: 'Principais Entregas',
        items: [
          'Planejamento estratégico',
          'Gestão operacional',
          'Gestão de equipes',
          'Controle logístico',
          'Monitoramento de indicadores',
          'Relatórios técnicos',
          'Prestação de contas',
          'Avaliação de impacto'
        ]
      }
    ],
    images: [
      '/site-poweresco/img/imagem01_nossassolucoes.png',
      '/site-poweresco/img/imagem01_casedesucessos.png',
      '/site-poweresco/img/imagemquemsomos.png'
    ]
  }
];
