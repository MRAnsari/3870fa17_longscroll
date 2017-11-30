var canvas = document.getElementById("canvas");
var counter = document.getElementById("counter");
var icon = document.getElementById("icon");

window.onscroll = function(){
  var y = window.pageYOffset;

  console.log(y);

    poem.style.top = 150 + y * 1 + "px";

// POEM HILIGHTING
    if (y > 1000 && y < 2000)   {line01.style.color = "red";}
    else                        {line01.style.color = "black";}
    if (y > 2000 && y < 3000)   {line02.style.color = "red";}
    else                        {line02.style.color = "black";}
    if (y > 3000 && y < 4000)   {line03.style.color = "red";}
    else                        {line03.style.color = "black";}
    if (y > 4000 && y < 5000)   {line04.style.color = "red";}
    else                        {line04.style.color = "black";}
    if (y > 5000 && y < 6000)   {line05.style.color = "red";}
    else                        {line05.style.color = "black";}
    if (y > 6000 && y < 7000)   {line06.style.color = "red";}
    else                        {line06.style.color = "black";}
          // Break 1000px
    if (y > 8000 && y < 9000)   {line07.style.color = "red";}
    else                        {line07.style.color = "black";}
    if (y > 9000 && y < 10000)  {line08.style.color = "red";}
    else                        {line08.style.color = "black";}
    if (y > 10000 && y < 11000) {line09.style.color = "red";}
    else                        {line09.style.color = "black";}
    if (y > 11000 && y < 12000) {line10.style.color = "red";}
    else                        {line10.style.color = "black";}
    if (y > 12000 && y < 13000) {line11.style.color = "red";}
    else                        {line11.style.color = "black";}
    if (y > 13000 && y < 14000) {line12.style.color = "red";}
    else                        {line12.style.color = "black";}
          // Break 1000px
    if (y > 15000 && y < 16000) {line13.style.color = "red";}
    else                        {line13.style.color = "black";}
    if (y > 16000 && y < 17000) {line14.style.color = "red";}
    else                        {line14.style.color = "black";}
    if (y > 17000 && y < 18000) {line15.style.color = "red";}
    else                        {line15.style.color = "black";}
    if (y > 18000 && y < 19000) {line16.style.color = "red";}
    else                        {line16.style.color = "black";}
    if (y > 19000 && y < 20000) {line17.style.color = "red";}
    else                        {line17.style.color = "black";}
    if (y > 20000 && y < 21000) {line18.style.color = "red";}
    else                        {line18.style.color = "black";}




    // poem.innerHTML = y + "px";

    // counter.style.top = y * 1 + "px";

    // counter.innerHTML = y + "px";

    // if (y > 2000){ counter.style.backgroundColor = "lightgreen";}
        // else {counter.style.backgroundColor = "lightblue";}

    // icon.style.top = 200 + y + "px";

    // if (y > 2000) {icon.src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png";  }
    // else {icon.src="http://www.pvhc.net/img8/niexjjzstcseuzdzkvoq.png"}

};
