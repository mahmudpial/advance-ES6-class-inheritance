/**
 * 
 * 1) Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.
 
*/

// answer using array.reduce
const people = [
  { name: "pial", age: 20 },
  { name: "tomal", age: 15 },
  { name: "pranto", age: 22 },
];
let sum = people.reduce((previous, current) => previous + current.age, 0);
console.log(sum);
