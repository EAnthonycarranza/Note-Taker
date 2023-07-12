# Note Taker

## Description

This is an application that can be used to write, save, and delete notes. This application uses an Express.js back end and saves and retrieves note data from a JSON file.

## User Story

As a small business owner, I want to be able to write and save notes so that I can organize my thoughts and keep track of tasks I need to complete.

## Features

- Write and save notes
- Delete previously saved notes
- Retrieve previously saved notes

## Installation

1. Clone the repository to your local machine.
2. Navigate to the cloned directory in the terminal.
3. Run `npm install` to install the necessary packages.

## Usage

1. Run `npm start` or `node server.js` in the terminal to start the server.
2. Visit `http://localhost:3001` (or the port you have defined) in the browser to view the application.
3. To use the application on Heroku, visit [https://newapplication234.herokuapp.com/](https://newapplication234.herokuapp.com/).

## APIs used

- GET `/api/notes` - Reads the `db.json` file and returns all saved notes as JSON.
- POST `/api/notes` - Receives a new note to save on the request body, adds it to the `db.json` file, and then returns the new note to the client.
- DELETE `/api/notes/:id` - Receives a query parameter containing the id of a note to delete, removes the note with the given id property, and then rewrites the remaining notes to the `db.json` file.

## Dependencies

- Node.js
- Express.js
- UUID

## License

This project is currently not licensed.
