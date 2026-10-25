import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { newsArticles, newsCategories } from '../data/news';
import ArticleModal from '../components/ArticleModal';
import ToastNotification from '../components/ToastNotification';

export default function News() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [toast, setToast] = useState({ show: false, title: '', message: '', type: 'success' });

  const featuredArticle = newsArticles[0];

  const handleOpenArticle = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
      setToast({
        show: true,
        title: 'Invalid Email Address',
        message: 'Please provide a valid corporate email address to receive our quarterly reports.',
        type: 'danger'
      });
      return;
    }

    setToast({
      show: true,
      title: 'Subscription Confirmed',
      message: `Thank you! ${newsletterEmail} has been registered to receive the Ryco Spices Quarterly Harvest Bulletin.`,
      type: 'success'
    });
    setNewsletterEmail('');
  };

  const filteredArticles = activeFilter === 'all'
    ? newsArticles
    : newsArticles.filter(art => art.categorySlug === activeFilter);

  return (
    <>
      {/* Toast Feedback */}
      <ToastNotification 
        show={toast.show}
        title={toast.title}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />

      {/* Interactive Modal Reader */}
      <ArticleModal 
        article={selectedArticle}
        show={showModal}
        onClose={handleCloseModal}
      />

      {/* ===== PAGE HERO ===== */}
      <section className="page-hero" id="news-hero">
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1">
          <span className="hero-label">Origin Intelligence</span>
          <h1 className="text-white mb-2">News &amp; Market Insights</h1>
          <p>Harvest Updates · Export Regulations · Terroir Analysis · Global Market Dynamics</p>
        </div>
      </section>

      {/* ===== BREADCRUMB ===== */}
      <div className="breadcrumb-wrapper">
        <div className="container">
          <ul className="breadcrumb-list">
            <li><Link to="/">Home</Link></li>
            <li className="separator">/</li>
            <li className="active">News &amp; Insights</li>
          </ul>
        </div>
      </div>

      {/* ===== FEATURED HARVEST REPORT ===== */}
      <section className="section" id="featured-article">
        <div className="container">
          <span className="section-label">Featured Harvest Bulletin</span>
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden mt-2">
            <div className="row g-0 align-items-stretch">
              <div className="col-lg-6">
                <div className="h-100 position-relative" style={{ minHeight: '340px' }}>
                  <img 
                    src={featuredArticle.image} 
                    alt="Nutmeg harvest in Banda Neira" 
                    className="w-100 h-100 object-fit-cover" 
                    loading="lazy" 
                  />
                  <span className="position-absolute top-0 start-0 m-3 badge bg-warning text-dark fw-bold px-3 py-2 text-uppercase letter-spacing-1">
                    <i className="bi bi-star-fill me-1"></i> {featuredArticle.category}
                  </span>
                </div>
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-center p-4 p-md-5 bg-white">
                <div className="d-flex align-items-center gap-3 text-secondary small mb-2">
                  <span><i className="bi bi-calendar3 me-1"></i> {featuredArticle.date}</span>
                  <span>•</span>
                  <span><i className="bi bi-clock me-1"></i> {featuredArticle.readTime}</span>
                  <span>•</span>
                  <span className="text-success fw-bold">{featuredArticle.location}</span>
                </div>
                <h2 className="h3 font-serif mb-3 text-dark">
                  {featuredArticle.title}
                </h2>
                <p className="text-secondary mb-4">
                  {featuredArticle.summary}
                </p>
                <div>
                  <button 
                    className="btn btn-primary px-4 py-2"
                    onClick={() => handleOpenArticle(featuredArticle)}
                    id="btn-read-featured"
                  >
                    <i className="bi bi-book-half me-1"></i> Read Full Harvest Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ARTICLE GRID & CATEGORY TABS ===== */}
      <section className="section section--bg" id="article-catalog">
        <div className="container">
          <div className="text-center mb-4">
            <span className="section-label">Knowledge &amp; Standards</span>
            <h2>Export Insights &amp; Market Bulletins</h2>
            <p className="section-subtitle">
              Stay informed on Indonesian spice crop cycles, destination phytosanitary regulations, and global supply dynamics.
            </p>

            {/* Filter Buttons */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-3" id="news-filter-tabs">
              {newsCategories.map((cat) => (
                <button
                  key={cat.filter}
                  type="button"
                  className={`btn-filter ${activeFilter === cat.filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat.filter)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Row */}
          <div className="row g-4 mt-2">
            {filteredArticles.map((article) => (
              <div key={article.id} className="col-md-6 col-lg-4">
                <div className="news-card">
                  <div className="news-card__img">
                    <img src={article.image} alt={article.title} loading="lazy" />
                    <span className="news-card__badge">{article.category}</span>
                  </div>
                  <div className="news-card__body">
                    <div className="news-card__meta">
                      <span><i className="bi bi-calendar3 me-1"></i> {article.date}</span>
                      <span><i className="bi bi-clock me-1"></i> {article.readTime}</span>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.summary}</p>
                    <button 
                      type="button"
                      className="btn btn-text p-0 text-start"
                      onClick={() => handleOpenArticle(article)}
                      id={`read-article-${article.id}`}
                    >
                      Read Article <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER SUBSCRIPTION CARD ===== */}
      <section className="section" id="newsletter">
        <div className="container">
          <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white border border-light-subtle">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <span className="section-label">Quarterly Market Intelligence</span>
                <h3 className="h2 font-serif text-dark mb-2">Subscribe to Spice Harvest Bulletins</h3>
                <p className="text-secondary mb-0">
                  Receive pre-harvest volume forecasts, essential oil laboratory averages, and regulatory alerts directly in your inbox. Strictly commercial intelligence, zero spam.
                </p>
              </div>
              <div className="col-lg-6">
                <form onSubmit={handleNewsletterSubmit} className="d-flex flex-column flex-sm-row gap-2">
                  <input 
                    type="email" 
                    className="form-control form-control-lg fs-6" 
                    placeholder="Enter your corporate email address..." 
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    id="newsletter-email-input"
                  />
                  <button type="submit" className="btn btn-primary px-4 py-2 flex-shrink-0" id="newsletter-submit-btn">
                    <i className="bi bi-send-fill me-1"></i> Subscribe
                  </button>
                </form>
                <small className="text-secondary d-block mt-2">
                  <i className="bi bi-shield-lock text-success me-1"></i> We respect commercial confidentiality. Unsubscribe at any time.
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
