# Experience Section Documentation

## Overview
The Experience section is a responsive, animated timeline component built with React, TailwindCSS, and Framer Motion. It showcases professional experience in an elegant, scrollable timeline format with smooth animations.

## 🏗️ Component Structure

### Main Components
- **`Experience.jsx`** - Main section container with header and timeline
- **`ExperienceItem.jsx`** - Reusable experience card component
- **`experiences.js`** - Data file containing all experience entries

### File Locations
```
src/
├── pages/Experience.jsx           # Main Experience section
├── components/ExperienceItem.jsx  # Individual experience cards
└── data/experiences.js           # Experience data (easily editable)
```

## 📝 Adding New Experience Entries

To add a new experience, simply edit `src/data/experiences.js`:

```javascript
export const experiences = [
  {
    id: 1, // Unique identifier
    company: "Company Name",
    role: "Your Job Title",
    duration: "Start Date – End Date", // Use "Present" for current positions
    location: "City, State", // Optional field
    contributions: [
      "Achievement or responsibility #1",
      "Achievement or responsibility #2",
      "Achievement or responsibility #3",
      // Add 2-5 bullet points per experience
    ]
  },
  // Add more experiences here...
];
```

### Data Structure Guidelines
- **company**: Company name (displayed in bold)
- **role**: Job title (displayed in accent color)
- **duration**: Time period (supports "Present" for current positions)
- **location**: Geographic location (optional, shows with map pin icon)
- **contributions**: Array of 2-5 achievement statements

## 🎨 Styling & Theming

### Color Scheme
The component uses the primary color palette defined in `tailwind.config.js`:
- Primary colors (orange tones): `primary-50` through `primary-950`
- Automatic dark/light mode support
- Consistent with the overall site design

### Responsive Design
- **Mobile**: Stacked cards with adjusted spacing
- **Tablet**: Optimized timeline layout
- **Desktop**: Full timeline with hover effects

### Animation Features
- **Scroll-triggered animations**: Items animate in as you scroll
- **Staggered timing**: Each item animates with a slight delay
- **Hover effects**: Cards lift slightly on hover
- **Timeline progression**: Visual timeline with gradient effects

## 🔧 Customization Options

### Modifying Animations
Edit animation properties in `ExperienceItem.jsx`:
```javascript
// Adjust animation timing
transition={{
  duration: 0.6,           // Animation duration
  delay: index * 0.1,      // Stagger delay between items
  ease: [0.25, 0.25, 0, 1] // Custom easing curve
}}
```

### Changing Timeline Style
The timeline appearance can be modified in `Experience.jsx`:
```javascript
// Timeline line gradient
className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary-500/20 to-transparent"

// Timeline dots
className="absolute -left-2 top-1 w-4 h-4 bg-primary-500 rounded-full border-4 border-gray-50 dark:border-gray-900 shadow-lg"
```

### Adding New Fields
To add new data fields (e.g., company logo, technologies used):

1. **Update the data structure** in `experiences.js`:
```javascript
{
  company: "Company Name",
  role: "Job Title",
  // ... existing fields ...
  technologies: ["React", "Node.js", "Azure"], // New field
  logo: "/assets/company-logo.png"             // New field
}
```

2. **Update the ExperienceItem component** to display the new fields:
```javascript
// Add in ExperienceItem.jsx
const { company, role, duration, location, contributions, technologies, logo } = experience;

// Then render the new fields in the JSX
{logo && <img src={logo} alt={`${company} logo`} className="w-8 h-8" />}
{technologies && (
  <div className="flex flex-wrap gap-2 mt-2">
    {technologies.map(tech => (
      <span key={tech} className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm">
        {tech}
      </span>
    ))}
  </div>
)}
```

## 🚀 Performance Notes

- Uses `viewport={{ once: true }}` to prevent re-triggering animations
- Implements `whileInView` for scroll-based animations
- Optimized for smooth scrolling performance
- Responsive images and icons for fast loading

## 🎯 Accessibility Features

- **Semantic HTML**: Uses proper `<section>`, `<h2>`, `<h3>`, `<ul>`, `<time>` elements
- **ARIA labels**: Includes `aria-labelledby` for section identification
- **Keyboard navigation**: All interactive elements are keyboard accessible
- **Screen reader friendly**: Proper heading hierarchy and descriptive text
- **High contrast**: Colors meet WCAG accessibility guidelines

## 🔄 Integration

The Experience section is automatically integrated into the main App component and appears in the navigation. The section:
- Responds to hash navigation (`#experience`)
- Updates the active navigation state when scrolled into view
- Includes a "Let's Connect" CTA button linking to the contact section

## 🛠️ Troubleshooting

### Common Issues

1. **Animations not triggering**: Check that Framer Motion is properly installed
2. **Colors not displaying**: Verify Tailwind CSS is configured with the primary color palette
3. **Data not showing**: Ensure the import path in `Experience.jsx` matches the data file location
4. **Timeline not aligned**: Check that the responsive classes are applied correctly

### Development Commands
```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run lint   # Check for code issues
```
