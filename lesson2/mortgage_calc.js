const readline = require('readline-sync');

const prompt = msg => console.log(`=> ${msg}`);

const invalidNumber = (num) => num.trimStart() === '' || Number.isNaN(Number(num)) || Number(num) < 0;

//ask for loan amount, APR, loan duration
// calculate monthly interest rate
// calculate loan duration in months
// return monthly payment amount

prompt('welcome to your mortgage calculator');

prompt('enter your loan amount');
let loanAmount = readline.question(); 

while (invalidNumber(loanAmount)) {
  prompt('invalid number');
  loanAmount = readline.question();
}

prompt('enter your interest rate');
let interestRate = readline.question();

while (invalidNumber(interestRate)) {
  prompt('invalid number');
  interestRate = readline.question();
}

prompt('enter your loan duration in years');
let loanDuration = readline.question();

while (invalidNumber(loanDuration)) {
  prompt('invalid number');
  loanDuration = readline.question();
}

prompt('thanks! now calculating...');

let annualInterest = Number(interestRate) / 100;
let monthlyInterest = annualInterest / 12;
let months = Number(loanDuration) * 12;

let monthlyPayment = Number(loanAmount) * (monthlyInterest /
                                          (1 - Math.pow((1 + monthlyInterest), (-Number(months)))));

prompt(`your monthly payment amount is $${monthlyPayment.toFixed(2)}`);