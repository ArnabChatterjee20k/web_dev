// In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.

// Specifically, an iterator is any object which implements the Iterator protocol by having a next() method that returns an object with two properties:

// value
// The next value in the iteration sequence.

// done
// This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value.


// iterator using iterator protocol
function arr_iterator(val) {
    let nxt_index = 0;
    // we will return an object
    return {
        next: function() {
            if (nxt_index < val.length) {
                // we will return below object
                return {
                    value: val[nxt_index++],
                    done: false
                }
            } else {
                // we will return bekiw object with only done
                return { done: true }
            }
        }
    }
}

// using the iterator
let arr = ["a", "b", "c", "d", "e"];
const letter = arr_iterator(arr);
// each time next will return the next value
console.log(letter.next())
console.log(letter.next())
console.log(letter.next().value)
console.log(letter.next().value)
console.log(letter.next().value)
console.log(letter.next().done)