
# TechNova Solutions - Mini Portfolio Site

A single-page React application for "TechNova Solutions" showcasing services, project highlights, and a contact form. This project is designed to practice building reusable components, implementing responsive design, and ensuring clean code.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Responsive Design](#responsive-design)
- [Components](#components)
- [Future Improvements](#future-improvements)
- [License](#license)

## Features

- **Responsive Layout**: Optimized for desktop, tablet, and mobile screens.
- **Reusable Components**: Organized as independent, reusable components.
- **Responsive Navigation with Burger Menu**: Burger icon for navigation on smaller screens.
- **Interactive Contact Form**: Basic form validation and hover effects.
- **Smooth Hover Effects**: Added on buttons and project cards.


## Getting Started

Follow these steps to set up the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone 
   cd technova-solutions
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser to view the app.

## Project Structure

```plaintext
src/
├── components/
│   ├── Header.js
│   ├── ServicesSection.js
│   ├── ProjectHighlight.js
│   ├── ContactForm.js
├── styles/
│   ├── Header.css
│   ├── ServicesSection.css
│   ├── ProjectHighlight.css
│   ├── ContactForm.css
├── App.js
└── index.js
```

- **components/**: Contains reusable React components for each section.
- **styles/**: Holds CSS files for component-specific styling.

## Technologies Used

- **React**: For building a single-page application.
- **CSS**: For custom styling and responsive design.
- **React Icons**: For icons used in the burger menu (`FaBars` and `FaTimes`).
- **HTML5 & CSS3**: For structuring and styling the content.

## Responsive Design

This project is fully responsive, ensuring compatibility with various screen sizes:
- **Desktop**: Full layout with a horizontal navigation bar.
- **Tablet & Mobile**: Burger menu icon replaces navigation links, with a toggle to open/close links.

## Components

### 1. `Header`
- Contains the site title and navigation links.
- Switches to a burger menu icon on screens below 768px.

### 2. `ServicesSection`
- Displays an overview of the three core services offered by TechNova Solutions.
- Styled with a light gray background (#F5F5F5) and organized in columns.

### 3. `ProjectHighlight`
- Displays three sample projects with placeholder images and descriptions.
- Hover effect applied on each project card.

### 4. `ContactForm`
- A simple contact form with validation to check for empty fields.
- Submit button styled in orange-red (#FF5733) with a hover effect.

## License

This project is licensed under the MIT License.

---