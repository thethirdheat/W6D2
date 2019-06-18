const View = require("./ttt-view.js");
const Game = require("./game.js");

  $(() => {
    new View(new Game(), $('.ttt'));
  });
