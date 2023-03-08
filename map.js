const numbers = [2, 4, 6, 8, 10, 12];
const outPut = [];
for (const number of numbers) {
  const divided = number / 2;
  outPut.push(divided);
}
// console.log(outPut);

// ........................................................................

function getDoubble(number) {
  const outPut = [];
  for (const number of numbers) {
    const double = doubleNew(number);
    // here a doubleNew() function is call function which is execute another place like a mini operation function
    outPut.push(double);
  }
  return outPut;
}

// simple operational function which i use this function in another function poperty and as like a simple operation
function DoubbleIt(num) {
  return num * 2;
}
/* simple array function which i use this function in another function poperty and as like a simple operation */

const doubleNew = (num) => num * 2;

const result = getDoubble(numbers);

console.log(result);

// ..............................................................................................
/* 
purpose :
  1.get an array.
  2.for every elements of the array do somethings.
  3.store the result in a array.
  4.return the array restult.


*/
const makeDouble = numbers.map(doubleNew);
const makeDoubleDirect = numbers.map((num) => num * 2);
const makeDoubleDirect2 = numbers.map((x) => x * 2);
const makeDouble2 = [2, 4, 6, 8, 10, 12].map((x) => x * 2);

// console.log(makeDouble);
console.log(makeDouble2);
