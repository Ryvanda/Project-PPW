# Ryco Spices - Unified React Ecosystem Platform

## 1. Project Overview & Architecture
Ryco Spices is an enterprise-grade digital trade platform for an Indonesian spice exporter. The system connects traditional agroforestry smallholders across the Spice Islands (Banda Neira, Ambon, and Sulawesi) directly with international wholesale spice importers, extractors, and food processors across Europe, North America, and Asia.

This repository (`Project-PPW`) unites two specialized React applications sharing a centralized branding, asset, and design system:

1. **`ryco-spices-react` (Application 1 - Public B2B Export Website)**:
   A multi-page Single Page Application (SPA) powered by React Router DOM v6, offering a 5-page public customer journey for international commodity buyers, technical laboratory specifications, market bulletins, and an interactive Request for Quotation (RFQ) sample form.
2. **`ryco-sample-portal` (Application 2 - Internal B2B Sample Tracking Portal)**:
   An operational management application built for internal logistics coordinators to log, monitor, filter, and track international courier sample consignments dispatched via DHL and FedEx with live statistical aggregation.

---

## 2. Directory Layout

```text
Project-PPW/
|-- README.md                       # Master technical documentation
|-- .gitignore                      # Ignore node_modules, build dist, and cache
|
|-- ryco-spices-react/              # Application 1: Main Public B2B Web App
|   |-- src/
|   |   |-- pages/                  # 5 Routes: Home, About, Products, News, Contact
|   |   |-- components/             # Navbar, Footer, ArticleModal, ToastNotification, ScrollToTop
|   |   |-- data/                   # Product specifications catalog & harvest news articles
|   |   |-- App.jsx                 # Client-side routing with react-router-dom
|   |   |-- index.css               # Bootstrap 5.3 brand tokens and component styling
|   |   `-- main.jsx                # Application root entry point
|   |-- public/                     # Static assets, spice imagery (.webp) & brand favicons
|   |-- screenshots/                # Verification screenshots
|   |-- index.html                  # HTML entry point with typography preconnects
|   |-- vite.config.js              # Vite configuration
|   |-- README.md                   # Application-specific documentation
|   `-- package.json
|
`-- ryco-sample-portal/             # Application 2: Internal B2B Sample Tracking Portal
    |-- src/
    |   |-- components/             # Header, StatsSummary, SampleForm, SampleList, SampleCard, SampleDetailModal, EmptyState
    |   |-- constants/              # Spices taxonomy, dependent grades, global countries
    |   |-- App.jsx                 # Stateful tracking tabs (Monitoring vs New Sample Form)
    |   |-- index.css               # Portal dashboard styles
    |   `-- main.jsx                # Portal entry point
    |-- public/                     # Brand favicons & SVG vector icons
    |-- screenshots/                # Verification screenshots
    |-- index.html                  # HTML entry point
    |-- vite.config.js              # Vite configuration
    |-- README.md                   # Application-specific documentation
    `-- package.json
```

---

## 3. Technology Stack & Specifications

| Component | Application 1: `ryco-spices-react` | Application 2: `ryco-sample-portal` |
| :--- | :--- | :--- |
| **Role** | Public B2B Corporate Website | Internal Sample Dispatch & Operations Portal |
| **Framework** | React 19 / 18 | React 19 / 18 |
| **Bundler & Tooling**| Vite 8.3 | Vite 8.3 |
| **Routing** | React Router DOM v6 (5 routes) | Stateful Tabbed Navigation (`useState`) |
| **Styling** | Bootstrap 5.3.3 + Bootstrap Icons | Custom Exporter CSS Design System + Bootstrap Icons |
| **Color Tokens** | Primary Forest (#2D5016), Gold (#C9A959), Cream (#FAF7F2) | Forest Green (#2D5016), Harvest Gold (#C9A959) |
| **Typography** | Playfair Display (Serif) + Plus Jakarta Sans | Playfair Display + Plus Jakarta Sans |
| **Port** | `http://localhost:5173` | `http://localhost:5174` |

---

## 4. Application Breakdown

### Application 1: `ryco-spices-react` (Public Exporter Portal)
- **Home (`/`)**:
  - Hero header with dual CTAs ("Request a Sample", "View Products").
  - Four key performance metrics: 2,000+ Years Heritage, 4 Premium Varieties, 3 Island Origins, 24h Response.
  - Featured export product cards: Whole Nutmeg, Mace (Bunga Pala), Cloves (Cengkeh), and Cinnamon (Cassia Vera).
  - Corporate profile spotlight detailing sustainable agroforestry in Banda Neira and Sulawesi.
  - Export certifications banner (Phytosanitary, Certificate of Origin, COA, Maritime Fumigation).
- **About Us (`/about`)**:
  - Generational spice heritage narrative from Maluku and North Sulawesi.
  - Mission and Vision statements for ethical direct-trade spice export.
  - Five core values: Integrity, Quality, Transparency, Partnership, and Heritage.
  - Volcanic terroir advantages: mineral-rich soil, elevated essential oil concentrations, and complete lot traceability.
