
// for dice 1 :----
let randomNumber1 = Math.floor(Math.random() * 6) + 1;   // This will generate random number between 1 and 6
let randomDiceImage = "dice " + randomNumber1 + ".jpeg";    // It will select the dice images based on the randomNumber that comes 

let randomDiceImageSource = "img/" + randomDiceImage;      // It will select dice images from the source 

let image1 = document.querySelectorAll('img')[0];

image1.setAttribute("src", randomDiceImageSource);

// for dice 2 :-----
let randomNumber2 = Math.floor(Math.random() * 6) + 1;   // This will generate random number between 1 and 6
let randomDiceImage1 = "dice " + randomNumber2 + ".jpeg";    // It will select the dice images based on the randomNumber that comes 

let randomDiceImageSource1 = "img/" + randomDiceImage1;      // It will select dice images from the source 

let image2 = document.querySelectorAll('img')[1];

image2.setAttribute("src", randomDiceImageSource1);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins 🚩"
    document.querySelector("h1").style.color = "red";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins 🚩"
    document.querySelector("h1").style.color = "green";
}
else {
    document.querySelector("h1").innerHTML = "🚩 Draw!! 🚩"
    document.querySelector("h1").style.color = "blue";
}