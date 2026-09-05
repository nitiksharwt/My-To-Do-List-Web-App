My To-Do:


A responsive To-Do List web app built with HTML, CSS, and vanilla JavaScript, combining DOM manipulation, form validation, and a Flexbox/Grid layout into a single project.

Features:

Quick Add — Add a task instantly from the top input field.
Add Task Details — A secondary form to add a task with a name, due date, and optional notes, with full validation (required fields + due date check).
Task Management — Remove tasks from the list with the delete (🗑) button.
Responsive Layout — Built with CSS Flexbox (navbar) and CSS Grid (main content), with media queries so the layout stacks on smaller screens.
Form Validation — Inline error messages for missing task name or due date, with a success message on valid submission.


Tech Stack:

HTML5
CSS3 (Flexbox, Grid, media queries)
Vanilla JavaScript (DOM manipulation, event listeners, form handling)


Project Structure:

todo-site/
├── index.html      # Page structure (navbar, to-do list, add-task form)
├── style.css       # Styling (layout, pill-shaped inputs/buttons, responsiveness)
├── script.js       # To-do list logic and form validation
└── README.md


Usage:

Type a task into the quick add field and click Add to add it straight to the list.
Use the Add Task Details form to add a task with a name and due date (both required); a notes field is optional.
Click the 🗑 icon next to any task to remove it.


Possible Future Improvements:

Persist tasks with localStorage so they survive a page refresh.
Add a "mark as complete" toggle for tasks.
Add editing support for existing tasks.


License:


This project is for educational/internship purposes
