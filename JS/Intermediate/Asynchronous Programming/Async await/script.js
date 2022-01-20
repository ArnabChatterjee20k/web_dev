// run in the browser as fetch not present in node
// we can use debugger to see the flow

// using this way we dont have to use two then with fetch

async function arnab(){ // due to async it will return a promise
    console.log("inside arnab")
    // const res =   fetch("https://api.github.com/users"); //will give error
    const res = await fetch("https://api.github.com/users");

    console.log("before response")
    const users =await  res.json();
    
    console.log("users are here")
    return users;
}

console.log("before calling arnab")

let a = arnab()

console.log(a)
// a.then((data)=>{console.log(data);console.log("resolved")}).catch((data)=>{console.log(data)})

a.then((data)=>{console.log(data);console.log("resolved")})
console.log("after calling arnab")

console.log("last line of this script")

// --------Output---------------
// before calling arnab
// inside arnab
// Promise {<pending>}  -->due to await.
// after calling arnab
// last line of this script
// before response
// users are here
// (30) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] -->

// Async function always returns a promise after executing the all statements present in the function. But it will definitely returns a  promise.

// while execution if await encountered then it will pause async function and it is running in the background and since the function is stopped thus the other lines of the script will get executed and in then since the async function is not completed yet so it is returning promise pending. That promise is in pending stage. 

// Due to await it will definitely get executed atlast. And that time only in then since the promise is returned ,ie, the promise is resolved it will get printed.

// Main work of await is to pause the async function and let the promise be in pending stage.

// But if we dont use await in async then the function will not pause and we know fetch is asynchronous in nature that means it will get executed after the data is ready. But here if await not used in fetch then surely instead of pausing the async function it the execution will get skipped to next line of the function but we dont have the response object as fetch is completed so variable wll be pointing it and thus we dont have any res object and res.json will give error(as res variable is not currently pointing any object.). 

// So rest of the program will get executed but since no promise is getting returned by the async function so the promise will get rejected.

// Tips;-
// Here in this code if we return any valid object like "adsd" and dont use await no problem will occur as promise is getting returned.

// But since we are returning a json so if we dont use await in fetch it will get skipped and no res object  present. We know promised will definitely get returned by the asyncfunction. So when we are priniting the function it printing promise but it's rejected.

// We can catch the error using catch
// promise rejected output:-
// Promise {<rejected>: TypeError: res.json is not a function
//     at arnab (http://127.0.0.1:5500/script.js:7:29)
//     at ht…}
// [[Prototype]]: Promise
// [[PromiseState]]: "rejected"
// [[PromiseResult]]: TypeError: res.json is not a function at arnab

// Promised not getting resolved and rejected and we can see them using catch()
