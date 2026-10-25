import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ToastNotification from '../components/ToastNotification';

// Official 4 Core Spice Commodities & Dependent Quality Grades
export const COMMODITY_GRADES = {
  'Indonesian Nutmeg Whole': [
    'Grade A (Premium Whole)',
    'Grade B (Standard Whole)',
    'Grade FAQ (Market Quality)'
  ],
  'Mace (Bunga Pala)': [
    'Grade A (Premium Whole Flower HP1)',
    'Grade B (Standard Whole & Large Broken)',
    'Grade FAQ (Broken / Distillation Grade)'
  ],
  'Indonesian Cloves (Cengkeh)': [
    'Grade A (Lalpari Hand-Picked)',
    'Grade B (Standard Export FAQ)',
    'Grade FAQ (Clove Stems & Distillation Flakes)'
  ],
  'Cinnamon / Cassia Vera': [
    'Grade A (Cassia Vera AA Sticks)',
    'Grade B (Standard Cuts & Splits)',
    'Grade FAQ (Broken / Milling Kaastock)'
  ]
};

export default function Contact() {
  const [formData, setFormData] = useState({
    buyerName: '',
    companyName: '',
    country: '',
    email: '',
    phone: '',
    productInterest: '',
    targetGrade: '',
    sampleWeight: '500g Standard Evaluation Kit (Single Variety with COA)',
    deliveryAddress: '',
    message: ''
  });

  const [validated, setValidated] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0); // 0th opened by default
  const [toast, setToast] = useState({ show: false, title: '', message: '', type: 'success' });
  const [confirmationModal, setConfirmationModal] = useState({ show: false, data: null });

  const faqs = [
    {
      q: 'What is your minimum order quantity (MOQ)?',
      a: 'We maintain commercial flexibility for our initial wholesale partners. Typical MOQ for air-freight or LCL trial shipments is 100 kg to 500 kg depending on the commodity grade. For Full Container Loads (20ft FCL ~ 10–14 MT, or 40ft High Cube FCL ~ 20–25 MT), we provide preferential long-term contract pricing and scheduled vessel bookings.'
    },
    {
      q: 'Can I request physical samples before placing a commercial contract?',
      a: 'Yes, absolutely. We actively encourage sample evaluations for verified business buyers. We dispatch 250g micro-sample kits or 500g representative sample boxes complete with certificate of analysis (COA) specifying moisture, volatile oil content, and origin coordinates. Samples are complimentary for qualified wholesale buyers; buyer covers express courier delivery (DHL or FedEx).'
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

  // Handle dependent Commodity selection change
  const handleProductChange = (e) => {
    const selectedProduct = e.target.value;
    const availableGrades = COMMODITY_GRADES[selectedProduct] || [];
    setFormData((prev) => ({
      ...prev,
      productInterest: selectedProduct,
      targetGrade: availableGrades.length > 0 ? availableGrades[0] : ''
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
      !formData.targetGrade ||
      !formData.deliveryAddress.trim() ||
      !formData.message.trim()
    ) {
      setToast({
        show: true,
        title: 'Required Fields Missing',
        message: 'Please complete all required fields (indicated by *) including commodity and target grade before submitting your inquiry.',
        type: 'danger'
      });
      return;
    }

    const submissionData = { ...formData };

    // Success response: Toast feedback with targetGrade
    setToast({
      show: true,
      title: 'Inquiry & Sample Request Received',
      message: `Thank you, ${submissionData.buyerName}. Your inquiry for ${submissionData.productInterest} [${submissionData.targetGrade}] has been routed to our Jakarta export desk. We will send quotes and courier tracking coordinates to ${submissionData.email} within 24 business hours.`,
      type: 'success'
    });

    // Open detailed Confirmation Modal
    setConfirmationModal({
      show: true,
      data: submissionData
    });

    // Reset form
    setFormData({
      buyerName: '',
      companyName: '',
      country: '',
      email: '',
      phone: '',
      productInterest: '',
      targetGrade: '',
      sampleWeight: '500g Standard Evaluation Kit (Single Variety with COA)',
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

      {/* ===== CONFIRMATION MODAL ===== */}
      {confirmationModal.show && confirmationModal.data && (
        <div 
          className="modal fade show d-block" 
          tabIndex="-1" 
          style={{ backgroundColor: 'rgba(15, 23, 42, 0.7)', zIndex: 1060 }}
          role="dialog"
          aria-labelledby="confirmModalLabel"
          aria-modal="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
              <div className="modal-header bg-dark text-white px-4 py-3 border-0">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-patch-check-fill text-primary fs-4"></i>
                  <div>
                    <h5 className="modal-title font-serif text-white mb-0" id="confirmModalLabel">
                      B2B Sample Request &amp; Inquiry Registered
                    </h5>
                    <small className="text-white-50">Ticket Code: RYCO-{Date.now().toString().slice(-6)} · Jakarta Export Desk</small>
                  </div>
                </div>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  aria-label="Close"
                  onClick={() => setConfirmationModal({ show: false, data: null })}
                ></button>
              </div>

              <div className="modal-body p-4 bg-light">
                <div className="alert alert-success d-flex align-items-center mb-4 rounded-3 border-0 shadow-sm" role="alert">
                  <i className="bi bi-check-circle-fill fs-4 me-3 text-success"></i>
                  <div>
                    <strong>Inquiry &amp; Evaluation Kit Dispatch Logged Successfully!</strong>
                    <div className="small">Our logistics officer is preparing courier paperwork and Certificate of Analysis.</div>
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="card h-100 border-0 shadow-sm p-3 rounded-3 bg-white">
                      <h6 className="text-uppercase text-secondary small fw-bold mb-3 border-bottom pb-2">
                        <i className="bi bi-person-badge me-1 text-primary"></i> Buyer &amp; Corporate Profile
                      </h6>
                      <p className="mb-1"><strong>PIC Name:</strong> {confirmationModal.data.buyerName}</p>
                      <p className="mb-1"><strong>Company:</strong> {confirmationModal.data.companyName}</p>
                      <p className="mb-1"><strong>Business Email:</strong> {confirmationModal.data.email}</p>
                      <p className="mb-1"><strong>WhatsApp / Phone:</strong> {confirmationModal.data.phone || 'Not specified'}</p>
                      <p className="mb-0"><strong>Destination:</strong> {confirmationModal.data.country}</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card h-100 border-0 shadow-sm p-3 rounded-3 bg-white">
                      <h6 className="text-uppercase text-secondary small fw-bold mb-3 border-bottom pb-2">
                        <i className="bi bi-box-seam me-1 text-primary"></i> Sample Specification
                      </h6>
                      <p className="mb-1"><strong>Commodity:</strong> <span className="badge bg-primary-subtle text-primary border border-primary-subtle">{confirmationModal.data.productInterest}</span></p>
                      <p className="mb-1"><strong>Selected Grade:</strong> <span className="badge bg-success-subtle text-success border border-success-subtle fw-bold">{confirmationModal.data.targetGrade}</span></p>
                      <p className="mb-1"><strong>Sample Weight:</strong> {confirmationModal.data.sampleWeight}</p>
                      <p className="mb-0"><strong>Lead Time:</strong> 24 business hours for AWB &amp; quotation</p>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="card border-0 shadow-sm p-3 rounded-3 bg-white">
                      <h6 className="text-uppercase text-secondary small fw-bold mb-2">
                        <i className="bi bi-geo-alt-fill me-1 text-primary"></i> Courier Delivery Destination
                      </h6>
                      <p className="text-muted small mb-0 font-monospace bg-light p-2 rounded border">
                        {confirmationModal.data.deliveryAddress}
                      </p>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="card border-0 shadow-sm p-3 rounded-3 bg-white">
                      <h6 className="text-uppercase text-secondary small fw-bold mb-2">
                        <i className="bi bi-chat-left-text me-1 text-primary"></i> Inquiry Details &amp; Target Specifications
                      </h6>
                      <p className="text-muted small mb-0 font-monospace bg-light p-2 rounded border">
                        {confirmationModal.data.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer bg-white px-4 py-3 border-top">
                <button 
                  type="button" 
                  className="btn btn-outline-secondary px-4 rounded-pill" 
                  onClick={() => setConfirmationModal({ show: false, data: null })}
                >
                  Close Confirmation
                </button>
                <a 
                  href="https://wa.me/6287776862445" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary px-4 rounded-pill"
                >
                  <i className="bi bi-whatsapp me-1"></i> Expedite via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

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
                <p>We dispatch a 250g or 500g physical sample package with lab COA so you can verify quality before contract signing.</p>
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

                    {/* Commodity Selection */}
                    <div className="col-md-6">
                      <label htmlFor="productInterest" className="form-label">
                        Commodity / Spice Variety <span className="text-danger">*</span>
                      </label>
                      <select 
                        className={`form-select ${validated && !formData.productInterest ? 'is-invalid' : ''}`}
                        id="productInterest" 
                        name="productInterest" 
                        value={formData.productInterest}
                        onChange={handleProductChange}
                        required
                      >
                        <option value="">Select commodity variety...</option>
                        {Object.keys(COMMODITY_GRADES).map((item) => (
                          <option key={item} value={item}>{item}</option>
                        ))}
                      </select>
                      <div className="invalid-feedback">Please select a spice commodity.</div>
                    </div>

                    {/* Target Grade Selection (Dependent Dropdown) */}
                    <div className="col-md-6">
                      <label htmlFor="targetGrade" className="form-label">
                        Target Quality Grade <span className="text-danger">*</span>
                      </label>
                      <select 
                        className={`form-select ${validated && !formData.targetGrade ? 'is-invalid' : ''}`}
                        id="targetGrade" 
                        name="targetGrade" 
                        value={formData.targetGrade}
                        onChange={handleChange}
                        disabled={!formData.productInterest}
                        required
                      >
                        {!formData.productInterest ? (
                          <option value="">Select commodity first to choose grade...</option>
                        ) : (
                          (COMMODITY_GRADES[formData.productInterest] || []).map((grade) => (
                            <option key={grade} value={grade}>{grade}</option>
                          ))
                        )}
                      </select>
                      <div className="invalid-feedback">Please select a target quality grade.</div>
                    </div>

                    {/* Sample Weight / Evaluation Kit (Includes 250g micro-sample) */}
                    <div className="col-md-6">
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
                        <option value="250g Micro-Sample Kit (Laboratory & Sensory Analysis)">
                          250g Micro-Sample Kit (Laboratory &amp; Sensory Analysis)
                        </option>
                        <option value="500g Standard Evaluation Kit (Single Variety with COA)">
                          500g Standard Evaluation Kit (Single Variety with COA)
                        </option>
                        <option value="1kg Multi-Grade Comparison Box (Export Quality Check)">
                          1kg Multi-Grade Comparison Box (Export Quality Check)
                        </option>
                        <option value="2kg Commercial Pilot Lot (Production Trial Batch)">
                          2kg Commercial Pilot Lot (Production Trial Batch)
                        </option>
                        <option value="Commercial Container RFQ (No Sample Needed)">
                          Commercial Container RFQ (Direct Price Quote, No Sample Needed)
                        </option>
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
