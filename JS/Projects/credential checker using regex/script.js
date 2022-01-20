const btn = document.getElementById("btn")
const place = document.getElementById("result")

btn.onclick = function(e){
    e.preventDefault()
    const email = document.getElementById("email").value
    const regex = /\.com/
    if(regex.test(email)){
        let res = regex.exec(email)
        console.log(res)
        place.innerText = "email ok "+ res.input
    }
    else{
        place.innerText = "email wrong"
    }

}