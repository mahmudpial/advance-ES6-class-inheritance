/* 
1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number. 
*/

// ANSWER  USING FOR LOOP
const Numbers = [1, 3, 5, 7, 9];
const outPut = [];
for (Number of Numbers) {
  const num = Number + 1;
  outPut.push(num);
}
console.log(outPut);

// ANSWER USING ARRAY MAP

const oddNumber = [9, 19, 23, 25, 27];
const evenNumber = oddNumber.map((number) => number + 1);
console.log(evenNumber);
