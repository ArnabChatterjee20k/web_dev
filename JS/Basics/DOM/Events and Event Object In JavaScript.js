
document.getElementById("heading").addEventListener("click", function (e) {
    console.log("Hellow");
    console.log(e);//printing event object.There one key will be target which will tell us where the event is occuring.

    let variable;
    variable = e.target;//printing target element
    variable = e.target.className;//all the class name will be returned
    variable = e.target.classList;//returning a list and we can use array functions and methods here
    
    variable=e.offsetX;//giving us the position of click where we have click with respect to the element in X axis means horizontal distance.

    variable=e.offsetY;//click of Yaxis
    
    variable=e.clientX;//thsi time with respect to browser window
    variable=e.clientY;
    console.log(variable);


    // location.href="//www.google.com";//redirecting to google
});
