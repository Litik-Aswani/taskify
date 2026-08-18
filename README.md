# Taskify

Taskify is a responsive task manager built with React and TypeScript. I created it as a project-based learning exercise to practise typed React components, state management, form handling, responsive design, animations, and drag-and-drop interactions.

## Features

- Add new tasks
- Edit active tasks
- Delete tasks through an animated confirmation modal
- Mark tasks as completed or move them back to active
- Drag and drop tasks between the Active and Completed lists
- Reorder tasks within either list
- Automatically update a task's completion status when it changes lists
- Responsive layout for desktop and smaller screens
- Visual feedback for completed, moving, and deleting tasks
- Custom background, styling, transitions, and browser-tab icon

## Tech Stack

- [React](https://react.dev/) for the interface and component state
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [Vite](https://vite.dev/) for development and builds
- [@hello-pangea/dnd](https://github.com/hello-pangea/dnd) for drag and drop
- [React Icons](https://react-icons.github.io/react-icons/) for interface icons
- CSS for the responsive layout and animations

## What I Learned

Building Taskify gave me practical experience with:

- Creating and typing React components and props
- Managing arrays of objects with React state
- Handling forms and browser events in TypeScript
- Updating, filtering, and moving tasks without mutating state
- Rendering different UI states conditionally
- Coordinating state changes with CSS animations
- Building responsive layouts with Flexbox and media queries
- Reading package documentation and replacing an outdated dependency
- Using Git and GitHub to version and publish a project

## My Changes and Additions

I began with the Taskify project from freeCodeCamp's React and TypeScript course, then modernized and extended it. My work includes:

- Using a modern Vite and React 19 setup
- Replacing the deprecated `react-beautiful-dnd` package with `@hello-pangea/dnd`
- Separating tasks into Active and Completed lists
- Supporting movement in both directions through the check button and drag and drop
- Updating `isDone` automatically based on the destination list
- Adding an animated delete-confirmation modal
- Adding task movement, completion, and deletion effects
- Restyling the interface with a custom background and responsive layout
- Adding a custom favicon

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/), which includes npm.

### Installation

```bash
git clone https://github.com/Litik-Aswani/taskify.git
cd taskify
npm install
npm run dev
```

Open the local URL displayed in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command           | Purpose                                  |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the Vite development server        |
| `npm run build`   | Type-check and create a production build |
| `npm run lint`    | Check the code with ESLint               |
| `npm run preview` | Preview the production build locally     |

## Current Limitation

Tasks are currently stored only in React state, so they reset when the page is refreshed.

Possible future improvements include browser storage, automated tests, improved keyboard accessibility, and task due dates or categories.

## Tutorial Credit

This project started from [React & TypeScript – Course for Beginners](https://www.youtube.com/watch?v=FJDVKeh7RJI), published by freeCodeCamp and created by Roadside Coder.

The course provided the original Taskify concept and its React and TypeScript foundation. I used it as a learning resource, then updated the tooling and added the custom functionality and design described above.

## Author

Built by [Litik Aswani](https://github.com/Litik-Aswani).
