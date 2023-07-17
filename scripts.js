let expression = '';

function clearDisplay() {
  document.getElementById('result').value = '';
  expression = '';
}

function deleteDigit() {
  const currentExpression = document.getElementById('result').value;
  document.getElementById('result').value = currentExpression.slice(0, -1);
  expression = currentExpression.slice(0, -1);
}

function appendNumber(num) {
  expression += num;
  document.getElementById('result').value = expression;
}

function appendOperator(operator) {
  expression += operator;
  document.getElementById('result').value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('result').value = result;
    expression = result;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function calculateSquareRoot() {
  const number = parseFloat(expression);
  if (number >= 0) {
    const result = Math.sqrt(number);
    document.getElementById('result').value = result;
    expression = result;
  } else {
    document.getElementById('result').value = 'Error';
  }
}

function calculateExponent() {
  const parts = expression.split('^');
  if (parts.length === 2) {
    const base = parseFloat(parts[0]);
    const exponent = parseFloat(parts[1]);
    const result = Math.pow(base, exponent);
    document.getElementById('result').value = result;
    expression = result;
  } else {
    document.getElementById('result').value = 'Error';
  }
}

function calculateSin() {
  const number = parseFloat(expression);
  const result = Math.sin(number);
  document.getElementById('result').value = result;
  expression = result;
}

function calculateCos() {
  const number = parseFloat(expression);
  const result = Math.cos(number);
  document.getElementById('result').value = result;
  expression = result;
}

function calculateTan() {
  const number = parseFloat(expression);
  const result = Math.tan(number);
  document.getElementById('result').value = result;
  expression = result;
}

function calculateLog() {
  const number = parseFloat(expression);
  if (number > 0) {
    const result = Math.log10(number);
    document.getElementById('result').value = result;
    expression = result;
  } else {
    document.getElementById('result').value = 'Error';
  }
}
