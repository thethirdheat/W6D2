class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard()
    this.bindEvents()
  }

  bindEvents() {
    this.$el.on('click','li',(e)=>{this.makeMove($(e.target))})
  }
  
  makeMove($square) {
    // debugger
    // this.$el.append(this.game.winner())
    console.log(this.game.playMove([$square.data('id')[0],$square.data('id')[1]]));
    this.game.isOver()
    $square.html(`${this.game.currentPlayer}`)
    if(this.game.isOver()){
      alert(`its over ${this.game.winner()==='x' ?'o' :'x'} has won`)
    }
  }

  setupBoard() {
    for( let j =0 ; j < 3;j++){
      let $grid = $('<ul>');
      for (let i=0; i < 3; i++) {
        let $box = $('<li>');
        $box.data('id',`${j}${i}`)
        $box.addClass('box');
        $grid.append($box)
      }
      
      this.$el.append($grid)
    }

  }
}



module.exports = View;
