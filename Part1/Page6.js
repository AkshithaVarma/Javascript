//use strict mode to avoid common mistakes
//mandatory for varaibles declaration
// 'use strict';
// a=10;
// console.log(a) //ReferenceError: a is not defined because we have not declared the variable a using var, let or const keyword

// //for functions,duplicate parameter names are not allowed
// function sum(a, a) {
//     return a + a;
// }
// console.log(sum(2, 3)) //SyntaxError: Duplicate parameter name not allowed in this context because we have duplicate parameter names in the function sum

//octal literals are not allowed in strict mode
let num = 010; 
console.log(num)//SyntaxError: Octal literals are not allowed in strict mode because we have used an octal literal in the variable declaration

//deleting variables, functions or objects is not allowed in strict mode
var x = 10;
delete x; //SyntaxError: Delete of an unqualified identifier in strict mode because we are trying to delete a variable declared with var keyword