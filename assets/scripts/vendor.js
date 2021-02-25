const userInput = document.getElementById('input-number');
const userInputTwo = document.getElementById('input-two');


const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const allClearBtn = document.getElementById('all-clear');
const equalTwo = document.getElementById('equalto');
const resultDisplay = document.getElementById('results')
const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function validateNumber(evt){
  const pattern = /^[0-9]$/;

  return pattern.test(evt.key)
}

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
