import { useEffect, useState } from 'react';

export default function ToastNotification({ toast, onClose }) {
  const [isVisible, setIsVisible] = useState(Boolean(toast));

  useEffect(() => {
    setIsVisible(Boolean(toast));
    if (!toast) return undefined;

    const timerId = window.setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 3600);
    return () => window.clearTimeout(timerId);
  }, [toast, onClose]);

  function handleClose() {
    setIsVisible(false);
    onClose();
  }

  if (!toast || !isVisible) return null;

  return (
    <div className={`toast toast-${toast.type}`} role={toast.type === 'error' ? 'alert' : 'status'}>
      <div className="toast-symbol" aria-hidden="true">{toast.type === 'success' ? '✓' : 'i'}</div>
      <div>
        <strong>{toast.title}</strong>
        <p>{toast.message}</p>
      </div>
      <button className="toast-close" type="button" onClick={handleClose} aria-label="Fechar notificação">×</button>
    </div>
  );
}
