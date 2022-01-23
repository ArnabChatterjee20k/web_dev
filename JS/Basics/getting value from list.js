let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let number_to_be_printed = Math.floor(Math.random() * number.length)

console.log(number_to_be_printed)

// Math.random() always give value less than 1
// Multiplying with length of the array will make always give value less than length of the array.
// Here Math.random() * number.length will give value between 0 and 10 but 10 is exclusive. Means it will give value from 0 to 9.99999
// Making it floor will make it a greatest integer. If 9.99 comes then it will become 9.