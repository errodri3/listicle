fetch('/api/games')
  .then(res => res.json())
  .then(games => {
    const container = document.getElementById('game-list');
    games.forEach(game => {
      const card = document.createElement('article');
      card.innerHTML = `
        <img src="${game.image}" alt="${game.name}" style="width:100%; max-height:200px; object-fit:cover;">
        <h3><a href="/games/${game.id}">${game.name}</a></h3>
        <p>${game.description}</p>
      `;
      container.appendChild(card);
    });
  });