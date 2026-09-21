const express = require('express');
const app = express();
const PORT = 3000;
const games = require('./data/games');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/games', (req, res) => {
  res.json(games);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});