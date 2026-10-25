import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ToastNotification from '../components/ToastNotification';

export default function Contact() {
  const [formData, setFormData] = useState({
    buyerName: '',
    companyName: '',
    country: '',
    email: '',
    phone: '',
    productInterest: '',
    sampleWeight: '500g Standard Evaluation Kit',
    deliveryAddress: '',
    message: ''
  });

  const [validated, setValidated] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0); // 0th opened by default
  const [toast, setToast] = useState({ show: false, title: '', message: '', type: 'success' });

  const faqs = [
    {
      q: 'What is your minimum order quantity (MOQ)?',
      a: 'We maintain commercial flexibility for our initial wholesale partners. Typical MOQ for air-freight or LCL trial shipments is 100 kg to 500 kg depending on the commodity grade. For Full Container Loads (20ft FCL ~ 10–14 MT, or 40ft High Cube FCL ~ 20–25 MT), we provide preferential long-term contract pricing and scheduled vessel bookings.'
    },
    {
      q: 'Can I request physical samples before placing a commercial contract?',
      a: 'Yes, absolutely. We actively encourage sample evaluations for verified business buyers. We dispatch 500g representative sample boxes complete with certificate of analysis (COA) specifying moisture, volatile oil content, and origin coordinates. Samples are complimentary for qualified wholesale buyers; buyer covers express courier delivery (DHL or FedEx).'
    },
    {
      q: 'What export documentation and certificates do you supply?',
      a: 'Every export consignment is accompanied by official Indonesian government and quarantine paperwork: Phytosanitary Certificate (issued by the Indonesian Agricultural Quarantine Agency), Certificate of Origin (COO Form A, Form D, or General COO), Commercial Invoice, Packing List, Full Set Clean On-Board Ocean Bills of Lading, Fumigation Certificate, and Independent Lab COA (SGS, Sucofindo, or Eurofins upon request).'
    },
    {
      q: 'What international payment terms and Incoterms do you accept?',
      a: 'We routinely execute contracts under Incoterms 2020: FOB (Tanjung Priok Jakarta, Tanjung Perak Surabaya, or Makassar), CFR, and CIF destination port. Standard payment terms include Irrevocable Letter of Credit at sight (L/C at sight) opened through prime international banks, or Telegraphic Transfer (T/T with 30% advance deposit and 70% against full scanned shipping documents).'
    },
    {
      q: 'What is the standard ocean freight transit lead time?',
      a: 'Lead time from confirmed sales contract and L/C receipt to ocean vessel departure is typically 10 to 14 business days, encompassing final lot grading, fumigation, quarantine inspection, and container stuffing. Ocean transit varies by destination: ASEAN ports (3–7 days), Middle East & India (14–20 days), Europe (25–32 days), and North America West Coast (22–28 days).'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);

    if (
      !formData.buyerName.trim() ||
      !formData.companyName.trim() ||
      !formData.country.trim() ||
      !formData.email.trim() ||
      !formData.productInterest ||
      !formData.deliveryAddress.trim() ||
      !formData.message.trim()
    ) {
      setToast({
        show: true,
        title: 'Required Fields Missing',
        message: 'Please complete all required fields (indicated by *) before submitting your inquiry.',
        type: 'danger'
      });
      return;
    }

    // Success response
    setToast({
      show: true,
      title: 'Inquiry & Sample Request Received',
      message: `Thank you, ${formData.buyerName}. Your inquiry for ${formData.productInterest} has been routed to our Jakarta export desk. We will send quotes and courier tracking coordinates to ${formData.email} within 24 business hours.`,
      type: 'success'
    });

    // Reset form
    setFormData({
      buyerName: '',
      companyName: '',
      country: '',
      email: '',
      phone: '',
      productInterest: '',
      sampleWeight: '500g Standard Evaluation Kit',
      deliveryAddress: '',
      message: ''
    });
    setValidated(false);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  return (
    <>
      <ToastNotification 
        show={toast.show}
        title={toast.title}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />

      {/* ===== PAGE HERO ===== */}
      <section className="page-hero" id="contact-hero">
        <div className="hero-overlay"></div>
        <div className="container position-relative z-1">
          <span className="hero-label">Wholesale Trade Desk</span>
          <h1 className="text-white mb-2">Contact &amp; Sample Request</h1>
          <p>Request Physical Samples · Receive FOB/CIF Quotations · Discuss Direct Container Supply</p>
        </div>
      </section>

      {/* ===== BREADCRUMB ===== */}
      <div className="breadcrumb-wrapper">
        <div className="container">
          <ul className="breadcrumb-list">
            <li><Link to="/">Home</Link></li>
            <li className="separator">/</li>
            <li className="active">Contact &amp; Inquiries</li>
          </ul>
        </div>
      </div>

      {/* ===== QUICK CHANNELS ===== */}
      <section className="section" id="quick-channels">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label">Connect With Us</span>
            <h2>Direct Communication Channels</h2>
            <p className="section-subtitle">
              Whether you need urgent crop availability data or want to set up an introductory B2B call, our trade team is available across multiple channels.
            </p>
          </div>

          <div className="row g-4">
            {/* Card 1: WhatsApp */}
            <div className="col-md-4">
              <div className="quick-contact-card quick-contact-card--primary">
                <span className="quick-contact-icon">
                  <i className="bi bi-whatsapp"></i>
                </span>
                <h3>WhatsApp Business</h3>
                <p>Direct chat for urgent volume availability, live crop photos, and rapid FOB indicative rates.</p>
                <a 
                  href="https://wa.me/6287776862445" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary w-100" 
                  id="whatsapp-cta"
                >
                  <i className="bi bi-whatsapp me-1"></i> Start WhatsApp Chat
                </a>
                <p className="quick-note">+62 877-7686-2445 (Mon–Sat, 08:00–18:00 WIB)</p>
              </div>
            </div>

            {/* Card 2: Email */}
            <div className="col-md-4">
              <div className="quick-contact-card">
                <span className="quick-contact-icon">
                  <i className="bi bi-envelope"></i>
                </span>
                <h3>Corporate Email</h3>
                <p>Send us your detailed RFQ (Request for Quotation) specification sheets and tender documentation.</p>
                <a 
                  href="mailto:hello@rycospices.com?subject=Wholesale%20Inquiry%20-%20Ryco%20Spices" 
                  className="btn btn-outline w-100" 
                  id="email-cta"
                >
                  <i className="bi bi-send me-1"></i> Send Official Email
                </a>
                <p className="quick-note">hello@rycospices.com / export@rycospices.com</p>
              </div>
            </div>

            {/* Card 3: Form Anchor */}
            <div className="col-md-4">
              <div className="quick-contact-card">
                <span className="quick-contact-icon">
                  <i className="bi bi-clipboard2-check"></i>
                </span>
                <h3>Sample Request Form</h3>
                <p>Fill out your delivery address and spice grade preferences below for immediate routing to our shipping team.</p>
                <a href="#inquiry-form-section" className="btn btn-outline w-100" id="form-cta">
                  <i className="bi bi-arrow-down-circle me-1"></i> Complete Sample Form
                </a>
                <p className="quick-note">Guaranteed response within 24 business hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARTNERSHIP PROCESS ===== */}
      <section className="section section--bg" id="process">
        <div className="container">
          <div className="text-center">
            <span className="section-label">How It Works</span>
            <h2>Our Procurement &amp; Onboarding Steps</h2>
            <p className="section-subtitle">
              Our simple, transparent onboarding and procurement process for international wholesale partners.
            </p>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="process-step__number">01</div>
              <div className="process-step__icon">
                <i className="bi bi-envelope-paper"></i>
              </div>
              <div className="process-step__content">
                <h4>Send Your Inquiry</h4>
                <p>Tell us what you need — product variety, grade, target volume, packaging, and destination port.</p>
              </div>
            </div>

            <div className="process-arrow d-none d-lg-flex">
              <i className="bi bi-arrow-right"></i>
            </div>

            <div className="process-step">
              <div className="process-step__number">02</div>
              <div className="process-step__icon">
                <i className="bi bi-clock-history"></i>
              </div>
              <div className="process-step__content">
                <h4>24-Hour Response</h4>
                <p>Our export desk reviews your specifications and provides FOB/CIF quotes and crop availability.</p>
              </div>
            </div>

            <div className="process-arrow d-none d-lg-flex">
              <i className="bi bi-arrow-right"></i>
            </div>

            <div className="process-step">
              <div className="process-step__number">03</div>
              <div className="process-step__icon">
                <i className="bi bi-box-seam"></i>
              </div>
              <div className="process-step__content">
                <h4>Sample Evaluation</h4>
                <p>We dispatch a 500g physical sample package with lab COA so you can verify quality before contract signing.</p>
              </div>
            </div>

            <div className="process-arrow d-none d-lg-flex">
              <i className="bi bi-arrow-right"></i>
            </div>

            <div className="process-step">
              <div className="process-step__number">04</div>
              <div className="process-step__icon">
                <i className="bi bi-truck"></i>
              </div>
              <div className="process-step__content">
                <h4>First Shipment</h4>
                <p>We pack, fumigate, clear customs, and ship your container with full COO and phytosanitary papers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTERACTIVE CONTROLLED FORM & OFFICE COORDINATES ===== */}
      <section className="section" id="inquiry-form-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label">B2B Sample &amp; Quote Request</span>
            <h2>Send Us Your Requirements</h2>
            <p className="section-subtitle">
              Whether you are an international food manufacturer, spice trader, or extract distiller — fill in your details below.
            </p>
          </div>

          <div className="row g-5">
            {/* Col 1: Contact Coordinates */}
            <div className="col-lg-5">
              <div className="contact-info-card">
                <div className="contact-item">
                  <h4><i className="bi bi-envelope-fill me-2"></i> Official Email Desks</h4>
                  <p><strong>Wholesale Inquiries:</strong> hello@rycospices.com</p>
                  <p><strong>Export Contracts &amp; L/C:</strong> export@rycospices.com</p>
                </div>

                <div className="contact-item">
                  <h4><i className="bi bi-whatsapp me-2"></i> WhatsApp &amp; Direct Telephone</h4>
                  <p className="fs-5 fw-bold text-dark mb-1">+62 877-7686-2445</p>
                  <p>Available: Monday – Saturday, 8:00 AM – 6:00 PM WIB (UTC+7)</p>
                  <p className="text-secondary small">Average response time: Within 2 hours during business hours</p>
                </div>

                <div className="contact-item">
                  <h4><i className="bi bi-clock-fill me-2"></i> Operating Hours</h4>
                  <p><strong>Monday – Friday:</strong> 8:00 AM – 6:00 PM WIB</p>
                  <p><strong>Saturday:</strong> 8:00 AM – 2:00 PM WIB</p>
                  <p><strong>Sunday:</strong> Closed (Urgent inquiries monitored via email)</p>
                </div>

                <div className="contact-item">
                  <h4><i className="bi bi-geo-alt-fill me-2"></i> Corporate &amp; Sourcing Hubs</h4>
                  <p><strong>Head Office:</strong> Jakarta, Indonesia</p>
                  <p><strong>Sourcing Outposts:</strong> Banda Neira (Maluku), Manado (North Sulawesi)</p>
                  <p><strong>Outbound Ports:</strong> Tanjung Priok (Jakarta), Tanjung Perak (Surabaya), Makassar</p>
                </div>
              </div>
            </div>

            {/* Col 2: Interactive B2B Form */}
            <div className="col-lg-7">
              <div className="card border border-light-subtle rounded-4 p-4 p-md-5 shadow-sm bg-white">
                <h3 className="font-serif mb-4 h4 text-dark">
                  <i className="bi bi-box-seam text-primary me-2"></i> B2B Sample &amp; Quote Inquiry
                </h3>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    {/* Buyer Name */}
                    <div className="col-md-6">
                      <label htmlFor="buyerName" className="form-label">
                        Buyer / Contact Name <span className="text-danger">*</span>
                      </label>
                      <input 
                        type="text" 
                        className={`form-control ${validated && !formData.buyerName.trim() ? 'is-invalid' : ''}`}
                        id="buyerName" 
                        name="buyerName" 
                        value={formData.buyerName}
                        onChange={handleChange}
                        required 
                        placeholder="e.g. Hans Schneider"
                      />
                      <div className="invalid-feedback">Please enter your full name.</div>
                    </div>

                    {/* Company Name */}
                    <div className="col-md-6">
                      <label htmlFor="companyName" className="form-label">
                        Company / Business Name <span className="text-danger">*</span>
                      </label>
                      <input 
                        type="text" 
                        className={`form-control ${validated && !formData.companyName.trim() ? 'is-invalid' : ''}`}
                        id="companyName" 
                        name="companyName" 
                        value={formData.companyName}
                        onChange={handleChange}
                        required 
                        placeholder="e.g. Bavaria Spices GmbH"
                      />
                      <div className="invalid-feedback">Please enter your company name.</div>
                    </div>

                    {/* Country & Port */}
                    <div className="col-md-6">
                      <label htmlFor="country" className="form-label">
                        Country &amp; Destination Port <span className="text-danger">*</span>
                      </label>
                      <input 
                        type="text" 
                        className={`form-control ${validated && !formData.country.trim() ? 'is-invalid' : ''}`}
                        id="country" 
                        name="country" 
                        value={formData.country}
                        onChange={handleChange}
                        required 
                        placeholder="e.g. Germany (Hamburg Port)"
                      />
                      <div className="invalid-feedback">Please enter destination country or port.</div>
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        Corporate Email Address <span className="text-danger">*</span>
                      </label>
                      <input 
                        type="email" 
                        className={`form-control ${validated && (!formData.email.trim() || !formData.email.includes('@')) ? 'is-invalid' : ''}`}
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        placeholder="h.schneider@bavariaspices.de"
                      />
                      <div className="invalid-feedback">Please enter a valid business email.</div>
                    </div>

                    {/* Phone / WhatsApp */}
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">
                        WhatsApp / Phone Number
                      </label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+49 170 1234567"
                      />
                    </div>

                    {/* Product Interest */}
                    <div className="col-md-6">
                      <label htmlFor="productInterest" className="form-label">
                        Primary Product Interest <span className="text-danger">*</span>
                      </label>
                      <select 
                        className={`form-select ${validated && !formData.productInterest ? 'is-invalid' : ''}`}
                        id="productInterest" 
                        name="productInterest" 
                        value={formData.productInterest}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select product variety...</option>
                        <option value="Indonesian Nutmeg Whole">Indonesian Nutmeg Whole (ABCD / Sound B / FAQ)</option>
                        <option value="Mace (Bunga Pala)">Mace (Bunga Pala - Hand-Picked / Broken)</option>
                        <option value="Cloves (Cengkeh)">Cloves (Cengkeh - Lalpari Grade 1 / FAQ)</option>
                        <option value="Cinnamon (Kayu Manis)">Cinnamon (Cassia Vera AA Sticks / Broken)</option>
                        <option value="Multiple Spices">Multiple Commodities / Mixed Container</option>
                        <option value="Custom Sourcing">Custom Sourcing &amp; Specific Cut Sizes</option>
                      </select>
                      <div className="invalid-feedback">Please select a product interest.</div>
                    </div>

                    {/* Sample Weight / Evaluation Kit */}
                    <div className="col-md-12">
                      <label htmlFor="sampleWeight" className="form-label">
                        Sample Package Preference
                      </label>
                      <select 
                        className="form-select" 
                        id="sampleWeight" 
                        name="sampleWeight" 
                        value={formData.sampleWeight}
                        onChange={handleChange}
                      >
                        <option value="500g Standard Evaluation Kit">500g Standard Evaluation Kit (Single Variety with COA)</option>
                        <option value="1kg Multi-Grade Comparison Box">1kg Multi-Grade Comparison Box (ABCD + Sound B + FAQ)</option>
                        <option value="Complete 4-Spice Explorer Box">Complete 4-Spice Explorer Box (Nutmeg, Mace, Cloves, Cinnamon)</option>
                        <option value="Commercial Container RFQ (No Sample Needed)">Commercial Container RFQ (Direct Price Quote, No Sample Needed)</option>
                      </select>
                    </div>

                    {/* Full Delivery Address for Courier Dispatch */}
                    <div className="col-12">
                      <label htmlFor="deliveryAddress" className="form-label">
                        Courier Delivery Address for Sample Box <span className="text-danger">*</span>
                      </label>
                      <textarea 
                        className={`form-control ${validated && !formData.deliveryAddress.trim() ? 'is-invalid' : ''}`}
                        id="deliveryAddress" 
                        name="deliveryAddress" 
                        rows="2" 
                        value={formData.deliveryAddress}
                        onChange={handleChange}
                        required 
                        placeholder="Street Address, Suite/Building, Postal Code, City, Country (Required for DHL/FedEx courier dispatch)"
                      ></textarea>
                      <div className="invalid-feedback">Please enter the full physical delivery address.</div>
                    </div>

                    {/* Message / Specifications */}
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">
                        Specifications &amp; Inquiry Details <span className="text-danger">*</span>
                      </label>
                      <textarea 
                        className={`form-control ${validated && !formData.message.trim() ? 'is-invalid' : ''}`}
                        id="message" 
                        name="message" 
                        rows="4" 
                        value={formData.message}
                        onChange={handleChange}
                        required 
                        placeholder="Please specify target moisture %, essential oil requirements, intended packaging (e.g. 25kg multi-wall paper or jute bags), Incoterm (FOB/CIF), and estimated monthly/quarterly volume..."
                      ></textarea>
                      <div className="invalid-feedback">Please provide details regarding your inquiry.</div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 mt-4">
                      <button 
                        type="submit" 
                        className="btn btn-primary px-4 py-3 w-100 fs-6"
                        id="btn-submit-inquiry"
                      >
                        <i className="bi bi-send-fill me-1"></i> Submit B2B Inquiry &amp; Request Sample
                      </button>
                    </div>

                    <div className="col-12 text-center mt-2">
                      <small className="text-secondary">
                        <i className="bi bi-shield-check text-success me-1"></i> Guaranteed response within 24 business hours. Commercial privacy strictly protected.
                      </small>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPORT FAQ ACCORDION ===== */}
      <section className="section section--bg" id="faq">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label">Common Questions</span>
            <h2>Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Clear answers to frequent inquiries regarding MOQ, export documentation, payment terms, and ocean freight transit times.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="accordion" id="exportFaqAccordion">
                {faqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div className="accordion-item" key={idx}>
                      <h2 className="accordion-header" id={`faqHeading${idx}`}>
                        <button 
                          className={`accordion-button ${isOpen ? '' : 'collapsed'}`} 
                          type="button" 
                          onClick={() => toggleFaq(idx)}
                          aria-expanded={isOpen ? 'true' : 'false'}
                          aria-controls={`faqCollapse${idx}`}
                        >
                          {faq.q}
                        </button>
                      </h2>
                      <div 
                        id={`faqCollapse${idx}`} 
                        className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                        aria-labelledby={`faqHeading${idx}`}
                      >
                        <div className="accordion-body">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
