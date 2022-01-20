let cont=document.querySelector(".no");  
cont=document.querySelector(".container");
// console.log(cont.childNodes);//here in childnodes newlines and comments are also counted so if we give comments then the length will also get increased.

// to avoid these things if we want then
// console.log(cont.children);//text comments newlines etc all will be avoided.Only elements will be included.

// So better to use Children

let nodename=cont.childNodes[0].nodeName;
// console.log(nodename);
nodename=cont.childNodes[1].nodeName;
// console.log(nodename);

let nodetype=cont.childNodes[1].nodeType;
// console.log(nodetype);
// Node types
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType

let container=document.querySelector("div.container");//div having class container
// console.log(container.children[1].children[0].children);//children inside children.So we can traverse like this.

// console.log(container.firstChild);//give first object of the childnodes which is a text.
// console.log(container.firstElementChild);//getting first element of the child.

// last child and last element
// console.log(container.lastChild);
// console.log(container.lastElementChild);

// console.log(container.childElementCount);//Counting the number of child elements in the children

console.log(container.firstElementChild.parentNode);//parent 
console.log(container.firstElementChild.nextSibling);//it returns the sibling node like text node etc. So comments are also include
console.log(container.firstElementChild.nextElementSibling);//here element will be returned so no comments or newline will get return

console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);//going inside 