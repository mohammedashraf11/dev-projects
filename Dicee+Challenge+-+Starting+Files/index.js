var randomVAriable1 = Math.random()*6+1;
var hello = Math.floor(randomVAriable1);
if(hello==1 || hello==0){
    var add = "./images/dice1.png"
}
else if(hello==2){
    var add = "./images/dice2.png"
}
else if(hello==3){
    var add = "./images/dice3.png"
}
else if(hello == 4){
    var add = "./images/dice4.png"
}
else if(hello==5){
    var add = "./images/dice5.png"
}
else if(hello==6){
    var add = "./images/dice6.png"
}
document.querySelector(".img1").setAttribute("src",add);

var randomVAriable2 = Math.random()*7;
var hello1 = Math.floor(randomVAriable2);
if(hello1==1 || hello1==0){
    var add1 = "./images/dice1.png"
}
else if(hello1==2){
    var add1 = "./images/dice2.png"
}
else if(hello1==3){
    var add1 = "./images/dice3.png"
}
else if(hello1 == 4){
    var add1 = "./images/dice4.png"
}
else if(hello1==5){
    var add1= "./images/dice5.png"
}
else if(hello1==6){
    var add1 = "./images/dice6.png"
}
document.querySelector(".img2").setAttribute("src",add1);

if(hello>hello1){
    document.querySelector("h1").textContent="Player 1 is the Winner!!"
}
else if(hello==hello1){
    document.querySelector("h1").textContent="Draw"
}
else{
    document.querySelector("h1").textContent="player 2 is the Winner!!"
}
