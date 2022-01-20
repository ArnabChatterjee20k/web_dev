const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

let is_name = false;
let is_email = false;
let is_phone = false;
let is_message = false;

const btn = document.getElementById("btn");

function indicator(container,regex,condition){
    let str = container.value
    let check = regex.test(str)
    if(check){
        container.classList.remove("is-invalid")
        condition = true;
    }
    else{
        container.classList.add("is-invalid")
        condition = false
        
    }
}

name.addEventListener("blur",()=>{
    // name vaidation
    let regex = /^[a-zA-z]([0-9a-zA-Z]){1,10}$/ //must start with a-z or A-Z and then we can have the grp 1 to 10 times that group
    // must start with character and endswith that 1 to 10 group

    indicator(name,regex,is_name)
})

email.addEventListener("blur",()=>{
    let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,5}$/
    indicator(email,regex,is_email)
})

phone.addEventListener("blur",()=>{
    let regex = /^([0-9]){10}$/ // must start with 0 - 9 and must endswith 0 to 9 exactly 10 times
    indicator(phone,regex,is_phone)
})

message.addEventListener("blur",()=>{
    let regex = /^.{0,10}$/
    indicator(message,regex,is_message)
})