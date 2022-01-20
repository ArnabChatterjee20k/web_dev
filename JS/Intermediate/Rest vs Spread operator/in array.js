// In es5 argument was launched.
function add_es5(a, b, c) {
    console.log(arguments) //In es5 argument is released.this will give us an object of all the arguments passed
    return a + b + c
}
add_es5(1, 2, 3)


// rest which is introduced in es6. Here all rest terms are combined together and stored in a variable.
function add_rest(a, b, c, ...other) {
    console.log(other)
    return a + b + c
}

add_rest(1, 2, 3, 4, 5)


// spread. It is opposite of rest. Here we spread the combination to variables.
let names = ["q", "v", "z", "a"]

function get_names(n1, n2, n3, n4) {
    console.log(n1, n2, n3, n4)
}

// now we can individually pass the elements of names to get_names but that will be lengthy.
// Better use spread. Here the array will be destructured.
get_names(names[0], names[1], names[2]) //lengthy also if names not passed error will come.
get_names(...names) //best. Here automatically values will be spread into number of varibles available