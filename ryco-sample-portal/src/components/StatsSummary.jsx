import React from 'react';

/**
 * StatsSummary Component
 * Computes dynamic metrics based on the current sample requests array.
 * @param {{ samples: Array }} props
 */
export default function StatsSummary({ samples = [] }) {
  const totalCount = samples.length;
  
  const pendingCount = samples.filter(
    (item) => item.status === 'Pending Review'
  ).length;

  const dispatchedCount = samples.filter(
    (item) => item.status.includes('Shipped') || item.status === 'Delivered'
  ).length;

  // Calculate total sample weight in kilograms
  const totalVolumeKg = samples.reduce((acc, curr) => {
    const raw = curr.sampleWeight ? curr.sampleWeight.toLowerCase() : '';
    let kg = 0;
    if (raw.includes('kg')) {
      // Handles e.g. "1000 gram (1 kg)" or "1 kg"
      const match = raw.match(/(\d+(\.\d+)?)\s*kg/);
      if (match) {
        kg = parseFloat(match[1]) || 0;
      } else {
        kg = parseFloat(raw) || 0;
      }
    } else if (raw.includes('gram') || raw.includes('g')) {
      const match = raw.match(/(\d+(\.\d+)?)/);
      if (match) {
        kg = (parseFloat(match[1]) || 0) / 1000;
      }
    }
    return acc + kg;
  }, 0);

  return (
    <section className="stats-grid" aria-label="Portal Metrics Summary">
      {/* Total Requests */}
      <div className="stat-card stat-card--total">
        <div className="stat-card__info">
          <span className="stat-card__label">Total Permintaan</span>
          <span className="stat-card__value">{totalCount}</span>
          <span className="stat-card__subtext">B2B Wholesale Buyer</span>
        </div>
        <div className="stat-card__icon">
          <i className="bi bi-inboxes-fill"></i>
        </div>
      </div>

      {/* Pending Shipments */}
      <div className="stat-card stat-card--pending">
        <div className="stat-card__info">
          <span className="stat-card__label">Menunggu Dispatched</span>
          <span className="stat-card__value">{pendingCount}</span>
          <span className="stat-card__subtext">Pending Review / QC</span>
        </div>
        <div className="stat-card__icon">
          <i className="bi bi-clock-history"></i>
        </div>
      </div>

      {/* Dispatched / Shipped */}
      <div className="stat-card stat-card--shipped">
        <div className="stat-card__info">
          <span className="stat-card__label">Sampel Terkirim</span>
          <span className="stat-card__value">{dispatchedCount}</span>
          <span className="stat-card__subtext">Shipped &amp; Delivered</span>
        </div>
        <div className="stat-card__icon">
          <i className="bi bi-send-check-fill"></i>
        </div>
      </div>

      {/* Total Sample Volume */}
      <div className="stat-card stat-card--volume">
        <div className="stat-card__info">
          <span className="stat-card__label">Total Volume Sampel</span>
          <span className="stat-card__value">{totalVolumeKg.toFixed(2)} kg</span>
          <span className="stat-card__subtext">Air-Freight Courier Dispatch</span>
        </div>
        <div className="stat-card__icon">
          <i className="bi bi-box-seam-fill"></i>
        </div>
      </div>
    </section>
  );
}
