// Iterators store the data in the memory(like we were storing array) but generator generate value on the fly.

function* number_Gen() {
    let i = 0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;

    while (true) {
        yield i++
    }
}

const gen = number_Gen(); // it's basically object
console.log(gen)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next().value)