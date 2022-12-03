function add(number1, number2){
    return parseInt(number1) + parseInt(number2);
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
        case "+":
            return add(number1,number2);
        case "-":
            return substract(number1,number2);
        case "*":
            return multiply(number1,number2);
        case "/":
            return divide(number1,number2);
    }
}
let clickedValue = 0;
let display = document.getElementById("display");
let toCalculate = [];
document.getElementById("0").addEventListener("click",() => {numberPushed("0")});
document.getElementById("1").addEventListener("click",() => {numberPushed("1")});
document.getElementById("2").addEventListener("click",() => {numberPushed("2")});
document.getElementById("3").addEventListener("click",() => {numberPushed("3")});
document.getElementById("4").addEventListener("click",() => {numberPushed("4")});
document.getElementById("5").addEventListener("click",() => {numberPushed("5")});
document.getElementById("6").addEventListener("click",() => {numberPushed("6")});
document.getElementById("7").addEventListener("click",() => {numberPushed("7")});
document.getElementById("8").addEventListener("click",() => {numberPushed("8")});
document.getElementById("9").addEventListener("click",() => {numberPushed("9")});

document.getElementById("add").addEventListener("click",() => operatorPushed("+"));
document.getElementById("substract").addEventListener("click",() => operatorPushed("-"));
document.getElementById("multiply").addEventListener("click",() => operatorPushed("*"));
document.getElementById("divide").addEventListener("click",() => operatorPushed("/"));
document.getElementById("clear").addEventListener("click",() => clear());
document.getElementById("equal").addEventListener("click",() => equalPushed());

function clear(){
    for(toPop in toCalculate){
        toCalculate.pop()
    }
    displayToCalculate();
}

function displayToCalculate(){
    display.textContent = toCalculate.join(" ");
}

function numberPushed(number){
    clickedValue = number;
    if (toCalculate[2]){
        toCalculate[2] += clickedValue;
    } else if (toCalculate[1]){
        toCalculate.push(clickedValue);
    } else if(toCalculate[0]){
        toCalculate[0] += clickedValue;
    } else{
        toCalculate.push(clickedValue);
    }
    displayToCalculate();
}

function operatorPushed(operatorClicked){
    if (toCalculate[2]) {
        calculate();
        toCalculate.push(operatorClicked); 
    } else if (toCalculate[1]){
        toCalculate[1] = operatorClicked;
    } else {
        toCalculate.push(operatorClicked);
    }
    displayToCalculate();
}
function calculate() {
    if (toCalculate[2]=="0" && toCalculate[1]=="/"){
        alert("You want to break my calculator? You should know you cant divide by 0!");
    } else {
        let number2 = toCalculate.pop();
        let operator = toCalculate.pop();
        let number1 = toCalculate.pop();
        result = operate(number1,operator,number2);
        toCalculate.push(result);
    }
}

function equalPushed() {
    if (toCalculate[2]) {
        calculate();
    } else if (toCalculate[1]){
        toCalculate[2] = toCalculate[0];
        calculate();
    }
    displayToCalculate();
}
