// function in normal way
const arnab = function(){
    console.log("normally")
}

function a(){
    console.log("normally another way")
}

// arrow functions
const arrow = ()=>{
    console.log("arrow")
}

// if we want to use return then we have to use curly braces but if we dont want to use return we can do that also
const arrow_func_with_brace_and_return = ()=> {return "arrow func with return and braces"}

const new_arrow = () => "arrow more better in one line"


// calling functions
arnab()
a()
arrow()
console.log(arrow_func_with_brace_and_return())
console.log(new_arrow())
