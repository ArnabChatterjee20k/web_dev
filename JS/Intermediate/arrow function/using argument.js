// using single argument(name is the argument )
const greet = (name)=> "hello "+name
console.log(greet("arnab"))


const greet_without_parantheses = name=> "hello "+name // if single argument present we can even not use parantheses
console.log(greet_without_parantheses("arnab"))


// but if 2 present we have to use it
const greet_2_args = (greeting,name)=> greeting + name 
console.log(greet_2_args("hlw","aa"))