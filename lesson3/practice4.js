//question 1
for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + "The Flinstones Rock!");
}

//question 2
let munstersDescription = "The Munsters are creepy and spooky.";
munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");

//question 3
while (divisor > 0) {
  if (number % divisor === 0) {
    factors.push(number / divisor);
  }
  divisor -= 1;
}

//question 4
//the first method mutates buffer, while the second method does not

//question 5
console.log(0.3 + 0.6); //0.9
console.log(0.3 + 0.6 === 0.9); //true

//question 6
let nanArray = [NaN];

console.log(nanArray[0] === NaN); //false
console.log(Number.isNaN(nanArray[0]));

//question 7
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8); //34

//question 8
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}
messWithDemographics(munsters);
//passed by reference

//question 9
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
//paper

//question 10
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

bar(foo());
//"no"

