

var countDownElement =
 document.getElementById
 ("countdown");

var initialCountDownVal = 
countDownElement.innerHTML;

setInterval(function(){
   initialCountDownVal = initialCountDownVal > 0 ? initialCountDownVal -1 : 0 ;
   
   countDownElement.innerHTML =  initialCountDownVal;
}, 1000);
