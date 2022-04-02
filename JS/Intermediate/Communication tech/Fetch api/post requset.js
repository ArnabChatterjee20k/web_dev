// es6 based for exchanging data. Modern form of AJAX

let btn = document.getElementById("mybtn")
let area = document.getElementById("populate")

// get data
function get_Data(){
    url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url).then((response)=>{ 
        // console.log(typeof response)
        return response.json(); // parsed json data
    }).then((data)=>{
        console.log(data)
    })
}

// post data
function post_Data(){
    url = "https://jsonplaceholder.typicode.com/posts"
    data = `{"userId":"ldsjfldjfl" , "title":"123","body":"23"}`

    params = {
        method:'post',
        headers :{"Content-Type" : "application/json"},
        // body : JSON.stringify(data) //if data is not string
        body : data //since data is already
    }
// using arrow function and since only argument is present so like this
    fetch(url).then(response=> response.json())
    .then( (data) => console.log(data) )
}

post_Data()
