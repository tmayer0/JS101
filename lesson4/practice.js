//1
[1, 2, 3].filter(num => 'hi');
[1, 2, 3]

//2
[1, 2, 3].map(num => {
  num * num;
});
[undefined, undefined, undefined]

//3
[1, 2, 3].map(num => num * num);
[1, 4, 9]
//there is a return value because there are no braces surrounding the function

//4
['ant', 'bear', 'caterpillar'].pop().length;
11

//5
[1, 2, 3].every(num => {
  return num = num * 2;
});
//returns [1, 4, 6], true

//6
let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);
//returns [1, 1, 1, 1, 1, 1], destructive

//7
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});
//returns bear

//8
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flintstonesObj = {};

flintstones.forEach((name, index) => {
  flintstonesObj[name] = index;
});

flintstonesObj; // { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

//9
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let totalAges = 0;
Object.values(ages).forEach(age => totalAges += age);
totalAges; // => 6174

//10
let agesArr = Object.values(ages);
Math.min(...agesArr); // => 10

//11
let statement = "The Flintstones Rock";

let countObj = {};

