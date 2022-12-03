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

function operate(number1, operator, number2){
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
let clickedValue = 0;
let display = document.getElementById("display");
let toCalculate = [];
document.getElementById("0").addEventListener("click",() => {numberPushed(0)});
document.getElementById("1").addEventListener("click",() => {numberPushed(1)});
document.getElementById("2").addEventListener("click",() => {numberPushed(2)});
document.getElementById("3").addEventListener("click",() => {numberPushed(3)});
document.getElementById("4").addEventListener("click",() => {numberPushed(4)});
document.getElementById("5").addEventListener("click",() => {numberPushed(5)});
document.getElementById("6").addEventListener("click",() => {numberPushed(6)});
document.getElementById("7").addEventListener("click",() => {numberPushed(7)});
document.getElementById("8").addEventListener("click",() => {numberPushed(8)});
document.getElementById("9").addEventListener("click",() => {numberPushed(9)});

document.getElementById("add").addEventListener("click",() => {clickedOperator = "+"; toCalculate.push(clickedOperator); display.textContent = toCalculate.join(" ");});
document.getElementById("substract").addEventListener("click",() => {clickedValue = 0; display.textContent = clickedValue;});
document.getElementById("multiply").addEventListener("click",() => {clickedValue = 0; display.textContent = clickedValue;});
document.getElementById("divide").addEventListener("click",() => {clickedValue = 0; display.textContent = clickedValue;});
document.getElementById("clear").addEventListener("click",() => {clickedValue = 0; display.textContent = clickedValue;});
document.getElementById("equal").addEventListener("click",() => {clickedValue = 0; display.textContent = clickedValue;});

function numberPushed(number){
    clickedValue = number;
    if (toCalculate[2]){
        toCalculate[3] = clickedValue;
    } else if (toCalculate[0]){
        toCalculate[0] = clickedValue;
    } else {
        toCalculate.push(clickedValue);
    }
    display.textContent = toCalculate.join(" ");
}

  