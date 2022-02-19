// it will not work in node use browser js engine

// short circuiting - pointer will look for false value if it finds the false value. If && is used then then and their only where falsy or undefined or null is present. If falsy value is not found then the whole expression gets traversed by the pointer and stops at the end.
// In || if first value is true then pointer stops their but false then it go forward and where it finds the true value it stops their.
// So && stops if false is encounter. || stops if true is encounter and ?? stops if null or underfined is encountered
// logical assignment

// &&
let a = 10;
a &&= 20; // if a is true then assign it to 20
console.log(a)

a = 0
a &&= 10; // a is 0 or false so it will not get assigned to 10
console.log(a)

// ||
let b = 10;
b ||= 9; // b will be 9 since b is already a true value that is 10.
// it will work when b becomes false value like 0 
console.log(b)

// ?? - for null and undefined
let c = null;
c ??= 10;