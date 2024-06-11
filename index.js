var randomNumber1 = Math.floor(Math.random() * 6)+1;

var randomNumber2 = Math.floor(Math.random()*6)+1;

var image1 = "./dice" + randomNumber1 + ".png";

var image2 = "./dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Draw!";
} else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩Player1 Wins!";
} else{
    document.querySelector("h1").textContent = "Player2 Wins!🚩";
}