//addEventListener(type, listener, useCapture)

/**
 * Stop propagation to stop event bubbling
 * Stop immediate propagation to stop running the other events registered on the same element
 */
let div_bubble = document.querySelector("div#div_bubble")
div_bubble.addEventListener("click",()=>{alert("div")})

let button_bubble = document.querySelector("button#bubble")
button_bubble.addEventListener("click",(event)=>{
    event.stopPropagation()
    alert("button_bubble but event of div will not")
    event.stopImmediatePropagation()
})


/**
 * It will not work due to stop immediatepropagation.
 */
// adding multiple same event to the same button. They will run orderly.
button_bubble.addEventListener("click",(event)=>{
    alert("button pressed 2nd time")
})


/** Prevent default */
let link = document.querySelector("a")
link.addEventListener("click",(e)=>{
    e.preventDefault();
    alert("stopping the link ")
})