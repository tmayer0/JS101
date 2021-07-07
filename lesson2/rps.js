const readline = require('readline-sync');
VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}
while (true) {
  prompt(`choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`you chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'paper' && computerChoice === 'rock')) {
    prompt("you win!")
  } else if ((choice === 'scissors' && computerChoice === 'rock') ||
      (choice === 'paper' && computerChoice === 'scissors') ||
      (choice === 'rock' && computerChoice === 'paper')) {
    prompt("computer wins!") 
  } else {
    prompt("it's a tie!");
  }
    prompt("would you like to play again? (y/n)");
    let answer = readline.question().toLowerCase();

    while (answer[0] !== 'y' && answer[0] !== 'n') {
      prompt("please enter 'y' or 'n'");
      let answer = readline.question().toLowerCase();
    }

    if (answer[0] !== 'y') break;
}