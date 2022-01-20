// Promise::--->
// resolve
// reject
// pending

// f1 is a function which returns a new Promise
function f1(){
    return new Promise( function(resolve,reject){
        setTimeout(() => {
            const error  = true;
            if(!error){
                console.log("Function::-Your promise has been resolved");
                resolve("DOne")
            }
            else{
                console.log("Function::-Not resolved")
                reject("Sorry Not fulfilled")
            }
        }, 2000);
    } )
}

f1().then(function(value){ // if callback resolved then run the given function
    console.log("client::- Thanks for resolving " + value)
}) .catch( function(error){ // if callback not resolved or rejected then run this
    console.log("client::- Very bad and rejected " + error) // error is the string that is passed in the reject()
})

// we have kept error true so promise is not resolved
// if promise has been kept or successful then run .then()
// else run .catch()