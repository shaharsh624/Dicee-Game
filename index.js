// Random Number 1
var randomNumber1 = Math.floor(Math.random()*6)+1; // 1-6
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // dice1.png - dice-6.png
var randomImageSource1 = "images/" + randomDiceImage1; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);

// Random Number 2
var randomNumber2 = Math.floor(Math.random()*6)+1; // 1-6
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // dice1.png - dice-6.png
var randomImageSource2 = "images/" + randomDiceImage2; // images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

// Result
var player1Wins = 0;
var player2Wins = 0;
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
  player1Wins++;
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
  player2Wins++;
}
else {
  document.querySelector("h1").innerHTML = "Draw 😊";
}
