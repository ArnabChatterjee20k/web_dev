// synchronous
// for(let i=0 ; i<4500 ; i++){
//     // console.log(i) 
// }
// console.log("done printing") // this will get printed only after loop ends.


// asynchronous using set timeout
// this loop will start after 100ms
setTimeout(() => {
    for(let i=0 ; i<4500 ; i++){
            console.log(i) 
        }
    }, 100);

    console.log("done printing") // now this get printed first