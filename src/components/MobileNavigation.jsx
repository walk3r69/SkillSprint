import { useEffect, useRef, useState } from 'react';

export default function MobileNavigation({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  function handleLinkClick() {
    setIsOpen(false);
  }

  return (
    <div className="mobile-navigation" ref={menuRef}>
      <button
        className="mobile-navigation-toggle"
        type="button"
        ref={toggleRef}
        aria-label={isOpen ? 'Fechar menu principal' : 'Abrir menu principal'}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        onClick={() => setIsOpen((currentState) => !currentState)}
      >
        <span className="mobile-navigation-icon" aria-hidden="true">
          {isOpen ? '×' : '☰'}
        </span>
        <span className="mobile-navigation-label">Menu</span>
      </button>

      {isOpen && (
        <nav className="mobile-navigation-panel" id="mobile-navigation-panel" aria-label="Navegação principal mobile">
          {items.map((item) => (
            <a className="mobile-navigation-link" href={item.href} key={item.href} onClick={handleLinkClick}>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
