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
let shouldReset = false;

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
    else if(op === "x" || op === "*"){
        return multiply(a, b);
    }
    else if(op === "÷" || op === "/"){
        return divide(a, b);
    }
}

function appendNumber(num){
    if(shouldReset){
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

//checks if an operation was previously entered and if it was evaluated yet
function setOperation(op){
    if(operation == ""){
        operation = op;    
    }
    else if(operation != ""){
        if(shouldReset){ //if previous operation performed was =, reset
            operand1 = output;
            operand2 = "";
            operation = op;
            shouldReset = false;
            return;
        }
        if(operand2 == ""){ //if 2nd operand hasn't been entered, update operation
            operation = op;
        }
        else{
            equals(true); //evaluate previous operation first, set results to first operand
            displayOutput();
            operand1 = output.toString();
            operand2 = "";
            operation = op;
        }
    }    
}

function clear(){
    operand1 = "";
    operand2 = "";
    operation = "";
    output = "0";
    shouldReset = false;
}

function displayOutput(){
    display.textContent = output;
}

//isChain is a boolean that indicates whether multiple calculations
//are being performed
//if true, output needs to be updated so set shouldReset flag to true
function equals(isChain){ 
    if((operation == "÷" || operation == "/") && operand2 == "0"){
        output = "You can't do that..."
        return;
    }
    else if(operand2 == ""){
        operand2 = operand1;
    }
    if(!isChain){
        shouldReset = true;    
    }

    let result = operate(operand1, operand2, operation);
    operand1 = result;
    output = result;
}

//allows user to undo if they click the wrong number
function deleteEntry(){
    if(shouldReset){
        return;
    }
    if(operand1 == output){
        operand1 = operand1.slice(0, -1);
        output = operand1;
    }
    else if(operand2 = output){
        operand2 = operand2.slice(0, -1);
        output = operand2;
    }
}

function keyboardInput(e){
    if((e.key >= 0 && e.key <= 9) || e.key === '.'){
        appendNumber(e.key);
        displayOutput();
    }
    else if(e.key === "+" || e.key === "-" || e.key === "*" || e.key === "x" || e.key === "/"){
        setOperation(e.key);
    }
    else if(e.key === "=" || e.key === "Enter"){
        equals(false);
        displayOutput();
    }
    else if(e.key === "Escape"){
        clear();
        displayOutput();
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
        setOperation(button.textContent);
    })
})

clrBtn.addEventListener('click', () => {
    clear();
    displayOutput();
})

eqlBtn.addEventListener('click', () => {
    equals(false);
    displayOutput();
})

delBtn.addEventListener('click', () => {
    deleteEntry();
    displayOutput();
})

document.addEventListener('keydown', keyboardInput);