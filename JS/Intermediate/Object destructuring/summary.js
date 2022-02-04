// using var as it is a summary and we can initialise same variable multiple times with var but not with let and const
const obj = {
    data: {
        items: {
            name: "shoes",
            size: 12,
        },
    },
    status: 200
}

// single level (data and status are getting considered as variable)
// var { data, status } = obj;
// console.log(data, status);
// console.log({ data, status })



// Going deep (Here status and item is acting as a variable . data is no more considered as a variable. Data itself got destructured and item is now the variable)
// var { data: { items }, status } = obj
// console.log(items, status);


// // going much more depper(here name and size and status are acting as variable)
// var { data: { items: { name, size } }, status } = obj
// console.log(name, size)