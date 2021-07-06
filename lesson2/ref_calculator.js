const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt("welcome to the calculator");

prompt("what is the first number?");
let number1 = readline.question();

while(invalidNumber(number1)) {
  prompt("invalid number")
  number1 = readline.question();
}

prompt("what is the second number?");
let number2 = readline.question();

while(invalidNumber(number2)) {
  prompt("invalid number")
  number2 = readline.question();
}

prompt("what operation would you like to perform?\n1) add 2) subtract 3) multiply 4) divide");
let operation = readline.question();
while (['1', '2', '3', '4'].includes(operation)) {
  prompt("must choose 1, 2, 3, or 4")
  operation = readline.question();
}

let output;

switch(operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

prompt(`the result is ${output}`);