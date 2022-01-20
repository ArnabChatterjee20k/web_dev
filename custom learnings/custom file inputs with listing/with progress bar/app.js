const form = document.querySelector("form")
const fileInput = form.querySelector(".file-input")
progressArea = document.querySelector(".progress-area")
uploadedArea = document.querySelector(".uploaded-area")

form.addEventListener("click",()=>{
    fileInput.click()
})

fileInput.onchange = ({target})=>{
    let file = target.files[0]; //getting file [0] means getting the first file if multiple selected
    if(file){//if file selected
        let filename = file.name;//getting selected filename
        uploadFile(filename);//calling uploadfile with passing filename as an argument

        
    }
    
}

function uploadFile(filename){
    let xhr = new XMLHttpRequest(); //creatinng new xml obj (AJAX)
    xhr.open("POSt","main.py") //sending post request to the specified url/file
    
    xhr.send()
}