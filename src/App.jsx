import './App.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Accordion from './components/Accordion';
import BackToTopButton from './components/BackToTopButton';
import DropdownMenu from './components/DropdownMenu';
import MobileNavigation from './components/MobileNavigation';
import Pagination from './components/Pagination';
import ProgressOverview from './components/ProgressOverview';
import Tabs from './components/Tabs';
import TopicCard from './components/TopicCard';
import ToastNotification from './components/ToastNotification';
import { AppProvider, useAppContext } from './context/AppContext';
import { categoryOptions, faqItems, studyTopics, tabItems } from './data/content';

const TOPICS_PER_PAGE = 3;
const navigationItems = [
  { label: 'Minha trilha', href: '#trilha' },
  { label: 'Visão geral', href: '#visao-geral' },
  { label: 'Dúvidas', href: '#duvidas' },
];

function App() {
  const { completedCount } = useAppContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('Todas as categorias');
  const [toast, setToast] = useState(null);

  useEffect(() => {
    document.title = 'SkillSprint | Painel de aprendizagem';
  }, []);

  const filteredTopics = useMemo(() => {
    if (selectedCategory === 'Todas as categorias') return studyTopics;
    return studyTopics.filter((topic) => topic.category === selectedCategory);
  }, [selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredTopics.length / TOPICS_PER_PAGE));
  const visibleTopics = filteredTopics.slice((currentPage - 1) * TOPICS_PER_PAGE, currentPage * TOPICS_PER_PAGE);

  const showToast = useCallback((nextToast) => {
    setToast({ ...nextToast, id: Date.now() });
  }, []);

  function handleCategorySelect(option) {
    setSelectedCategory(option.value);
    setCurrentPage(1);
    showToast({
      type: 'success',
      title: 'Filtro aplicado',
      message: `Exibindo conteúdos de ${option.label.toLowerCase()}.`,
    });
  }

  function handlePageChange(page) {
    setCurrentPage(page);
    document.getElementById('topics-heading')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="SkillSprint - voltar ao início">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>Skill<span>Sprint</span></span>
        </a>
        <nav className="main-nav" aria-label="Navegação principal">
          <a className="active" href="#trilha">Minha trilha</a>
          <a href="#visao-geral">Visão geral</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <MobileNavigation items={navigationItems} />
        <div className="header-profile" aria-label="Perfil de Jorlan Heider">
          <span className="profile-avatar">JH</span>
          <span className="profile-name">Jorlan Heider</span>
        </div>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow">PAINEL DE APRENDIZAGEM</p>
            <h1 id="hero-heading">Pequenos passos.<br /><em>Grandes entregas.</em></h1>
            <p className="hero-text">Uma trilha prática para transformar conceitos de React em interfaces que as pessoas realmente gostam de usar.</p>
            <a className="primary-button" href="#trilha">Continuar trilha <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-note" aria-label="Resumo da trilha atual">
            <span className="note-line" aria-hidden="true" />
            <p>TRILHA ATUAL</p>
            <strong>Fundamentos<br />de React</strong>
            <span className="note-count">{completedCount}/{studyTopics.length} temas concluídos</span>
          </div>
        </section>

        <section className="progress-section content-width" aria-labelledby="progress-heading">
          <div className="section-heading compact-heading">
            <div>
              <p className="eyebrow">SEU MOMENTO</p>
              <h2 id="progress-heading">Progresso da trilha</h2>
            </div>
            <span className="progress-caption">Atualizado agora</span>
          </div>
          <ProgressOverview totalTopics={studyTopics.length} />
        </section>

        <section className="tabs-section content-width" id="visao-geral" aria-labelledby="overview-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">COMO FUNCIONA</p>
              <h2 id="overview-heading">Aprenda fazendo</h2>
            </div>
            <span className="section-index">01 <span>/</span> 03</span>
          </div>
          <Tabs tabs={tabItems} />
        </section>

        <section className="topics-section content-width" id="trilha" aria-labelledby="topics-heading">
          <div className="section-heading topics-heading">
            <div>
              <p className="eyebrow">CONTEÚDO DA TRILHA</p>
              <h2 id="topics-heading">Continue de onde parou</h2>
            </div>
            <DropdownMenu label={selectedCategory} options={categoryOptions} onSelect={handleCategorySelect} />
          </div>
          <div className="topic-grid">
            {visibleTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} onNotify={showToast} />
            ))}
          </div>
          <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        </section>

        <section className="faq-section content-width" id="duvidas" aria-labelledby="faq-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">PERGUNTAS FREQUENTES</p>
              <h2 id="faq-heading">Antes de seguir</h2>
            </div>
            <span className="section-index">02 <span>/</span> 03</span>
          </div>
          <Accordion items={faqItems} />
        </section>
      </main>

      <footer className="site-footer content-width">
        <div>
          <span className="footer-brand">SkillSprint</span>
          <p>Uma experiência de estudo construída com React.</p>
        </div>
        <p className="footer-note">Componentes, estado e propósito.</p>
      </footer>

      <ToastNotification toast={toast} onClose={() => setToast(null)} />
      <BackToTopButton />
    </div>
  );
}

export default function AppWithProvider() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}
