let display = document.getElementById('display');
let historyList = document.getElementById('historyList');
let expression = '';

function appendNumber(number) {
  expression += number;
  display.value = expression;
}

function appendOperator(operator) {
  expression += operator;
  display.value = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = '';
    addToHistory(result);
  } catch (error) {
    display.value = 'Error';
  }
}

function clearDisplay() {
    = '';
  display.value = '';
}

function addToHistory(result) {
  let li = document.createElement('li');
  li.textContent = expression + ' = ' + result;
  historyList.appendChild(li);
}
