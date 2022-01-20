let btn= document.getElementById("btn");
btn.addEventListener("click",grab_data);

function grab_data(e){
    let link=document.getElementById("url").value;
    link=document.querySelector("https://www.codewithharry.com/videos");
    let word=document.getElementById("link");
    location.assign(link);
    return
} 
//  25/8/2021 use ajax to grab data