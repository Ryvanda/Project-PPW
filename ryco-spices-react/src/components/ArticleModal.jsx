import React, { useEffect } from 'react';

export default function ArticleModal({ article, show, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && show) {
        onClose();
      }
    };
    if (show) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [show, onClose]);

  if (!show || !article) return null;

  return (
    <>
      <div 
        className="modal fade show d-block" 
        tabIndex="-1" 
        role="dialog" 
        aria-labelledby="articleModalTitle"
        aria-modal="true"
        style={{ backgroundColor: 'rgba(18, 28, 11, 0.75)', zIndex: 1060 }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
          <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
            {/* Modal Header */}
            <div className="modal-header bg-light border-bottom px-4 py-3">
              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-primary text-white text-uppercase letter-spacing-1">
                  {article.category}
                </span>
                <span className="text-secondary small">
                  <i className="bi bi-clock me-1"></i> {article.readTime}
                </span>
              </div>
              <button 
                type="button" 
                className="btn-close" 
                aria-label="Close"
                onClick={onClose}
                id="article-modal-close"
              ></button>
            </div>

            {/* Modal Body */}
            <div className="modal-body p-4 p-md-5">
              {article.image && (
                <div className="mb-4 rounded-3 overflow-hidden shadow-sm" style={{ maxHeight: '280px' }}>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
              )}

              <div className="d-flex flex-wrap align-items-center gap-3 text-secondary small mb-3">
                <span><i className="bi bi-calendar3 me-1"></i> {article.date}</span>
                {article.location && (
                  <>
                    <span>•</span>
                    <span><i className="bi bi-geo-alt-fill text-success me-1"></i> {article.location}</span>
                  </>
                )}
              </div>

              <h2 className="modal-title font-serif h3 mb-4" id="articleModalTitle">
                {article.title}
              </h2>

              <div 
                className="article-rich-content text-dark"
                dangerouslySetInnerHTML={{ __html: article.contentHtml }}
              />
            </div>

            {/* Modal Footer */}
            <div className="modal-footer bg-light border-top px-4 py-3 justify-content-between">
              <span className="small text-secondary">
                Ryco Spices Technical Market Intelligence
              </span>
              <button 
                type="button" 
                className="btn btn-secondary px-4" 
                onClick={onClose}
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
