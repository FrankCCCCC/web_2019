window.onload = function() {
    init();
}

var numCards = 6;
var gameOver = false;
var colors = [];
var pickedColor;
var body = document.querySelector("body");
var cards = document.querySelectorAll(".card");
var colorDisplay = document.getElementById("color-picked");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var resetDisplay = document.querySelector("#reset span");
// var eTimer = document.getElementById("timer");
// var time = 5;
// var count = ""
var startCounting = false;

function init() {
    resetButton.style.visibility = "hidden";
    initCards();
    reset();
    timer();
}

function initCards() {
    for (var i = 0; i < cards.length; i++) {
        //add click listeners to cards
        cards[i].addEventListener("click", function() {
            if (gameOver)
                return;
            //grab color of clicked card
            var clickedColor = this.style.backgroundColor;
            // alert(this.style.backgroundColor);
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetDisplay.textContent = "Play Again"
                // clearInterval(count);
                // body.style.animationPlayState = "pause";
                // body.style.webkitAnimationPlayState = "pause";
                // body.style.backgroundColor = pickedColor;
                stopBlink()
                // stopcounter()
                resetButton.style.visibility = "visible";
                gameOver = true;
                changeColors("#FFF");
            } else {
                this.style.opacity = 0;
                messageDisplay.textContent = "Try Again"
            }
        });
    }
}

function reset() {
    gameOver = false;
    resetButton.style.visibility = "hidden";
    colors = generateRandomColors(numCards);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetDisplay.textContent = "New Color"
    messageDisplay.textContent = "What's the Color?";
    //change colors of cards
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.opacity = 1;
        if (colors[i]) {
            cards[i].style.display = "block"
            cards[i].style.backgroundColor = colors[i];
        } else {
            cards[i].style.display = "none";
        }
    }
    body.style.backgroundColor = "#232323";
    timer();
}

resetButton.addEventListener("click", function() {
    reset();
});

function changeColors(color) {
    //loop through all cards
    for (var i = 0; i < cards.length; i++) {
        //change each color to match given color
        cards[i].style.opacity = 1;
        cards[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from  0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from  0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function timer(){
  var eTimer = document.getElementById("timer");
  var time = 5;
  console.log(time)
  var count = setInterval(() => {
      startCounting = true
    eTimer.textContent = time.toString() + "S";
    console.log(time)
    time--;
    //
    if(gameOver){
        clearInterval(count);
        eTimer.textContent = "";
        // messageDisplay.textContent = ""
        resetDisplay.textContent = "Play Again"
        changeColors("#FFF");

        //   body.style.animationPlayState = "pause";
        //   body.style.webkitAnimationPlayState = "pause";
        //   body.style.backgroundColor = pickedColor;
        stopBlink()
        resetButton.style.visibility = "visible";
        gameOver = true;
    }else if(time < 0 && gameOver === false){
        clearInterval(count);
        eTimer.textContent = "Time Out!";
        messageDisplay.textContent = ""
        resetDisplay.textContent = "Play Again"
        changeColors("#FFF");

        //   body.style.animationPlayState = "pause";
        //   body.style.webkitAnimationPlayState = "pause";
        //   body.style.backgroundColor = pickedColor;
        stopBlink()
        resetButton.style.visibility = "visible";
        gameOver = true;
    }
    body.style.backgroundColor = rgb(255, 255, 0);
  }, 1000);
}

function stopcounter(){
    clearInterval(count);
}
function stopBlink(){
    body.style.animationPlayState = "pause";
    body.style.webkitAnimationPlayState = "pause";
    body.style.backgroundColor = pickedColor;
}