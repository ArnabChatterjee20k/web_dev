const obj = {
    data: {
        items: {
            name: ["shoes", "shirt"],
            size: 12,
        },
    },
    status: 200
};

// long process
// const { data: { items: { name } } } = obj;
// [i1, i2] = name;
// console.log(i1, i2)


// short process
const { data: { items: { name: [i1, i2] } } } = obj;
console.log(i1, i2)