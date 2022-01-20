/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.
*/

//creating a div
let div_elem= document.createElement("div");
// let text=document.createTextNode("Insert text")

let text;

let val= localStorage.getItem("text");
if (val==null){text=document.createTextNode("Insert text");}
else{
    text=document.createTextNode(val);
}

div_elem.setAttribute("id","elem");
div_elem.setAttribute("style","border:2px solid black;width:15%;padding:23px;text-align:center");
div_elem.appendChild(text);

let container=document.querySelector(".container");
let first=document.querySelector("#first");

//to insert div_elem before elemt with id first
container.insertBefore(div_elem,first);

div_elem.addEventListener("click",function(){
    // let a=document.getElementsByClassName("textarea");
    // console.log(a);

    //adding text  box upon clicking. 
    let number_of_textbox= document.getElementsByClassName("textarea").length;
    //if we click on the divelem more than one then it will automatically add the innerhtml. !st innerhtml will be add we refelcted  in the form of textbox but next the code of text box will get copied in the innerhtml. So by using classname we get an array if its legnth only then only change innerhtml. When clicked twice its length change to 1 buts no textbox will be inserted. Its length cant be more than 1 as deivelem innerhtml is changing evereytime and the same the innerhtml is get initialised. If firsttime=1 then again clicked firsttime=1.
    
    if (number_of_textbox==0){
    let html=elem.innerHTML;
    div_elem.innerHTML=` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;}
    
    //using blur to save  and  removing textbox
    //listen for the blur event on textarea
    let textbox=document.getElementById("textarea");
    textbox.addEventListener("blur",function(){
        elem.innerHTML=textbox.value;

        localStorage.setItem("text",textbox.value);
    })
    

});
