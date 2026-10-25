import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="hero d-flex align-items-center" id="hero">
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1">
          <div className="row align-items-center">
            <div className="col-lg-8 col-xl-7">
              <span className="hero-label">Premium Indonesian Spice Exporter</span>
              <h1 className="text-white mb-3">From Indonesian Soil<br />to Global Table</h1>
              <p className="mb-4">
                Export-grade Indonesian spices sourced directly from smallholder origin farmers across Maluku and Sulawesi. Now accepting wholesale container partnerships worldwide.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-primary px-4 py-2" id="hero-cta-sample">
                  <i className="bi bi-box-seam me-1"></i> Request a Sample
                </Link>
                <Link to="/products" className="btn btn-secondary px-4 py-2" id="hero-cta-products">
                  <i className="bi bi-grid-3x3-gap me-1"></i> View Our Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST / STATS BAR ===== */}
      <section className="stats-bar" id="stats-bar">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-center">
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <span className="stat-number">2,000+</span>
                <span className="stat-label">Years of Spice Heritage</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Premium Spice Varieties</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Indonesian Island Origins</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <span className="stat-number">24h</span>
                <span className="stat-label">Inquiry Response Time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCT RANGE ===== */}
      <section className="section" id="products-preview">
        <div className="container">
          <div className="text-center">
            <span className="section-label">What We Offer</span>
            <h2>Our Premium Product Range</h2>
            <p className="section-subtitle">
              Export-grade spices sourced directly from local Indonesian farming communities across Maluku, Sulawesi, and Sumatra.
            </p>
          </div>

          <div className="row g-4">
            {/* 1. Nutmeg */}
            <div className="col-md-6 col-lg-3">
              <div className="category-card">
                <div className="category-card__image">
                  <img src="/images/nutmeg_whole.webp" alt="Indonesian Nutmeg Whole" loading="lazy" />
                  <div className="category-card__badge flagship">Flagship</div>
                </div>
                <div className="category-card__content">
                  <h3>Indonesian Nutmeg</h3>
                  <p className="category-card__scientific"><em>Myristica fragrans</em></p>
                  <p>High essential oil content whole nutmeg, sun-dried and hand-picked. Available in Grade A, Grade B, and FAQ.</p>
                  <Link to="/products" className="btn-text">
                    View Specifications <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* 2. Mace */}
            <div className="col-md-6 col-lg-3">
              <div className="category-card">
                <div className="category-card__image">
                  <img src="/images/mace.webp" alt="Mace Bunga Pala" loading="lazy" />
                  <div className="category-card__badge">Available</div>
                </div>
                <div className="category-card__content">
                  <h3>Mace (Bunga Pala)</h3>
                  <p className="category-card__scientific"><em>Myristica fragrans aril</em></p>
                  <p>The delicate outer aril of the nutmeg. Known for luminous reddish-orange hue, sweet warmth, and high volatile oil.</p>
                  <Link to="/products" className="btn-text">
                    View Specifications <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* 3. Cloves */}
            <div className="col-md-6 col-lg-3">
              <div className="category-card">
                <div className="category-card__image">
                  <img src="/images/cloves.webp" alt="Indonesian Cloves" loading="lazy" />
                  <div className="category-card__badge">Available</div>
                </div>
                <div className="category-card__content">
                  <h3>Cloves (Cengkeh)</h3>
                  <p className="category-card__scientific"><em>Syzygium aromaticum</em></p>
                  <p>Rich, aromatic whole dried flower buds from the volcanic hillsides of North Sulawesi and Maluku.</p>
                  <Link to="/products" className="btn-text">
                    View Specifications <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* 4. Cinnamon */}
            <div className="col-md-6 col-lg-3">
              <div className="category-card">
                <div className="category-card__image">
                  <img src="/images/cinnamon.webp" alt="Indonesian Cinnamon" loading="lazy" />
                  <div className="category-card__badge">Available</div>
                </div>
                <div className="category-card__content">
                  <h3>Cinnamon (Kayu Manis)</h3>
                  <p className="category-card__scientific"><em>Cinnamomum burmannii</em></p>
                  <p>Authentic Indonesian Cassia Vera quills and sticks. Warm, sweet aroma with smooth, balanced cinnamaldehyde.</p>
                  <Link to="/products" className="btn-text">
                    View Specifications <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY PARTNER WITH RYCO SPICES ===== */}
      <section className="section section--bg" id="why-choose-us">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Our Advantage</span>
            <h2>Why Partner With Ryco Spices</h2>
            <p className="section-subtitle">
              We bridge the gap between traditional Indonesian spice farmers and demanding international buyers who need consistent quality and dependable logistics.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <h3>Direct from Source</h3>
                <p>We work directly with farming cooperatives in Maluku and Sulawesi, eliminating layers of brokers to guarantee product freshness and farm traceability.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-check-circle"></i>
                </div>
                <h3>Export-Grade Quality</h3>
                <p>Every batch undergoes strict grading, moisture testing, and hand-sorting to ensure compliance with European and US food import safety thresholds.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h3>Ethical Sourcing</h3>
                <p>We pay above-market prices directly to local farming communities, supporting sustainable farming practices and empowering generations of spice growers.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-truck"></i>
                </div>
                <h3>Reliable Logistics</h3>
                <p>From initial quality inspection to FOB/CIF port delivery, our experienced logistics network ensures safe, timely global container dispatches.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPANY PROFILE SPOTLIGHT ===== */}
      <section className="section" id="company-profile">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="profile-image-wrap">
                <img 
                  src="/images/company_profile.webp" 
                  alt="Ryco Spices Sourcing Operations" 
                  loading="lazy" 
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <span className="section-label">Company Profile</span>
              <h2 className="mb-3">Bridging Indonesian Farmers to the Global Market</h2>
              <p className="lead text-secondary mb-3">
                Indonesia has been the epicenter of the global spice trade for centuries. Ryco Spices honors this legacy by combining time-tested agricultural knowledge with modern export compliance standards.
              </p>
              <p className="text-secondary mb-4">
                Headquartered in Jakarta with sourcing outposts in Banda Neira (Maluku) and Manado (Sulawesi), we manage the entire supply chain from harvest to container loading. Our direct relationship with farmers ensures full traceability, fair pricing, and uncompromised quality.
              </p>

              <div className="profile-highlights">
                <div className="profile-highlight">
                  <span className="highlight-icon"><i className="bi bi-check-lg"></i></span>
                  <span>Registered and licensed Indonesian spice exporter</span>
                </div>
                <div className="profile-highlight">
                  <span className="highlight-icon"><i className="bi bi-check-lg"></i></span>
                  <span>Full phytosanitary documentation and Certificate of Origin (COO)</span>
                </div>
                <div className="profile-highlight">
                  <span className="highlight-icon"><i className="bi bi-check-lg"></i></span>
                  <span>Custom packaging and moisture-controlled export container loading</span>
                </div>
              </div>

              <div className="mt-4">
                <Link to="/about" className="btn btn-outline" id="about-read-more">
                  Read Our Heritage Story <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FLAGSHIP NUTMEG SPOTLIGHT ===== */}
      <section className="section section--alt" id="nutmeg-spotlight">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Flagship Product</span>
            <h2>Indonesian Nutmeg at a Glance</h2>
            <p className="section-subtitle">
              Sourced from the mineral-rich volcanic soil of Banda Neira and the Maluku islands, our nutmeg delivers exceptional volatile oil potency.
            </p>
          </div>

          <div className="nutmeg-specs-grid">
            <div className="spec-box">
              <span className="spec-box__label">Botanical Name</span>
              <span className="spec-box__value"><em>Myristica fragrans</em></span>
            </div>
            <div className="spec-box">
              <span className="spec-box__label">Origin</span>
              <span className="spec-box__value">Maluku &amp; Banda Islands</span>
            </div>
            <div className="spec-box">
              <span className="spec-box__label">Available Grades</span>
              <span className="spec-box__value">Grade A (ABCD), Grade B, FAQ</span>
            </div>
            <div className="spec-box">
              <span className="spec-box__label">Moisture Content</span>
              <span className="spec-box__value">Max 10% (Sun-dried)</span>
            </div>
            <div className="spec-box">
              <span className="spec-box__label">Volatile Oil Content</span>
              <span className="spec-box__value">7% – 12% (Grade A average)</span>
            </div>
            <div className="spec-box">
              <span className="spec-box__label">Standard Packaging</span>
              <span className="spec-box__value">25kg / 50kg Jute or Paper Bags</span>
            </div>
          </div>

          <div className="text-center mt-4 pt-2">
            <Link to="/products" className="btn btn-primary px-4 py-2">
              View Complete Product Specifications <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== QUALITY CERTIFICATIONS BANNER ===== */}
      <section className="section" id="certifications">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Export Standards</span>
            <h2>Certified for International Trade</h2>
            <p className="section-subtitle">
              Every shipment is backed by official Indonesian regulatory and quarantine documentation required for seamless customs clearance.
            </p>
          </div>

          <div className="quality-badges-grid">
            <div className="quality-badge-card">
              <div className="quality-badge-icon">
                <i className="bi bi-file-earmark-check"></i>
              </div>
              <h4>Certificate of Origin</h4>
              <p>Official COO (Form A / Form D / General) proving authentic Indonesian harvest provenance.</p>
            </div>

            <div className="quality-badge-card">
              <div className="quality-badge-icon">
                <i className="bi bi-patch-check"></i>
              </div>
              <h4>Phytosanitary Certificate</h4>
              <p>Issued by the Indonesian Agricultural Quarantine Agency ensuring zero pests or pathogens.</p>
            </div>

            <div className="quality-badge-card">
              <div className="quality-badge-icon">
                <i className="bi bi-clipboard-check"></i>
              </div>
              <h4>Quality Inspection (COA)</h4>
              <p>Independent laboratory testing for moisture, volatile oil, and total aflatoxin compliance.</p>
            </div>

            <div className="quality-badge-card">
              <div className="quality-badge-icon">
                <i className="bi bi-box2-check"></i>
              </div>
              <h4>Fumigation Treatment</h4>
              <p>Standardized Phosphine or Methyl Bromide maritime fumigation with official fumigation certificate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-section" id="cta">
        <div className="container">
          <h2>Ready to Evaluate Our Spices?</h2>
          <p>
            We provide complimentary 500g sample packages for qualified international wholesale buyers. Test our quality firsthand before placing your commercial container order.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link to="/contact" className="btn btn-primary px-4 py-3 fs-6" id="cta-sample-btn">
              <i className="bi bi-box-seam me-1"></i> Request a Free Sample
            </Link>
            <a 
              href="https://wa.me/6287776862445" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-light-custom px-4 py-3 fs-6" 
              id="cta-whatsapp-btn"
            >
              <i className="bi bi-whatsapp me-1"></i> Chat via WhatsApp
            </a>
          </div>
          <p className="cta-note">
            Typical response within 24 business hours · Sample delivery worldwide via DHL / FedEx
          </p>
        </div>
      </section>
    </>
  );
}
