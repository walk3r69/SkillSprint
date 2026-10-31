import { useState } from 'react';

export default function Tabs({ tabs }) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id ?? '');
  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];

  if (!activeTab) return null;

  return (
    <div className="tabs">
      <div className="tab-list" role="tablist" aria-label="Informações sobre a trilha">
        {tabs.map((tab) => (
          <button
            className={tab.id === activeTab.id ? 'tab-button is-active' : 'tab-button'}
            type="button"
            role="tab"
            key={tab.id}
            aria-selected={tab.id === activeTab.id}
            aria-controls={`tab-panel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => setActiveTabId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <section className="tab-panel" role="tabpanel" id={`tab-panel-${activeTab.id}`} aria-labelledby={`tab-${activeTab.id}`}>
        <div className="tab-icon" aria-hidden="true">{activeTab.icon}</div>
        <div>
          <p className="eyebrow">{activeTab.eyebrow}</p>
          <h3>{activeTab.title}</h3>
          <p>{activeTab.content}</p>
        </div>
      </section>
    </div>
  );
}
