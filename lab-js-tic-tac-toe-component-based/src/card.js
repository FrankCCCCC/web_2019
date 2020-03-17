import Component from  './component.js';

import './card.css';

/*
 * [Event name: params]
 * click: this, color
 */


export default class Card extends Component {

    static getRootClass() {
        return '.card';
    }

    static randomColor() {
        //pick a "red" from 0 - 255
        var r = Math.floor(Math.random() * 256);
        //pick a "green" from  0 -255
        var g = Math.floor(Math.random() * 256);
        //pick a "blue" from  0 -255
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }

    constructor(root) {
        super(root);

        //this.color = "rgb(233, 166, 238)";
        this.clicked = false;
        //this.root.style.backgroundColor = "rgb(45, 198, 252)";
        root.addEventListener("click", this.handleDomClick.bind(this));
        this.mark = root.querySelector('.mark');
        this.reset();
    }

    reset() {
        this.color = Card.randomColor();
        this.clicked = false;
        this.mark.textContent = "";
        //this.root.style.backgroundColor = "rgb(45, 198, 252)";
        //this.fadeIn(this.color);
    }

    getColor() {
        return this.color;
    }

    fadeOut(mark) {
        this.mark.textContent = mark;
        //this.root.style.backgroundColor = "rgb(233, 166, 238)";
        //this.root.style.opacity = 1;
    }
    /*
    fadeIn(color) {
        this.root.style.backgroundColor = "rgb(45, 198, 252)";
        this.root.style.opacity = 1;
    }*/

    handleDomClick(e) {
      if(this.clicked){
        return;
      }
      this.clicked = true;
      //this.root.style.backgroundColor = "rgb(233, 166, 238)"
      //this.fire('click', this.color, this);
      this.fire('click', this);
    }
}
