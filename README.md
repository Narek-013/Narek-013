# Business Card Website (React)

A simple personal business card website with multilingual support, contact shortcuts, project gallery, and works showcase.

## Features

- **Multilingual UI** using Redux Toolkit and `language.json`
- **Contact actions** (call, SMS, email) and vCard download
- **Pages**: Social (home), Gallery, Works, Address, 404
- **Routing** with React Router
- **Sass**-based styling and small UI effects

## Tech Stack

- **Frontend:** React (Create React App), React Router DOM, Redux Toolkit, Sass
- **Animations/Effects:** GSAP (and a small Reveal effect component)
- **Assets:** Local images for gallery and works

## Project Structure (high-level)

- `src/App.js` – App shell, mounts `RevealEffect` and `AppRouter`
- `src/Routes/AppRouter.jsx` – Route definitions
- `src/components/` – Header, Language switcher, Main section, etc.
- `src/Pages/` – `Social`, `Gallery`, `Works`, `Address`, `PageNotFound`
- `src/store/` – Redux store and `selectedLanguage` slice
- `src/Images/` – All PNG/JPG/WebP assets grouped by use

## Scripts

```bash
npm start   # Run development server (CRA)
npm build   # Build for production
npm test    # Run tests (CRA default)
npm eject   # Eject CRA (irreversible)
```

By default CRA uses `http://localhost:3000`. If it's busy:

```bash
PORT=3001 npm start
```

## Getting Started

1) Install dependencies

```bash
npm install
```

2) Start the dev server

```bash
npm start
```

3) Open the app

- `http://localhost:3000` (or the port you chose)

## Deployment

- This project includes `netlify.toml`. You can deploy to Netlify:
  - Build command: `npm run build`
  - Publish directory: `build`

## Notes

- Recommended Node: LTS (e.g., Node 18). Newer Node versions may show deprecation warnings with older CRA tooling.

## Author- GitHub: [@Narek-013](https://github.com/Narek-013)
- Email: `meliksetyan415@gmail.com`
