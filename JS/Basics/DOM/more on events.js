
let btn=document.getElementById("btn");

btn.addEventListener("click",func1);
btn.addEventListener("dblclick",func2);//double click event
btn.addEventListener("mousedown",func3);


function func1(e) {
    console.log("Thanks",e.target);
    //here the button is targetted  is of type  submit which is use to submit forms.  So here the value will be printed buit for a short  time as the page will  get redirected  for submition.
    //so to prevent this from submition and running the binded event 
    e.preventDefault();//submiton will get stop and event will run.
}

function func2(e) {
    console.log("Double click event",e.target);
}

function func3(e) {
    console.log("Mouse down",e.target);
}


document.querySelector(".no").addEventListener("mouseenter",function() {
    console.log("u entered class no");
})


document.querySelector(".no").addEventListener("mouseleave",function() {
    console.log("u left class no");
})

document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
    console.log('You triggered mouse move event')
})