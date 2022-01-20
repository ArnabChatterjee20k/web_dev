// loops-for 
// for…in 
// forEach
// while 
// do…while 


// General Loops: for, while, do-while
// extra : foreach , for in , for ofss

let a = 34;
a += 1;
a++;
console.log(a);

// for loop
for (let i = 0; i < 100; i++) {
    console.log(i);
}

let arr = [2, 5, 6, 4, 2, 3];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}


// while loop
let j = 110;
while (j < 10) {
    console.log(j + 1);
    j += 1;
}

// do while loop
let k = 0;
do {
    if (k === 5) {
        k += 1;
        continue;
    }
    console.log(k + 1);
    k += 1;
} while (k < 10);
// in do while if condtion does satisfies still loop will run


// foreach loop
arr.forEach(function(element, index, array) { // arr is an array defined priviously
    console.log(element, index, array);
});


// for in loop
let obj = {
    name: "Rohan Das",
    age: 78,
    type: "Dangerous Programmer",
    os: "Ubuntu"
}
for (let key in obj) {
    console.log(`The ${key} of object is ${obj[key]}`)
}

console.log('done');


// for of loop
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
    console.log(element);
}