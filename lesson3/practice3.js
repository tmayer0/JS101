//question 1
let numbers = [1, 2, 3, 4];

numbers.length = 0;
numbers.splice(0, numbers.length);
while (numbers.length) {
  numbers.pop();
}
 
//question 2
console.log([1, 2, 3] + [4, 5]); // 1,2,34,5

//question 3
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1); //hello there

//question 4
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1); //[{first: 42}]

//question 5
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorValid1(color) {
  return (color === "blue" || color === "green");
}

const isColorValid2 = color => ["blue", "green"].includes(color);