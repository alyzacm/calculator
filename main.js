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

function operate(a, b, op){
    if(op === "add"){
        return add(a, b);
    }
    else if(op === "subtract"){
        return subtract(a, b);
    }
    else if(op === "multiply"){
        return multiply(a, b);
    }
    else if(op === "divide"){
        return divide(a, b);
    }
    else{
        
    }
}