var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


var winnerHeading = document.querySelector("h1");

if(randomNumber1 === randomNumber2) {
    winnerHeading.innerHTML = "Draw";
}

else if (randomNumber1 > randomNumber2) {
    winnerHeading.innerHTML = "🚩 Player 1 Wins!"
}

else {
    winnerHeading.innerHTML = "Player 2 Wins! 🚩"
}