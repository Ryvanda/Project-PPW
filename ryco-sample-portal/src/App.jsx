import React, { useState } from 'react';
import Header from './components/Header';
import StatsSummary from './components/StatsSummary';
import SampleForm from './components/SampleForm';
import SampleList from './components/SampleList';
import EmptyState from './components/EmptyState';

// 4 Realistic Initial B2B International Export Sample Requests with full shipping addresses
const initialSampleData = [
  {
    id: 'SMPL-101',
    buyerName: 'Hans Schneider',
    companyName: 'Bavaria Spices GmbH',
    country: 'Germany',
    shippingAddress: 'Industriestrasse 42, Speicherstadt Warehouse #4, 20457 Hamburg, Germany',
    commodity: 'Indonesian Nutmeg (Biji Pala)',
    grade: 'Grade A (ABCD Whole)',
    sampleWeight: '500 gram',
    requestDate: '2026-10-22',
    status: 'Pending Review',
  },
  {
    id: 'SMPL-102',
    buyerName: 'Kenji Tanaka',
    companyName: 'Nippon Food Trading Corp',
    country: 'Japan',
    shippingAddress: 'Chuo-ku Tsukiji 4-14-1, Wholesale Center Bld 3F, Tokyo 104-0045, Japan',
    commodity: 'Mace (Fuli / Bunga Pala)',
    grade: 'Grade A (Whole Red Blades)',
    sampleWeight: '250 gram',
    requestDate: '2026-10-23',
    status: 'Shipped / Dispatched',
  },
  {
    id: 'SMPL-103',
    buyerName: 'Pieter van Dijk',
    companyName: 'Rotterdam Commodity House B.V.',
    country: 'Netherlands',
    shippingAddress: 'Waalhaven Zuidzijde 21, Haven 2210, 3089 JH Rotterdam, Netherlands',
    commodity: 'Zanzibar Cloves (Cengkeh)',
    grade: 'Grade 1 (Hand-Selected CG1)',
    sampleWeight: '1000 gram (1 kg)',
    requestDate: '2026-10-24',
    status: 'Delivered',
  },
  {
    id: 'SMPL-104',
    buyerName: 'Sarah Jenkins',
    companyName: 'Hudson Botanical Imports LLC',
    country: 'United States',
    shippingAddress: '450 West 33rd Street, Suite 900, New York, NY 10001, United States',
    commodity: 'Cassia Vera Cinnamon (Kayu Manis)',
    grade: 'Grade A (Kaastock 8-10cm)',
    sampleWeight: '500 gram',
    requestDate: '2026-10-24',
    status: 'Pending Review',
  },
];

/**
 * App Component (Root)
 * Features decoupled tab architecture (Monitoring vs. Dedicated Form),
 * upgraded courier shipping addresses, and full dependent grade taxonomy.
 */
