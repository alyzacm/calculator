const numBtn = document.querySelectorAll('.btn-num');
const opBtn = document.querySelectorAll('.btn-op');
const delBtn = document.querySelector('#btn-del');
const clrBtn = document.querySelector('#btn-clr');
const eqlBtn = document.querySelector('#btn-eql')
const display = document.querySelector('.display');


let operand1 = "";
let operand2 = ""; 
let operation = "";
let output = "";

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(num1, num2, op){
    let a = parseInt(num1);
    let b = parseInt(num2);
    console.log(op);
    console.log(a + " " + b);
    if(op === "+"){
        return add(a, b);
    }
    else if(op === "-"){
        return subtract(a, b);
    }
    else if(op === "x"){
        return multiply(a, b);
    }
    else if(op === "÷"){
        return divide(a, b);
    }
    else{
        return -1;
    }
}

function appendNumber(num){
    if(operation == ""){
        operand1 += num;
        output = operand1;
    }
    else{
        operand2 += num;
        output = operand2;
    }
}

function setOp(op){
    if(op != "=" && operation == ""){
        operation = op;    
        console.log("first: " + operand1 + " " + operation + " " + operand2);
        
    }
    else if(op != "=" && operation != ""){
        equals(false);
        displayOutput();
        operand1 = output.toString();
        operand2 = "";
        operation = op;
        console.log("second: " + operand1 + " " + operation + " " + operand2);
    }    
}

function clear(){
    operand1 = "";
    operand2 = "";
    operation = "";
    output = "0";
}

function displayOutput(){
    display.textContent = output;
}

function equals(isEqual){
    if(operation == "÷" && operand2 == "0"){
        output = "You can't do that..."
        return;
    }
    else if(operand2 == ""){
        operand2 = operand1;
    }

    let result = operate(operand1, operand2, operation)
    console.log("result: " + result);
    output = result;
    if(isEqual){
        operand1 = "";
        operand2 = "";
        operation = "";
    }
  
}

numBtn.forEach((button) => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent);
        displayOutput();
    })
})

opBtn.forEach((button) => {
    button.addEventListener('click', () => {
        setOp(button.textContent);
    })
})

clrBtn.addEventListener('click', () => {
    clear();
    displayOutput();
})

eqlBtn.addEventListener('click', () => {
    equals(true);
    displayOutput();
})