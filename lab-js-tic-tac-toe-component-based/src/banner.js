import Component from  './component.js';

import './banner.css';

/*
 * [Event name: params]
 * click: this, color
 */
export default class Board extends Component {
    static getRootClass() {
        return '.board';
    }

    constructor(root, color) {
        super(root);

        this.tO = 0;
        this.tX = 0;

        this.scoreDisplay = root.querySelector('.color-picked');
        this.turnDisplay = root.querySelector('.message');
        this.reset();
    }

    changeTurn(mark){
        this.turnDisplay.textContent = mark + " Turn";
        //this.scoreDisplay.textContent = "O: " + OScore.toString() + " | X: " + XScore.toString();
    }

    reset(OScore, XScore) {
        //this.turn = "O";
        //this.OScore = 0;
        //this.XScore = 0;
        //this.scoreDisplay.textContent = "O: " + OScore.toString() + " | X: " + XScore.toString();
        console.log(OScore);
        console.log(XScore);
        console.log(typeof(OScore));
        console.log(typeof(XScore));

        if(typeof(OScore) !== 'undefined' && typeof(XScore) !== 'undefined'){
          this.scoreDisplay.textContent = "O: " + OScore.toString() + " | X: " + XScore.toString();
          this.turnDisplay.textContent = "O Turn";
        }else{
          this.scoreDisplay.textContent = "O: 0 | X: 0";
        }
    }

    showColor(color) {
        this.scoreDisplay.textContent = color;
    }

    showCorrectMessage() {
        this.turnDisplay.textContent = "Correct!";

    }

    showWrongMessage() {
        this.turnDisplay.textContent = "Try Again";

    }
}
