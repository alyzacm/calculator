const numBtn = document.querySelectorAll('.btn-num');
const opBtn = document.querySelectorAll('.btn-op');
const delBtn = document.querySelector('#btn-del');
const clrBtn = document.querySelector('#btn-clr');
const eqlBtn = document.querySelector('#btn-eql');
const display = document.querySelector('.display');


let operand1 = "";
let operand2 = ""; 
let operation = "";
let output = "";
let resetOutput = false;

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
    let a = parseFloat(num1);
    let b = parseFloat(num2);

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
        
    }
}

function appendNumber(num){
    if(resetOutput){
        clear();
        operand1 = num;
        output = operand1;
        return;
    }
    let isDec = false;
    if(num == "."){
        isDec = includesDecimal();
    }
    if(!isDec && operation == ""){
        operand1 += num;
        output = operand1;
    }
    else if(!isDec && operation != ""){
        operand2 += num;
        output = operand2;
    }
}

function includesDecimal(){
    if(output.includes('.')){
        return true;
    }
    else{
        return false
    }
}

function setOp(op){
    if(operation == ""){
        operation = op;    
    }
    else if(operation != ""){
        equals();
        displayOutput();
        operand1 = output.toString();
        operand2 = "";
        operation = op;
    }    
}

function clear(){
    operand1 = "";
    operand2 = "";
    operation = "";
    output = "0";
    resetOutput = false;
}

function displayOutput(){
    display.textContent = output;
}

function equals(){
    resetOutput = true;
    if(operation == "÷" && operand2 == "0"){
        output = "You can't do that..."
        return;
    }
    else if(operand2 == ""){
        operand2 = operand1;
    }

    let result = operate(operand1, operand2, operation);
    operand1 = result;
    output = result;
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
    equals();
    displayOutput();
})