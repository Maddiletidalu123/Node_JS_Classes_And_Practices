const greetings = (name) => {
  console.log(`Hello ${name}`);
};

greetings("Dalu Maddileti");
greetings("Dalu Philip");

// const add = require("./calculator.js");
// console.log(add(10, 20));
// console.log(sub(20, 10));

const calculator = require("./calculator.js");
const { add, sub } = calculator;
console.log(add(10, 20));
console.log(sub(30, 20));
