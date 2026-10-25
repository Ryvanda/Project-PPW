import React from 'react';

/**
 * SampleCard Component
 * Displays upgraded B2B international shipping coordinates,
 * standardized commodity & grade chips, highlighted address block,
 * explicit "Lihat Detail Dossier" action, and status controls.
 *
 * @param {{
 *   sample: Object,
 *   onDelete: Function,
 *   onToggleStatus: Function,
 *   onSelectSample: Function
 * }} props
 */
export default function SampleCard({ sample, onDelete, onToggleStatus, onSelectSample }) {
  const {
    id,
    buyerName,
    companyName,
    country,
    shippingAddress,
    commodity,
    grade,
    sampleWeight,
    requestDate,
    status,
  } = sample;

  // Determine badge styling based on status
  const getStatusBadge = () => {
    if (status === 'Delivered') {
      return (
        <span className="status-badge status-badge--delivered">
          <i className="bi bi-check-all"></i>
          Delivered
        </span>
      );
    }
    if (status.includes('Shipped')) {
      return (
        <span className="status-badge status-badge--shipped">
          <i className="bi bi-airplane-fill"></i>
          Shipped / Dispatched
        </span>
      );
    }
    return (
      <span className="status-badge status-badge--pending">
        <i className="bi bi-hourglass-split"></i>
        Pending Review
      </span>
    );
  };

  const handleCardClick = (e) => {
    // If the click is inside a button, do nothing (event handlers on buttons stop propagation)
    if (onSelectSample) {
      onSelectSample(sample);
    }
  };

  return (
    <article 
      className="sample-card-modern" 
      id={`card-${id}`} 
      aria-label={`Sample request ${id}`}
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      {/* Top Meta Bar */}
      <div className="card-top-bar">
        <div className="id-and-country">
          <span className="sample-id-chip">{id}</span>
          <span className="country-chip">
            <i className="bi bi-globe-americas"></i>
            {country}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {getStatusBadge()}
        </div>
      </div>

      {/* Company & Buyer Details */}
      <div className="card-partner-block">
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
          <h3 
            className="company-title" 
            title="Klik untuk melihat Detail Dossier"
            style={{ color: 'var(--forest-dark)' }}
          >
            {companyName}
          </h3>
          <button
            type="button"
            className="btn-dossier-open"
            onClick={(e) => {
              e.stopPropagation();
              if (onSelectSample) onSelectSample(sample);
            }}
            id={`dossier-btn-${id}`}
            title="Buka Lembar Detail Dossier"
          >
            <i className="bi bi-file-earmark-medical"></i>
            <span>Detail Dossier</span>
          </button>
        </div>
        <p className="buyer-contact">
          <i className="bi bi-person-circle"></i>
          <span>PIC: <strong>{buyerName}</strong></span>
        </p>
      </div>

      {/* Commodity & Quality Grade Chips */}
      <div className="specs-chips-row">
        <div className="spec-chip spec-chip--commodity" title="Komoditas Rempah">
          <i className="bi bi-flower1"></i>
          <span>{commodity}</span>
        </div>
        <div className="spec-chip spec-chip--grade" title="Grade Mutu Ekspor (Standardized)">
          <i className="bi bi-award-fill"></i>
          <span>{grade}</span>
        </div>
        <div className="spec-chip spec-chip--weight" title="Berat Paket Sampel">
          <i className="bi bi-box-seam"></i>
          <span>{sampleWeight}</span>
        </div>
      </div>

      {/* Highlighted Full Courier Shipping Address Block */}
      <div className="shipping-address-box">
        <div className="address-header">
          <i className="bi bi-geo-alt-fill text-earth"></i>
          <span className="address-label">Alamat Kurir Pengiriman:</span>
        </div>
        <p className="address-text">{shippingAddress || 'Alamat kurir belum dicatat.'}</p>
      </div>

      {/* Card Footer Actions */}
      <div className="card-footer-modern">
        <span className="order-date-text">
          <i className="bi bi-calendar3"></i>
          Tgl: {requestDate}
        </span>

        <div className="card-footer-buttons">
          <button
            type="button"
            className="btn-status-toggle"
            onClick={(e) => {
              e.stopPropagation();
              onToggleStatus(id);
            }}
            title="Siklus status: Pending -> Shipped -> Delivered"
            id={`toggle-${id}`}
          >
            <i className="bi bi-arrow-repeat"></i>
            Ubah Status
          </button>

          <button
            type="button"
            className="btn-delete-item"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(id);
            }}
            title="Hapus data permintaan ini"
            id={`delete-${id}`}
          >
            <i className="bi bi-trash3-fill"></i>
            Hapus
          </button>
        </div>
      </div>
    </article>
  );
}
