//            Accesing all the components
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
let checkbox = document.querySelector('.checkbox');
let keyBoard= document.querySelector(".keyBoard");
let fnButtons=document.querySelectorAll(".fnButtons");
let topText=document.querySelectorAll(".topText");



//          Variables
display.value="0";
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

  
//                  Functions

function assignValue(n){ //Assigning Values n to the display
    
    if (flagIndicator==0) { //for first value
        firstNumber+=n;
        display.value=firstNumber;  
    }
    
    else{ //for secound va;ue
        if (operatorIndicator==1) {
            secoundNumber+=n;
            display.value="Ans + "+secoundNumber; 
            
        }
        else if(operatorIndicator==2){
            secoundNumber+=n;
            display.value="Ans - "+secoundNumber; 
        }
        else if(operatorIndicator==3){
            secoundNumber+=n;
            display.value="Ans x "+secoundNumber; 
        }
        else if(operatorIndicator==4){
            secoundNumber+=n;
            display.value="Ans / "+secoundNumber; 
        }

    }
}

function operatorControlInit(opr){ //taking actions according to the operator selected by the user
    if (opr=="+") {
        val1=Number(display.value);
        flagIndicator=1;  
        operatorIndicator=1;
        display.value="Ans +";
        
    }
    else if(opr=="-"){
        val1=Number(display.value);
        flagIndicator=1;  
        operatorIndicator=2;
        display.value="Ans -";
    }
    else if(opr=="*"){
        val1=Number(display.value);
        flagIndicator=1;  
        operatorIndicator=3;
        display.value="Ans x";
    }
    else{
        val1=Number(display.value);
        flagIndicator=1;  
        operatorIndicator=4;
        display.value="Ans /";
    }
}


function delValue(n){ //Deleting a value by string slicing
    if (n==0) {
        firstNumber=firstNumber.slice(0,-1);
        display.value=firstNumber;   
    }
    else{
        if (operatorIndicator==1) {
            secoundNumber=secoundNumber.slice(0,-1);
            display.value="Ans + "+secoundNumber;   
        }
        else if (operatorIndicator==2){
            secoundNumber=secoundNumber.slice(0,-1);
            display.value="Ans - "+secoundNumber;

        }
        else if (operatorIndicator==3){
            secoundNumber=secoundNumber.slice(0,-1);
            display.value="Ans x "+secoundNumber;
        }

        else if (operatorIndicator==4){
            secoundNumber=secoundNumber.slice(0,-1);
            display.value="Ans / "+secoundNumber;
        }
    }
}

function answerControl(){ //answer function calling by considering the  different values of operatorIndicator 
    let secVar=display.value;
    secoundNumber=secVar.slice(5,secVar.length);
    val2=Number(secoundNumber);
    if (operatorIndicator==1) {
        addNumbers(val1,val2); 
    }
    else if(operatorIndicator==2){
        subtractNumbers(val1,val2);
    }
    else if(operatorIndicator==3){
        multiplyNumbers(val1,val2);
    }
    else if(operatorIndicator==4){
        divideNumbers(val1,val2);
    }
}

function addNumbers(a,b){ //add function
    let sumValue=a+b;
    display.value=sumValue;
}

function subtractNumbers(a,b){ //subtract function
    let subValue=a-b;
    display.value=subValue;
}

function multiplyNumbers(a,b){ //multiply function
    let mulValue=a*b;
    display.value=mulValue;
}

function divideNumbers(a,b){ //divide function
    let divValue=a/b;
    display.value=divValue;
}

function resetOperations(){ //Reseting the whole calculator
    display.value="0";
    firstNumber="";
    secoundNumber="";
    flagIndicator=0;
    val1=0;
    val2=0;
    operatorIndicator=0;
}

function checkboxOperation(){
    if (checkbox.checked) {
        setLightTheme();
    } else {
        setDarkTheme();
    }
}

function setLightTheme(){
    keyBoard.style.backgroundColor="white";
    keyBoard.style.border="3px solid black";
    display.style.backgroundColor="white";
    display.style.border="3px solid black";
    display.style.color="black";
    fnButtons.forEach(fnButtons  => {
        fnButtons.style.backgroundColor="#000000CC";
        fnButtons.style.color="white";  
    });
    topText.forEach(topText => {
        topText.style.color="white";
    });
    
 
}

function setDarkTheme(){

    
}





//           Event listeners for all the keys

// Numpad
KN1.addEventListener('click',  function(){
    assignValue(1);
});
KN2.addEventListener('click',  function(){
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

//              Operations
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
resetKey.addEventListener('click', function(){
    resetOperations();
});

checkbox.addEventListener('change', function(){
    checkboxOperation();
});


