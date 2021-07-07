//question 1
let numbers = [1, 2, 3];
numbers[6] = 5;
// does not raise an error
numbers[4];
// will return undefined

//question 2
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function exclamationPresent(str) {
  let lastCharacter = str.length - 1
  if (str[lastCharacter] === '!') {
    return true;
  }
}
// or use the endsWith method
str1.endsWith("!");
str2.endsWith("!");

//question 3
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
ages.hasOwnProperty("Spot");

//question 4
munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

//question 5
console.log(false == '0'); //true
console.log(false === '0'); //false

//question 6
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges);

//question 7
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

str1.includes("Dino");
str2.includes("Dino");

//question 8
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");

//question 9
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino", "Hoppy");

//question 10
advice.slice(0, advice.indexOf('house'));