const defaultResult = 0;

let currentResult = defaultResult;

//get input from input field

function getUserInput(){
    return parseInt(userInput.value)
}

function getUserInputTwo() {
    return parseInt(userInputTwo.value)
}

//generates and write calculation logs

function createAndLog(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc}${operator}${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

//addition function
function add() {
    const enteredNumber = getUserInput();
    const enteredNumberTwo = getUserInputTwo();

    

    if( enteredNumber === 0 && enteredNumberTwo === 0) {
        currentCalculationOutput.textContent = "";
        currentResultOutput.textContent = 0;
        

    } else {
        currentResult = enteredNumber + enteredNumberTwo;
        createAndLog('+' , enteredNumber , enteredNumberTwo);
        
    } 

    
    
}

// substraction function

function substract() {
    const enteredNumber = getUserInput();
    const enteredNumberTwo = getUserInputTwo();
    
    if( enteredNumber === 0 && enteredNumberTwo === 0) {
        currentCalculationOutput.textContent = "";
        currentResultOutput.textContent = 0;
        

    } else {
        currentResult = enteredNumber - enteredNumberTwo;
        createAndLog('-' , enteredNumber , enteredNumberTwo);
        
    }
}

// multiplication function

function multiply(){
    const enteredNumber = getUserInput();
    const enteredNumberTwo = getUserInputTwo();
    
    if( enteredNumber === 0 && enteredNumberTwo === 0) {
        currentCalculationOutput.textContent = "";
        currentResultOutput.textContent = 0;
        

    } else {
        currentResult = enteredNumber * enteredNumberTwo;
        createAndLog('*' , enteredNumber , enteredNumberTwo);
        
    }
}

//division function

function divide(){
    const enteredNumber = getUserInput();
    const enteredNumberTwo = getUserInputTwo();
    
    if( enteredNumber === 0 && enteredNumberTwo === 0) {
        currentCalculationOutput.textContent = "";
        currentResultOutput.textContent = 0;
        

    } else {
        currentResult = enteredNumber / enteredNumberTwo;
        createAndLog('/' , enteredNumber , enteredNumberTwo);
        
    }
}


//function results

function equal(){
    resultDisplay.style.display = "block";
}

//function allclear

function allclear(){
    userInput.value = 0 ;
    userInputTwo.value = 0;
    currentCalculationOutput.textContent = "";
    currentResultOutput.textContent = 0;
    resultDisplay.style.display = "none";
    
}



equalTwo.addEventListener('click' , equal);
allClearBtn.addEventListener('click', allclear);
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

