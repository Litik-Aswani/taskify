Taskify

Taskify is a responsive task-management app I built while learning React and TypeScript. The project helped me practise typed React components, state management, event handling, responsive CSS, and drag-and-drop interactions in a real application.

Features

Create, edit, and delete tasks

Delete confirmation modal with animations

Move tasks between Active and Completed with one click

Drag and drop tasks between lists

Automatically update a task's completion status based on its list

Reorder tasks within the same list

Responsive layout for desktop and smaller screens

Custom styling, transitions, background, and favicon

Built With

React

TypeScript

Vite

@hello-pangea/dnd

React Icons

CSS

What I Changed and Added

The tutorial that inspired this project used an older React setup and the now-deprecated react-beautiful-dnd package. I adapted the project to a modern setup and continued developing it with my own changes, including:

Migrating the project to Vite and React 19

Replacing react-beautiful-dnd with the maintained @hello-pangea/dnd package

Creating separate Active and Completed task lists

Allowing tasks to move in both directions using either drag and drop or the check button

Automatically changing isDone when a task changes lists

Adding an animated delete confirmation interface

Adding custom task transitions and visual status indicators

Improving responsive behavior and rebuilding the visual design

Adding a custom page background and browser-tab icon

Getting Started

Prerequisites

Install Node.js and npm.

Installation

git clone https://github.com/hameesmomin/taskify.git
cd taskify
npm install
npm run dev

Open the local address shown by Vite, usually http://localhost:5173.

Available Commands

npm run dev # Start the development server
npm run build # Create a production build
npm run lint # Check the project with ESLint
npm run preview # Preview the production build

Learning Source and Credit

This project was started by following freeCodeCamp's React & TypeScript – Course for Beginners, created by Roadside Coder.

The course provided the original Taskify concept and taught the React and TypeScript foundations used in the project. I then updated the tooling, replaced deprecated dependencies, customized the interface, and added the behaviors described above.

Current Limitation

Tasks are currently stored in React state, so they reset when the page is refreshed. Persistent storage is a possible future improvement.

Author

Built by @Litik-Aswani as a project-based React and TypeScript learning exercise.
