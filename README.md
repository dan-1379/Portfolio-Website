# Portfolio Website

My personal portfolio website, built to showcase my projects, skills, and experience as a Computing student. Live at [danieljcourtney.com](https://danieljcourtney.com).

## About

This site documents my work as a third-year BSc Computing with Software Development student at Munster Technological University, including projects, technical skills, education, and experience.

## Tech stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

## Features

- Light/dark mode toggle with `localStorage` persistence
- Responsive images (multiple breakpoints, JPEG + WebP variants) for fast loading
- Project showcase with a modal image carousel for each project
- Componentised, data-driven sections (education, experience, certifications, skills, contact links) so content updates don't require touching JSX
- Accessible markup: ARIA labels, semantic dialog roles, keyboard-friendly navigation
- Mobile-responsive navigation with a slide-out menu

## Project structure

```
src/
  assets/
    svg_icons/
    [project images, organised by project]
  components/
    00_Navbar/
    01_Hero/
    02_About/
    03_Skills/
    04_Projects/
    05_Contact/
    06_Footer/
```

Each major section (Nav, Hero, About, Skills, Projects, Contact, Footer) is its own component folder, with reusable subcomponents (cards, links, toggles) and, where applicable, a separate data file (e.g. `ProjectInfo.jsx`, `ContactInfo.jsx`) so content can be updated without editing layout logic.

## Running locally

```bash
npm install
npm run dev
```

## Building for production

```bash
npm run build
```

## Deployment

Deployed to GitHub Pages with a custom domain configured via CNAME
