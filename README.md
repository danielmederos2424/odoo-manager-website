# Odoo Manager Website

- A Modern Landing Page for the Odoo Manager Desktop Application

- Built with React, Vite, and Framer Motion

## Overview

This repository contains the landing page website for Odoo Manager, a desktop application that simplifies the creation and management of Odoo instances using Docker. The website showcases the application's features, provides screenshots, and offers download links for different platforms.

![Odoo Manager Website Preview](/public/screenshots/main_dashboard.png)

## Features

- **Modern React-based UI** with responsive design and smooth animations
- **Cross-browser compatibility** and mobile-friendly layout
- **SEO-optimized** with proper metadata and semantic HTML
- **Optimized performance** with lazy loading images and code splitting
- **Light and dark mode support** adapting to user system preferences
- **Intuitive navigation** with smooth scrolling between sections
- **Featured sections** including:
  - Hero banner with key value propositions
  - Feature showcase with detailed descriptions
  - Interactive screenshots gallery
  - Downloads section with platform-specific links
  - Footer with relevant navigation and contact links

## Demo

Visit the live demo: [https://odoo.webgraphix.online](https://odoo.webgraphix.online)

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Clone the repository

```bash
git clone https://github.com/danielmederos2424/odoo-manager-website.git
cd odoo-manager-website
```

### Install dependencies

```bash
npm install
# or
yarn install
```

## Usage

### Development server

Start the development server with hot reloading:

```bash
npm run dev
# or
yarn dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

### Preview production build

```bash
npm run preview
# or
yarn preview
```

### Lint and fix files

```bash
npm run lint
# or
yarn lint
```

## Technologies

- **[React](https://react.dev/)** - UI library
- **[Vite](https://vitejs.dev/)** - Build tool and development server
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Ionicons](https://ionic.io/ionicons)** - Icon library
- **[CSS Modules](https://github.com/css-modules/css-modules)** - Scoped CSS styling
- **[React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)** - Scroll-based animations

## Customization

### Changing colors and themes

Edit the CSS variables in `src/styles/variables.css` to customize the color scheme.

### Adding new sections

1. Create a new component in the `src/components` directory
2. Import and add the component to `App.jsx`
3. Style your component using CSS Modules

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Related Projects

- [Odoo Manager](https://github.com/danielmederos2424/odoo-manager) - The desktop application for managing Odoo instances

## Contact

- **WebGraphix** - [Website](https://www.webgraphix.online)
- **Email** - [contact@webgraphix.online](mailto:info@webgraphix.online)

## Acknowledgements

- [Odoo](https://www.odoo.com/) - For their amazing open source ERP software
- [Docker](https://www.docker.com/) - For container technology that makes Odoo instance management easier
- All open source contributors and libraries used in this project
