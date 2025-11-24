# Portfolio Website

A modern, responsive portfolio website to showcase skills, projects, and professional experience.

## Features

- 🎨 **Modern Design**: Beautiful gradient color scheme with smooth animations
- 📱 **Fully Responsive**: Adapts seamlessly to all screen sizes (desktop, tablet, mobile)
- ⚡ **Performance Optimized**: Fast loading with optimized scroll handlers
- 🎯 **Skills Showcase**: Visual representation of technical skills with animated progress bars
- 💼 **Project Portfolio**: Featured projects section with technology tags
- 📧 **Contact Form**: Interactive contact form with visual feedback
- 🎭 **Smooth Animations**: Intersection Observer for scroll-triggered animations

## Sections

1. **Hero** - Eye-catching introduction with call-to-action buttons
2. **About** - Professional background and introduction
3. **Skills** - Comprehensive skill set organized by category:
   - Frontend Development (HTML5, CSS3, JavaScript, React, TypeScript)
   - Backend Development (Node.js, .NET, Python, REST APIs, GraphQL)
   - Database & Cloud (SQL, MongoDB, PostgreSQL, Azure, AWS)
   - Tools & Practices (Git, Docker, CI/CD, Agile, Testing)
4. **Projects** - Featured projects with descriptions and links
5. **Contact** - Contact form and social media links

## Technology Stack

- **Node.js** - Build tooling and development server
- **TypeScript** - Type-safe JavaScript with better IDE support
- **SCSS** - Modular, maintainable stylesheets with variables and nesting
- **HTML5** - Semantic markup

## Prerequisites

- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/manjunathhk/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

## Development

### Build the project
Compile TypeScript and SCSS files:
```bash
npm run build
```

### Development mode with auto-reload
Watch for changes and rebuild automatically:
```bash
npm run watch
```

### Run development server
Start a local server and watch for changes:
```bash
npm run dev
```

This will:
- Watch TypeScript and SCSS files for changes
- Auto-compile on file changes
- Start a local server at `http://localhost:8080`
- Open the website in your default browser

### Individual build commands
```bash
# Build SCSS only
npm run build:scss

# Build TypeScript only
npm run build:ts

# Watch SCSS for changes
npm run watch:scss

# Watch TypeScript for changes
npm run watch:ts

# Serve the website (without watching)
npm run serve
```

## Project Structure

```
portfolio-website/
├── src/
│   ├── scss/               # SCSS source files
│   │   ├── _variables.scss # Color and spacing variables
│   │   ├── _mixins.scss    # Reusable SCSS mixins
│   │   ├── _base.scss      # Base styles and resets
│   │   ├── _navigation.scss
│   │   ├── _hero.scss
│   │   ├── _about.scss
│   │   ├── _skills.scss
│   │   ├── _projects.scss
│   │   ├── _contact.scss
│   │   ├── _footer.scss
│   │   ├── _animations.scss
│   │   └── main.scss       # Main SCSS entry point
│   └── ts/                 # TypeScript source files
│       └── main.ts         # Main TypeScript entry point
├── dist/                   # Compiled files (auto-generated)
│   ├── css/
│   │   └── styles.css      # Compiled CSS
│   └── js/
│       └── main.js         # Compiled JavaScript
├── index.html              # Main HTML file
├── package.json            # Node.js dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## Customization

### Personal Information
Edit `index.html` to update:
- Name in the hero section
- About section content
- Contact email and social links

### Skills
Update skills in the Skills section to match your expertise.

### Projects
Replace the featured projects with your own projects, including:
- Project descriptions
- Technology tags
- Demo and source code links

### Colors and Styling
Modify the SCSS variables in `src/scss/_variables.scss` to change the color scheme:
```scss
$primary-color: #667eea;
$secondary-color: #764ba2;
$accent-color: #f093fb;
// ... other colors
```

After making changes to SCSS or TypeScript files, rebuild the project:
```bash
npm run build
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Optimized scroll event handling with `requestAnimationFrame`
- Lazy loading animations with Intersection Observer
- Efficient DOM manipulation
- CSS transforms for smooth animations
- Modular SCSS for maintainable stylesheets
- TypeScript for type safety and better code quality

## License

MIT License - See LICENSE file for details

## Contributing

Feel free to fork this project and customize it for your own portfolio!
