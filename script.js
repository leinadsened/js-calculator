function add(number1, number2){
    return number1 + number2;
}

function substract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2){
    return number1 % number2;
}

function operate(operator, number1, number2){
    switch(operator) {
        case add:
            return add(number1,number2);
        case substract:
            return substract(number1,number2);
        case multiply:
            return multiply(number1,number2);
        case divide:
            return divide(number1,number2);
    }
    
}