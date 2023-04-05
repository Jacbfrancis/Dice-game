
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imageSource1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imageSource2);



        // COMPLEX METHOD

/*   for (let i = 1; i <= 2; i++) {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    if (i === 1) {
       var randomNumber1 = randomNumber;
       var imageSource1 = "images/dice" + randomNumber1 + ".png";
       document.querySelectorAll("img")[0].setAttribute("src", imageSource1);  
    }else {
        var randomNumber2 = randomNumber;
        var imageSource2 = "images/dice" + randomNumber2 + ".png";
        document.querySelectorAll("img")[1].setAttribute("src", imageSource2)
        console.log(randomNumber2);
    }
}        
    */



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 wins";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerText = "Player 2 wins";
}else{
    document.querySelector("h1").innerText = "Draw";
} 