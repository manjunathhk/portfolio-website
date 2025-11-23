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

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients, flexbox, and grid
- **JavaScript** - Vanilla JS for interactivity and animations
- **No dependencies** - Zero external libraries required

## How to Use

### Option 1: Direct Open
Simply open `index.html` in any modern web browser.

### Option 2: Local Server
For better experience (especially for testing):

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Customization

### Personal Information
Edit `index.html` to update:
- Name in the hero section (line 34)
- About section content (lines 52-63)
- Contact email and social links (lines 293-303)

### Skills
Update skills in the Skills section (lines 73-171) to match your expertise.

### Projects
Replace the featured projects (lines 182-281) with your own projects, including:
- Project descriptions
- Technology tags
- Demo and source code links

### Colors
Modify the CSS variables in `styles.css` (lines 8-19) to change the color scheme:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... other colors */
}
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

## License

MIT License - See LICENSE file for details

## Contributing

Feel free to fork this project and customize it for your own portfolio!
