//arrow function
const add = (a, b) => {
    return a + b; // returning the sum of a and b
}
console.log(add(5, 3)); // calling the arrow function and printing the result, which is 8


//hoisting in functions
console.log(greet()); // calling the function before its declaration, which works due to hoisting
function greet(){
    return "Hello, World!";
}

//arrow function
const f1=(a,b)=>{
    return a+b; // returning the sum of a and b
}
console.log(f1(5, 3)); // calling the arrow function and printing the result, which is 8