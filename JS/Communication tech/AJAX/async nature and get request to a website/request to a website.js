let xhr = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/todos/1";
const method = "GET";

xhr.open(method,url,true);
// xhr.open(method,url,false);
xhr.onload = function(){
    console.log(this.responseText);//same as xhr.responseText
};
xhr.send()
console.log("We are done")// this will be printed earlier than response done as in xhr.open async is set true and its the async asynchronous nature of js. set it to false then synchronouly everything will be done.