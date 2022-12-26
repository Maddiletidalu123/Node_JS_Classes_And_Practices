// ES6 Module Default import
import add_1 from "./calculator.mjs";
console.log(add_1(10, 20));

// ES6 Module Named Import
import { add_2, sub_1 } from "./calculator.mjs";
console.log(add_2(20, 5));
console.log(sub_1(20, 10));
