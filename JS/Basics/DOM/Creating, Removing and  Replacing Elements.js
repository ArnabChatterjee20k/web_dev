// Creating node
let element = document.createElement("li")

// Add a class name and id and attributes
element.className="childul";
element.id="createdLi";
element.setAttribute("title","mytitle");
// element.innerText="Arnab"//here we cant use bold like features as innertext is used to add plaintext so as it is will get append. So in this use inner html.
element.innerHTML="<b>Arnab</b>"//bolded text

let ul=document.querySelector("ul.this");
ul.appendChild(element);
// console.log(ul)
// console.log(element);

// without using innerHTML
element = document.createElement("li")
let text=document.createTextNode("Arnab using text node");
element.appendChild(text);
ul.appendChild(element);

//Flow--
// An element is created and a text node is created
// Add text node to the element
// Add class,attributes,etc to the element
// Add this element to the ul
// And we get the result


// Replacing element
let elem2=document.createElement("h3");
elem2.id="elem2";
elem2.className="elem2";
let tnode=document.createTextNode("Created node for elem2");
elem2.appendChild(tnode);

element.replaceWith(elem2);
let  myul=document.getElementById("myul");
// Replacing child of myul
myul.replaceChild(element,document.getElementById("fui"));// newer one will written first and older at last in the argument 

//removing child
myul.removeChild(document.getElementById("lui"));

let pr=elem2.getAttribute("id")
console.log(elem2,pr);

pr=elem2.hasAttribute("id");
console.log(pr);

//removing attribute
elem2.removeAttribute("id");

//setting attribute
elem2.setAttribute("title","element");