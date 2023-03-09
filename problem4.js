/*
You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method. 
*/

// answer using for loop
// let nums = [1, 9, 17, 22];
// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//   sum = sum + nums[i];
// }
// return sum;

// console.log(sum);

// answer using array1.reduce
const numbers = [1, 9, 17, 22];

const initialValue = 0;
const sumWithInitial = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue + initialValue
);

console.log(sumWithInitial);
