let file = document.querySelector(".file")
let image = document.querySelector(".image")
file.onchange = ()=>{
    let filereader = new FileReader();
    filereader.readAsDataURL(file.files[0])
    filereader.onload = function(){
        image.src =  filereader.result
    }
}

// first initialise the filerreader 
// then read the data
// after completion of reading  and on load make a function and use the filreader result
