const numBtn = document.querySelectorAll('.btn-num');
const opBtn = document.querySelectorAll('.btn-op');
const delBtn = document.querySelector('#btn-del');
const clrBtn = document.querySelector('#btn-clr');
const eqlBtn = document.querySelector('#btn-eql')
const display = document.querySelector('.display');


let operand1 = "";
let operand2 = ""; 
let operation = "";

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
        display.textContent = operand1;
    }
    else{
        operand2 += num;
        display.textContent = operand2;
    }
}

function setOp(op){
    if(op != "="){
        operation = op;    
    }
    
}

function clear(){
    operand1 = "";
    operand2 = "";
    operation = "";
    display.textContent = "0";
}

function equals(){
    if(operation == "÷" && operand2 == "0"){
        display.textContent = "LOL"
        return;
    }
    let result = operate(operand1, operand2, operation)
    console.log(result)
    display.textContent = result;
}

numBtn.forEach((button) => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent);
    })
})

opBtn.forEach((button) => {
    button.addEventListener('click', () => {
        setOp(button.textContent);
    })
})

clrBtn.addEventListener('click', () => {
    clear();
})

eqlBtn.addEventListener('click', () => {
    equals();
})