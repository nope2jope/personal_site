

import express from 'express';
import path, { join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../client/dist/index.html')));



app.use('/works/jream', express.static(path.join(__dirname, "../works/jream/dist")));
app.get('/works/jream', (req, res) =>
  res.sendFile(path.join(__dirname, '../works/jream/dist/index.html')));

app.use('/works/roll', express.static(path.join(__dirname, "../works/roll")));
app.get('/works/roll', (req, res) =>
  res.sendFile(path.join(__dirname, '../works/roll/index.html')));

app.get('/about', (req, res) =>
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
);

app.get('/works', (req, res) =>
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
);


app.get('/{*any}', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});