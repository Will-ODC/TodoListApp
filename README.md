# Todo List App

A feature-rich todo list application built with React, Vite, and Tailwind CSS.

## Features

- ✅ **CRUD Operations**: Add, edit, delete, and toggle todos
- 🎯 **Priority Levels**: Assign high, medium, or low priority to tasks
- 📅 **Due Dates**: Set due dates for todos
- 🏷️ **Tags/Categories**: Organize todos with custom tags
- 🔍 **Filtering**: View all, active, or completed todos
- 🔄 **Drag & Drop**: Reorder todos by dragging
- 💾 **Local Storage**: Todos persist between sessions
- 🎨 **Responsive Design**: Clean UI with Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Navigate to the project directory:
```bash
cd /mnt/c/Users/wjexc/OneDrive/Desktop/todolistapp
```

2. Install dependencies:
```bash
npm install --no-bin-links
```

### Running the App

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Usage

1. **Adding Todos**: Type in the input field and click "Add Todo" or press Enter
2. **Setting Priority**: Select priority level before adding
3. **Due Dates**: Choose a due date from the date picker
4. **Tags**: Add comma-separated tags (e.g., "Work, Important")
5. **Editing**: Click the pencil icon to edit a todo's text
6. **Deleting**: Click the trash icon to remove a todo
7. **Completing**: Click the checkbox to mark as complete/incomplete
8. **Reordering**: Drag todos to reorder them
9. **Filtering**: Use the All/Active/Completed buttons to filter view

## Project Structure

```
todolistapp/
├── node_modules/
├── src/
│   ├── components/
│   │   └── SortableItem.jsx    # Drag-and-drop wrapper component
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Tailwind CSS imports
├── index.html                   # HTML entry point
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # This file
```

## Technologies Used

- **React 18**: UI framework
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **@dnd-kit**: Drag and drop functionality
- **date-fns**: Date formatting
- **Local Storage API**: Data persistence

## Known Issues Resolved

- Drag handlers were initially preventing button clicks - fixed by applying drag listeners only to specific areas
- Package installation requires `--no-bin-links` flag on some systems

## Future Enhancements

- Add todo search functionality
- Implement todo deadlines with notifications
- Add dark mode toggle
- Export/import todos
- Add subtasks support