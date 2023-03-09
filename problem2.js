/*
2.You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method. */

// answer using array1.filter()
const numbers = [33, 50, 79, 78, 90, 101, 30];
const newNumber = numbers.filter((number) => number % 10 == 0);
console.log(newNumber);
