
var img = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

function randomNum() {
    var n = Math.floor(Math.random() * 6);
    console.log(n);
    return n;

}

function letsRoll() {

var n1 = randomNum();
var n2 = randomNum();
 document.querySelectorAll("img")[0].setAttribute("src", img[n1]); 
 document.querySelectorAll("img")[1].setAttribute("src", img[n2]);

 if (n1 > n2){
    document.querySelector("#result").innerHTML= "Player 1 wins !!";
 }
 else if (n1<n2) {
    document.querySelector("#result").innerHTML= "Player 2 wins !!";
 }
 else {
    document.querySelector("#result").innerHTML= "It's a tie !!";
 }
}


onload = letsRoll();