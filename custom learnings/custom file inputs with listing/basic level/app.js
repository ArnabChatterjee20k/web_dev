const realFileBtn = document.getElementById("realfile")
const customBtn = document.getElementById("custom-button")
const customtext = document.getElementById("custom-text")

customBtn.addEventListener("click",()=>{
    realFileBtn.click()
})
realFileBtn.addEventListener("change",()=>{
    if (realFileBtn.value) {
        // customtext.innerText = realFileBtn.value
        // customtext.innerText = realFileBtn.value.match( /[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]
        let filepath = realFileBtn.value.split("\\") // 2 backslah means one backslash 
        customtext.innerText = filepath[(filepath.length)-1]
    } else{
        customtext.innerText="No file choosen"
    }
})