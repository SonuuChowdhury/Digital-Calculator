

// Accesing all the components
let multiplyKey=document.querySelector(".multiplyKey");
let addKey=document.querySelector(".addKey");
let minusKey=document.querySelector(".minusKey");
let divideKey=document.querySelector(".divideKey");
let KN0=document.querySelector(".KN0");
let KN1=document.querySelector(".KN1");
let KN2=document.querySelector(".KN2");
let KN3=document.querySelector(".KN3");
let KN4=document.querySelector(".KN4");
let KN5=document.querySelector(".KN5");
let KN6=document.querySelector(".KN6");
let KN7=document.querySelector(".KN7");
let KN8=document.querySelector(".KN8");
let KN9=document.querySelector(".KN9");
let KNdecimalKey=document.querySelector(".decimalKey");
let display=document.querySelector(".display");
let delKey=document.querySelector(".delKey");
let equalKey=document.querySelector(".equalKey");
let resetKey=document.querySelector(".resetKey");

display.value="0";
// Variables
let firstNumber="";
let secoundNumber="";
let flagIndicator=0;
let val1=0;
let val2=0;

let operatorIndicator=0;
// operatorIndicator values 
// 1--> +
// 2--> -
// 3--> *
// 4--> /


// functions
function assignValue(n){
    
    if (flagIndicator==0) {
        firstNumber=firstNumber+n;
        display.value=firstNumber;  
    }
    
    else{
        if (operatorIndicator==1) {
            secoundNumber=secoundNumber+n;
            display.value="Ans + "+secoundNumber; 
            
        }
        else if(operatorIndicator==2){
            secoundNumber=secoundNumber+n;
            display.value="Ans - "+secoundNumber; 
        }
        else if(operatorIndicator==3){
            secoundNumber=secoundNumber+n;
            display.value="Ans x "+secoundNumber; 
        }
        else if(operatorIndicator==4){
            secoundNumber=secoundNumber+n;
            display.value="Ans / "+secoundNumber; 
        }

    }
}

function operatorControlInit(opr){
    if (opr=="+") {
        val1=display.value;
        flagIndicator=1;  
        operatorIndicator=1;
        display.value="Ans +";
        
    }
    else if(opr=="-"){
        val1=display.value;
        flagIndicator=1;  
        operatorIndicator=2;
        display.value="Ans -";
    }
    else if(opr=="*"){
        val1=display.value;
        flagIndicator=1;  
        operatorIndicator=3;
        display.value="Ans x";
    }
    else{
        val1=display.value;
        flagIndicator=1;  
        operatorIndicator=4;
        display.value="Ans /";
    }
}


function delValue(n){
    if (n==0) {
        firstNumber="";
        display.value=firstNumber;   
    }
    else{
        if (operatorIndicator==1) {
            secoundNumber="";
            display.value="Ans + "+secoundNumber;   
        }
        else if (operatorIndicator==2){
            secoundNumber="";
            display.value="Ans - "+secoundNumber;

        }
        else if (operatorIndicator==3){
            secoundNumber="";
            display.value="Ans x "+secoundNumber;
        }

        else if (operatorIndicator==4){
            secoundNumber="";
            display.value="Ans / "+secoundNumber;
        }
    }
}

function answerControl(){
    
}



KN1.addEventListener('click', function(){
    assignValue(1);
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
KN0.addEventListener('click', function(){
    assignValue(0);
});
KNdecimalKey.addEventListener('click',function(){
    assignValue(".");

});
delKey.addEventListener('click',function(){
    delValue(flagIndicator);
});

minusKey.addEventListener('click', function(){
    operatorControlInit("-");
});
addKey.addEventListener('click', function(){
    operatorControlInit("+");
});
multiplyKey.addEventListener('click', function(){
    operatorControlInit("*");
});
divideKey.addEventListener('click', function(){
    operatorControlInit("/");
});

equalKey.addEventListener('click',function(){
    answerControl();
});



