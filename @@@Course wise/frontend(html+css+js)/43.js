console.log("43.html Made using external js")

// all rules are like python function

//to do some work/actions which is repeated better to use functions.

function greet(name="js",salutaion="Gd evening"){
    //name and salutaion is parameters
    
    // here gd evening is the default value if nothing is passed gd eve will be taken

    let name1="js";//local scope
    console.log("hi "+name);
    console.log(salutaion+" "+name);

    return (name+salutaion+"is the returning value")//returning values so that the retun doesnot get undefined.
    // After return nothing will get executed written after return statement in a function 
}

// console.log(name1) // cannot get executed as it is local scope variable

//calling the function to execute it
greet("Arnab","Gd morning");//passing the parameters

greet("Arnab",salutaion="Gd morning");//passing the parameters

greet();

a=greet();
console.log(a);
console.log(greet());