# PAUSE: A Guide to Safe Foreign Employment

![PAUSE Web App Banner](src/assets/hero.png)

**PAUSE** is an educational, progressive web application (PWA) designed to empower individuals, particularly from Nepal, to independently verify foreign employment opportunities and avoid scams. 

The application transforms the abstract concept of due diligence into a memorable, actionable framework: **P-A-U-S-E**.

**Live Demo:** [https://pause-nepal.surge.sh](https://pause-nepal.surge.sh)

---

## The PAUSE Framework

When a foreign-employment opportunity asks you to act, **PAUSE**:

*   **P (Provider):** Identify the provider. Is the individual or agency officially registered and licensed?
*   **A (Authenticate):** Independently authenticate the opportunity. Do not rely solely on documents provided by the agent.
*   **U (Understand Incentive):** Understand the financial incentives. If the offer seems too good to be true, it likely is.
*   **S (Stop the Rush):** Stop the rush. Scammers use artificial urgency to force hasty decisions.
*   **E (Evidence):** Verify the evidence. Cross-check claims against official government databases (e.g., DOFE, FEIMS).

## Features

*   **Bilingual Support (i18n):** Seamlessly switch between Nepali (primary) and English, ensuring accessibility for a wider audience.
*   **Interactive Scenario Simulations:** Engage in realistic, interactive scenarios (e.g., a high-paying job offer in Dubai vs. a genuine EPS opportunity in South Korea). Users make choices and receive immediate, educational feedback based on the PAUSE framework.
*   **Official Verification Links:** A curated directory of official government portals (DOFE, FEIMS) with clear instructions on what information to cross-check.
*   **Progressive Web App (PWA):** Installable on mobile devices with foundational configurations for future offline support, crucial for users with limited internet connectivity.
*   **Responsive & Accessible Design:** A custom light theme, meticulously crafted with Tailwind CSS, providing a clean, "official document" aesthetic that is fully responsive across mobile, tablet, and desktop devices.

## Tech Stack

*   **Framework:** [React 19](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Routing:** [React Router v7](https://reactrouter.com/)
*   **Internationalization:** [i18next](https://www.i18next.com/) & [react-i18next](https://react.i18next.com/)
*   **PWA Support:** [vite-plugin-pwa](https://vite-pwa-org.netlify.app/)

## Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AmanKarn-00/PAUSE.git
    cd PAUSE/pause-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## Project Structure

```text
pause-app/
├── public/                 # Static assets and translations
│   ├── locales/            # i18n JSON files (en, ne)
│   └── ...
├── src/
│   ├── components/         # Reusable UI components (Layout, LanguageSelector, etc.)
│   ├── data/               # Scenario and verification route configurations
│   ├── i18n/               # i18next initialization
│   ├── pages/              # Main application views (Home, Practice, Scenario, etc.)
│   ├── App.tsx             # Root router configuration
│   └── index.css           # Global Tailwind and custom theme variables
├── package.json
└── vite.config.ts          # Vite & PWA configuration
```

## Disclaimer

This application is an educational tool. It is **not** a replacement for official government verification processes. Users are strongly advised to always consult official sources such as the Department of Foreign Employment (DOFE) before making any decisions regarding foreign employment.
