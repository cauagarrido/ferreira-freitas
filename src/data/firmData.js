export const FIRM_INFO = {
  brandName: 'Ferreira & Freitas',
  fullName: 'Ferreira & Freitas Advocacia e Consultoria Jurídica',
  tagline: 'Advocacia e Consultoria Jurídica',
  city: 'Salvador, BA',
  rating: {
    score: '5,0',
    reviewsCount: 6,
    source: 'Google',
  },
  contact: {
    phoneDisplay: '(71) 3022-7480',
    phoneInternational: '+55 71 3022-7480',
    phoneHref: 'tel:+557130227480',
    instagramHandle: '@ferreiraefreitasadvocacia',
    instagramUrl: 'https://www.instagram.com/ferreiraefreitasadvocacia',
  },
  officeAddress: {
    building: 'Condomínio Salvador Shopping Business',
    street: 'Alameda Salvador, 1057',
    neighborhood: 'Caminho das Árvores',
    cityState: 'Salvador - BA',
    zip: '41820-790',
    accessNote:
      'Cerca de 3 minutos de carro ou 12 minutos de transporte público a partir de Pernambués.',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Condominio+Salvador+Shopping+Business+Alameda+Salvador+1057+Salvador+BA+41820-790',
  },
  hours: [
    { days: 'Segunda a quinta-feira', time: '08h30 às 18h00' },
    { days: 'Sexta-feira', time: '08h00 às 18h00' },
  ],
  legalRegistration: {
    cnpj: '30.857.200/0001-26',
    razaoSocial: 'Ferreira & Freitas Advocacia e Consultoria Jurídica',
    openedAt: '22 de maio de 2018',
    status: 'Situação ativa',
    registeredAddress:
      'Av. Centenário, 2883, Edif. Vitória Center, Sala 301, Chame-Chame, Salvador - BA',
  },
};

export const PRACTICE_AREAS = [
  {
    id: 'previdenciario',
    title: 'Direito Previdenciário',
    summary:
      'Assessoria e acompanhamento em benefícios previdenciários, planejamentos de aposentadoria e revisões administrativas ou judiciais.',
    topics: [
      'Aposentadorias, pensões e auxílios junto ao INSS',
      'Planejamento previdenciário personalizado',
      'Revisões de benefícios e recursos administrativos',
    ],
  },
  {
    id: 'familia-sucessoes',
    title: 'Família e Sucessões',
    summary:
      'Condução técnica e acolhedora em demandas familiares, organização patrimonial e procedimentos sucessórios.',
    topics: [
      'Divórcios, guarda, pensão alimentícia e partilha',
      'Inventários judiciais e extrajudiciais em cartório',
      'Planejamento sucessório e testamentos',
    ],
  },
  {
    id: 'civel-consumidor',
    title: 'Cível e Direito do Consumidor',
    summary:
      'Proteção contratual, responsabilidade civil e defesa de direitos nas relações de consumo e obrigações cíveis.',
    topics: [
      'Elaboração, revisão e execução de contratos',
      'Ações indenizatórias e responsabilidade civil',
      'Demandas consumeristas e resolução de conflitos',
    ],
  },
  {
    id: 'trabalhista-imobiliario',
    title: 'Trabalhista e Imobiliário',
    summary:
      'Atuação consultiva e contenciosa nas relações de trabalho e segurança jurídica em negócios imobiliários.',
    topics: [
      'Consultoria trabalhista preventiva e contenciosa',
      'Contratos de compra, venda e locação de imóveis',
      'Regularização documental e análise de riscos imobiliários',
    ],
  },
];

export const PARTNERS = [
  {
    id: 'ferreira',
    name: 'Sócio Ferreira',
    role: 'Sócio Fundador · Cível, Consumidor e Imobiliário',
    bio: 'Atuação dedicada à consultoria contratual, direito imobiliário e defesa técnica em demandas cíveis e consumeristas em Salvador.',
    photoKey: 'ferreira',
  },
  {
    id: 'freitas',
    name: 'Sócia Freitas',
    role: 'Sócia Fundadora · Previdenciário, Família, Sucessões e Trabalhista',
    bio: 'Foco em planejamento previdenciário, direito de família e sucessões, além de orientação trabalhista estratégica para clientes e empresas.',
    photoKey: 'freitas',
  },
];
