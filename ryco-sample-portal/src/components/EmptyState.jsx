import React from 'react';

/**
 * EmptyState Component
 * Conditionally rendered when samples array is empty.
 * Displays mandatory text: "Belum ada data permintaan sampel rempah."
 * @param {{ onSwitchTab: Function, onResetData: Function }} props
 */
export default function EmptyState({ onSwitchTab, onResetData }) {
  return (
    <div className="empty-state-modern-card" role="status" aria-live="polite">
      <div className="empty-state__icon-wrap">
        <i className="bi bi-inbox-fill"></i>
      </div>
      <h3 className="empty-state__title font-serif">
        Belum ada data permintaan sampel rempah.
      </h3>
      <p className="empty-state__desc">
        Semua antrean sampel saat ini kosong atau telah diproses. Anda dapat mencatat permintaan sampel internasional baru dengan koordinat kurir lengkap, atau memulihkan data demo awal.
      </p>

      <div className="empty-state-actions">
        {onSwitchTab && (
          <button
            type="button"
            className="btn-empty-primary"
            onClick={() => onSwitchTab('form')}
            id="btn-empty-add-new"
          >
            <i className="bi bi-plus-circle-fill me-1"></i>
            Tambah Permintaan Baru
          </button>
        )}
        {onResetData && (
          <button
            type="button"
            className="btn-empty-secondary"
            onClick={onResetData}
            id="btn-restore-samples"
          >
            <i className="bi bi-arrow-clockwise me-1"></i>
            Pulihkan Data Awal
          </button>
        )}
      </div>
    </div>
  );
}
