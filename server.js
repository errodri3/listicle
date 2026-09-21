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

app.get('/games/:id', (req, res) => {
  const game = games.find(g => g.id === req.params.id);
  if (!game) {
    return res.status(404).send('Game not found');
  }
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${game.name}</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
    </head>
    <body>
      <main class="container">
        <a href="/">&larr; Back to all games</a>
        <h1>${game.name}</h1>
        <img src="${game.image}" alt="${game.name}" style="max-width:300px;">
        <p>${game.description}</p>
        <p><strong>Category:</strong> ${game.category}</p>
        <p><strong>Players:</strong> ${game.players}</p>
      </main>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});