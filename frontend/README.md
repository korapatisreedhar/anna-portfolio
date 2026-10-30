# Ramesh Korapati — Portfolio

A responsive personal portfolio built with React and Vite. It showcases professional experience, selected projects, technical skills, certifications, and contact links.

## Features

- Responsive layout with dark and light themes
- Profile photo and professional introduction
- Technology stack and certification cards
- Project cards with category filters
- Experience timeline
- Contact details, LinkedIn profile, and resume download link
- Bootstrap styling and Bootstrap Icons

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Getting started

From the `frontend` directory, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Vite prints the local URL when the server is ready.

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Assets

- The profile image is stored at `src/assets/profile-photo.png`.
- The resume download expects `public/Ramesh_Korapati_CV.pdf`. Add the PDF at that path to enable the download link.

## Project structure

```text
frontend/
├── public/             # Static files served from the site root
├── src/
│   ├── assets/         # Imported images
│   ├── main.jsx        # Portfolio content and React app
│   └── style.css       # Theme and responsive styles
├── index.html
└── package.json
```
