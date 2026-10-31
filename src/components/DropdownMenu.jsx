import { useEffect, useRef, useState } from 'react';

export default function DropdownMenu({ label, options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  function handleOptionClick(option) {
    onSelect(option);
    setIsOpen(false);
  }

  return (
    <div className="dropdown" ref={menuRef}>
      <button
        className="dropdown-trigger"
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((currentState) => !currentState)}
      >
        <span>{label}</span>
        <span className="dropdown-chevron" aria-hidden="true">⌄</span>
      </button>
      {isOpen && (
        <div className="dropdown-menu" role="menu">
          {options.map((option) => (
            <button
              className="dropdown-option"
              type="button"
              role="menuitem"
              key={option.value}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
