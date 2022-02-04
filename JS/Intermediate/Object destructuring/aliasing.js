// for aliasing just use : after the filtered key and give the value.
const obj = {
    data: {
        items: {
            name: "shoes",
            size: 12,
        },
    },
    status: 200
}

const { data: data_to_be_printed } = obj; // aliasing data to data_to_be_printed
console.log(data_to_be_printed);
// console.log(data) // error due to aliasing



// aliasing in multilevel
const { data: { items: data_items } } = obj;
console.log(data_items)


// aliasing in much more deeper
const obj1 = {
    data: {
        items: {
            name: ["shoes", "shirt"],
            size: 12,
        },
    },
    status: 200
}

const { data: { items: { name: pdt_name } } } = obj1;
console.log(pdt_name)