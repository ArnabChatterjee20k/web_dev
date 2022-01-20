// array
var arr=["hi","hlw","bye"]

// forEach is a method which takes parameter a function name and it will call the function everytime it loops through the aaray. It also sends some arguments to the function,these are values/elements , index and the array respectively
arr.forEach(func)
function func(elements , index ,array){
    console.log(elements , index ,array);
}

// we dont need to call these function explicitly.
//We can also use the function anonymously
arr.forEach(function func(elements , index ,array){
    console.log(elements , index ,array);
});