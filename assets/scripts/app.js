const defaultResult = 0;

let currentResult = defaultResult;

function getUserInput(){
    return parseInt(userInput.value)
}

function getUserInputTwo() {
    return parseInt(userInputTwo.value)
}

function createAndLog(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc}${operator}${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber = getUserInput();
    const enteredNumberTwo = getUserInputTwo();
    
    currentResult = enteredNumber + enteredNumberTwo;
    createAndLog('+' , enteredNumberTwo , enteredNumber);
    
}

function substract() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    
    currentResult = currentResult - enteredNumber;
    createAndLog('-' , initialResult , enteredNumber);
}

function multiply(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndLog('*' , initialResult , enteredNumber);
}

function divide(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndLog('/' , initialResult , enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

