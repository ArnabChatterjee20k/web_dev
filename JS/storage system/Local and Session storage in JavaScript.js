// Web applications can store data locally within the user's browser with web storage. Before HTML5, application data stored in cookies, included in every server request. But with the Advent of Html5, we have got various options to store information on the client browser. Previously we were having only cookies, which were very restrictive, and the size of the cookies was very small. But now the web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. We have local storage and session storage. We can access the web storage by right-clicking on the webpage and then selecting option applications. Here we can see the option of local and session storage. Let's talk about all these web storage in detail.
// HTML Web Storage Objects:-
// HTML web storage provides us with two objects for storing data:

// window.localStorage – It stores the data with no expiration date
// window.sessionStorage -It stores the data for one session. That means the data is lost when the browser tab is closed.

// LocalStorage:-
// The way to store data on the client's computer is by local storage. The local storage allows us to save the key/value pairs in a web browser, and it stores data with no expiration date. We can access local storage via JavaScript and HTML5. However, the user can clear the browser data to erase all localStorage data.

// Session storage:-
// The session storage is used to store data only for a session, meaning that it is stored until the browser (or tab) is closed. Remember that, in session storage, the data is never transferred to the server and can only be read on the client-side. The storage limit is between 5-10MB. By opening multiple windows or tabs with the same URL creates sessionStorage for each tab or window.

// Both storage objects provide the same methods and properties like setItem, getItem, removeItem, and clear. The examples in this tutorial are for localStorage, but the same syntax works for sessionStorage.

//Go to application tab by opening inspect and see the storage

//Localstorage
//setting item as a key value pair in local storage
localStorage.setItem("Name","Arnab");//it is function of window object.
localStorage.setItem("Class","12");
console.log(localStorage);
console.log(typeof localStorage);

//getting/retieve an item from local storage
let name=localStorage.getItem("Name");//if key doesnot exist we will get null
console.log(name);

//clearing whole local storage
// localStorage.clear();//

//clearing a particular key amd item from storage
localStorage.removeItem("Name");

//If we store an array it will get stored in the form of string
let array=Array(1,2,3)
localStorage.setItem("Array",array);
console.log(localStorage.getItem("Array"));//we will string instead of an array as it is saved in the form of string instead of array. 

//TO solve this aary problem we will use json stringfy and parse
//We will add the array in the form of string by stringify then while retrieving/reading we will us parse so that we gat aary insted of string

let array1=[1,2,3,4,5]
// localStorage.setItem("Array1",array1);//if we dont change the name of Array which was previously used will update the key. If same keys are used then then the items will get updated instead of appending.

localStorage.setItem("Array1",JSON.stringify(array1));
name=localStorage.getItem("Array1");//string
console.log(name,typeof name);

//to get array
name=JSON.parse(localStorage.getItem("Array1"));//array(object which means array as it can store value of any datatype).
console.log(name,typeof name);

//Session storage
// all syntaxes will be same like local storage

sessionStorage.setItem("Name","Arnab_session");