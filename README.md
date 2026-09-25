# Fertile Moms 🌸

A modern web platform for **Fertile Moms**, designed to provide information about fertility and surrogacy services while giving prospective clients a clear and accessible way to explore available services.

The website was built with a focus on **clarity, trust, accessibility, and a warm visual experience** for users navigating fertility and surrogacy-related services.

---

## Overview

Fertile Moms is a client-facing website built to establish an online presence for a fertility and surrogacy service provider.

The website presents the organisation's services, communicates important information to prospective clients, and provides a structured experience for navigating the different areas of the platform.

Rather than treating the website as a simple collection of pages, the design focuses on creating a welcoming experience for users who may be researching fertility and surrogacy services for the first time.

---

## Live Website

🔗 **Fertile Moms:** [Add live website URL here]

---

## Key Features

### 🏠 Landing Page

A dedicated landing experience introduces Fertile Moms and communicates the organisation's purpose and services.

The homepage is designed to quickly answer:

* Who is Fertile Moms?
* What services are available?
* Who are the services for?
* How can a prospective client learn more?

---

### 🤰 Surrogacy Services

The website provides information about the surrogacy services offered by Fertile Moms.

The content is structured to make the service easier to understand while guiding users toward the next step in the process.

---

### 📋 Service Information

Services are presented in clearly structured sections so users can understand what Fertile Moms provides without having to navigate through overly complex pages.

---

### 📱 Responsive Design

The website is designed to work across different screen sizes, including:

* Desktop
* Tablet
* Mobile

The interface adapts its layout and content to maintain a consistent experience across devices.

---

### 🧭 Simple Navigation

The website uses clear navigation and page structure to help users move between the major sections of the platform.

The goal is to reduce friction and allow visitors to quickly find the information relevant to them.

---

## Design Direction

The visual design was intentionally created to feel:

* Warm
* Welcoming
* Professional
* Clean
* Trustworthy

The colour palette uses a combination of **white, black, and fuchsia/pink accents** to create a visual identity that feels modern while remaining approachable.

The interface avoids overly clinical styling and instead focuses on creating a human and reassuring experience.

---

## User Journey

The website is structured around a simple visitor journey:

```text
                    Visitor
                       │
                       ▼
                 Landing Page
                       │
                       ▼
              Learn About Fertile Moms
                       │
                       ▼
                 Explore Services
                       │
                       ▼
              Understand the Process
                       │
                       ▼
                Take Next Step
```

The intention is to move users from **awareness → understanding → action** without overwhelming them with information.

---

## Technology Stack

| Category   | Technology          |
| ---------- | ------------------- |
| Framework  | Next.js             |
| Language   | TypeScript          |
| UI         | React               |
| Styling    | CSS / Tailwind CSS  |
| Fonts      | Next.js `next/font` |
| Deployment | Vercel              |

> Update the styling row if the project uses a different styling solution.

---

## Technical Implementation

### Next.js

The website is built with Next.js, providing the foundation for the application's routing, rendering, and frontend architecture.

Using Next.js also provides a structured approach to building a production-ready React website.

---

### TypeScript

TypeScript is used throughout the project to provide stronger typing and improve maintainability as the application grows.

---

### Component-Based UI

The interface is structured using reusable React components rather than building every section as an isolated block.

This makes it easier to:

* Maintain consistent styling
* Reuse UI patterns
* Update sections independently
* Extend the website with additional pages

---

### Responsive Layout

The layout is designed around responsive behaviour rather than a fixed desktop layout.

Different screen sizes are considered when structuring:

* Navigation
* Typography
* Images
* Content sections
* Buttons
* Cards
* Spacing

---

## Project Structure

The project follows the Next.js App Router structure.

```text
.
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── ...
│
├── components/
│   └── ...
│
├── public/
│   └── ...
│
├── styles/
│   └── ...
│
├── package.json
├── tsconfig.json
└── README.md
```

> Update this structure to reflect the actual repository if your current folders differ.

---

# Getting Started

## Prerequisites

Make sure you have Node.js installed.

You can verify your installation with:

```bash
node --version
npm --version
```

---

## Installation

Clone the repository:

```bash
git clone <YOUR_REPOSITORY_URL>
cd <PROJECT_NAME>
```

Install the dependencies:

```bash
npm install
```

---

## Run the Development Server

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

The page will automatically update as you make changes.

---

## Available Scripts

Depending on the project's `package.json`, the main commands are:

```bash
npm run dev
```

Runs the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server after building.

```bash
npm run lint
```

Runs the project's linting checks.

---

# Deployment

The website is designed to be deployed using **Vercel**, making it straightforward to deploy a Next.js application and automatically build new versions when changes are pushed to the repository.

The deployment workflow can be represented as:

```text
GitHub Repository
       │
       ▼
     Vercel
       │
       ▼
Next.js Build
       │
       ▼
Production Website
```

---

# Development Considerations

When extending the project, maintain the existing visual language and responsive behaviour.

New sections should:

* Reuse existing components where possible
* Follow the established spacing and typography system
* Remain responsive
* Maintain accessible contrast
* Avoid unnecessary visual complexity
* Preserve the welcoming nature of the website

---

# Future Improvements

Potential improvements include:

* Contact / enquiry form
* Appointment or consultation booking
* CMS integration for managing website content
* Testimonials management
* FAQ section
* Blog or educational resources
* Improved SEO metadata
* Analytics
* Accessibility improvements
* Automated contact notifications
* Content management dashboard

---

# What This Project Demonstrates

This project demonstrates experience with:

* Next.js
* React
* TypeScript
* Responsive web development
* Component-based UI development
* Client-facing product design
* Website architecture
* Deployment with Vercel
* Translating a business's service offering into a usable web experience

More importantly, the project involved building around a **real organisation and its users**, rather than creating a purely theoretical frontend.

---

# Author

**Stephanie Onwuagbaizu**

Computer Science graduate and Software Engineer interested in backend systems, automation, optimization, and building practical software solutions.

* **GitHub:** `github.com/steph2502`
* **Portfolio:** `stephanie-s-portfolioo.vercel.app`
* **LinkedIn:** `linkedin.com/in/stephanieonwuagbaizu`

---

## License

Add the appropriate license here if the project is intended to be publicly reused.
