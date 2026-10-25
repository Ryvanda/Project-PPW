import React from 'react';

/**
 * SampleCard Component
 * Displays upgraded B2B international shipping coordinates,
 * distinct commodity & grade chips, highlighted address block, and actions.
 * @param {{ sample: Object, onDelete: Function, onToggleStatus: Function }} props
 */
export default function SampleCard({ sample, onDelete, onToggleStatus }) {
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

  return (
    <article className="sample-card-modern" id={`card-${id}`} aria-label={`Sample request ${id}`}>
      {/* Top Meta Bar */}
      <div className="card-top-bar">
        <div className="id-and-country">
          <span className="sample-id-chip">{id}</span>
          <span className="country-chip">
            <i className="bi bi-globe-americas"></i>
            {country}
          </span>
        </div>
        <div>{getStatusBadge()}</div>
      </div>

      {/* Company & Buyer Details */}
      <div className="card-partner-block">
        <h3 className="company-title">{companyName}</h3>
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
        <div className="spec-chip spec-chip--grade" title="Grade Mutu Ekspor">
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
            onClick={() => onToggleStatus(id)}
            title="Siklus status: Pending -> Shipped -> Delivered"
            id={`toggle-${id}`}
          >
            <i className="bi bi-arrow-repeat"></i>
            Ubah Status Pengiriman
          </button>

          <button
            type="button"
            className="btn-delete-item"
            onClick={() => onDelete(id)}
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
