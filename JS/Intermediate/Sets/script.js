let mySet = new Set();

// adding values
mySet.add("this")
mySet.add("values")
mySet.add("34")
console.log(mySet)

// new set using set constructor
mySet = new Set([1, 2, 3, 4, 5, 6])
console.log(mySet)

// size
console.log(mySet.size)
mySet.add("s")
console.log(mySet.size)

//has
console.log(mySet.has(2))
console.log(mySet.has(200))

// removing
mySet.delete(2)
console.log(mySet.has(2))


// iterating a set -->cant use for of
for (i of mySet) {
    console.log(i)
}

mySet.forEach((item) => {
    console.log(item)
})


//array
let arr = Array.from(mySet)
console.log(arr)


// json parsing
console.log(JSON.stringify(mySet)) //not work
let json = JSON.stringify(Array.from(mySet))
console.log(json) // if see typeof then it will be string
console.log(JSON.parse(json)) // typeof will be object