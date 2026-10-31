export const studyTopics = [
  {
    id: 1,
    title: 'Fundamentos de componentes',
    category: 'React',
    duration: '18 min',
    description: 'Aprenda a dividir uma interface em partes pequenas, reutilizáveis e fáceis de testar.',
  },
  {
    id: 2,
    title: 'Estado e eventos',
    category: 'Prática',
    duration: '24 min',
    description: 'Use eventos para transformar a interação do usuário em mudanças previsíveis na interface.',
  },
  {
    id: 3,
    title: 'Props na prática',
    category: 'React',
    duration: '15 min',
    description: 'Passe dados para componentes filhos e mantenha cada responsabilidade bem definida.',
  },
  {
    id: 4,
    title: 'Acessibilidade para interfaces',
    category: 'Boas práticas',
    duration: '20 min',
    description: 'Construa experiências mais inclusivas com HTML semântico, foco visível e ARIA adequado.',
  },
  {
    id: 5,
    title: 'Hooks essenciais',
    category: 'React',
    duration: '22 min',
    description: 'Entenda como useState e useEffect ajudam a controlar dados e efeitos da aplicação.',
  },
  {
    id: 6,
    title: 'Composição de telas',
    category: 'Projeto',
    duration: '26 min',
    description: 'Combine componentes independentes para montar uma tela coerente e escalável.',
  },
  {
    id: 7,
    title: 'Feedback para o usuário',
    category: 'Boas práticas',
    duration: '12 min',
    description: 'Escolha mensagens objetivas para orientar o usuário durante cada ação.',
  },
  {
    id: 8,
    title: 'Revisão do projeto',
    category: 'Projeto',
    duration: '30 min',
    description: 'Faça uma revisão final de responsividade, clareza do código e comportamento da interface.',
  },
];

export const faqItems = [
  {
    id: 1,
    title: 'Como a trilha calcula o progresso?',
    content: 'O progresso é calculado a partir da quantidade de temas marcados como concluídos. Esse valor é compartilhado pelo Context API e chega à Barra de Progresso por props.',
  },
  {
    id: 2,
    title: 'O que devo revisar antes de apresentar o projeto?',
    content: 'Confira a responsividade em três larguras, teste os seis componentes, navegue pela paginação e confirme se as mensagens de feedback aparecem e desaparecem corretamente.',
  },
  {
    id: 3,
    title: 'Por que usar componentes separados?',
    content: 'A separação deixa o código mais fácil de compreender e permite que cada componente cuide de uma responsabilidade visual e comportamental específica.',
  },
  {
    id: 4,
    title: 'Como a acessibilidade foi considerada?',
    content: 'A aplicação usa landmarks semânticos, botões nativos, estados ARIA nos componentes interativos, foco visível e mensagens com papéis adequados para leitores de tela.',
  },
];

export const tabItems = [
  {
    id: 'visao-geral',
    label: 'Visão geral',
    eyebrow: 'Estratégia',
    title: 'Aprendizado com foco em prática',
    content: 'A trilha combina conceitos de React com pequenas ações. Assim, cada tema lido pode ser transformado em uma mudança observável na interface.',
    icon: '✦',
  },
  {
    id: 'metodo',
    label: 'Método',
    eyebrow: 'Processo',
    title: 'Uma etapa por vez, com feedback',
    content: 'O painel usa tarefas curtas, filtros e mensagens de retorno para tornar o próximo passo claro. O usuário sempre sabe o que concluiu e o que falta.',
    icon: '↗',
  },
  {
    id: 'resultado',
    label: 'Resultado',
    eyebrow: 'Evolução',
    title: 'Progresso que pode ser acompanhado',
    content: 'A porcentagem exibida na barra acompanha o estado global da trilha e é atualizada imediatamente quando uma tarefa é marcada ou desmarcada.',
    icon: '◒',
  },
];

export const categoryOptions = [
  { value: 'Todas as categorias', label: 'Todas as categorias' },
  { value: 'React', label: 'React' },
  { value: 'Prática', label: 'Prática' },
  { value: 'Boas práticas', label: 'Boas práticas' },
  { value: 'Projeto', label: 'Projeto' },
];
