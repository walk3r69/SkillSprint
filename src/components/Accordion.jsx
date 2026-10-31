import { useState } from 'react';

export default function Accordion({ items }) {
  const [openItemId, setOpenItemId] = useState(null);

  function handleToggle(itemId) {
    setOpenItemId((currentId) => (currentId === itemId ? null : itemId));
  }

  return (
    <div className="accordion-list">
      {items.map((item) => {
        const isOpen = openItemId === item.id;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <article className={`accordion-item ${isOpen ? 'is-open' : ''}`} key={item.id}>
            <h3>
              <button
                className="accordion-trigger"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => handleToggle(item.id)}
              >
                <span>{item.title}</span>
                <span className="accordion-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>
            </h3>
            <div
              className="accordion-panel"
              id={panelId}
              role="region"
              aria-hidden={!isOpen}
            >
              <p>{item.content}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
