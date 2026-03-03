//functions
function greet(){
    console.log("Hello World");
}
greet(); // calling the function to execute the code inside it

//function with parameters
function greet(name){
    console.log(`Hello, ${name}!`);
}
greet("Akshitha"); // calling the function with an argument to replace the parameter

//function with return value
function add(a, b){
    return a + b; // returning the sum of a and b
}
let result = add(5, 3); // calling the function and storing the return value in a variable
console.log(result); // printing the result, which is 8 

//function with default parameters
function greet(name = "Guest"){
    console.log(`Hello, ${name}!`);
}
greet(); // calling the function without an argument, so it uses the default value "Guest"


//rest parameters
function sum(...numbers){
    console.log(numbers); // numbers is an array of all the arguments passed to the function
    return numbers.reduce((total, num) => total + num, 0); // summing all the numbers in the array
}

//iife (Immediately Invoked Function Expression)
(function(){
    console.log("This function runs immediately!");
})(); // the function is defined and immediately invoked with () at the end

