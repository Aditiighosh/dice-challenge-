var randomNumber1;
randomNumber1 = Math.floor((Math.random() * 6) +1 );
var image = [ "images/dice6.png", "images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png"];
document.querySelectorAll("img");
document.querySelectorAll("img")[0].setAttribute("src",image[randomNumber1]);  
randomNumber2 = Math.floor((Math.random()*6) +1 );
document.querySelectorAll("img")[1].setAttribute("src",image[randomNumber2]);
if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML = "player 2 wins!!!";
}
else if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML = "player 1 wins!!";
}
else 
{
    document.querySelector("h1").innerHTML = "draw!!";
}