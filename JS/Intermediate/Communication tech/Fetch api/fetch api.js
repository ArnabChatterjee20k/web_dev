// es6 based for exchanging data. Modern form of AJAX

let btn = document.getElementById("mybtn")
let area = document.getElementById("populate")

function get_Data(){
    console.log("starting getData")
    url = "arnab.txt"
    fetch(url).then((response)=>{ // fetch returns a promise
        console.log("inside first then")
        return response.text();//this also returns a promise so to catch it we need to use another then()
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data)
    })
}

// fetch(url).then((response)=>{ return response.text();}).then((data)=>{console.log(data)})
console.log("Before running get data:- ")
get_Data()
console.log("after running get data:- ")

// Fetch api is asynchronous in nature
//------------ Output------------
// Before running get data:- 
// starting getData
// after running get data:- 
// inside first then
// Inside second then
// hdjfslkkldjsflkjdslfjds
// fdfdsfhdkfhkdjhkfjdhfd
// fdfkjhdkfhdkfhkdjfd
// fdjfkdjhlfkjdlkfs
// afsdhflsdjafjdsfkyheiyhrkbcmbvkdjf

// ---------Flow-----------------
// So since for its asynchonous in nature so after running print before running get data fetch will run in the backgruond (non blocking code execution) the last statement will ran after running get data then again it moves to fetch and url is resolved and first then will run and after resolving that second then will run. 
// And the execution will not get stopped anywhere