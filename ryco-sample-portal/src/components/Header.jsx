import React from 'react';

/**
 * Header Component
 * Displays Ryco Spices brand identity, portal title, and operational sourcing status.
 */
export default function Header() {
  return (
    <header className="portal-header">
      <div className="portal-header__inner">
        <div className="portal-brand">
          <div className="portal-brand__icon">
            <i className="bi bi-box2-heart-fill"></i>
          </div>
          <div>
            <h1 className="portal-brand__title font-serif">Ryco Spices</h1>
            <p className="portal-brand__subtitle">Internal Sample Request Tracking Portal</p>
          </div>
        </div>

        <div className="portal-header__actions">
          <div className="portal-badge-session">
            <span className="pulse-dot"></span>
            <span>Active Sourcing Session (Maluku &amp; Jakarta Hubs)</span>
          </div>
        </div>
      </div>
    </header>
  );
}
