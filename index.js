//  let randomNumber= Math.random()*6 ;
//  let randomNumber1=Math.floor(randomNumber);
let randomNumber1=Math.floor(Math.random() * 6) + 1;
    let randomImage1= "./"+"dice" + randomNumber1 + ".png" ;
let img1= document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImage1);

let randomNumber2=Math.floor(Math.random() * 6) + 1;
    let randomImage2= "./"+"dice" + randomNumber2 + ".png" ;
let img2= document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImage2);

if(randomNumber1 < randomNumber2){
   let draw =document.querySelector("h1");
draw.innerText="Player2 Wins👑";
}

if(randomNumber1 > randomNumber2){
    let draw =document.querySelector("h1");
 draw.innerText="Player1 Wins👑";
 }
 if(randomNumber1 === randomNumber2){
    let draw =document.querySelector("h1");
 draw.innerText="Game Draws!";
 }