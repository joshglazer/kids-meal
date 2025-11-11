# 🍕 Kids Menu Planner

A colorful, interactive weekly meal planner designed for kids. Plan your child's meals for the school week with an easy drag-and-drop interface!

## 🍽️ Motivation

### The Problem

Dinner time is chaotic at my house. We never know what to give the kids—they ask for anything and everything they see, then don't eat half of what's been served. This planner solves that problem by giving kids control over their weekly menu. When children pick their own meals ahead of time, families can be better prepared with food the kids actually want to eat, reducing waste and mealtime stress.

### The Tech

This project was also an opportunity to explore some exciting technologies and workflows. I've been hearing a lot of hype about HTMX and wanted to get hands-on experience with its approach to building interactive web applications. Additionally, I wanted to improve my skills at using Cursor to rapidly prototype ideas and turn concepts into working applications quickly. This planner turned out to be the perfect small-scale project to experiment with both.

## ✨ Features

- **Drag & Drop Interface** - Simply drag food items onto any day of the week
- **Weekly Planning** - Plan meals for Monday through Friday
- **Persistent Storage** - Menu selections are saved automatically using localStorage
- **Kid-Friendly Design** - Colorful gradients and emoji icons make meal planning fun
- **Responsive Layout** - Works on desktop and mobile devices
- **Easy Removal** - Click the × button to remove any meal from the calendar

## 🍔 Available Menu Items

- 🥚 Hard Boiled Egg
- 🍗 Chicken Nuggets
- 🍕 Pizza
- 🌭 Hot Dog

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A local web server (optional, but recommended)

### Installation

1. Clone this repository:

```bash
git clone <repository-url>
cd kids-meal
```

2. Open the project in a web browser:

**Option A: Using a local server (recommended)**

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js
npx serve
```

Then open `http://localhost:8000` in your browser.

**Option B: Direct file access**
Simply open `index.html` in your web browser by double-clicking the file.

## 📁 Project Structure

```
kids-meal/
├── index.html          # Main HTML file with styles
├── assets/
│   └── main.js        # Main JavaScript file (placeholder)
├── partials/
│   └── calendar.html  # Calendar component with drag-and-drop logic
└── README.md          # This file
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (Vanilla)** - Core functionality
- **[HTMX](https://htmx.org/)** (v1.9.10) - Dynamic HTML loading
- **[SortableJS](https://sortablejs.github.io/Sortable/)** - Drag-and-drop functionality
- **localStorage API** - Persistent data storage

## 💡 How to Use

1. **View the Calendar** - The weekly planner shows Monday through Friday
2. **Drag Food Items** - Click and drag any food item from the "Menu" section
3. **Drop on a Day** - Drop the food item on any day of the week
4. **Remove Items** - Click the × button on any meal to remove it
5. **Automatic Saving** - Your selections are automatically saved

## 🎨 Customization

### Adding New Food Items

Edit the `foodItems` array in `partials/calendar.html`:

```javascript
const foodItems = [
  { icon: "🥚", name: "Hard Boiled Egg" },
  { icon: "🍗", name: "Chicken Nuggets" },
  { icon: "🍕", name: "Pizza" },
  { icon: "🌭", name: "Hot Dog" },
  // Add your own items here
  { icon: "🥪", name: "Sandwich" },
];
```

### Changing Days

Edit the `days` array in `partials/calendar.html` to include weekends or custom days:

```javascript
const days = [
  { id: "monday", name: "Monday" },
  { id: "tuesday", name: "Tuesday" },
  // Add more days as needed
];
```

## 🌟 Features Breakdown

### Drag & Drop

- Powered by SortableJS for smooth drag-and-drop interactions
- Visual feedback when hovering over drop zones
- Clone-based dragging ensures food items stay in the menu

### Visual Design

- Gradient backgrounds for an engaging look
- Unique colors for each day of the week
- Smooth animations and hover effects
- Drop shadow and transform effects for depth

### Data Persistence

- Uses browser's localStorage to save meal selections
- Data persists across browser sessions
- Each day's selection is stored independently

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Feel free to fork this project and customize it for your needs! Some ideas:

- Add more food items
- Include breakfast, lunch, and dinner slots
- Add nutritional information
- Create a print-friendly view
- Add meal suggestions/randomization

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍👩‍👧‍👦 Perfect For

- Parents planning school lunches
- Daycare centers organizing meal schedules
- Kids learning to make choices
- Teaching nutrition and meal planning

---

Made with ❤️ for kids and parents everywhere!
