import Component from './component.js';
import Card from './card.js';

import './deck.css';

/*
 * [Event name: params]
 * wrongClick: this
 * rightClick: this, pickedColor
 */
export default class Deck extends Component {
    static getRootClass() {
        return '.deck';
    }

    constructor(root) {
        super(root);

        this.gameOver = false;
        this.cards = [];
        const els = root.querySelectorAll(Card.getRootClass());

        for (let el of els) {
            const card = new Card(el);
            //card.mark.textContent = i.toString();
            card.on('click', this.handleCardClick.bind(this));
            this.cards.push(card);
        }
        //this.pickedColor = this.pickColor();
    }

    reset() {
        this.gameOver = false;
        for (let card of this.cards)
            card.reset();
        //this.pickedColor = this.pickColor();
    }

    getPickedColor() {
        return this.pickedColor;
    }

    //handleCardClick(firer, color, pickCard) {
    handleCardClick(firer, pickCard) {
        /*if (this.gameOver)
            return;
        /*
        if (color === this.pickedColor) {
            for (let card of this.cards)
                card.fadeIn("#FFF");
            this.gameOver = true;
            this.fire('rightClick', this.pickedColor, pickCard);
        } else {*/
            //firer.fadeOut();
            //this.fire('wrongClick', pickCard);
        //}
        //pickCard.mark.textContent = "P";

        if(!this.gameOver){
          //pickCard.root.style.backgroundColor = "rgb(233, 166, 238)";
          this.fire('wrongClick', pickCard);
        }

        var condi = this.winlosefair();
        console.log(condi);

        if(condi==="O" || condi === "X" || condi === "F"){
          this.gameOver = true;
          this.fire('gameOver', condi);
        }
    }

    winlosefair(){
       //"O": O win, "X": X win, "F": Fair, "N": Not yet finish
      console.log("Enter Func");
      if((this.cards[0].mark.textContent === this.cards[1].mark.textContent && this.cards[1].mark.textContent === this.cards[2].mark.textContent && this.cards[0].mark.textContent !== "")){
        console.log("Enter 11");
        return this.cards[0].mark.textContent;
      }

      else if((this.cards[3].mark.textContent === this.cards[4].mark.textContent && this.cards[4].mark.textContent === this.cards[5].mark.textContent && this.cards[3].mark.textContent !== "")) {
        console.log("Enter 12");
        return this.cards[3].mark.textContent;
      }

      else if((this.cards[6].mark.textContent === this.cards[7].mark.textContent && this.cards[7].mark.textContent === this.cards[8].mark.textContent && this.cards[6].mark.textContent !== "")){
        console.log("Enter 13");
        return this.cards[6].mark.textContent;
      }

      else if((this.cards[0].mark.textContent === this.cards[3].mark.textContent && this.cards[3].mark.textContent === this.cards[6].mark.textContent && this.cards[0].mark.textContent !== "")){
        console.log("Enter 21");
        return this.cards[0].mark.textContent;
      }

      else if((this.cards[1].mark.textContent === this.cards[4].mark.textContent && this.cards[4].mark.textContent === this.cards[7].mark.textContent && this.cards[1].mark.textContent !== "")){
        console.log("Enter 22");
        return this.cards[1].mark.textContent;
      }

      else if((this.cards[2].mark.textContent === this.cards[5].mark.textContent && this.cards[5].mark.textContent === this.cards[8].mark.textContent && this.cards[2].mark.textContent !== "")){
        console.log("Enter 23");
        return this.cards[2].mark.textContent;
      }

      else if((this.cards[0].mark.textContent === this.cards[4].mark.textContent && this.cards[4].mark.textContent === this.cards[8].mark.textContent && this.cards[0].mark.textContent !== "")){
        console.log("Enter diag1");
        return this.cards[0].mark.textContent;
      }

      else if((this.cards[2].mark.textContent === this.cards[4].mark.textContent && this.cards[4].mark.textContent === this.cards[6].mark.textContent && this.cards[2].mark.textContent !== "")){
        console.log("Enter diag2");
        return this.cards[2].mark.textContent;
      }
      else{
        console.log("Last Else");
        var allClicked = true;
        for(var i = 0; i < 9; i++){
          if(this.cards[i].clicked === false){
            allClicked = false;
          }
        }
        console.log("Last Else Out");
        if(allClicked){console.log("Re F"); return "F";}
        else{console.log("Re N"); return "N";}
      }

    }
/*
    pickColor() {
        const random = Math.floor(Math.random() * this.cards.length);
        return this.cards[random].getColor();
    }*/
}
