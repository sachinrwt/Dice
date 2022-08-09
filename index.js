function stops() {

  var d1 = Math.floor(Math.random() * 6) + 1;
  var p = "images/dice" + d1 + ".png";
  var dic1 = document.querySelectorAll("img")[0];
  dic1.setAttribute("src", p);


  var d2 = Math.floor(Math.random() * 6) + 1;
  var q = "images/dice" + d2 + ".png";
  var dic2 = document.querySelectorAll("img")[1];
  dic2.setAttribute("src", q);


  if (d1 > d2) {
    document.querySelector('h1').innerHTML = "Player 1 wins";
  } else if (d1 < d2) {
    document.querySelector('h1').innerHTML = "Player 2 wins";
  } else {
    document.querySelector('h1').innerHTML = "DRAW!!!!!!!";
  }
}


var image1 = document.getElementById("img1");
var image2 = document.getElementById("img2");
var img_array = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var index = 0;
var isPaused = true;

setInterval("dicenumber()", 200);

function dicenumber() {
  if (!isPaused) {
    image1.setAttribute("src", img_array[index]);
    image2.setAttribute("src", img_array[index]);
    index++;
    if (index >= img_array.length) {
      index = 0;
    }
  }
}

function roll() {
  isPaused = false;
}

function stop() {
  isPaused = true;
}
