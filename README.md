# CS Student Portfolio

A modern, responsive portfolio website built for computer science students. Dark theme, smooth animations, and easy customization through a single data file.

## Features

- **Modern stack** — React 19, Vite 7, TypeScript, Tailwind CSS 4
- **Smooth animations** — Framer Motion scroll and entrance effects
- **Fully responsive** — Mobile-first with collapsible navigation
- **Easy to customize** — Edit `src/data/portfolio.ts` with your info
- **Sections** — Hero, About, Skills, Projects, Experience, Education, Contact

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customize Your Portfolio

Edit **`src/data/portfolio.ts`** — this is the only file you need to change for most updates:

| Section | What to update |
|---------|----------------|
| `personalInfo` | Name, email, GitHub, LinkedIn, location, tagline |
| `about` | Bio paragraphs and highlight cards |
| `skills` | Languages, frameworks, and tools |
| `projects` | Your projects with links and tags |
| `education` | Degree, university, GPA, coursework |
| `experience` | Internships, jobs, TA roles |

Also update:
- **`index.html`** — page title and meta description
- **`public/resume.pdf`** — add your resume (linked from the navbar)

## Build for Production

```bash
npm run build
npm run preview
```

Deploy the `dist` folder to [Vercel](https://vercel.com), [Netlify](https://netlify.com), or GitHub Pages.

## Project Structure

```
src/
├── components/     # UI sections (Navbar, Hero, Projects, etc.)
├── data/
│   └── portfolio.ts   ← Your content lives here
├── App.tsx
├── main.tsx
└── index.css       # Theme colors and global styles
```

## Tech Stack

- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)
