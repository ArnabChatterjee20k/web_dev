//  A DOM represents the HTML document that is displayed in that window. The Document object has various properties that allow access to and modification of document content
// We can access the document content and modified it is called the Document Object Model, or DOM. The Objects are organized in a hierarchy.

// The window object is at the top of the hierarchy. The second one is the document object. The HTML document that gets loaded into a window becomes a document object. The third one is the forms. Everything enclosed in the <form>...</form> tags sets the form object. And the last one is the Form control elements. The form object contains all the elements defined for that object, such as input fields, buttons, radio buttons, and checkboxes.

// The DOM is a tree-like representation of the contents of a webpage. Tree of “nodes” with different relationships depending on how they are arranged in the HTML document.

let a=document;//dom 
// console.log(typeof a);
// we can use this  manipulate our html documennt or dom

a=document.all;//getting a html collection but its not an array.So we cant use foreach or other array functions and method.

// To solve this problem
// Here we are making an array using a and iterating it
Array.from(a).forEach(function(element){
    console.log(element);
})

a=document.body;
a=document.forms;
a=document.forms[0];

a=document.links;//	
// It will return all HTML <area> and <a> elements that have a href attribute
a=document.links[0];
a=document.links[0].href;

a=document.images;
a=document.scripts;
a=document.scripts[1];//in 2nd element the script is present
console.log(a);

