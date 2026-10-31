# SkillSprint - atividade React

Aplicação web responsiva para a atividade de React. O projeto foi construído com React, ReactDOM, Vite e CSS puro, sem biblioteca visual externa.

## Como executar

```bash
npm install
npm start
```

O projeto inicia o Vite na porta `3000`. Também podemos usar `npm run dev` para executar manualmente. Para gerar a versão de produção:

```bash
npm run build
```

## Estrutura principal

- `src/App.jsx`: componente principal que orquestra a tela, filtros, paginação e feedbacks.
- `src/App.js`: entrada compatível mantida com o nome solicitado no enunciado.
- `src/components/Accordion.jsx`: itens expansíveis com apenas um item aberto por vez.
- `src/components/Pagination.jsx`: navegação por página anterior, próxima e páginas específicas.
- `src/components/ProgressBar.jsx`: barra que recebe o progresso por props.
- `src/components/ProgressOverview.jsx`: resumo que consome o estado global e passa o percentual para a barra.
- `src/components/Tabs.jsx`: abas com conteúdo correspondente e estado local.
- `src/components/DropdownMenu.jsx`: menu com abertura, fechamento por seleção e clique externo.
- `src/components/MobileNavigation.jsx`: menu principal responsivo com botão, todas as opções, Escape e clique externo.
- `src/components/BackToTopButton.jsx`: botão acessível que aparece após a rolagem e retorna suavemente ao topo.
- `src/components/ToastNotification.jsx`: mensagem temporária com fechamento manual e automático.
- `src/components/TopicCard.jsx`: cartão de tema que consome o estado global para concluir tarefas.
- `src/context/AppContext.jsx`: Context API usada como desafio extra para compartilhar as tarefas concluídas.
- `ROTEIRO_VIDEO_DETALHADO.md`: roteiro operacional com cliques exatos na interface e buscas exatas no código.
- `src/data/content.js`: dados apresentados nos componentes.
- `src/styles.css`: layout responsivo, semântica visual e estados de foco.

## Requisitos atendidos

- Seis componentes visuais obrigatórios implementados como componentes React.
- Uso de props, `useState`, `useEffect`, eventos e Context API compartilhando tarefas entre cartões e progresso.
- HTML semântico, atributos ARIA e foco visível.
- Responsividade para desktop, tablet e smartphone.
- Menu principal mobile sem esconder as opções de navegação.
- Botão de retorno ao topo para facilitar a navegação em páginas longas.
- Código modular e sem dependências de UI desnecessárias.
- Configuração de GitHub Codespaces incluída.
