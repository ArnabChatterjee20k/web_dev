// pretend that this response is coming from server
const students = [
    {name:"arnab" , subject : "JS"},
    {name:"bittu" , subject : "ml"}
]

// function inside function --> callback. For example foreach takes a function as an argument


//introducing another function inside a function(callback)
function enroll_student(student,callback){ 
    setTimeout(function() {
        students.push(student)
        console.log("enroll student ran --> new student enrolled")
        callback()
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

enroll_student(new_student,get_students)

// get_students(); lets use this as callback so that enrolls student get executed then it will get executed

// here enroll student will not allow get student to work till the whole executing of previous lines over. Since we are using a callback.

// Here if get student is taking more time than enroll . In this case also enroll student will get executed after the time provided then only after its completion the get student will run.