// // means comment and /any string/ means regular expression literal

let reg = /arnab/; // this is regular expression literal in js means this is a regular expression  which we will match in a string. g means a global flag which means see the whole string while searching and return all possible matches.
// if g not used then only the first match will get returned
// reg = /arnab/g

console.log(reg);
// console.log(typeof reg); // object


// -------------- .source -----------------------------------------
console.log(reg.source); // returns a copy of string which is present inside the regular expression literal. here arnab.
// console.log( typeof reg.source); // type is string



let str = "this is a reg ex tut learnt by arnab and also arnab"
//------------Functions to match expression-----------------


//1) exec() -> this function will return a an array for match with full info or null for no match

// we have used g-->global flag and thus we are able to to get all matches of regular expression by running the exec() several time. 2times arnab present so 2times array returned and atlast null is getting returned.

let result;

result = reg.exec(str)
console.log(result)

result = reg.exec(str)
console.log(result)

result = reg.exec(str)
console.log(result) // null as 2 times arnab present

// ----------------------------------------------------------------------

//2) test() -> returns true if regular expression is not null in the string(means present) .If null then false .
result = reg.test(str)
console.log(result)//true

console.log(reg.test("fdf"))//false


//----------------------------------------------------------------------
// 3)match() = returns an array of result or null. g flag present in regular expression to get multiple result. If i present or not present then also a array of single match is going to get returned

// result = reg.match(str) //---wrong 👀
// console.log(result) // -- wrong 👀

// here we will use str -->🤷‍♀️--->right
result = str.match(reg)
console.log(result)


//-----------------------------------------------------------------------
//4) search() -> returns index of first match else -1 if not found
// here we will use str -->🤷‍♀️
console.log(str.search(reg))

//-----------------------------------------------------------------------
//5) replace() -> return a new replaced string with all replacements  --> if global flag is used. otherwise only the first match will get replaced.
// here we will use str -->🤷‍♀️
console.log(str.replace(reg,"arnab is gr8"))


//-----------------------------------------------------------------------
// 6)split():- 
result = str.split(reg)
console.log(result)