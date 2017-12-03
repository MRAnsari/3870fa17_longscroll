var canvas = document.getElementById("canvas");
// var counter = document.getElementById("counter");
var poem = document.getElementById("poem");
var inst = document.getElementById("inst");
// var stars = document.getElementById("stars");
var moon = document.getElementById("moon");


window.onscroll = function(){
  var y = window.pageYOffset;
  console.log(y);

// TEXT MOVEMENT
    inst.style.top = 250 + y *.4 + "px";
    title.style.top = 400 + y * .75 + "px";
    if      (y > 0 && y < 1370)      {poem.style.top = 500 + y * .75 + "px";}
    else                             {poem.style.top = 150 + y + "px";}

// TITLE FADE IN
    if (y > 0 && y < 500)       {title.style.color = "rgba(255, 247, 97, 0.1)";}
    else                        {title.style.color = "rgba(255, 247, 97, 1)";}

// POEM HILIGHTING
    if (y > 2000 && y < 3000)   {line01.style.color = "rgba(255, 247, 97, 1)";}
    else                        {line01.style.color = "rgba(255, 247, 97, 0.1)";}
    if (y > 3000 && y < 4000)   {line02.style.color = "rgba(255, 247, 97, 1)";}
    else                        {line02.style.color = "rgba(255, 247, 97, 0.1)";}
    if (y > 4000 && y < 5000)   {line03.style.color = "rgba(255, 247, 97, 1)";}
    else                        {line03.style.color = "rgba(255, 247, 97, 0.1)";}
    if (y > 5000 && y < 6000)   {line04.style.color = "rgba(255, 247, 97, 1)";}
    else                        {line04.style.color = "rgba(255, 247, 97, 0.1)";}
    if (y > 6000 && y < 7000)   {line05.style.color = "rgba(255, 247, 97, 1)";}
    else                        {line05.style.color = "rgba(255, 247, 97, 0.1)";}
    if (y > 7000 && y < 8000)   {line06.style.color = "rgba(255, 247, 97, 1)";}
    else                        {line06.style.color = "rgba(255, 247, 97, 0.1)";}
          // Break 1000px
    if (y > 9000 && y < 10000)  {line07.style.color = "rgba(255, 247, 97, 1)";}
    else                        {line07.style.color = "rgba(255, 247, 97, 0.1)";}
    if (y > 10000 && y < 11000) {line08.style.color = "rgba(255, 247, 97, 1)";}
    else                        {line08.style.color = "rgba(255, 247, 97, 0.1)";}
    if (y > 11000 && y < 12000) {line09.style.color = "rgba(255, 247, 97, 1)";}
    else                        {line09.style.color = "rgba(255, 247, 97, 0.1)";}
    if (y > 12000 && y < 13000) {line10.style.color = "rgba(255, 247, 97, 1)";}
    else                        {line10.style.color = "rgba(255, 247, 97, 0.1)";}
    if (y > 13000 && y < 14000) {line11.style.color = "rgba(255, 247, 97, 1)";}
    else                        {line11.style.color = "rgba(255, 247, 97, 0.1)";}
    if (y > 14000 && y < 15000) {line12.style.color = "rgba(255, 247, 97, 1)";}
    else                        {line12.style.color = "rgba(255, 247, 97, 0.1)";}
          // Break 1000px
    if (y > 16000 && y < 17000) {line13.style.color = "rgba(255, 247, 97, 1)";}
    else                        {line13.style.color = "rgba(255, 247, 97, 0.1)";}
    if (y > 17000 && y < 18000) {line14.style.color = "rgba(255, 247, 97, 1)";}
    else                        {line14.style.color = "rgba(255, 247, 97, 0.1)";}
    if (y > 18000 && y < 19000) {line15.style.color = "rgba(255, 247, 97, 1)";}
    else                        {line15.style.color = "rgba(255, 247, 97, 0.1)";}
    if (y > 19000 && y < 20000) {line16.style.color = "rgba(255, 247, 97, 1)";}
    else                        {line16.style.color = "rgba(255, 247, 97, 0.1)";}
    if (y > 20000 && y < 21000) {line17.style.color = "rgba(255, 247, 97, 1)";}
    else                        {line17.style.color = "rgba(255, 247, 97, 0.1)";}
    if (y > 21000 && y < 22000) {line18.style.color = "rgba(255, 247, 97, 1)";}
    else                        {line18.style.color = "rgba(255, 247, 97, 0.1)";}

// MOON
    moon.style.top = 1300 + y * .945 +"px";


// STARS MOVEMENT
    // stars.style.top = 3000 + y * 1 + "px";


    // poem.innerHTML = y + "px";

    // counter.style.top = y * 1 + "px";

    // counter.innerHTML = y + "px";

    // if (y > 2000){ counter.style.backgroundColor = "lightgreen";}
        // else {counter.style.backgroundColor = "lightblue";}

    // icon.style.top = 200 + y + "px";

    // if (y > 2000) {icon.src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png";  }
    // else {icon.src="http://www.pvhc.net/img8/niexjjzstcseuzdzkvoq.png"}

};
