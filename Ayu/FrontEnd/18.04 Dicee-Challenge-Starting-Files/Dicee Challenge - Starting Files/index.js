var randomNumber1 = Math.round(6*Math.random());
var randomNumber2 = Math.round(6*Math.random());

var arr = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var link1 = arr[randomNumber1];
var link2 = arr[randomNumber2];

document.querySelector(".img1").setAttribute("src", link1);
document.querySelector(".img2").setAttribute("src", link2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 won";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 won";
}
