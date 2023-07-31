# Notes App

This is a simple web application that allows users to add, edit, and remove notes. The notes are displayed in a table format, showing the time of creation, note content, note category, and a list of dates mentioned in each note.

## Functionality

- Users can add, edit, and remove notes.
- The notes are displayed in a table format with columns for time of creation, note content, note category, and dates mentioned in the note.
- Categories are predefined and include "Task", "Random Thought", and "Idea".
- Users can archive notes, and archived notes are not shown in the main notes list.
- Users can view archived notes and unarchive them.
- A summary table displays the count of notes by categories, separately for active and archived notes.
- The summary table is updated in real-time whenever users perform actions on notes.

## Data Storage

The application uses a JavaScript variable to store the notes data. The data is prepopulated with 7 notes, which are displayed when the page is reloaded. Please note that the implementation does not include actual data storage or a backend database.

## Project Structure

The code adheres to best practices, including the use of small functions, pure functions, and descriptive variable and function names. The logic of rendering and data processing is separated into different files, promoting a single responsibility principle.

The project is structured as follows:

- **index.html**: The main HTML file that contains the structure of the web page.
- **src/**: The source code directory.
  - **js/**: Contains JavaScript files.
    - **controllers/**: Contains note controllers for managing note-related operations.
    - **dom/**: Contains JavaScript files for interacting with the DOM.
    - **handlers/**: Contains event handlers for handling user interactions.
    - **helpers/**: Contains helper functions used throughout the application.
    - **models/**: Contains model classes or data structures if needed.
    - **templates/**: Contains template files for rendering UI components.
    - **view/**: Contains view-related functions for updating the UI.
  - **styles/**: Contains CSS files for styling the web page.

## How to Run the Application

To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.
4. The application should open in your default web browser.