import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, packagingOptions } from '../data/products';

export default function Products() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterTabs = ['All', 'Nutmeg', 'Mace', 'Cloves', 'Cinnamon'];

  const filteredProducts = selectedFilter === 'All' 
    ? products 
    : products.filter(p => p.category.toLowerCase() === selectedFilter.toLowerCase());

  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero" id="products-hero">
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1">
          <span className="hero-label">Export-Grade Spices</span>
          <h1 className="text-white mb-2">Our Products &amp; Technical Specifications</h1>
          <p>Premium Grade · Direct from Origin Farmers · International Export Quality</p>
        </div>
      </section>

      {/* ===== BREADCRUMB ===== */}
      <div className="breadcrumb-wrapper">
        <div className="container">
          <ul className="breadcrumb-list">
            <li><Link to="/">Home</Link></li>
            <li className="separator">/</li>
            <li className="active">Products</li>
          </ul>
        </div>
      </div>

      {/* ===== PRODUCT OVERVIEW & COMMODITY FILTER ===== */}
      <section className="section" id="catalog-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label">Full Catalog</span>
            <h2>Export Spice Portfolio</h2>
            <p className="section-subtitle">
              We source and export four premium Indonesian spice varieties, all available for wholesale container shipments and custom buyer specifications.
            </p>

            {/* Filter Tabs */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-4" id="product-filter-tabs">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`btn-filter ${selectedFilter === tab ? 'active' : ''}`}
                  onClick={() => setSelectedFilter(tab)}
                >
                  {tab === 'All' ? 'All Spices' : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Row */}
          <div className="row g-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-md-6 col-lg-3">
                <div className="category-card">
                  <div className="category-card__image">
                    <img src={product.image} alt={product.name} loading="lazy" />
                    <div className={`category-card__badge ${product.badge === 'Flagship' ? 'flagship' : ''}`}>
                      {product.badge}
                    </div>
                  </div>
                  <div className="category-card__content">
                    <h3>{product.name}</h3>
                    <p className="category-card__scientific"><em>{product.scientific}</em></p>
                    <p>{product.shortDesc}</p>
                    <a href={`#${product.id}-detail`} className="btn-text">
                      Full Specifications <i className="bi bi-arrow-down"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DETAILED PRODUCT SECTIONS WITH SPEC TABLES & GRADES ===== */}
      {filteredProducts.map((product, index) => (
        <section 
          key={product.id} 
          className={`section ${index % 2 === 0 ? 'section--bg' : ''}`} 
          id={`${product.id}-detail`}
        >
          <div className="container">
            <div className="row g-5 align-items-center mb-5">
              <div className="col-lg-6">
                <span className="section-label">{product.category} Specifications</span>
                <h2 className="mb-3">{product.name}</h2>
                <p className="lead text-secondary mb-3">
                  <em>{product.scientific}</em> — Sourced from {product.origin}.
                </p>
                <p className="text-secondary mb-4">
                  {product.shortDesc} Each lot is cleaned, graded, and moisture-controlled before shipment to guarantee maximum freshness, volatile oil potency, and strict compliance with importing country safety thresholds.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link 
                    to="/contact" 
                    className="btn btn-primary"
                    id={`request-sample-${product.id}`}
                  >
                    <i className="bi bi-box-seam me-1"></i> Request {product.category} Sample
                  </Link>
                  <a href="#packaging-section" className="btn btn-outline">
                    <i className="bi bi-box me-1"></i> Packaging Options
                  </a>
                </div>
              </div>

              {/* Specification Table */}
              <div className="col-lg-6">
                <div className="specs-table-wrapper shadow-sm rounded-3 overflow-hidden">
                  <table className="specs-table mb-0">
                    <thead>
                      <tr>
                        <th colSpan="2" className="bg-primary text-white py-3 px-4">
                          <i className="bi bi-sliders me-2"></i> Technical Quality Parameters
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.specifications.map((spec, sIdx) => (
                        <tr key={sIdx}>
                          <th>{spec.label}</th>
                          <td>{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Standardized Grading Cards */}
            <div className="mt-4">
              <h3 className="h4 font-serif text-dark mb-4">Available Commercial Grades for {product.name}</h3>
              <div className="row g-4">
                {product.grades.map((grade) => (
                  <div key={grade.code} className="col-md-4">
                    <div className="grade-card">
                      <div className={`grade-icon-wrapper ${grade.badgeClass}`}>
                        <i className="bi bi-award-fill"></i>
                      </div>
                      <span className={`grade-badge ${grade.badgeClass}`}>
                        {grade.badgeText}
                      </span>
                      <h3>{grade.title}</h3>
                      <ul>
                        {grade.features.map((feature, fIdx) => (
                          <li key={fIdx}>{feature}</li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-2">
                        <Link 
                          to="/contact" 
                          className="btn btn-sm btn-outline-secondary w-100"
                        >
                          Inquire for {grade.code}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ===== PACKAGING & SHIPMENT STANDARDS ===== */}
      <section className="section" id="packaging-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label">Safe Transit</span>
            <h2>Export Packaging &amp; Stowage Options</h2>
            <p className="section-subtitle">
              We engineer our packaging solutions to protect against maritime humidity, transit pests, and aroma dissipation during international freight.
            </p>
          </div>

          <div className="row g-4">
            {packagingOptions.map((opt, idx) => (
              <div key={idx} className="col-md-4">
                <div className="packaging-item">
                  <div className="packaging-item__icon">
                    <i className={`bi ${opt.icon}`}></i>
                  </div>
                  <h4>{opt.title}</h4>
                  <ul>
                    {opt.items.map((item, iIdx) => (
                      <li key={iIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SAMPLE REQUEST BANNER ===== */}
      <section className="cta-section" id="products-cta">
        <div className="container">
          <h2>Need Custom Grades or Trial Samples?</h2>
          <p>
            We supply verified wholesale importers and processors with 500g physical sample boxes and complete Certificates of Analysis (COA).
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link to="/contact" className="btn btn-primary px-4 py-3 fs-6">
              <i className="bi bi-box-seam me-1"></i> Request B2B Sample Kit
            </Link>
            <a 
              href="https://wa.me/6287776862445" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-light-custom px-4 py-3 fs-6"
            >
              <i className="bi bi-whatsapp me-1"></i> Quick WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
