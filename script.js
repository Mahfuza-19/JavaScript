"use strict";
// For loop

// 1-misol

// let number,
//   sum = 0,
//   count = 0;
// for (count; number != 0; count++) {
//   number = +prompt("Son kiriting");
//   console.log(number);
//   sum += number;
// }
// console.log(sum / (count - 1));

////////////////Break and countinue////////////////
// 2-misol
// Break --> Break bu siklni qattiy to'xtatish
// for (let i = 1; i < 100; i++) {
//   if ((i % 2 == 0 && i % 6 != 0)  (i % 3 == 0 && i % 6 != 0)) console.log(i);
// }
let number = +prompt("Son keriting:");
let fact;

for (let i = 1; i < number; i++) {
  fact *= i - 1;
  console.log(fact);
}
