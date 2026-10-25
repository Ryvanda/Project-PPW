import React, { useState } from 'react';
import {
  COMMODITY_GRADES,
  COMMODITY_OPTIONS,
  COUNTRY_OPTIONS,
  SAMPLE_WEIGHT_OPTIONS,
} from '../constants/spices';

/**
 * SampleForm Component (Controlled Component)
 * Supports two-tier dependent dropdown (Commodity -> Grades),
 * full courier shipping address, and global country selection.
 * @param {{ onAddSample: Function, onCancel: Function }} props
 */
export default function SampleForm({ onAddSample, onCancel }) {
  const initialCommodity = COMMODITY_OPTIONS[0];
  const initialGrade = COMMODITY_GRADES[initialCommodity][0];

  // Controlled form state
  const [formData, setFormData] = useState({
    buyerName: '',
    companyName: '',
    country: '',
    shippingAddress: '',
    commodity: initialCommodity,
    grade: initialGrade,
    sampleWeight: SAMPLE_WEIGHT_OPTIONS[1], // default "500 gram"
  });

  const [errors, setErrors] = useState({});

  // Handle generic input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Handle dependent Commodity selection change
  const handleCommodityChange = (e) => {
    const selectedCommodity = e.target.value;
    const availableGrades = COMMODITY_GRADES[selectedCommodity] || [];
    const firstGrade = availableGrades[0] || '';

    setFormData((prev) => ({
      ...prev,
      commodity: selectedCommodity,
      grade: firstGrade,
    }));

    if (errors.commodity || errors.grade) {
      setErrors((prev) => ({
        ...prev,
        commodity: '',
        grade: '',
      }));
    }
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Field validations
    const newErrors = {};
    if (!formData.buyerName.trim()) {
      newErrors.buyerName = 'Nama PIC / Buyer wajib diisi.';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Nama Perusahaan Importir wajib diisi.';
    }
    if (!formData.country.trim()) {
      newErrors.country = 'Negara tujuan wajib dipilih.';
    }
    if (!formData.shippingAddress.trim()) {
      newErrors.shippingAddress = 'Alamat lengkap kurir pengiriman sampel wajib diisi.';
    }
    if (!formData.commodity.trim()) {
      newErrors.commodity = 'Komoditas rempah wajib dipilih.';
    }
    if (!formData.grade.trim()) {
      newErrors.grade = 'Grade kualitas ekspor wajib dipilih.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Construct entity object
    const newSample = {
      id: `SMPL-${Date.now().toString().slice(-4)}`,
      buyerName: formData.buyerName.trim(),
      companyName: formData.companyName.trim(),
      country: formData.country.trim(),
      shippingAddress: formData.shippingAddress.trim(),
      commodity: formData.commodity,
      grade: formData.grade,
      sampleWeight: formData.sampleWeight,
      requestDate: new Date().toISOString().split('T')[0],
      status: 'Pending Review',
    };

    onAddSample(newSample);

    // Reset form
    setFormData({
      buyerName: '',
      companyName: '',
      country: '',
      shippingAddress: '',
      commodity: initialCommodity,
      grade: initialGrade,
      sampleWeight: SAMPLE_WEIGHT_OPTIONS[1],
    });
    setErrors({});
  };

  const currentAvailableGrades = COMMODITY_GRADES[formData.commodity] || [];

  return (
    <div className="dedicated-form-container">
      <div className="dedicated-form-card" aria-labelledby="form-heading">
        <div className="form-card-header">
          <div className="form-card-header__icon">
            <i className="bi bi-box-seam-fill"></i>
          </div>
          <div>
            <h2 id="form-heading" className="card-title font-serif">
              Catat Permintaan Sampel Baru
            </h2>
            <p className="card-subtitle">
              Input data pengiriman sampel rempah untuk pengiriman via kurir udara (DHL/FedEx Air-Freight).
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* Section 1: Partner & Buyer Info */}
          <div className="form-section-block">
            <h3 className="form-section-title">
              <i className="bi bi-building-check me-2"></i>
              1. Informasi Mitra Importir &amp; PIC
            </h3>
            <div className="form-row-2">
              <div className="form-group">
                <label htmlFor="buyerName" className="form-label">
                  Nama PIC / Contact Person <span className="req">*</span>
                </label>
                <input
                  type="text"
                  id="buyerName"
                  name="buyerName"
                  className={`form-control ${errors.buyerName ? 'is-invalid' : ''}`}
                  placeholder="cth. Hans Schneider"
                  value={formData.buyerName}
                  onChange={handleChange}
                />
                {errors.buyerName && <p className="form-error">{errors.buyerName}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="companyName" className="form-label">
                  Nama Perusahaan Importir <span className="req">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className={`form-control ${errors.companyName ? 'is-invalid' : ''}`}
                  placeholder="cth. Bavaria Spices GmbH"
                  value={formData.companyName}
                  onChange={handleChange}
                />
                {errors.companyName && <p className="form-error">{errors.companyName}</p>}
              </div>
            </div>
          </div>

          {/* Section 2: Commodity & Quality Grade (Dependent Selection) */}
          <div className="form-section-block">
            <h3 className="form-section-title">
              <i className="bi bi-flower1 me-2"></i>
              2. Spesifikasi Mutu &amp; Grade Rempah
            </h3>
            <div className="form-row-2">
              <div className="form-group">
                <label htmlFor="commodity" className="form-label">
                  Komoditas Rempah Utama <span className="req">*</span>
                </label>
                <select
                  id="commodity"
                  name="commodity"
                  className={`form-select ${errors.commodity ? 'is-invalid' : ''}`}
                  value={formData.commodity}
                  onChange={handleCommodityChange}
                >
                  {COMMODITY_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {errors.commodity && <p className="form-error">{errors.commodity}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="grade" className="form-label">
                  Grade Kualitas Ekspor (Dependent) <span className="req">*</span>
                </label>
                <select
                  id="grade"
                  name="grade"
                  className={`form-select ${errors.grade ? 'is-invalid' : ''}`}
                  value={formData.grade}
                  onChange={handleChange}
                >
                  {currentAvailableGrades.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
                {errors.grade && <p className="form-error">{errors.grade}</p>}
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label htmlFor="sampleWeight" className="form-label">
                  Ukuran Paket Sampel <span className="req">*</span>
                </label>
                <select
                  id="sampleWeight"
                  name="sampleWeight"
                  className="form-select"
                  value={formData.sampleWeight}
                  onChange={handleChange}
                >
                  {SAMPLE_WEIGHT_OPTIONS.map((w) => (
                    <option key={w} value={w}>
                      {w}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="country" className="form-label">
                  Negara Tujuan Ekspor <span className="req">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  className={`form-select ${errors.country ? 'is-invalid' : ''}`}
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">-- Pilih Negara Tujuan --</option>
                  {COUNTRY_OPTIONS.map((countryName) => (
                    <option key={countryName} value={countryName}>
                      {countryName}
                    </option>
                  ))}
                </select>
                {errors.country && <p className="form-error">{errors.country}</p>}
              </div>
            </div>
          </div>

          {/* Section 3: Full Courier Shipping Address */}
          <div className="form-section-block">
            <h3 className="form-section-title">
              <i className="bi bi-geo-alt-fill me-2"></i>
              3. Alamat Lengkap Pengiriman Kurir Internasional
            </h3>
            <div className="form-group">
              <label htmlFor="shippingAddress" className="form-label">
                Alamat Kantor / Fasilitas QC Penerima <span className="req">*</span>
              </label>
              <textarea
                id="shippingAddress"
                name="shippingAddress"
                rows="3"
                className={`form-control ${errors.shippingAddress ? 'is-invalid' : ''}`}
                placeholder="Contoh: Industriestrasse 42, Speicherstadt Warehouse #4, 20457 Hamburg, Germany"
                value={formData.shippingAddress}
                onChange={handleChange}
              ></textarea>
              {errors.shippingAddress && (
                <p className="form-error">{errors.shippingAddress}</p>
              )}
              <p className="form-help-text">
                Wajib mencantumkan nama jalan, gedung/gudang, kode pos, dan kota tujuan untuk pencetakan Airway Bill (AWB).
              </p>
            </div>
          </div>

          {/* Form Actions */}
          <div className="form-actions-bar">
            <button
              type="button"
              className="btn-secondary-action"
              onClick={onCancel}
              id="btn-cancel-form"
            >
              <i className="bi bi-arrow-left"></i>
              Batal / Kembali ke Monitoring
            </button>
            <button
              type="submit"
              className="btn-primary-action"
              id="btn-submit-sample"
            >
              <i className="bi bi-check2-circle"></i>
              Catat Permintaan Sampel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
