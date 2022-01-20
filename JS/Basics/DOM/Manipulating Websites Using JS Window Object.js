// The window object represents a window in the browser containing the DOM document. The browser automatically creates a window object. The window is not the object of the JavaScript. It is the object of the browser. A window can be the main window, a frameset, or even a new window created with JavaScript. The developers use the window object to close and open browser window, displaying alert and prompt dialogs.

// Window object has many properties and methods. The following are the few properties and methods of window object. Window object is global object in js

let a=window;
// console.log(a); //we can see all the methods and function of window object.

// window.alert("hi");
// it is same as using only aleart as it a global object and we can use its and function as it is without using window dot

// a=prompt("HI");
// a=confirm("ok?");

// console.log(window.document)//DOM which is a tree like structure

//we can write window. and also not
a=window.innerHeight;
a=window.innerWidth;
a=outerHeight;
a=scrollX;
a=scrollY;
a=location;
// a=location.reload();//to reload but it will infinitely
a=location.href;//we can also use it to move to different website by location.href=website address
// a=location.toString();to get location in string format

a=history;//to see history
// a=history.go(-1)//to go to  previous window whre I was.This works like the back button
console.log(a)

