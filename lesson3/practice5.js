//question 1
function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first()); //hi there
console.log(second()); //undefined

//question 2
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object); // => {first: [1, 2]}

//question 3
/* A) one is "one"
      two is "two"
      three is "three"
  B)  one is "one"
      two is "two"
      three is "three"
  C)  one is "two"
      two is "three"
      three is "one"
*/

//question 4
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}
