const prompt = require("prompt-sync")();

function getNumber(numberString) {
  while (true) {
    const number = parseFloat(prompt("Enter number " + numberString + ": "));
    if (isNaN(number)) {
      console.log("input invalid");
    } else {
      return number;
    }
  }
}

const number1 = getNumber("1");

const operator = prompt("sign:");

const number2 = getNumber("2");

let result;
let valid = true;
switch (operator) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "/":
    if (number2 === 0) {
      valid = false;
      console.log("zero division error");
    }
    result = number1 / number2;
    break;
  case "*":
  case "x":
    result = number1 * number2;
    break;
  case "**":
  case "^":
    result = number1 ** number2;
    break;

  default:
    console.log("input error");
    valid = false;
    break;
}
if (valid) console.log(number1, operator, number2, " = ", result);
