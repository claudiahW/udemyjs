var countDownElement = document.getElementById("countdown");
var bgImage = document.getElementById("bg-img");

var initialCountdownVal = countDownElement.innerHTML;

var interval = setInterval(function(){
   initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal -1 : 0;
    countDownElement.innerHTML = initialCountdownVal - 1;
    countDownElement.style.fontSize = initialCountdownVal * 100 + "px"

bgImage.style.width = initialCountdownVal * 10 + "%"

if(initialCountdownVal <= 0){
   clearInterval(interval);
}

}, 1000);