# Ryco Spices - Modern React Web Application

## Overview
Ryco Spices (`ryco-spices-react`) is a multi-page, production-grade React web application for an Indonesian B2B spice exporter connecting traditional smallholder agroforestry farming cooperatives across the Spice Islands (Banda Neira, Ambon, and Sulawesi) directly with international wholesale spice importers, extractors, and food processors worldwide.

The application replaces the legacy static Bootstrap prototype with a modular, component-driven Single Page Application (SPA) architecture utilizing React 19, Vite, React Router v6, and Bootstrap 5.3.

---

## Technical Stack & Architecture

### Core Technologies
- Framework: React 19 / 18
- Build Tool & Bundler: Vite 8.3
- Client-Side Routing: React Router DOM v6
- Styling Framework: Bootstrap 5.3.3 and Bootstrap Icons
- Typography: Playfair Display (Serif headings) and Plus Jakarta Sans (Clean UI body)
- Color Palette:
  - Deep Forest Green: #2D5016
  - Warm Earth Brown: #8B4513
  - Harvest Spice Gold: #C9A959
  - Warm Cream Background: #FAF7F2 / #F5F1E8
  - Dark Charcoal Olive: #1F2D16

---

## Application Structure & Routing Table

The application exposes 5 main client-side routes handled by `react-router-dom`:

| Path | View Component | Description |
| :--- | :--- | :--- |
| `/` | `src/pages/Home.jsx` | Homepage with Hero banner, Trust stats, 4 featured spices, profile spotlight, and CTAs. |
| `/about` | `src/pages/About.jsx` | Heritage narrative, mission, vision, 5 core values, and origin advantages. |
| `/products` | `src/pages/Products.jsx` | Commodity filter tabs, technical parameter tables, grade badges, and packaging options. |
| `/news` | `src/pages/News.jsx` | Harvest bulletins, category filtering, interactive modal reader, and newsletter subscription. |
| `/contact` | `src/pages/Contact.jsx` | Controlled B2B sample inquiry form with validation, office coordinates, and FAQ accordion. |

---

## Directory Layout

```text
ryco-spices-react/
|-- public/
|   |-- images/
|   |   |-- logo.webp
|   |   |-- hero_bg.webp
|   |   |-- company_profile.webp
|   |   |-- nutmeg_whole.webp
|   |   |-- mace.webp
|   |   |-- cloves.webp
|   |   `-- cinnamon.webp
|   |-- favicon.svg
|   |-- favicon.png
|   |-- favicon-16x16.png
|   `-- favicon-512.png
|-- screenshots/
|   |-- 01_home_desktop.png
|   |-- 01_home_mobile.png
|   |-- 02_about_page.png
|   |-- 03_products_page.png
|   |-- 04_news_page.png
|   |-- 04_news_modal_reader.png
|   `-- 05_contact_sample_form.png
|-- src/
|   |-- components/
|   |   |-- Navbar.jsx
|   |   |-- Footer.jsx
|   |   |-- ToastNotification.jsx
|   |   |-- ArticleModal.jsx
|   |   `-- ScrollToTop.jsx
|   |-- data/
|   |   |-- products.js
|   |   `-- news.js
|   |-- pages/
|   |   |-- Home.jsx
|   |   |-- About.jsx
|   |   |-- Products.jsx
|   |   |-- News.jsx
|   |   `-- Contact.jsx
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
|-- vite.config.js
`-- README.md
```

---

## Component Architecture

1. `Navbar.jsx`:
   - Fixed-top sticky navigation with responsive collapse toggler.
   - Utilizes `NavLink` with active link indicator highlighting.
   - Branded with the official Ryco Spices logo.
   - Includes a direct "Get a Quote" call to action.

2. `Footer.jsx`:
   - Four-column layout including corporate profile, product navigation, quick links, and export desk contacts.
   - Floating back-to-top button with smooth scroll behavior.
   - Legal, phytosanitary, and certificate references.

3. `ToastNotification.jsx`:
   - Controlled dismissible alert component.
   - Auto-hides after a configurable timeout (default: 6000ms).
   - Provides visual confirmation for inquiries and newsletter signups.

4. `ArticleModal.jsx`:
   - Modal reader dialog triggered from article listings.
   - Displays article metadata, hero photography, formatted HTML body, and backdrop dismiss.
   - Handles Escape key dismiss and body scroll lock.

5. `ScrollToTop.jsx`:
   - Utility component listening to location path changes to ensure the viewport resets to top on route change.

---

## State Management & Form Handling

The B2B inquiry form in `src/pages/Contact.jsx` is implemented as a fully controlled React component utilizing `useState`:
- Form state captures buyer name, company name, destination country and port, corporate email, telephone, product interest, sample package selection, complete courier shipping address, and inquiry specifications.
- Client-side validation checks all mandatory fields before submission.
- Upon successful validation, the system triggers the `ToastNotification` component and cleanly resets the form state.

---

## Setup and Running the Application

### Prerequisites
- Node.js version 18 or higher
- npm version 9 or higher

### Installation
Clone or navigate to the repository directory and install project dependencies:
```bash
cd ryco-spices-react
npm install
```

### Development Server
To launch the Vite development server on port 5173:
```bash
npm run dev -- --port 5173
```
Access the application in your browser at: `http://localhost:5173/`

### Production Build
To create an optimized production build:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

---

## Visual Verification Artifacts

High-resolution screenshots are stored in `ryco-spices-react/screenshots/`:
- `01_home_desktop.png`: Full desktop homepage view with Hero, Stats, and Product cards.
- `01_home_mobile.png`: Mobile viewport view demonstrating responsive navigation collapse.
- `02_about_page.png`: About page showcasing heritage narrative, values, and farmer sourcing.
- `03_products_page.png`: Products page with interactive commodity filter and spec tables.
- `04_news_page.png`: News page with article grid and category tabs.
- `04_news_modal_reader.png`: Interactive modal reading experience.
- `05_contact_sample_form.png`: Contact page with Sample Request form and FAQ accordion.

---

## Regulatory & Standards Compliance
- Indonesia Agricultural Quarantine Agency (Phytosanitary Certification)
- Certificate of Origin (COO Form A, Form D, and General COO)
- European Commission Regulation (EU) 2023/915 on Mycotoxin & Aflatoxin Maximum Limits
- International Maritime Organization (IMO) Cargo Sweat & Fumigation Guidelines
