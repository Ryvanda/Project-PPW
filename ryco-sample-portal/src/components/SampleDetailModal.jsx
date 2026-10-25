import React, { useState } from 'react';

/**
 * SampleDetailModal Component
 * Interactive modal presenting the full B2B Sample Request Dossier:
 * - Header: ID, Date, Status Badge
 * - Buyer Profile: PIC, Company, Email, Phone, Country
 * - Shipping & Courier Dossier: Service, Tracking AWB, Address, City, Postal Code
 * - Commodity Specification: Spice Commodity, Target Grade, Sample Weight, Packaging
 * - Internal Remarks & Workflow Action: Status dropdown & dispatch notes
 *
 * @param {{
 *   sample: Object,
 *   onClose: Function,
 *   onUpdateStatus: Function
 * }} props
 */
export default function SampleDetailModal({ sample, onClose, onUpdateStatus }) {
  if (!sample) return null;

  const [currentStatus, setCurrentStatus] = useState(sample.status);
  const [dispatchNotes, setDispatchNotes] = useState(
    sample.dispatchNotes || 'Permintaan sampel terverifikasi. Dokumen Phytosanitary dan COA laboratorium terlampir.'
  );

  const handleStatusChange = (e) => {
    setCurrentStatus(e.target.value);
  };

  const handleSave = () => {
    if (onUpdateStatus) {
      onUpdateStatus(sample.id, currentStatus, dispatchNotes);
    }
  };

  // Determine badge styling based on status
  const getStatusBadge = (statusVal) => {
    if (statusVal === 'Delivered') {
      return (
        <span className="status-badge status-badge--delivered">
          <i className="bi bi-check-all me-1"></i>
          Delivered
        </span>
      );
    }
    if (statusVal.includes('Shipped')) {
      return (
        <span className="status-badge status-badge--shipped">
          <i className="bi bi-airplane-fill me-1"></i>
          Shipped / Dispatched
        </span>
      );
    }
    return (
      <span className="status-badge status-badge--pending">
        <i className="bi bi-hourglass-split me-1"></i>
        Pending Review
      </span>
    );
  };

  return (
    <div 
      className="modal-backdrop-custom" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-labelledby="modal-dossier-title"
      aria-modal="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <i className="bi bi-folder2-open fs-4" style={{ color: '#C9A959' }}></i>
              <div>
                <h3 id="modal-dossier-title" className="modal-title">
                  Sample Request Dossier: {sample.id}
                </h3>
                <span style={{ fontSize: '0.78rem', color: '#E5DFD3' }}>
                  Tanggal Permintaan: {sample.requestDate} · Sistem Logistik Ekspor
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {getStatusBadge(currentStatus)}
              <button 
                type="button" 
                className="btn-close" 
                onClick={onClose} 
                aria-label="Tutup Dossier"
                id="btn-close-dossier"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="modal-body">
            <div className="dossier-grid">
              {/* Section 1: Buyer & Company Profile */}
              <div className="dossier-card">
                <h4 className="dossier-card-title">
                  <i className="bi bi-person-badge-fill"></i>
                  Profil Buyer &amp; Perusahaan Importir
                </h4>
                <div className="dossier-field">
                  <strong>Nama PIC:</strong>
                  <span>{sample.buyerName}</span>
                </div>
                <div className="dossier-field">
                  <strong>Perusahaan:</strong>
                  <span>{sample.companyName}</span>
                </div>
                <div className="dossier-field">
                  <strong>Email Bisnis:</strong>
                  <span>{sample.email || `${sample.buyerName.toLowerCase().replace(/\s+/g, '.')}@${sample.companyName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`}</span>
                </div>
                <div className="dossier-field">
                  <strong>WhatsApp / Telp:</strong>
                  <span>{sample.phone || '+49 170 882910'}</span>
                </div>
                <div className="dossier-field">
                  <strong>Negara Tujuan:</strong>
                  <span className="badge-country">{sample.country}</span>
                </div>
              </div>

              {/* Section 2: Commodity Spec */}
              <div className="dossier-card">
                <h4 className="dossier-card-title">
                  <i className="bi bi-award-fill"></i>
                  Spesifikasi Komoditas Sampel
                </h4>
                <div className="dossier-field">
                  <strong>Komoditas:</strong>
                  <span>{sample.commodity}</span>
                </div>
                <div className="dossier-field">
                  <strong>Target Grade:</strong>
                  <span style={{ fontWeight: 700, color: '#2D5016' }}>{sample.grade}</span>
                </div>
                <div className="dossier-field">
                  <strong>Berat Sampel:</strong>
                  <span>{sample.sampleWeight}</span>
                </div>
                <div className="dossier-field">
                  <strong>Tipe Kemasan:</strong>
                  <span>{sample.packagingType || 'Vacuum-Sealed Foil Bag + Outer Rigid Export Box'}</span>
                </div>
              </div>
            </div>

            {/* Section 3: Shipping & Courier Dossier */}
            <div className="dossier-card" style={{ width: '100%' }}>
              <h4 className="dossier-card-title">
                <i className="bi bi-airplane-engines-fill"></i>
                Dossier Pengiriman Kurir Internasional
              </h4>
              <div className="dossier-grid" style={{ marginBottom: '0.85rem' }}>
                <div className="dossier-field">
                  <strong>Layanan Kurir:</strong>
                  <span>{sample.courierService || 'DHL Express Worldwide'}</span>
                </div>
                <div className="dossier-field">
                  <strong>Nomor Resi / AWB:</strong>
                  <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#8B4513' }}>
                    {sample.trackingAwb || `DHL-${sample.id.replace('SMPL-', '')}89-2026-X`}
                  </span>
                </div>
                <div className="dossier-field">
                  <strong>Kota &amp; Wilayah:</strong>
                  <span>{sample.city || 'Hamburg'}</span>
                </div>
                <div className="dossier-field">
                  <strong>Kode Pos:</strong>
                  <span>{sample.postalCode || '20457'}</span>
                </div>
              </div>

              <div className="dossier-address-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem', fontWeight: 600, color: '#8B4513' }}>
                  <i className="bi bi-geo-alt-fill"></i>
                  <span>Alamat Lengkap Pengiriman:</span>
                </div>
                <p style={{ margin: 0 }}>{sample.shippingAddress}</p>
              </div>
            </div>

            {/* Section 4: Internal Remarks & Workflow Action */}
            <div className="dossier-card" style={{ width: '100%' }}>
              <h4 className="dossier-card-title">
                <i className="bi bi-sliders"></i>
                Catatan Internal Ekspor &amp; Tindakan Workflow
              </h4>
              
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  Catatan Dispatch &amp; Quality Control:
                </label>
                <textarea 
                  className="search-input-field"
                  style={{ width: '100%', minHeight: '60px', padding: '0.6rem 0.8rem', fontSize: '0.86rem' }}
                  value={dispatchNotes}
                  onChange={(e) => setDispatchNotes(e.target.value)}
                  placeholder="Tambahkan catatan QC atau koordinat dispatch..."
                ></textarea>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', background: '#FFFFFF', padding: '0.85rem', borderRadius: '6px', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <label htmlFor="modal-status-select" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                    Perbarui Status Alur Kerja:
                  </label>
                  <select
                    id="modal-status-select"
                    className="select-filter-control"
                    value={currentStatus}
                    onChange={handleStatusChange}
                    style={{ minWidth: '180px' }}
                  >
                    <option value="Pending Review">Pending Review</option>
                    <option value="Shipped / Dispatched">Shipped / Dispatched</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="btn-action-status"
                  onClick={handleSave}
                  id="btn-save-dossier-status"
                  style={{ padding: '0.45rem 1rem' }}
                >
                  <i className="bi bi-check2-circle me-1"></i>
                  Simpan Pembaruan
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn-action-delete" 
              onClick={onClose}
              id="btn-footer-close"
              style={{ background: '#F8F5EE', color: '#52604D', borderColor: '#E5DFD3' }}
            >
              Tutup Dossier
            </button>
            <button 
              type="button" 
              className="btn-action-status"
              onClick={onClose}
            >
              Selesai &amp; Kembali ke Monitoring
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
