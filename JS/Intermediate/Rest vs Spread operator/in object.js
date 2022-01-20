let std = {
    name: "arnab",
    age: 22,
    hobby: ["gaming", "cricket"]
}

const age = std.age // normal way
const { hobby } = std // es6 object destructuring
console.log(hobby)

//rest
const { name, ...rest } = std;
console.log(rest) // rest supply us a combination


// spread
let new_std = {
    ...std
}
console.log(new_std)

// using spread change feature of a existing object
let change_std = {
    ...std,
    age: 23
}
console.log(change_std)