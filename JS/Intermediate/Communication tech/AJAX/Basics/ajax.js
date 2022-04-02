console.log("Ajax");
let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click",buttonClickHandler);

function buttonClickHandler(){
    console.log("Fetch btn clicked")
    // Inantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open("GET","about.txt",true)// params:-request method,from data will come , async=true(blocking/non blocking request)
    // if used false then it provides bad user experience so async=false gone deprecated
    //what to do on progress("optional")
    xhr.onprogress = function(){
        // xhr.onprogress is not mandatory.
        console.log("on progress")
    }
//onloadstart is the event handler doing something before the response has been sent
    //old method(canbe used)
    xhr.onreadystatechange=function(){
        console.log("ready state is",xhr.readyState)
    }
    //what to do when response is ready
    xhr.onload = function(){
        // console.log(this.responseText)
        if(this.status===200){
            console.log(this.responseText)
        }
        else{
            console.error("some error occured")
        }
    }

    //send the request
    xhr.send()//here we are sending the request.Previous all were the functionalities all we do as process when the request will be sent but the request was not sent. Here the request actually got send

}