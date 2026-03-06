const numbers =[17,3,202,12,45,30,60,90,120,150,180,210,240,270,300,330,3600]
//map method creates a new array by applying a provided function to each element of the original array. It does not modify the original array but returns a new array with the results of the function applied to each element.
const result = numbers.map((number)=>number>20)
console.log(result)

//some method checks if at least one element in the array satisfies the condition provided by the callback function. It returns true if at least one element meets the condition, and false otherwise.
const someResult = numbers.some((number)=>number>1000)
console.log(someResult)

//every method checks if all elements in the array satisfy the condition provided by the callback function. It returns true if all elements meet the condition, and false otherwise.
const everyResult = numbers.every((number)=>number>10)
console.log(everyResult)


//subjects score of a student

const subjectScore = [50, 45, 90, 30];
// const result = subjectScore.every((score) => score > 40);
const result1 = subjectScore.some((score) => score > 40);
if (result1) console.log("Pass");
else console.log("Fail");
