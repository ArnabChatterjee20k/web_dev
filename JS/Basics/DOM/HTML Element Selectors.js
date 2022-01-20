// element elector:-
// 1)Single elemnet  selector
// 2)Multi elemnet  selector

// Single elemnet  selector
let element=document.getElementById("myfirst");
// element=element.className;
// element=element.childNodes;
// element=element.parentNode;
// console.log(element);

// console.log(element.innerHTML);
// // chaging css
// element.style.color="red";
// element.style.backgroundColor="blue";//C of color must be capital  
element.innerText="Asrayf";
element.innerHTML="<b>Asrayf</b>";

// Query selectors
let sel=document.querySelector("#myfirst")//id
sel=document.querySelector(".child")//class.Geting first element of class child
sel=document.querySelector("b")//tag 
sel=document.querySelector("div")//tag.Getting first div 
console.log(sel)
sel.style.color="Green"//first div will be green only not all
//All Above are single element selector 

// Multi element selector to select multiple element

// let elem=document.getElementsByClassName("child");//html collection
// console.log(typeof elem);
// console.log(elem[0]);
elem=document.getElementsByClassName("container")
// getting element of class child inside container
console.log(elem[0].getElementsByClassName('child'));

// Basically we are chaining inside the element and goining inside the elemnts

elem=document.getElementsByTagName("div")
console.log(elem)
Array.from(elem).forEach(function(element)
{
    element.style.color="Red"
    console.log(element);
})