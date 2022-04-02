let btn = document.getElementById("btn");
btn.addEventListener("click",function(){
    let file = document.getElementById("file");
    const fileobj = file.files[0];
    console.log(fileobj)
    console.log(typeof fileobj)

    let xhr = new XMLHttpRequest();
    
    xhr.open("POST","http://127.0.0.1:80/",true)
    xhr.setRequestHeader("Content-type","image/jpg")
    xhr.onload = function(){
        console.log(this.responseText)
    }
    xhr.send(fileobj)
})