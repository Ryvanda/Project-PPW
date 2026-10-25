import React, { useEffect } from 'react';

export default function ToastNotification({ show, title, message, type = 'success', onClose, autoHideMs = 6000 }) {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      onClose();
    }, autoHideMs);
    return () => clearTimeout(timer);
  }, [show, autoHideMs, onClose]);

  if (!show) return null;

  const isSuccess = type === 'success';

  return (
    <div className="toast-container-fixed" style={{ pointerEvents: 'auto' }}>
      <div 
        className={`alert ${isSuccess ? 'alert-success border-success' : 'alert-danger border-danger'} shadow-lg d-flex align-items-start gap-3 rounded-3 mb-0`} 
        role="alert"
      >
        <div className="fs-3 text-success flex-shrink-0">
          <i className={`bi ${isSuccess ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill'}`}></i>
        </div>
        <div className="flex-grow-1">
          <div className="fw-bold mb-1 fs-6">{title}</div>
          <div className="small text-secondary" style={{ lineHeight: '1.45' }}>{message}</div>
        </div>
        <button 
          type="button" 
          className="btn-close ms-2 flex-shrink-0" 
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}
