let a=10
console.log(a)
var b=50
console.log(b)
const c=100
console.log(c)

//reassigning the value of a variable
a=20
console.log(a)  
b=60
console.log(b)
//c=200  //error because we cannot reassign the value of a constant variable

//redeclaring a variable
//let a=30  //error because we cannot redeclare a variable declared with let keyword
var b=70  //no error because we can redeclare a variable declared with var
console.log(b)
//const c=300  //error because we cannot redeclare a constant variable

//Hoisting for var
console.log(x)  //undefined because of hoisting
var x=40
console.log(x)  //40

//Hoisting for let and const
//console.log(y)  //error because of temporal dead zone
let y=50
console.log(y)  //50

const z=60
//console.log(z)  //error because of temporal dead zone


