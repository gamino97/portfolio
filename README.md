# Carlos Gamino - Portfolio

Welcome to my personal portfolio website, built with Astro to showcase my work and skills as a software developer. This project features a modern, responsive design with internationalization support.

## 🚀 Project Structure

```
/
├── public/                 # Static assets (images, PDFs, etc.)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Hero.astro     # Hero section component
│   │   ├── MyWork.astro   # Work showcase component
│   │   └── ...            # Other components
│   ├── data/              # Structured data for the portfolio
│   │   └── myWork.ts      # Work experience and projects data
│   ├── i18n/              # Internationalization setup
│   │   ├── ui.ts          # UI text translations
│   │   └── utils.ts       # i18n utility functions
│   └── pages/
│       └── index.astro    # Main page
└── package.json           # Project dependencies and scripts
```

## 🛠️ Technologies Used

- **Framework**: Astro
- **Language**: TypeScript
- **Styling**: Modern CSS with responsive design
- **Internationalization**: i18n for multi-language support

## 🚀 Development

### Prerequisites

- Node.js (v20 or later)
- pnpm (preferred), npm or yarn

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm run dev
   ```
4. Open [http://localhost:4321](http://localhost:4321) in your browser

### Build

To create a production build:

```bash
pnpm run build
```

### Preview

To preview the production build locally:

```bash
pnpm run preview
```
