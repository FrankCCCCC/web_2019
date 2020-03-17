import Component from  './component.js';
import Navbar from  './navbar.js';
import Board from  './banner.js';
import Deck from  './deck.js';
import Reset from  './reset.js';

import './main.css';

export default class Main extends Component {
    static getRootClass() {
        return '.main';
    }

    constructor(root) {
        super(root);

        this.turn = "O";
        this.OScore = 0;
        this.XScore = 0;

        this.navbar = new Navbar(root.querySelector('.navbar'));

        this.deck = new Deck(root.querySelector('.deck'));
        this.deck.on('wrongClick', this.handleDeckWrongClick.bind(this));
        this.deck.on('rightClick', this.handleDeckRightClick.bind(this));
        this.deck.on('gameOver', this.handleGameOver.bind(this));
        //this.deck.on('click', this.handleDeckClick.bind(this));

        this.board = new Board(root.querySelector('.board'), this.deck.getPickedColor());

        this.reset = new Reset(root.querySelector('.reset'));
        this.reset.on('click', this.handleRestClick.bind(this));
    }

    handleDeckWrongClick(firer, pickCard) {
        //this.board.showWrongMessage();
        if(this.turn === "O"){
          pickCard.innerHTML = "<i class=\"far fa-circle\"></i>";
          //this.OScore++;
          this.turn = "X";
        }
        else{
          pickCard.mark.textContent = "X"
          //this.XScore++;
          this.turn = "O";
        }
        this.board.changeTurn(this.turn);
        //.root.style.backgroundColor = "rgb(189, 207, 17)";
    }

    handleDeckRightClick(firer, pickedColor) {
        this.root.style.backgroundColor = pickedColor;
        //this.board.showCorrectMessage();
        this.reset.showPlayAgain();
        if(this.turn === "O"){

          //this.OScore++;
          this.turn = "X";
        }
        else{
          //this.XScore++;
          this.turn = "O";
        }
        this.board.changeTurn(this.turn);
    }

    handleGameOver(firer, result){
      console.log(result);
      if(result === "F"){
        this.board.turnDisplay.textContent = "Fair";
      }else{
        this.board.turnDisplay.textContent = result + " Win";
        if(result === "O"){this.OScore++;}
        else if(result === "X"){this.XScore++;}
      }

    }

    handleRestClick() {
        //this.root.style.backgroundColor = "#232323";

        //this.XScore = 0;
        //this.OScore = 0;
        this.turn = "O";
        this.deck.reset();
        this.board.reset(this.OScore, this.XScore);
        this.reset.reset();
    }
}

window.onload = function() {
    const body = document.querySelector('body');
    new Main(body);
};
