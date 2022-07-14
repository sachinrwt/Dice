function dicenumber() {


  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;

  var p = "images/dice" + d1 + ".png";
  var dic1 = document.querySelectorAll("img")[0];
  dic1.setAttribute("src",p);

  var q = "images/dice" + d2 + ".png";
  var dic2 = document.querySelectorAll("img")[1];
  dic2.setAttribute("src",q);

  if (d1 > d2){
    document.querySelector('h1').innerHTML="🚩Player 1 wins";
  }
  else if (d1 < d2){
    document.querySelector('h1').innerHTML="Player 2 wins🚩";
  }
  else{
    document.querySelector('h1').innerHTML="DRAW!!!!!!!";
  }


}
