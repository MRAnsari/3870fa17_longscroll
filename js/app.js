var canvas = document.getElementById("canvas");

var counter = document.getElementById("counter");

var icon = document.getElementById("icon");




window.onscroll = function(){

var y = window.pageYOffset;

console.log(y);


  counter.style.top = y * 1 + "px";

  counter.innerHTML = y + "px";

  if (y > 2000){ counter.style.backgroundColor = "lightgreen";}
      else {counter.style.backgroundColor = "lightblue";}

  icon.style.top = 200 + y + "px";

  if (y > 2000) {icon.src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png";  }
  else {icon.src="http://www.pvhc.net/img8/niexjjzstcseuzdzkvoq.png"}

};