export default function App() {
  // Main state holding the list of sample requests
  const [samples, setSamples] = useState(initialSampleData);

  // Active view tab: 'monitoring' | 'form'
  const [activeTab, setActiveTab] = useState('monitoring');

  // Notification message state
  const [notification, setNotification] = useState('');

  // Show temporary feedback toast banner
  const triggerNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification('');
    }, 4000);
  };

  // Handler: Add a new sample request
  const handleAddSample = (newSample) => {
    setSamples((prev) => [newSample, ...prev]);
    // Automatically switch to monitoring tab to view newly added item
    setActiveTab('monitoring');
    triggerNotification(`Permintaan sampel ${newSample.id} untuk "${newSample.companyName}" (${newSample.country}) berhasil dicatat.`);
  };

  // Handler: Delete a sample request
  const handleDeleteSample = (id) => {
    const target = samples.find((item) => item.id === id);
    setSamples((prev) => prev.filter((item) => item.id !== id));
    if (target) {
      triggerNotification(`Permintaan ${id} (${target.companyName}) berhasil dihapus.`);
    }
  };

  // Handler: Cycle through lifecycle stages
  const handleToggleStatus = (id) => {
    setSamples((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          let nextStatus = 'Shipped / Dispatched';
          if (item.status === 'Pending Review') nextStatus = 'Shipped / Dispatched';
          else if (item.status === 'Shipped / Dispatched') nextStatus = 'Delivered';
          else nextStatus = 'Pending Review';

          triggerNotification(`Status ${item.id} diperbarui menjadi "${nextStatus}".`);
          return { ...item, status: nextStatus };
        }
        return item;
      })
    );
  };

  // Handler: Clear all items (to easily test empty state)
  const handleClearAll = () => {
    setSamples([]);
    triggerNotification('Semua antrean sampel telah dikosongkan untuk pengujian.');
  };

  // Handler: Restore initial seed data
  const handleResetInitial = () => {
    setSamples(initialSampleData);
    triggerNotification('Data sampel awal B2B berhasil dimuat kembali.');
  };

  return (
    <div className="app-container">
      {/* 1. Header Component */}
      <Header />

      {/* 2. Top Navigation Tabs Bar */}
      <nav className="portal-tabs-nav" aria-label="Portal Navigation Tabs">
        <div className="portal-tabs-container">
          <button
            type="button"
            className={`tab-nav-btn ${activeTab === 'monitoring' ? 'tab-nav-btn--active' : ''}`}
            onClick={() => setActiveTab('monitoring')}
            id="tab-btn-monitoring"
          >
            <i className="bi bi-bar-chart-steps"></i>
            <span>Monitoring &amp; Pelacakan Sampel</span>
            <span className="tab-counter-badge">{samples.length}</span>
          </button>

          <button
            type="button"
            className={`tab-nav-btn ${activeTab === 'form' ? 'tab-nav-btn--active' : ''}`}
            onClick={() => setActiveTab('form')}
            id="tab-btn-form"
          >
            <i className="bi bi-plus-circle-fill"></i>
            <span>Catat Permintaan Sampel Baru</span>
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Dynamic Notification Toast */}
        {notification && (
          <div className="portal-notification" role="alert">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <i className="bi bi-check-circle-fill fs-5"></i>
              <span>{notification}</span>
            </div>
            <button
              type="button"
              onClick={() => setNotification('')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'inherit',
                fontSize: '1rem',
              }}
              aria-label="Tutup notifikasi"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        )}

        {/* View 1: Monitoring & Tracking Dashboard */}
        {activeTab === 'monitoring' && (
          <div className="tab-view-monitoring">
            {/* Dynamic Metric Statistics */}
            <StatsSummary samples={samples} />

            {/* Test Helper Bar */}
            <div className="monitoring-test-bar">
              <span className="text-muted small">
                <i className="bi bi-info-circle me-1"></i>
                Total {samples.length} permintaan sampel dalam sistem monitoring.
              </span>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {samples.length > 0 && (
                  <button
                    type="button"
                    className="btn-action-delete"
                    onClick={handleClearAll}
                    id="btn-clear-all"
                    style={{ padding: '0.4rem 0.8rem', fontSize: '0.78rem' }}
                  >
                    <i className="bi bi-trash3 me-1"></i> Kosongkan Antrean (Uji Empty State)
                  </button>
                )}
                {samples.length === 0 && (
                  <button
                    type="button"
                    className="btn-action-status"
                    onClick={handleResetInitial}
                    id="btn-quick-reset"
                    style={{ padding: '0.4rem 0.8rem', fontSize: '0.78rem' }}
                  >
                    <i className="bi bi-arrow-clockwise me-1"></i> Pulihkan Data Awal
                  </button>
                )}
              </div>
            </div>

            {/* Conditional Rendering: Empty State vs. Full Width Grid */}
            {samples.length === 0 ? (
              <EmptyState
                onSwitchTab={setActiveTab}
                onResetData={handleResetInitial}
              />
            ) : (
              <SampleList
                samples={samples}
                onDelete={handleDeleteSample}
                onToggleStatus={handleToggleStatus}
              />
            )}
          </div>
        )}

        {/* View 2: Dedicated Form View */}
        {activeTab === 'form' && (
          <div className="tab-view-form">
            <SampleForm
              onAddSample={handleAddSample}
              onCancel={() => setActiveTab('monitoring')}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="portal-footer">
        <p>
          &copy; {new Date().getFullYear()} <strong>Ryco Spices International Trade Desk</strong> · B2B Sample Tracking &amp; Monitoring System (Bab 6: React Dasar)
        </p>
      </footer>
    </div>
  );
}
