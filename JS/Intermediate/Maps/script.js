// In Maps we can use any type of key or value.

const myMap = new Map();
// console.log(myMap);

const key1 = "my str",
    key2 = {},
    key3 = function() {};

// setting map values

myMap.set(key1, "a string");
myMap.set(key2, "blank object");
myMap.set(key3, "empty function");

// console.log(myMap)

// getting values from map
let value1 = myMap.get(key1)
    // console.log(value1)


// getting the size of the map
console.log(myMap.size)


// You can loop using for..of to get keys and values
for (let [key, val] of myMap) {
    // console.log(key, val)
}


// Getting only keys
for (let key of myMap.keys()) {
    // console.log(key)
}
// or 
for (let [key] of myMap) {
    // console.log(key)
}


// Getting only values
for (let key of myMap.values()) {
    // console.log(key)
}
// or 
for (let [key, value] of myMap) {
    // console.log(value)
}


// You can iterate using foreach
myMap.forEach((value, key) => {
    // console.log("Key is ", key);
    // console.log("value is ", value);
})



// converting map to an array
let myArray = Array.from(myMap) // or Array(myMap)
    // console.log(myArray)

let myValue = Array.from(myMap.values())
let myKey = Array.from(myMap.keys())
    // console.log(myKey, myValue)

// PArsing a Map
let parsed = JSON.stringify(Array.from(myMap))
console.log(parsed)
console.log(JSON.parse(parsed))
let new_Map = new Map(JSON.parse(parsed))
console.log(new_Map)