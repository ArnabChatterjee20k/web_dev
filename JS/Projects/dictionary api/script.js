let form = document.querySelector("form")
let place = document.getElementById("meaning")
form.onsubmit = function(event){
    let xhr = new XMLHttpRequest;
    xhr.onload = function(){
        let meanings = xhr.response
        place.innerHTML+=meanings
        
    }
    xhr.onloadstart = function(){
        alert("started")
    }
    xhr.open("GET","https://api.dictionaryapi.dev/api/v2/entries/en/data",true)
    xhr.send()
    event.preventDefault()

}