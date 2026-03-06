//settimeout method is used to execute a function after a specified number of milliseconds. It takes two parameters: the function to be executed and the time in milliseconds to wait before executing the function.
setTimeout(() => {
    console.log("This message will be displayed after 2 seconds");
}, 2000);

// setTimeout(()=>{},3000)
// console.log("Beginning")
// setTimeout(()=>{console.log("Hello World")},3000)
// console.log("Ending")
function f1() {
  console.log("Beginning");
}
function f2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hello World");
    //   resolve()
      reject("Something went wrong");
    }, 3000);
  });
}

function f3() {
  console.log("Ending");
}
async function main() {
  try {
    f1();
    await f2();
    f3();
  } catch (err) {
    console.log(err);
  }
}
main();

