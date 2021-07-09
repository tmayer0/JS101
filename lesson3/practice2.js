//question 1
let advice = "Few things in life are as important as house training your pet dinosaur.";
advice.replace('important', 'urgent');

//question 2
let numbers = [1, 2, 3, 4, 5];
let reversedArray = numbers.slice().reverse();

let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);

//question 3
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

numbers.includes(number1);
numbers.includes(number2);

//question 4
let famousWords = "seven years ago...";
let newFamousWords = `Four score and ${famousWords}`;
"Four score and ".concat(famousWords);

//question 5
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);

//question 6
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

flintstones = [].concat(...flintstones);

//question 7
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();

//question 8
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

Array.isArray(numbers);
Array.isArray(table);

//question 9
let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);
title.padStart(padding + title.length);

//question 10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;
