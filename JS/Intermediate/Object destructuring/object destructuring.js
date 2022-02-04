// before using rest(...) make sure in previous line semicolon is present otherwise error will come
let a, b, c, d;

// arrays destructuring

[a, b, d] = [34, 564]; // a and b will assigned 34 and 564 but d simce 3rd value not present and thus d will be undefined
console.log(a, b, d); // give semicolon otherwise it will give error in next line as we are using destructurin

// rest operator
[a, b, ...d] = [10, 20, 30, 40, 50];
console.log(d); // here d will be an array from 3rd value to last. a and b will be 10 and 20



// object(keys must be present)
({ a, b, c } = { a: 20, b: 345, g: 345, d: 45, e: 34 }); //a and b will assigned to the values that keys a and b are having. 
console.log(a, b, c);

// rest operator
({ a, b, c, ...d } = { a: 20, b: 345, g: 345, d: 45, e: 34 });
console.log(a, b, c, d); // d will store rest of the key value pair.


const num = [1, 2, 3, 4, 5, 6, 7, 8];
[a, b, c] = num;
console.log(a, b, c)


const obj1 = {
    model: "acer",
    age: "12",
    start: function() {
        console.log("Its a func start")
    }
}

const { model, age, start, data } = obj1
console.log(model, age, start, data)
start()


// another way using aliasing
const user = {
    id: 339,
    name: 'Fred',
    age: 42
};
const { name: callSign } = user; // value of name will be assigned to name
console.log(callSign); //prints: Fred