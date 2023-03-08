const numbers = [2, 4, 8, 10, 12, 14];
const half = numbers.map((number) => number / 2);
const third = numbers.map((number) => number / 3);
// console.log(half);
// console.log(third);

const friends = ["pial", "mahmud", "hasan", "badol", "murgi"];
const firstLetter = friends.map((friend) => friend[0]);
// console.log(firstLetter);
const nameLenght = friends.map((friend) => friend.length);
// console.log(nameLenght);

const product = [
  { id: 1, name: "laptop", price: 45000 },
  { id: 1, name: "mobile", price: 5000 },
  { id: 1, name: "macBook", price: 145000 },
  { id: 1, name: "bike", price: 450000 },
];

const items = product.map((product) => product.name);
const price = product.map((p) => p.price);
console.log(price);
console.log(items);
