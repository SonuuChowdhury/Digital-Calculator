

// Accesing all the components
let multiplyKey=document.querySelector(".multiplyKey");
let addKey=document.querySelector(".addKey");
let minusKey=document.querySelector(".minusKey");
let divideKey=document.querySelector(".divideKey");
let KN1=document.querySelector(".KN1");
let KN2=document.querySelector(".KN2");
let KN3=document.querySelector(".KN3");
let KN4=document.querySelector(".KN4");
let KN5=document.querySelector(".KN5");
let KN6=document.querySelector(".KN6");
let KN7=document.querySelector(".KN7");
let KN8=document.querySelector(".KN8");
let KN9=document.querySelector(".KN9");
let display=document.querySelector(".display");
let delKey=document.querySelector(".delKey");

display.value="0";
// Variables
let firstNumber="";
let secoundNumber="";
let flagIndicator=0;


// functions
function assignValue(n){
    firstNumber=firstNumber+n;
    display.value=firstNumber;


}

function delValue(n){
    if (n==0) {
        firstNumber="";
        display.value=firstNumber;   
    }
    else{
        secoundNumber="";
        display.value=secoundNumber;
    }
}







KN1.addEventListener('click', function(){
    assignValue("1");
});
KN2.addEventListener('click', function(){
    assignValue(2);
});
KN3.addEventListener('click', function(){
    assignValue(3);
});
KN4.addEventListener('click', function(){
    assignValue(4);
});
KN5.addEventListener('click', function(){
    assignValue(5);
});
KN6.addEventListener('click', function(){
    assignValue(4);
});
KN7.addEventListener('click', function(){
    assignValue(7);
});
KN8.addEventListener('click', function(){
    assignValue(8);
});
KN9.addEventListener('click', function(){
    assignValue(9);
});

delKey.addEventListener('click',function(){
    delValue(flagIndicator);
});

minusKey.addEventListener('click', function(){
    operatorControl("-");
});
addKey.addEventListener('click', function(){
    operatorControl("+");
});
multiplyKey.addEventListener('click', function(){
    operatorControl("*");
});
divideKey.addEventListener('click', function(){
    operatorControl("/");
});




