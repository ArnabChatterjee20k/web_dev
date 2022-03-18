//addEventListener(type, listener, useCapture)

/**
 * Event bubbling
 * If here when we click on button , div event will be also fired.
 * 
*/
let div_bubble = document.querySelector("div#div_bubble")
div_bubble.addEventListener("click",()=>{alert("div_bubble")})

let button_bubble = document.querySelector("button#bubble")
button_bubble.addEventListener("click",()=>{alert("button_bubble")})

/**
 * Event capturing.
 * Set useCapture to true.
 * Set the capture of the parent to true
 */
let div_capture = document.querySelector("div#div_capture")
// div_capture.addEventListener("click",()=>{alert("div-capture")},{capture:true})
/** OR simply true */
div_capture.addEventListener("click",()=>{alert("div-capture")},true)

let button_capture = document.querySelector("button#capture")
button_capture.addEventListener("click",()=>{
    alert("button_capture")
})