- **Products (`/products`)**:
  - Dynamic commodity filter tabs (*All Spices*, *Nutmeg*, *Mace*, *Cloves*, *Cinnamon*).
  - Technical specification parameter tables (Moisture %, Volatile Essential Oil %, Foreign Matter %, Aflatoxin limits).
  - Commercial grading cards (Grade A ABCD Sound, Grade B, FAQ/BWP, CG1, Kaastock).
  - Packaging solutions: multi-wall paper bags, export jute bags with poly-liners, and container desiccant poles.
- **News & Insights (`/news`)**:
  - Featured seasonal harvest bulletin from the Banda Neira archipelago.
  - Five category filter tabs (*All Insights*, *Harvest Reports*, *Export Standards*, *Sustainability*, *Market Trends*).
  - Six in-depth trade reports with reading times, dates, and an interactive modal reader dialog.
  - Controlled newsletter subscription form with instant feedback.
- **Contact & RFQ (`/contact`)**:
  - Controlled B2B Sample & Quotation Form with complete validation and physical courier delivery coordinates for air-freight dispatch.
  - Office and sourcing hub coordinates (Jakarta Headquarters, Banda Neira Hub, Manado Hub).
  - Interactive five-item international trade FAQ accordion (MOQ, sample policies, payment terms, transit lead times).

### Application 2: `ryco-sample-portal` (Internal Operations System)
- **Monitoring Dashboard**:
  - Dynamic metrics calculation: Total Requests, Dispatched Packages, Delivered Samples, Pending Approvals.
  - Search and filter controls by keyword, commodity type, and courier status.
  - Dependent grade dropdown selectors ensuring botanical taxonomy integrity.
  - Card-based tracking interface displaying courier air waybill coordinates, recipient company, and destination port.
  - Empty-state conditional rendering handling zero-search results and empty dispatch queues.

---

## 5. Prerequisites & Simultaneous Execution

### Prerequisites
- Node.js version 18.0.0 or higher
- npm version 9.0.0 or higher
- Git version 2.30 or higher

### Step 1: Install Dependencies
Open a terminal in the project root and install dependencies for both applications:

```bash
# Install dependencies for Application 1
cd ryco-spices-react
npm install
cd ..

# Install dependencies for Application 2
cd ryco-sample-portal
npm install
cd ..
```

### Step 2: Start Both Development Servers Simultaneously
Open two terminal windows or run the processes concurrently:

**Terminal 1 (Public B2B Application on Port 5173)**:
```bash
cd ryco-spices-react
npm run dev -- --port 5173
```
Accessible at: **`http://localhost:5173/`**

**Terminal 2 (Internal Sample Portal on Port 5174)**:
```bash
cd ryco-sample-portal
npm run dev -- --port 5174
```
Accessible at: **`http://localhost:5174/`**

---

## 6. Verification Screenshots

All visual verification captures are organized in their respective `screenshots/` folders:

### `ryco-spices-react/screenshots/`
- `01_home_desktop.png`: Full desktop homepage view with Hero, Stats, Product cards, and Certifications.
- `01_home_mobile.png`: Mobile viewport view (390x844) displaying the responsive navigation menu in its expanded state.
- `02_about_page.png`: Complete About Us view with heritage narrative, mission, vision, values, and origin advantages.
- `03_products_page.png`: Products catalog view with commodity filter tabs, technical parameters, and grading cards.
- `04_news_page.png`: News and insights view with featured harvest report, category tabs, and article cards.
- `04_news_modal_reader.png`: Interactive modal reading dialog rendering the full technical harvest report.
- `05_contact_sample_form.png`: Contact view showcasing the filled controlled B2B sample form and interactive FAQ accordion.

### `ryco-sample-portal/screenshots/`
- `01_initial_vite_running.png`: Vite development server initialization confirmation.
- `02_sample_portal_overview.png`: Internal sample portal dashboard with statistics overview and monitoring cards.
- `03_sample_form_interaction.png`: Controlled new sample dispatch registration form with dependent dropdowns.
- `04_empty_state_conditional_rendering.png`: Empty-state conditional rendering when filter yields no matches.

---

## 7. Quality Standards & Regulatory Compliance
- **Indonesia Agricultural Quarantine Agency**: Phytosanitary Certification for all agricultural exports.
- **Ministry of Trade Republic of Indonesia**: Certificate of Origin (COO Form A, Form D, and General COO).
- **European Commission Regulation (EU) 2023/915**: Maximum allowable residue limits for Aflatoxin B1 (< 5 ppb) and total Aflatoxins (< 10 ppb).
- **United States FDA & ASTA Guidelines**: Cleanliness specifications for imported whole tree spices.
- **International Maritime Organization (IMO)**: Standardized maritime fumigation and container moisture condensation protocols.
