class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard()
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    for( let j =0 ; j < 3;j++){
      let $grid = $('<ul>');
      for (let i=0; i < 3; i++) {
        let $box = $('<li>');
        $box.addClass('box');
        $grid.append($box)
      }
      
      this.$el.append($grid)
    }

  }
}



module.exports = View;
