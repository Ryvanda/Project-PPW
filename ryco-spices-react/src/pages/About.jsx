import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero" id="about-hero">
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1">
          <span className="hero-label">Who We Are</span>
          <h1 className="text-white mb-2">Our Story</h1>
          <p>Born from Heritage, Built for Global Trade</p>
        </div>
      </section>

      {/* ===== BREADCRUMB ===== */}
      <div className="breadcrumb-wrapper">
        <div className="container">
          <ul className="breadcrumb-list">
            <li><Link to="/">Home</Link></li>
            <li className="separator">/</li>
            <li className="active">About Us</li>
          </ul>
        </div>
      </div>

      {/* ===== BRAND STORY ===== */}
      <section className="section" id="brand-story">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <span className="section-label">The Ryco Spices Story</span>
              <h2 className="mb-4">A Bridge Between Indonesian Farmers and the World</h2>
              <p className="lead text-dark">
                Ryco Spices was founded on a simple belief: the world deserves to taste the authentic flavor of Indonesian spices, and the farmers who grow them deserve fair recognition and above-market value for their craft.
              </p>
              <p className="text-secondary">
                Indonesia has been the beating heart of the global spice trade for over 2,000 years. From the legendary Spice Islands of Maluku (Banda Neira, Ambon) to the fertile highlands of North and Central Sulawesi, this volcanic archipelago produces the world's most aromatic spices—yet too often, they reach international markets through layers of middlemen without proper acknowledgment of their origin or farm-gate stewards.
              </p>

              <blockquote className="p-3 my-4 bg-light border-start border-4 border-success rounded-2 fst-italic text-dark">
                "We are building Ryco Spices not just as a trading business, but as a bridge—connecting Indonesian soil directly to global tables, one container shipment at a time."
              </blockquote>

              <p className="text-secondary">
                Headquartered in Jakarta with field sourcing operations in Banda Neira and Manado, our team combines generational botanical knowledge with modern B2B trade requirements: ISO-compliant sampling, international phytosanitary certificates, strict moisture control, and transparent FOB/CIF logistics.
              </p>
            </div>

            <div className="col-lg-5">
              <div className="profile-image-wrap position-relative">
                <img 
                  src="/images/company_profile.webp" 
                  alt="Indonesian farmers sun-drying nutmeg with volcanic mountains in the background" 
                  className="img-fluid rounded-3 shadow-sm" 
                  loading="lazy" 
                />
                <div className="p-3 bg-white border border-light-subtle rounded-3 shadow-sm mt-3 text-center">
                  <small className="text-secondary fw-semibold">
                    <i className="bi bi-geo-alt-fill text-danger me-1"></i> Local farmers sun-drying nutmeg in the volcanic highlands of Maluku &amp; Sulawesi
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="section section--bg" id="mission-vision">
        <div className="container">
          <div className="text-center">
            <span className="section-label">What Drives Us</span>
            <h2>Our Mission &amp; Vision</h2>
            <p className="section-subtitle">
              Guiding our daily operations, farmer partnerships, and long-term buyer relationships.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="sample-card h-100">
                <div className="sample-card-icon">
                  <i className="bi bi-bullseye"></i>
                </div>
                <h3>Our Mission</h3>
                <p className="text-secondary mb-0">
                  To deliver premium, export-grade Indonesian spices directly to international wholesale buyers while ensuring fair, sustainable value for local farming communities and complete transparency throughout the supply chain.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-5">
              <div className="sample-card h-100">
                <div className="sample-card-icon">
                  <i className="bi bi-eye"></i>
                </div>
                <h3>Our Vision</h3>
                <p className="text-secondary mb-0">
                  To become the most trusted name in Indonesian spice exports globally, celebrated for uncompromising quality consistency, reliable supply chains, and genuine long-term partnerships with food manufacturers worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5 CORE VALUES ===== */}
      <section className="section" id="core-values">
        <div className="container">
          <div className="text-center">
            <span className="section-label">What We Stand For</span>
            <h2>Our Five Core Values</h2>
            <p className="section-subtitle">
              Every commercial decision, sourcing contract, and customer interaction is guided by these principles.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h3>Integrity</h3>
                <p>We say what we mean and deliver what we promise. Transparent specs, no surprises, and zero hidden quality compromises.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-award"></i>
                </div>
                <h3>Quality</h3>
                <p>Every shipment meets agreed moisture, volatile oil, and total aflatoxin specifications. Strict grading is never optional.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-search"></i>
                </div>
                <h3>Transparency</h3>
                <p>Open communication about origin terroir, pricing structures, lab results, and shipping milestones at every phase.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <h3>Partnership</h3>
                <p>Your business growth is our growth. We nurture long-term collaborative contracts that help both our wholesale buyers and origin farming families thrive together.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-6">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-journal-bookmark"></i>
                </div>
                <h3>Heritage</h3>
                <p>Honoring over 2,000 years of Indonesian botanical legacy in every jute bag, airtight master carton, and maritime container we export.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY INDONESIA / ORIGIN ADVANTAGES ===== */}
      <section className="section section--bg" id="why-indonesia">
        <div className="container">
          <div className="text-center">
            <span className="section-label">The Source</span>
            <h2>Why Indonesian Spices?</h2>
            <p className="section-subtitle">
              Indonesia is not just another spice origin — it is <strong>THE</strong> origin. Over 60% of the world's whole nutmeg supply originates from Indonesian volcanic soil.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="quality-badge-card h-100">
                <div className="quality-badge-icon">
                  <i className="bi bi-brightness-high"></i>
                </div>
                <h4>Volcanic Mineral Soil</h4>
                <p>Rich volcanic soil, tropical rainfall, and steady sunshine create world-renowned volatile oil concentrations.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="quality-badge-card h-100">
                <div className="quality-badge-icon">
                  <i className="bi bi-flower1"></i>
                </div>
                <h4>Unmatched Potency</h4>
                <p>From Banda nutmeg and mace to pungent Sulawesi cloves, Indonesian varieties set global essential oil benchmarks.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="quality-badge-card h-100">
                <div className="quality-badge-icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <h4>Artisanal Stewardship</h4>
                <p>Generations of smallholder families cultivate the same groves with traditional shade-grown and sun-drying methods.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="quality-badge-card h-100">
                <div className="quality-badge-icon">
                  <i className="bi bi-pin-map"></i>
                </div>
                <h4>Complete Traceability</h4>
                <p>Know exactly which island, regency, and collective cultivated your harvest, backed by verified Certificate of Origin documentation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-section" id="about-cta">
        <div className="container">
          <h2>Let's Build Something Together</h2>
          <p>
            Whether you are an established importer looking for dependable container supply or a food brand exploring ethical sourcing, our export desk is ready to assist.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link to="/contact" className="btn btn-primary px-4 py-3 fs-6">
              <i className="bi bi-chat-dots me-1"></i> Start a Conversation
            </Link>
            <Link to="/products" className="btn btn-outline-light-custom px-4 py-3 fs-6">
              <i className="bi bi-grid-3x3-gap me-1"></i> Explore Product Catalog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
