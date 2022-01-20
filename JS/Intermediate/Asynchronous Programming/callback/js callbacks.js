// pretend that this response is coming from server
const students = [
    {name:"arnab" , subject : "JS"},
    {name:"bittu" , subject : "ml"}
]

// function inside function --> callback. For example foreach takes a function as an argument

// suppose we are making a request to the server and getting response taking time 3000ms.
function enroll_student(student){
    setTimeout(function() {
        students.push(student)
        console.log("enroll student ran --> new student enrolled")
    }, 3000); // after 3000ms the code will get executed till then the rest of the code will run
}


function get_students(){
    setTimeout(function() {
        students.forEach(function(elem){
            console.log(elem.name,"-->",elem.subject)
        })
        console.log("Get student ran --> all student fetched")
    }, 100);
}

let new_student = {name:"aaa",subject:"dsa"}

enroll_student(new_student)

get_students();//we will see new_student not get printed. 

// All these things are happening as enroll student is taking 3000ms but get student ust 100ms so get student runs before the enroll student and new student not get printed. Only the previous student are getiing printed

// callback functions can be synchronous as well as asynchronous. Here we have seen example of asynchronous.
// They can be synchronous when we normally use foreach without settimeout