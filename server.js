const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); // npm package for generating unique ids

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) => {
  const notes = JSON.parse(
    fs.readFileSync(path.join(__dirname, '/db/db.json'), 'utf8')
  );
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  const notes = JSON.parse(
    fs.readFileSync(path.join(__dirname, '/db/db.json'), 'utf8')
  );
  const newNote = req.body;
  newNote.id = uuidv4();
  notes.push(newNote);
  fs.writeFileSync(path.join(__dirname, '/db/db.json'), JSON.stringify(notes));
  res.json(newNote);
});

app.delete('/api/notes/:id', (req, res) => {
  let notes = JSON.parse(
    fs.readFileSync(path.join(__dirname, '/db/db.json'), 'utf8')
  );
  notes = notes.filter((note) => note.id !== req.params.id);
  fs.writeFileSync(path.join(__dirname, '/db/db.json'), JSON.stringify(notes));
  res.json(notes);
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
