import { useEffect, useState } from 'react';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 360);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleBackToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (!isVisible) return null;

  return (
    <button
      className="back-to-top"
      type="button"
      aria-label="Voltar ao topo da página"
      onClick={handleBackToTop}
    >
      <span className="back-to-top-icon" aria-hidden="true">↑</span>
    </button>
  );
}
