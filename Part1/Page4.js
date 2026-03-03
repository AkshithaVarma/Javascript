//Operators
//Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b); 
console.log(a - b); 

//Comparison Operators
console.log(a > b); 
console.log(a < b);
//checks only the value and not the type
console.log(10=="10")
//checks both value and type
console.log(10==="10")

//assignment operators
let c = 20;
c += 10; // c = c + 10
console.log(c) //30

//logical operators
console.log(a>90 && b<10)//AND
console.log(a>90 || b<10)//OR
console.log(!(a>90))//NOT

//unary operators
let d = 5;
console.log(++d) //pre-increment: increments d by 1 and then returns the value of d
console.log(d++) //post-increment: returns the value of d and then increments d by 1
console.log(d) //7

//ternary operator
let age = 18;
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult) //Yes