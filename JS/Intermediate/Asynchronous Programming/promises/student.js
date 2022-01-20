const students = [
    {name:"arnab" , subject : "JS"},
    {name:"bittu" , subject : "ml"}
]


function enroll_student(student){ 
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            students.push(student)
            console.log("enroll student ran --> new student enrolled")
            const error = false;
            if (!error){
                resolve()
            }
            else{
                reject()
            }
    })
    }, 3000); 
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


enroll_student(new_student).then(get_students).catch(function(){console.log("error")})