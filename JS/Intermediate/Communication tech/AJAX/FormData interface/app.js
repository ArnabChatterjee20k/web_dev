let btn = document.getElementById("btn");
let myForm = document.getElementById('myForm');
let formData = new FormData(myForm);
btn.addEventListener("click",function(){
    formData.append('username', 'Chris');
    console.log(formData.getAll("username"))
})