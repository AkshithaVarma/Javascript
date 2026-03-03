//while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

//break statement
let j = 0;
while (j < 10) {
    if (j === 5) {
        break; // exit the loop when j is 5
    }
    console.log(j);
    j++;
}

//break statement but incrementing the variable before the break
let k = 0;
while (k < 10) {
    k++;
    if (k === 5) {

        break; // exit the loop when k is 5
    }
    console.log(k);
}

//continue statement
let l = 0;
while (l < 10) {
    l++;
    if (l % 2 === 0) {
        continue; // skip the rest of the loop when l is even
    }
    console.log(l); // only odd numbers will be printed
}