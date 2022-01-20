const name = "Arnab";
const greet = "Hi"

// concatenation
console.log(name + greet) //space will not be there
console.log(name + " " + greet) //with space 

let html;
html = "<h1>This IS Heading</h1>" + "<p>ThIs is para</p>"
console.log(html)


// different methods and function
html = html.concat("this", " is", " str") //by concat
console.log(html.length)

console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);


console.log(html[1]);
console.log(html.indexOf('<')); // if that substring not found then it will return -1.
console.log(html.lastIndexOf('<'));
console.log(html.charAt(3));
console.log(html.endsWith('dsfsdfd'));
console.log(html.includes(' fg'));
console.log(html.substring(1, 6));
console.log(html.slice(0, 4))
console.log(html.split('>'));
console.log(html.replace('this', 'it'));
// difference between substring function and slice function is that we can use slice(-4) but substring  function will return us the whole string

// template literals
let fruit1 = 'Orange\''; //by usng \ we can use ' inside ""
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
                    <h1> This is "my" heading </h1>
                    <p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;