//dice-1 code
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var ImageGenerator1 = "images/" + "dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", ImageGenerator1);

//dice-2 code
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var ImageGenerator2 = "images/" + "dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", ImageGenerator2);

//changing of the text when player wins!
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!  🚩";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!  🚩";
} else {
  document.querySelector("h1").innerHTML = "Its a tie✌️";
}
