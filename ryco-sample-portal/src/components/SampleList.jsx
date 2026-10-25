import React, { useState } from 'react';
import SampleCard from './SampleCard';

/**
 * SampleList Component
 * Renders sample requests in a full-width responsive grid with
 * multi-attribute search, category filters, and dossier detail handler.
 * @param {{
 *   samples: Array,
 *   onDelete: Function,
 *   onToggleStatus: Function,
 *   onSelectSample: Function
 * }} props
 */
export default function SampleList({ samples, onDelete, onToggleStatus, onSelectSample }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [commodityFilter, setCommodityFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');

  // Multi-field search and category filtering
  const filteredSamples = samples.filter((sample) => {
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      sample.companyName.toLowerCase().includes(q) ||
      sample.buyerName.toLowerCase().includes(q) ||
      sample.country.toLowerCase().includes(q) ||
      (sample.shippingAddress && sample.shippingAddress.toLowerCase().includes(q)) ||
      sample.id.toLowerCase().includes(q);

    const matchesCommodity =
      commodityFilter === 'ALL' ||
      (sample.commodity && sample.commodity.toLowerCase().includes(commodityFilter.toLowerCase()));

    const matchesStatus =
      statusFilter === 'ALL' ||
      (sample.status && sample.status.toLowerCase().includes(statusFilter.toLowerCase()));

    return matchesSearch && matchesCommodity && matchesStatus;
  });

  const handleResetFilter = () => {
    setSearchTerm('');
    setCommodityFilter('ALL');
    setStatusFilter('ALL');
  };

  return (
    <div className="monitoring-list-container">
      {/* Search & Filter Toolbar */}
      <div className="monitoring-toolbar">
        <div className="search-box-field">
          <i className="bi bi-search search-icon"></i>
          <input
            type="text"
            className="search-input-field"
            placeholder="Cari perusahaan, PIC, alamat, kota, atau ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Cari permintaan sampel"
          />
          {searchTerm && (
            <button
              type="button"
              className="btn-clear-search"
              onClick={() => setSearchTerm('')}
              title="Bersihkan kata kunci"
            >
              <i className="bi bi-x-circle-fill"></i>
            </button>
          )}
        </div>

        <div className="filter-dropdowns-group">
          <select
            className="select-filter-control"
            value={commodityFilter}
            onChange={(e) => setCommodityFilter(e.target.value)}
            aria-label="Filter berdasarkan komoditas rempah"
          >
            <option value="ALL">Semua Komoditas</option>
            <option value="Nutmeg">Biji Pala (Nutmeg)</option>
            <option value="Mace">Fuli (Mace)</option>
            <option value="Cloves">Cengkeh (Cloves)</option>
            <option value="Cinnamon">Kayu Manis (Cinnamon)</option>
          </select>

          <select
            className="select-filter-control"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            aria-label="Filter berdasarkan status pengiriman"
          >
            <option value="ALL">Semua Status</option>
            <option value="Pending">Pending Review</option>
            <option value="Shipped">Shipped / Dispatched</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </div>

      {/* Render grid or empty filter result */}
      {filteredSamples.length === 0 ? (
        <div className="empty-search-state">
          <i className="bi bi-funnel text-muted fs-1 mb-2"></i>
          <h4 className="font-serif">Tidak Ada Data yang Cocok</h4>
          <p className="text-muted small mb-3">
            Tidak ditemukan permintaan sampel yang sesuai dengan filter pencarian Anda.
          </p>
          <button
            type="button"
            className="btn-reset-filters"
            onClick={handleResetFilter}
          >
            <i className="bi bi-arrow-counterclockwise me-1"></i>
            Reset Filter Pencarian
          </button>
        </div>
      ) : (
        <div className="samples-responsive-grid">
          {filteredSamples.map((sample) => (
            <SampleCard
              key={sample.id}
              sample={sample}
              onDelete={onDelete}
              onToggleStatus={onToggleStatus}
              onSelectSample={onSelectSample}
            />
          ))}
        </div>
      )}
    </div>
  );
}
