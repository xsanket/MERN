

let randomNumber = Math.floor((Math.random()*6)+1);
let randomImage = "dice" + randomNumber + ".png";
let randomImageSource = "images/"+ randomImage;
let image1 = document.querySelectorAll("img") [0];


image1.setAttribute("src", randomImageSource);


let randomNumber2 =Math.floor((Math.random()*6)+1);
let randomImage2 = "dice" + randomNumber2+".png";
let randomImageSource2 = "images/" +randomImage2;
let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML =" Player 1 Wins🔥";
}

else if(randomNumber2> randomNumber){
    document.querySelector("h1").innerHTML =" Player 2 Wins🔥";
}

else{
    document.querySelector("h1").innerHTML ="😂 Its a Tie!!"
}