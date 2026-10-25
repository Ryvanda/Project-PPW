import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" id="footer">
      <div className="container">
        <div className="row g-4 g-lg-5">
          {/* Col 1: Brand & Origin Mission */}
          <div className="col-lg-4 col-md-6 footer-column">
            <Link to="/" className="d-inline-block">
              <img 
                src="/images/logo.webp" 
                alt="Ryco Spices Official Logo" 
                className="footer-logo-img" 
                height="48"
              />
            </Link>
            <p className="mt-2 text-white-50">
              Ryco Spices is an Indonesian B2B spice exporter connecting traditional smallholder agroforestry farmers across the Spice Islands (Banda Neira, Ambon, Sulawesi) directly with international wholesale spice importers, extractors, and food processors.
            </p>
            <div className="footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://wa.me/6287776862445" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="mailto:hello@rycospices.com" className="social-link" aria-label="Email">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Export Products */}
          <div className="col-lg-2 col-md-6 footer-column">
            <h4>Export Products</h4>
            <ul>
              <li><Link to="/products">Indonesian Nutmeg Whole</Link></li>
              <li><Link to="/products">Mace (Bunga Pala)</Link></li>
              <li><Link to="/products">Cloves (Cengkeh)</Link></li>
              <li><Link to="/products">Cinnamon / Cassia Vera</Link></li>
              <li><Link to="/contact">Custom Processing / Cuts</Link></li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="col-lg-2 col-md-6 footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/about">About Us &amp; Heritage</Link></li>
              <li><Link to="/products">Product Catalog</Link></li>
              <li><Link to="/news">Harvest &amp; Market News</Link></li>
              <li><Link to="/contact">Request Sample Box</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Office Coordinates */}
          <div className="col-lg-4 col-md-6 footer-column">
            <h4>Export Operations Desk</h4>
            <ul className="text-white-50 small">
              <li className="d-flex align-items-start gap-2 mb-2">
                <i className="bi bi-geo-alt-fill text-warning mt-1"></i>
                <span><strong>Headquarters:</strong> Jakarta, Special Capital Region of Jakarta, Indonesia</span>
              </li>
              <li className="d-flex align-items-start gap-2 mb-2">
                <i className="bi bi-pin-map-fill text-warning mt-1"></i>
                <span><strong>Sourcing Hubs:</strong> Banda Neira (Maluku) &amp; Manado (Sulawesi)</span>
              </li>
              <li className="d-flex align-items-start gap-2 mb-2">
                <i className="bi bi-envelope-fill text-warning mt-1"></i>
                <span>hello@rycospices.com / export@rycospices.com</span>
              </li>
              <li className="d-flex align-items-start gap-2 mb-2">
                <i className="bi bi-telephone-fill text-warning mt-1"></i>
                <span>+62 877-7686-2445 (WhatsApp Business &amp; Voice)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <div>
            &copy; {new Date().getFullYear()} Ryco Spices (PT Ryco Rempah Indonesia). All rights reserved.
          </div>
          <div className="text-center text-md-end small text-white-50">
            Export Standards: Phytosanitary Certified · COO Form A · Fumigation Compliant (EU &amp; FDA)
          </div>
        </div>
      </div>

      {/* Floating Back-to-Top Button */}
      <button 
        type="button" 
        className="btn-back-to-top" 
        onClick={scrollToTop} 
        aria-label="Scroll back to top"
        title="Scroll back to top"
      >
        <i className="bi bi-arrow-up"></i>
      </button>
    </footer>
  );
}
