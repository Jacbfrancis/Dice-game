var randomNumber1
var randomNumber2

document.querySelector("button").addEventListener("click", function(){
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const imageSource1 = "images/dice" + randomNumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", imageSource1);
    winner();
});
    
document.querySelector("button").addEventListener("click", function(){
    randomNumber2 = Math.floor(Math.random() * 6) + 1;
    const imageSource2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", imageSource2);
    winner();
});


function winner() {
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerText = "Player 1 wins";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerText = "Player 2 wins";
    }else{
        document.querySelector("h1").innerText = "Draw";
    }
};
