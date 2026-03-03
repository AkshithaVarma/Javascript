//Data Types
//Primitives: String, Number, Boolean, Null, Undefined, Symbol
// let name = "John"; //String
// let age = 30;
// let isStudent = true; //Boolean
// let address = null;
// let phoneNumber; //Undefined
// let id = Symbol("id"); //Symbol


//Non-primitives: Object, Array, Function
let person = {
    name: "Akshitha",
    age: 21,
    isStudent: false
}; //Object
console.log(person)

const s1=person
console.log(s1)

person.age=22
console.log(s1)

s1.name="Akshitha Varma";
console.log(person)
console.log(s1)

//as both have same object reference, changes made to one will reflect in the other.
//  This is because both s1 and person are referencing the same object in memory.

//Same feature is observed in arrays and functions as they are also non-primitive data types.